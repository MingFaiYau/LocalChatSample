import React from "react";
import "./styles.css";

export default function App() {
  const [messages, setMessages] = React.useState([]);
  const resetMessages = React.useCallback(() => {
    setMessages([]);
  }, []);

  const addMessage = React.useCallback((newMessage) => {
    setMessages((prev) => prev.concat(newMessage));
  }, []);

  return (
    <div className="app-container">
      <Header resetMessages={resetMessages} />
      <Content messages={messages} addMessage={addMessage} />
    </div>
  );
}

const Header = ({ resetMessages }) => {
  return (
    <div className="header-containenr ">
      <div>Header</div>
      <input type="button" value={"R"} onClick={resetMessages} />
    </div>
  );
};

const Content = ({ messages, addMessage }) => {
  return (
    <div className="content-container">
      <MessageList messages={messages} />
      <InputBar addMessage={addMessage} />
    </div>
  );
};

const MessageList = ({ messages }) => {
  return (
    <div className="message-list-container">
      {messages.map((message) => (
        <MessageItem
          className="input-bar-container"
          key={message.id}
          message={message}
        />
      ))}
    </div>
  );
};

const MessageItem = ({ message }) => {
  return <div className="message-item-container">{message.text}</div>;
};

const InputBar = ({ addMessage }) => {
  const textRef = React.useRef();

  const sendMessage = React.useCallback(() => {
    if (!textRef.current.value) return;
    const newMessage = {
      id: new Date().getTime(),
      text: textRef.current.value
    };
    addMessage(newMessage);
    textRef.current.value = "";
    textRef.current.focus();
  }, [addMessage]);

  return (
    <div className="input-bar-container">
      <input type="text" ref={textRef} />
      <input type="button" value={">"} onClick={sendMessage} />
    </div>
  );
};
