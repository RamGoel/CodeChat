import {useSocket} from '@/redux/Provider';
import {setDetails} from '@/redux/slices/authSlice';
import {useAppDispatch} from '@/services/hooks';
import {Colors} from '@/utils/colors';
import {ArrowRight2} from 'iconsax-react';
import {useSession} from 'next-auth/react';
import {useRouter} from 'next/navigation';
import {useState} from 'react';
import toast from 'react-hot-toast';

const JoinRoom = () => {
  const {data: session} = useSession();
  const router = useRouter();
  const socket = useSocket();
  const dispatch = useAppDispatch();
  const [roomId, setRoomId] = useState('');
  const connectToRoom = () => {
    if (String(roomId).length !== 12) {
      toast.error('12 digit ID required.');
      return;
    }

    if (socket) {
      socket.emit('join_room', roomId, session?.user?.email);
      dispatch(setDetails({userName: session?.user?.email, roomName: roomId}));
      router.push('/playground');
      setRoomId('');
    }
  };

  return (
    <div className="px-4 mt-6">
      <h3 className="text-white text-xl">Join a code room</h3>
      <div className="mt-3 flex items-center justify-between md:w-1/4 sm:w-1/2">
        <input
          maxLength={12}
          value={roomId}
          onChange={e => {
            setRoomId(e.target.value);
          }}
          minLength={12}
          className="bg-zinc-800 p-3 text-white rounded-lg tracking-widest"
          placeholder="12-digit room id"
        />
        <div
          onClick={() => connectToRoom()}
          className="p-2 rounded-full hover:scale-110 transition-all"
          style={{
            backgroundColor: Colors.primary,
            width: 40,
            height: 40,
          }}>
          <ArrowRight2 className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default JoinRoom;
