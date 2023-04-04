import { Box, Button, Stack } from "@mui/material";
import React, { useMemo, useState } from "react";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import AttachmentOutlinedIcon from "@mui/icons-material/AttachmentOutlined";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import { InputField } from "../InputField";
import { SenderMessage } from "../senderMessage";
import { ReceiverMessage } from "../receiverMessage";
import EmojiPicker from "emoji-picker-react";
import Cookies from "js-cookie";

export const ChatingFooter = ({ message, SearchValue, setMessage }) => {
  const [file, setFile] = useState();

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  // const handleUploadClick = () => {
  //   if (!file) {
  //     return;
  //   }

  //   fetch("https://httpbin.org/post", {
  //     method: "POST",
  //     body: file,
  //     headers: {
  //       "content-type": file.type,
  //       "content-length": `${file.size}`,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  //     .catch((err) => console.error(err));
  // };
  const userName = Cookies.get("username");
  console.log(userName, "user");
  const [emoji, setEmoji] = useState(false);
  const [inputStr, setInputStr] = useState("");
  const onEmojiClick = (event, emojiObject) => {
    let Emoji = inputStr;
    Emoji += emojiObject.emoji;
    setInputStr(Emoji);
    setEmoji(false);
  };

  const sortedDetail = useMemo(() => {
    const searchRegex = SearchValue && new RegExp(`${SearchValue}`, "gi");
    return message?.filter(
      (item) => !searchRegex || searchRegex.test(item?.text)
    );
  }, [message, SearchValue]);
  console.log(sortedDetail, "sorted");
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
        {sortedDetail?.map((item, index) => {
          return item?.senderId?.username === userName ? (
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
          <Stack direction="row" alignItems="center" spacing={2}>
            <InsertEmoticonIcon
              style={{
                marginRight: "15px",
                color: "#54656f",
                cursor: "pointer",
              }}
              onClick={() => setEmoji(true)}
            />
            <Button component="label">
              <AttachmentOutlinedIcon
                style={{ color: "#54656f", cursor: "pointer" }}
              />
              <input hidden type="file" onChange={handleFileChange} />
            </Button>
          </Stack>
        </Box>
        <Box>
          <InputField
            placeholder="Type a message"
            message={message}
            setInputStr={setInputStr}
            inputStr={inputStr}
            file={file}
            setFile={setFile}
            setMessage={setMessage}
          />
        </Box>
        <Box>
          <KeyboardVoiceIcon style={{ color: "#54656f", cursor: "pointer" }} />
        </Box>
      </Box>
    </>
  );
};
