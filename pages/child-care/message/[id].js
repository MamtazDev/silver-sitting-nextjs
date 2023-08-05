import React, { useEffect, useRef, useState } from "react";
import quote from "../../../public/assets/images/child-care-message.png";
import styles from "@/styles/ChildCareMessage.module.css";
import chatProfile from "../../../public/assets/chat-profile.png";
import { useRouter } from "next/router";

const Chatting = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const chatContainerRef = useRef(null);
  const router = useRouter();
  const { idx } = router.query;
  const handleInputChange = (event) => {
    setInputMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() !== "") {
      const userMessage = { text: inputMessage, sender: "user" };
      setMessages([...messages, userMessage]);
      setInputMessage("");

      // Simulate an auto-answer after a short delay
      setTimeout(() => {
        const answer = getAutoAnswer(inputMessage);
        const autoAnswerMessage = { text: answer, sender: "website" };
        setMessages([...messages, userMessage, autoAnswerMessage]);
      }, 1000);
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();
    }
  };
  const getAutoAnswer = (question) => {
    if (question.toLowerCase().includes("hello")) {
      return "Hello! How can I assist you?";
    } else if (question.toLowerCase().includes("how are you?")) {
      return "I'm just a bot, but thanks for asking!";
    } else {
      return "I appreciate your question!";
    }
  };

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      const chatContainer = chatContainerRef.current;
      const lastChatMessage = chatContainer.lastElementChild;
      if (lastChatMessage) {
        lastChatMessage.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  return (
    <section
      className={`container mx-auto ${styles.chilCareMessageMainContainer}`}
    >
      <div className={styles.imageContainer}>
        <img src={quote.src} alt="" />
      </div>
      <div className={styles.mainContainer}>
        <h1>Details Page for ID: {idx}</h1>
        <div>
          <div ref={chatContainerRef} className={styles.conversation}>
            {messages.map((message, index) => (
              <div key={index}>
                {message.sender === "user" && (
                  <div
                    style={{ marginBottom: "30px" }}
                    className="d-flex gap-1 align-items-center"
                  >
                    <img src={chatProfile.src} alt="" />
                    <div className="d-flex w-100">
                      <div className={styles.answer_box}>
                        <div></div>
                      </div>
                      <div className={styles.answer}>
                        <h6>{message.text}</h6>
                        <p>20 days ago.</p>
                      </div>
                    </div>
                  </div>
                )}

                {message.sender !== "user" && (
                  <div
                    style={{ marginBottom: "30px" }}
                    className="d-flex gap-1 align-items-center"
                  >
                    <div className="d-flex w-100">
                      <div className={styles.question}>
                        <h6>{message.text}</h6>
                        <p>20 days ago.</p>
                      </div>
                      <div className={styles.question_box}>
                        <div></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <textarea
            value={inputMessage}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className={styles.textareaInput}
            placeholder="Type a message to daniel..."
          />
          <div className={styles.buttonContainer}>
            <button onClick={handleSendMessage} className="_button">
              Send Message
            </button>
          </div>
        </div>
      </div>
      <div className={styles.emptyContainer}></div>
    </section>
  );
};

export default Chatting;
