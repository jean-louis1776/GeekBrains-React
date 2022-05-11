import React, { useState, useEffect } from "react"
import MessageList from "./MessageList"
import MessageInput from "./MessageInput"
import ChatList from "./ChatList"
import firstAvatar from "./img/1.jpg"
import secondAvatar from "./img/2.jpg"
import thirdAvatar from "./img/3.jpg"
import "./styles/App.scss"

function App() {
    const [inputMessage, setInputMessage] = useState("")
    const [messagesArray, setMessagesArray] = useState([])

    const chatArray = [
        {
            avatar: firstAvatar,
            chatName: "Brunch this weekend?",
            id: "Ali Connors",
            chatText: ` — I'll be in your neighborhood doing errands this…`,
        },
        {
            avatar: secondAvatar,
            chatName: "Summer BBQ",
            id: "to Scott, Alex, Jennifer",
            chatText: ` — Wish I could come, but I'm out of town this…`,
        },
        {
            avatar: thirdAvatar,
            chatName: "Oui Oui",
            id: "Sandra Adams",
            chatText: ` — Do you have Paris recommendations? Have you ever…`,
        },
    ]

    const onSendMessage = () => {
        const trimmedMessageText = inputMessage.trim()

        if (trimmedMessageText !== "") {
            setMessagesArray((prev) => [
                ...prev,
                {
                    trimmedMessageText,
                    author: "Илья Алексин",
                    time: new Date().toLocaleString(),
                },
            ])

            setInputMessage("")

            setTimeout(() => {
                setMessagesArray((prev) => [
                    ...prev,
                    {
                        trimmedMessageText: "Сообщение отправлено!😊👌",
                        author: "Chat-bot Василий",
                        time: new Date().toLocaleString(),
                    },
                ])
            }, 1500)
        }
    }

    useEffect(() => {
        document.getElementsByClassName("messageList")[0].scrollTop = 999999
    })

    return (
        <div className="mainWrapper">
            <ChatList chatArray={chatArray} />
            <div className="chatWrapper">
                <MessageList messagesArray={messagesArray} />

                <MessageInput
                    inputMessage={inputMessage}
                    setInputMessage={setInputMessage}
                    onSendMessage={onSendMessage}
                />
            </div>
        </div>
    )
}
export default App
