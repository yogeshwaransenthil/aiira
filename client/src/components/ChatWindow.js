// Home.js
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const ChatWindow = () => {
  const [messages, setMessages] = useState([
    { text: "Hi John Doe! 👋 How can I assist you today?", isBot: true }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, isBot: false }]);
      setTimeout(() => {
        setMessages(prev => [...prev, { text: "I'm processing your request...", isBot: true }]);
      }, 1000);
      setInput('');
    }
  };

  const handleRegenerate = (index) => {
    // Logic to regenerate specific bot response
    const newMessages = [...messages];
    if (newMessages[index].isBot) {
      newMessages[index].text = "This is a regenerated response!";
      setMessages(newMessages);
    }
  };

  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="main-content">
        <Header />
        <div className="chat-container">
          <div className="chat-welcome">
            <h1>Welcome back, John Doe</h1>
            <p>I'm here to help you with your queries</p>
          </div>
          <div className="chat-messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`message ${message.isBot ? 'bot' : 'user'}`}
              >
                <div className="message-content">
                  {message.isBot && (
                    <div className="bot-avatar">
                      <svg viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                      </svg>
                    </div>
                  )}
                  <div className="message-bubble">
                    {message.text}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="chat-input-container">
            <div className="chat-input-wrapper">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message here..."
                onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && handleSend()}
                rows="1"
              />
              <button onClick={handleSend} className="send-button">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ChatWindow;