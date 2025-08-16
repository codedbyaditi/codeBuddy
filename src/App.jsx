import {useState} from "react";
import styles from "./App.module.css";
import chatbotLogo from "/chat-bot.png"; // Import the image

function App() {
  const [messages,setMessages]=useState();
  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <img
          className={styles.Logo}
          src={chatbotLogo}
          alt="Chatbot Logo"
        />
        <h2 className={styles.Title}>AI Chatbot</h2>
      </header>
      <div className={styles.ChatContainer}>
        <Chat messages={messages}/>
      </div>
    </div>
  );
}
const MESSAGES=[
  {
    role :'user',



    
    content:
  }
]

export default App;
 