import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { createSocketConnection } from '../utils/socket';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';

const Chat = () => {

    const {targetUserId} = useParams();
    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState("");
    const user = useSelector((store) => store.user)
    const userId = user?._id;
    const chatEndRef = useRef(null); 
    const [targetUserInfo, setTargetUserInfo] = useState();
    const connections = useSelector((store) => store.connection)

    useEffect(() => {
        if(!connections || !Array.isArray(connections)) return;
        const targetUser = connections.find((connection) => connection._id === targetUserId);
        if (targetUser) {
            setTargetUserInfo(targetUser);
        }
        
    }, [connections, targetUserId]);


    const fetchChatMessages = async () => {
        const chat = await axios.get(BASE_URL + "/chat/" + targetUserId, {
            withCredentials: true
        });

        const chatMessages = chat?.data?.messages.map((msg) => {
            const {senderId, text} = msg;
            return {
                firstName: senderId?.firstName,
                lastName: senderId?.lastName,
                text,
            }
        })
        setMessages(chatMessages)
        
        
    }

    useEffect(() => {
        fetchChatMessages();
    }, []);
    
    useEffect(() => {
        if(!userId) return;
       const socket = createSocketConnection();
       // As soon as the page loaded, the socket connection is made and "joinChat" event is emitted
       socket.emit('joinChat', {firstName: user.firstName, userId, targetUserId})

      

       socket.on("messageReceived", ({firstName, lastName, text}) => {
            setMessages((messages) => [...messages, {firstName, lastName, text}])
        })

       
        return () => {
            socket.disconnect();
        }


    }, [userId, targetUserId])

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const sendMessage = () => {
       const socket = createSocketConnection();
       socket.emit("sendMessage", {
            firstName: user.firstName, 
            lastName: user.lastName,
            userId, 
            targetUserId, 
            text: newMessage
        })
        setNewMessage("")    
    }



    return (
        <div className='w-3/4 mx-auto border border-gray-600 h-[70vh] m-5 flex flex-col'>
            <h1 className='p-5 border-b border-gray-600 '>
             {targetUserInfo ? targetUserInfo?.firstName + " " + targetUserInfo?.lastName : "Chat"}
                 </h1>
            <div className='flex-1 overflow-y-auto p-5'>
                {/* display messages */}
                {messages.map((msg, index) => {
                    return (
                        <div key={index} 
                        className={
                            "chat " + 
                            (user?.firstName === msg?.firstName ? "chat-end" : "chat-start") 

                        }>
                        <div className="chat-header">
                          {`${msg.firstName} ${msg.lastName}`}
                          <time className="text-xs opacity-50">2 hours ago</time>
                        </div>
                        <div className="chat-bubble">{msg.text}</div>
                        <div className="chat-footer opacity-50">Seen</div>
                      </div>
                    )
                })}
                <div ref={chatEndRef}></div>
            </div>
            <div className='p-5 border-t border-gray-600 flex items-center gap-2'>
               <input value={newMessage} onChange={(e) => setNewMessage(e.target.value)} className='flex-1 border border-gray-600 text-white rounded p-2' type="text" ></input>
                <button onClick={sendMessage} className='btn btn-secondary'>Send</button>
            </div>
        </div>
    )
}

export default Chat