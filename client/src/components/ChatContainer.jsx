import ChatHeader from "./ChatHeader"
import MatchesDisplay from "./MatchesDisplay"
import ChatDisplay from "./ChatDisplay"

const ChatContainer = ({ user }) => {
  if (!user || !user.matches) {
    // If user or user.matches is undefined, render a loading state or return null
    return <div>Loading...</div>; // Example of loading state
  }

  return (
    <div className="chat-container">
      <ChatHeader user={user} />

      <div>
        <button className="option">Matches</button>
        <button className="option">Chat</button>
      </div>

      <MatchesDisplay matches={user.matches} />

      <ChatDisplay />
    </div>
  );
};

export default ChatContainer