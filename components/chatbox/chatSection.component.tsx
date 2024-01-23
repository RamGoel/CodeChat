import {type GlobalState} from '@/redux/store';
import React from 'react';
import {useSelector} from 'react-redux';
import {type messageProps} from './form.component';
import {useSession} from 'next-auth/react';
import moment from 'moment';

const ChatSection = () => {
  const {data: session} = useSession();
  const {messages} = useSelector((state: GlobalState) => state.chat);

  return (
    <div>
      <div style={{height: '75vh', overflowY: 'scroll'}} className=" px-3 py-2">
        {!(!messages || messages?.length === 0) ? (
          messages.map((value: messageProps) => (
            <div
              key={value.timestamp}
              className={`my-2 ${
                value?.user === session?.user?.name ? 'ml-auto' : 'mr-auto'
              }`}
              style={{
                width: 'fit-content',
                maxWidth: 200,
                wordBreak: 'break-all',
              }}>
              <div
                className={`
                            bg-violet-500
                            rounded-md
                            py-2
                            text-white
                            text-sm
                            px-4`}>
                {value.text}
              </div>
              <div
                className={`flex ${
                  value.user === session?.user?.name
                    ? 'justify-end'
                    : 'justify-start'
                } items-center`}>
                <span
                  className={
                    value.user === session?.user?.name
                      ? 'ml-2 mt-1'
                      : 'mr-2 mt-1'
                  }
                  style={{fontSize: 10}}>
                  {value.user}
                </span>
                <span
                  className={
                    value.user === session?.user?.name
                      ? 'ml-2 mt-1'
                      : 'mr-2 mt-1'
                  }
                  style={{fontSize: 10}}>
                  {moment(value.timestamp).format('HH:MM')}
                </span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No Chats available</p>
        )}
      </div>
    </div>
  );
};

export default ChatSection;
