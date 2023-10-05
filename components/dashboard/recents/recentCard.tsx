import React from "react";
import { roomProps } from "./recents.component";
import moment from "moment";
import Image from "next/image";
const RecentCard = ({ data }: { data: roomProps }) => {
  return (
    <div className="text-white p-2 cursor-pointer border-gray-900 hover:scale-105 transition border-2 rounded-lg mr-2">
      {/* {JSON.stringify(data)} */}
      <div className="flex items-center justify-between py-2">
        <h2 className="text-xl font-bold">{data.name}</h2>
        <p>{moment(data.createdAt).format("HH:MM")}</p>
      </div>
      {/* <Image src={data.preview} style={{objectFit:'cover', height:160, width:350, borderRadius:10}} alt='room-preview my-2 rounded-xl' width={350} height={160} /> */}
      <p className="text-zinc-600 my-2">{data.totalMembers} members</p>
    </div>
  );
};

export default RecentCard;
