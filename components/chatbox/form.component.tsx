'use client';
import { useSocket } from '@/redux/Provider';
import { setMessages } from '@/redux/slices/chat.slice';
import { type GlobalState } from '@/redux/store';
import { EmojiHappy, EmojiNormal, Send } from 'iconsax-react';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import EmojiPicker from 'emoji-picker-react';

export type messageProps = {
  user: string;
  text: string;
  timestamp: string;
};

const Form = () => {
  const { data: session } = useSession();
  const socket = useSocket();
  const [message, setmessage] = useState('');
  const [isEmojiOpen, setEmojiOpen] = useState(false);
  const roomName = useSelector((state: GlobalState) => state.auth.roomName);
  const messages = useSelector((state: GlobalState) => state.chat.messages);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    if (!message) {
      return;
    }

    socket.emit('chat message', message, session?.user?.name, roomName);
    console.log(messages);
    setmessage('');
  };

  useEffect(() => {
    if (socket) {
      socket.on('chat message', (data: messageProps) => {
        const newArr = [...messages];
        newArr.push(data);
        dispatch(setMessages(newArr));
      });
      socket.on('user joined', (id: string) => {
        toast.success(`${id} joined the chat`);
      });

      socket.on('user left', (id: string) => {
        toast.success(`${id} leaved the chat`);
      });
    }
  }, [socket, dispatch, messages]);

  return (
    <div className="p-3">
      {
        isEmojiOpen ? <EmojiPicker className='transition-all' style={{
          position: 'absolute',
          bottom: '100px',
        }}
          onEmojiClick={(emoji) => {
            setmessage(message + emoji.emoji)
          }}
        />:null
      }
      <div className="flex flex-row items-center px-3 justify-between  bg-stone-200 border-violet-700 border- rounded-xl">
        <div className="w-1/8">
          <EmojiNormal className='hover:bg-gray-300 p-2 rounded-full' onClick={()=>setEmojiOpen(old=>!old)} size={38} color={'#000'} />
        </div>

        <div className="p-2 w-11/12">
          <input
            value={message}
            onKeyDown={event => {
              if (event.which === 13) {
                handleSubmit();
              }
            }}
            onChange={e => {
              setmessage(e.target.value);
            }}
            className="focus-visible:border-0 text-black outline-none  bg-transparent p-3 w-full rounded-lg"
            placeholder="type a message..."
          />
        </div>
        <button
          className="w-1/8"
          disabled={message.length === 0}
          onClick={() => {
            handleSubmit();
            setEmojiOpen(false);
          }}>
          <Send size={25} color="#000" />
        </button>
      </div>
    </div>
  );
};

export default Form;
