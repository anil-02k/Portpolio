import React, { useState, useEffect, useRef } from 'react';
import { Send, Bot, X, Smile } from 'lucide-react';
import './ChatBot.css'; // Import the CSS file

const emojis = ['😊', '👋', '🎉', '👍', '❤️', '😄', '🤔', '👏', '🌟', '💡', '✨', '🔥', '💪', '🙌', '🎯'];

const quickReplies = [
  { text: "What services do you offer?", action: "services" },
  { text: "Tell me about your experience", action: "experience" },
  { text: "How can you help me?", action: "help" }
];

export function ChatBot() {
  const [messages, setMessages] = useState([
    {
      content: "👋 Hi! I'm your AI assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [showEmojis, setShowEmojis] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (text = input) => {
    if (!text.trim()) return;

    const userMessage = {
      content: text,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setShowEmojis(false);

    // Add typing indicator
    const typingMessage = {
      content: '',
      sender: 'bot',
      timestamp: new Date(),
      isTyping: true,
    };

    setTimeout(() => {
      setMessages((prev) => [...prev, typingMessage]);
    }, 200);

    // Simulate bot response with typing animation
    setTimeout(() => {
      setMessages((prev) => prev.filter((msg) => !msg.isTyping));
      const botResponse = {
        content: "I'm a demo bot. In a real implementation, this would be connected to an AI service.",
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 2000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleEmojiClick = (emoji) => {
    setInput((prev) => prev + emoji);
    setShowEmojis(false);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="chatbot-toggle-button"
      >
        <div className="relative">
          <Bot size={24} className="animate-pulse" />
        </div>
      </button>
    );
  }

  return (
    <div className="chatbot-container">
      <div className="chatbot-window">
        {/* Header */}
        <div className="chatbot-header">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Bot size={32} className="p-1 bg-white/20 rounded-full" />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-blue-600"></div>
              </div>
              <div>
                <h3 className="font-semibold text-lg">AI Assistant</h3>
                <p className="text-xs text-blue-100">Online</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="chatbot-close-button"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="chatbot-messages">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`chatbot-message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}
            >
              <div className={`message-content ${message.sender === 'user' ? 'user-content' : 'bot-content'}`}>
                {message.isTyping ? (
                  <div className="typing-indicator">
                    <div className="dot" style={{ animationDelay: '0ms' }}></div>
                    <div className="dot" style={{ animationDelay: '150ms' }}></div>
                    <div className="dot" style={{ animationDelay: '300ms' }}></div>
                  </div>
                ) : (
                  <p className="message-text">{message.content}</p>
                )}
              </div>
            </div>
          ))}
          {messages.length === 1 && (
            <div className="quick-replies">
              {quickReplies.map((reply, index) => (
                <button
                  key={index}
                  onClick={() => handleSend(reply.text)}
                  className="quick-reply-button"
                >
                  {reply.text}
                </button>
              ))}
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="chatbot-input-container">
          <div className="relative">
            {showEmojis && (
              <div className="emoji-picker">
                <div className="emoji-grid">
                  {emojis.map((emoji, index) => (
                    <button
                      key={index}
                      onClick={() => handleEmojiClick(emoji)}
                      className="emoji-button"
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>
            )}
            <div className="chatbot-input-wrapper">
              <button
                onClick={() => setShowEmojis(!showEmojis)}
                className="emoji-toggle-button"
              >
                <Smile size={20} />
              </button>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="chatbot-input"
              />
              <button
                onClick={() => handleSend()}
                className="send-button"
                disabled={!input.trim()}
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}