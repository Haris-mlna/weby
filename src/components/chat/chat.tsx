'use client'

import { FC, useState } from "react";
import styles from "./chat.module.css";
import Image from "next/image";

interface ChatBubbleProps {
  close: () => void;
}

const ChatBubble: FC<ChatBubbleProps> = ({ close }) => {
  return (
    <div className={styles.chatBubble}>
      <button onClick={close}>CLOSE</button>
    </div>
  );
};

const ChatButton: FC = () => {
  const [isChatActive, setIsChatActive] = useState(false);
  const [isAnimation, setIsAnimation] = useState(false)

  return (
    <>
      {isChatActive ? (
        <ChatBubble close={() => 
          setIsChatActive(false)
        } />
      ) : (
        <button
          className={styles.chatButton}
          onClick={() => {
            setIsChatActive(true);
          }}
        >
          <Image
            src={"/assets/icons/smiles.png"}
            alt={"chat"}
            width={512}
            height={512}
          />
        </button>
      )}
    </>
  );
};

export default ChatButton;
