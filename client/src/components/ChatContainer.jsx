import ChatHeader from "./ChatHeader"
import MatchesDisplay from "./MatchesDisplay"
import ChatDisplay from "./ChatDisplay"
import { useState } from 'react'

const ChatContainer = ({ user }) => {

  const [ clickedUser, setClickedUser ] = useState(null);

  console.log('CLICKED USER', clickedUser);

  if (!user || !user.matches) {
    // If user or user.matches is undefined, render a loading state or return null
    return <div>Loading...</div>; // Example of loading state
  }

  return (
    <div className="chat-container">
      <ChatHeader user={user} />

      <div>
        <button className="option" onClick={() => setClickedUser(null)}>Matches</button>
        <button className="option" disabled={!clickedUser}>Chat</button>
      </div>

      {!clickedUser && <MatchesDisplay matches={user.matches} setClickedUser={setClickedUser}/>}

      {clickedUser && <ChatDisplay user={user} clickedUser={clickedUser}/>}
    </div>
  );
};

export default ChatContainer