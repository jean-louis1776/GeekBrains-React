import { addMessage } from "./chatSlice";

export const sendMessageWithThunk = (message) => (dispatch, getState) => {
    const { chat } = getState();
    const myId = chat.myId;
    dispatch(addMessage(message));
    if (message.authorId === myId) {
        const botMessage = {
            chatId: message.chatId,
            messageText: 'Сообщение отправлено!😊👌',
            authorId: message.chatId
        };
        setTimeout(() => {
            dispatch(addMessage(botMessage));
        }, 1100);
    };
};