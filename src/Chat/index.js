import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMessageWithThunk } from "./chatActions";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  chatWrapper: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  componentWrapper: {
    width: "75vw",
    height: "90vh",
    display: "flex",
    flexDirection: "column",
    backgroundColor: '#424242',
    borderRadius: '10px',
    boxShadow: '5px 5px 30px rgb(105,105,105,0.2)',
    margin: '0 25px'
  },

  errorPageWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },

  errorPageTitle: {
    borderRadius: ' 13px',
    padding: '2px 15px',
    backgroundColor: '#424242',
    fontWeight: 500
  }
}));

function Chat() {
  const classes = useStyles();
  const urlParams = useParams();
  const targetUid = urlParams.id;
  const chats = useSelector((state) => state.chat.chats);
  const targetProfileId = Object.keys(chats).find((profileId) => profileId);

  const chatId = chats[targetProfileId] ? chats[targetProfileId].chatId : null;

  const messages = useSelector((state) => state.chat.messages[chatId]);
  const myUid = useSelector((state) => state.chat.myUid);
  const dispatch = useDispatch();

  const onSendMessage = (messageText) => {
    dispatch(sendMessageWithThunk({
      chatId,
      messageText,
      authorUid: myUid,
      targetUid: targetUid
    }));
  };

  useEffect(() => {
    if (document.getElementsByClassName("messageList")[0]) {
      document.getElementsByClassName("messageList")[0].scrollTop = 999999;
    }
  });

  if (!targetProfileId || !chatId) {
    return (
      <div className={classes.errorPageWrapper}>
        <span className={classes.errorPageTitle}>Такого пользователя не существует!</span>
      </div>
    );
  };

  return (
    <div className={classes.chatWrapper}>
      <div className={classes.componentWrapper}>
        <MessageList messagesArray={messages} />
        <MessageInput onSendMessage={onSendMessage} />
      </div>
    </div>
  );
}

export default Chat;
