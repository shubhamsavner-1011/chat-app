import { Box } from "@mui/material";
import React, { useState } from "react";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import AttachmentOutlinedIcon from "@mui/icons-material/AttachmentOutlined";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import { InputField } from "../InputField";
import { SenderMessage } from "../senderMessage";
import { ReceiverMessage } from "../receiverMessage";
import EmojiPicker from "emoji-picker-react";
import Cookies from "js-cookie";

export const ChatingFooter = ({ message }) => {
  const userName = Cookies.get("username");
  const [emoji, setEmoji] = useState(false);
  const [inputStr, setInputStr] = useState("");
  const onEmojiClick = (event, emojiObject) => {
    let Emoji = inputStr;
    Emoji += emojiObject.emoji;
    setInputStr(Emoji);
    setEmoji(false);
  };
  return (
    <>
      <Box
        sx={{
          p: 3,
          backgroundColor: "#eae6df",
          height: "600px",
          overflowY: "scroll",
          marginTop: "50px",
          position: "relative",
        }}
      >
        {message?.map((item, index) => {
          return item?.senderId.username === userName ? (
            <SenderMessage item={item} inputStr={inputStr} />
          ) : (
            <ReceiverMessage item={item} inputStr={inputStr} />
          );
        })}

        <Box
          style={{
            position: "absolute",
            bottom: "0",
            left: "5",
            zIndex: "999",
          }}
        >
          {emoji && <EmojiPicker height={400} onEmojiClick={onEmojiClick} />}
        </Box>
      </Box>

      <Box
        style={{
          backgroundColor: "#f0f1f1",
          padding: "20px 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Box>
          <InsertEmoticonIcon
            style={{ marginRight: "15px", color: "#54656f", cursor: "pointer" }}
            onClick={() => setEmoji(true)}
          />
          <AttachmentOutlinedIcon
            style={{ color: "#54656f", cursor: "pointer" }}
          />
        </Box>
        <Box>
          <InputField
            placeholder="Type a message"
            message={message}
            setInputStr={setInputStr}
            inputStr={inputStr}
          />
        </Box>
        <Box>
          <KeyboardVoiceIcon style={{ color: "#54656f", cursor: "pointer" }} />
        </Box>
      </Box>
    </>
  );
};
