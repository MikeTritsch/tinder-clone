import Chat from "./Chat"
import ChatInput from './ChatInput'
import axios from 'axios'
import { useState, useEffect } from 'react'

const ChatDisplay = ({ user, clickedUser }) => {

  const userId = user?.user_id;
  const clickedUserId = clickedUser?.user_id;
  const [ userMessages, setUserMessages ] = useState(null);

  const getUserMessages = async () => {
    try {
      const response = await axios.get('http://localhost:8000/messages', {
        params: {userId: userId, correspondingUserId: clickedUserId}
      })
      setUserMessages(response.data);
    }
    catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getUserMessages()
  }, []);

  console.log("USER MESSAGES", userMessages)

  return (
    <>
    <Chat/>
    <ChatInput/>
    </>
  )
}

export default ChatDisplay