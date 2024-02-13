const ChatHeader = ({ user }) => {

  if (!user) {
    return null;
  }


  return (
    <div className="chat-container-header">
      <div className="profile">
        <div className="image-container">
          <img src="" alt={"photo of " + user.first_name}/>
        </div>
        <h3>{user.first_name}</h3>
      </div>
      <i className="log-out-icon">⇦</i>
    </div>
  )
}

export default ChatHeader