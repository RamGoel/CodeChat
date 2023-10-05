"use client";
import { useSocket } from "@/redux/Provider";
import { setMessages } from "@/redux/slices/chat.slice";
import { GlobalState } from "@/redux/store";
import { EmojiHappy, Image, PictureFrame, Send } from "iconsax-react";
import { useSession } from "next-auth/react";
import React, { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

export type messageProps = {
  user: {
    name: string;
    id: number;
  };
  message: string;
  timestamp: string;
};
const Form = () => {
  const { data: session } = useSession();
  const socket = useSocket();
  const [message, setmessage] = useState("");
  const roomName = useSelector((state: GlobalState) => state.auth.roomName);
  const messages = useSelector((state: GlobalState) => state.chat.messages);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    if (!message) {
      return;
    }
    socket.emit("chat message", message, session?.user?.name, roomName);
    console.log(messages);
    setmessage("");
  };

  useEffect(() => {
    socket.on("chat message", (data) => {
      const newArr = [...messages];
      newArr.push(data);
      dispatch(setMessages(newArr));
    });
    socket.on("user joined", (id) => {
      toast.success(`${id} joined the chat`);
    });

    socket.on("user left", (id) => {
      toast.success(`${id} leaved the chat`);
    });
  }, [socket, dispatch, messages]);

  useEffect(() => {
    return () => {
      dispatch(setMessages([]));
    };
  }, []);
  return (
    <div className=" p-3">
      <div className="flex flex-row items-center px-3 justify-between border-violet-500 border-2 rounded-xl">
        <div className="w-1/8">
          <EmojiHappy size={25} />
        </div>
        <div className="w-1/8">
          <PictureFrame size={25} />
        </div>
        <div className="p-2 w-11/12">
          <input
            value={message}
            onChange={(e) => {
              setmessage(e.target.value);
            }}
            className="focus-visible:border-0 outline-none"
            placeholder="type a message..."
          />
        </div>
        <button
          className="w-1/8"
          disabled={message.length === 0}
          onClick={() => handleSubmit()}
        >
          <Send size={25} />
        </button>
      </div>
    </div>
  );
};

export default Form;
