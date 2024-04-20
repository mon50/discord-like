import React from 'react'
import './ChatMessage.scss'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const ChatMessage = () => {
  return (
    <div className='message'>
        <AccountCircleIcon/>
        <div className="messageInfo">
            <h4>
                林　太郎
                <span className='messageTimestamp'>
                    2022/12/18
                </span>
            </h4>
            <p>これはメッセージです</p>
        </div>
    </div>
  )
}

export default ChatMessage