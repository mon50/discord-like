import React, { useEffect, useState } from 'react'
import "./Chat.scss"
import ChatHeader from './ChatHeader'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ChatMessage from './ChatMessage';
import { useAppSelector } from '../../app/hooks';
import { CollectionReference, DocumentData, DocumentReference, Timestamp, addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase';
import { AnyARecord } from 'dns';
import useSubCollection from '../../hooks/useSubCollection';




const Chat = () => {
    const channelName = useAppSelector((state) => state.channel.channelName);
    const user = useAppSelector((state) => state.user.user);
    // console.log(channelName);
    const [InputText,setInputText]= useState<string>("");
    // console.log(InputText);
    const channelId = useAppSelector((state) => state.channel.channelId);

    const {SubDocuments:messages} = useSubCollection("channels","messages");

    const sendMessage = async(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        // console.log(InputText);
        const collectionRef: CollectionReference<DocumentData, DocumentData> = collection(
            db, 
            "channels",
            String(channelId),
            "messages");

            await addDoc(collectionRef, {
                message: InputText,
                timestamp: serverTimestamp(),
                user:user,
            });
            console.log("メッセージ送信完了");
            setInputText("");
    }
    return (
    <div className='chat'>
        {/* chatHeader */}
        <ChatHeader channelName = {channelName}/>
        {/* chatMessage */}
        <div className="chatMessage">
            {messages.map((message,index) => (
            <ChatMessage key={index} message = {message.message} timestamp={message.timestamp} user = {message.user}/>
            ))}
        </div>
        {/* chatInput */}
        <div className="chatInput">
            <AddCircleOutlineIcon/>
            <form>
                <input
                 type='text' 
                 placeholder="Udemyへのメッセージ送信" 
                 onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputText(e.target.value)}
                 value = {InputText}/>
                <button type='submit' className='chatInputbutton' onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => sendMessage(e)}
                >
                    送信
                </button>
            </form>

            <div className="chatInputIcon">
                <CardGiftcardIcon/>
                <GifIcon/>
                <EmojiEmotionsIcon/>
            </div>
        </div>
    </div>
  )
}

export default Chat