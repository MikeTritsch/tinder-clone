import { useState } from "react";
import axios from "axios";

const ChatInput = ({
  user,
  clickedUser,
  getUserMessages,
  getClickedUserMessages,
}) => {
  const [textarea, setTextArea] = useState(null);
  const userId = user?.user_id;
  const clickedUserId = clickedUser?.user_id;

  const addMessage = async () => {
    const message = {
      timestamp: new Date().soISOString(),
      from_userId: userId,
      to_userId: clickedUserId,
      message: textarea,
    };

    try {
      await axios.post("http://localhost:8000/message", { message });
      getUserMessages(), getClickedUserMessages(), setTextArea("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="chat-input">
      <textarea
        value={textarea}
        onChange={(e) => setTextArea(e.target.value)}
      />
      <button className="secondary-button">Submit</button>
    </div>
  );
};

export default ChatInput;
