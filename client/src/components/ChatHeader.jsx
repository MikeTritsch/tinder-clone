const ChatHeader = ({ user }) => {
  return (
    <div className="chat-container-header">
      <div className="profile">
        <div className="image-container">
          <img src=""/>
        </div>
        <h3>{user.first_name}</h3>
      </div>
      <i className="log-out-icon">115</i>
    </div>
  )
}

export default ChatHeader