import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "./chatSlice";
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
    width: "60vw",
    height: "800px",
    display: "flex",
    flexDirection: "column",
    backgroundColor: '#424242',
    borderRadius: '10px',
    boxShadow: '5px 5px 30px rgb(105,105,105,0.2)',
  },
}));

function Chat() {
  const urlParams = useParams();
  const chatId = Number.parseInt(urlParams.id);

  const messages = useSelector((state) => state.chat.messages[chatId]);
  const myId = useSelector((state) => state.chat.myId);
  const dispatch = useDispatch();

  const classes = useStyles();

  const onSendMessage = (messageText) => {
    dispatch(addMessage({ chatId, messageText, authorId: myId }));
  };

  useEffect(() => {
    if (messages.length > 0) {
      setTimeout(() => {
        console.log('Сообщение отправлено!😊👌');
      }, 1000);
    }
  }, [messages]);

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
