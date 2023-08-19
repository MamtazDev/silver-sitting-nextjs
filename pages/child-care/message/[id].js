import React, { useEffect, useRef, useState } from "react";
import quote from "../../../public/assets/images/child-care-message.png";
import styles from "@/styles/ChildCareMessage.module.css";
import chatProfile from "../../../public/assets/chat-profile.png";
import { useRouter } from "next/router";
import {
  useAddConversationMutation,
  useAddMessageMutation,
  useGetConversationTwoUsersQuery,
  useGetMessageByConversationQuery,
} from "@/features/chat/chatApi";
import { useDispatch, useSelector } from "react-redux";
import { setConversationId } from "@/features/chat/chatSlice";
import { useGetSingleUserQuery } from "@/features/register/registerApi";
import { formatMessageTime } from "@/utils/utils";

const Chatting = () => {
  const { user } = useSelector((state) => state.register);
  const { conversationId } = useSelector((state) => state.chat);

  const dispatch = useDispatch();

  // const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const chatContainerRef = useRef(null);

  const router = useRouter();
  const { id } = router.query;

  const handleInputChange = (event) => {
    setInputMessage(event.target.value);
  };

  // const getAutoAnswer = (question) => {
  //   if (question.toLowerCase().includes("hello")) {
  //     return "Hello! How can I assist you?";
  //   } else if (question.toLowerCase().includes("how are you?")) {
  //     return "I'm just a bot, but thanks for asking!";
  //   } else {
  //     return "I appreciate your question!";
  //   }
  // };

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      const chatContainer = chatContainerRef.current;
      const lastChatMessage = chatContainer.lastElementChild;
      if (lastChatMessage) {
        lastChatMessage.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // apisss

  const { data, isLoading, isError, isSuccess } =
    useGetConversationTwoUsersQuery({
      firstUserId: user._id,
      secondUserId: id,
    });

  const [addConversation, { error }] = useAddConversationMutation();

  const { data: message } = useGetMessageByConversationQuery(conversationId);
  console.log(message, "msgggg");

  const [addMessage, { isLoading: messageLoading }] = useAddMessageMutation();

  const { data: senderInfo } = useGetSingleUserQuery(id);

  // apisss

  const createConversation = () => {
    const data = {
      senderId: user?._id,
      reciverId: id,
    };

    addConversation(data).then((res) => {
      if (res.data) {
        dispatch(setConversationId(res.data?._id));
      }
    });
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() !== "") {
      // const userMessage = { text: inputMessage, sender: "user" };
      // setMessages([...messages, userMessage]);
      // setInputMessage("");
      // // Simulate an auto-answer after a short delay
      // setTimeout(() => {
      //   const answer = getAutoAnswer(inputMessage);
      //   const autoAnswerMessage = { text: answer, sender: "website" };
      //   setMessages([...messages, userMessage, autoAnswerMessage]);
      // }, 1000);
      const data = {
        conversationId,
        sender: user?._id,
        text: inputMessage,
      };
      addMessage(data).then((res) => {
        if (res.data) {
          setInputMessage("");
        }
      });
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();
    }
  };

  useEffect(() => {
    if (isSuccess && !data) {
      createConversation();
    } else if (isSuccess && data) {
      dispatch(setConversationId(data?._id));
    }
  }, [isSuccess]);

  useEffect(() => {
    scrollToBottom();
  }, [message]);
  return (
    <section
      className={`container mx-auto ${styles.chilCareMessageMainContainer}`}
    >
      <div className={styles.imageContainer}>
        <img src={quote.src} alt="" />
      </div>
      <div className={styles.mainContainer}>
        <div>
          <div ref={chatContainerRef} className={styles.conversation}>
            {message?.map((msg, index) => (
              <div key={index}>
                {msg.sender !== user?._id && (
                  <div
                    style={{ marginBottom: "30px" }}
                    className="d-flex gap-1 align-items-center "
                  >
                    <img
                      src={senderInfo?.image}
                      alt=""
                      width={75}
                      height={75}
                      className="rounded-circle"
                    />
                    <div className="d-flex w-100">
                      <div className={styles.answer_box}>
                        <div></div>
                      </div>
                      <div className={styles.answer}>
                        <h6>{msg.text}</h6>
                        <p>{formatMessageTime(msg.createdAt)}</p>
                      </div>
                    </div>
                  </div>
                )}

                {msg.sender === user?._id && (
                  <div
                    style={{ marginBottom: "30px" }}
                    className="d-flex gap-1 align-items-center"
                  >
                    <div className="d-flex w-100">
                      <div className={styles.question}>
                        <h6>{msg.text}</h6>
                        <p>{formatMessageTime(msg.createdAt)}</p>
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
            placeholder={`Type a message to ${senderInfo?.firstName}...`}
          />
          <div className={styles.buttonContainer}>
            <button
              onClick={handleSendMessage}
              className="_button"
              disabled={messageLoading}
            >
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