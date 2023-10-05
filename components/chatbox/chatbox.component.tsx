import { GlobalState } from "@/redux/store";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import Header from "./header";
import ChatSection from "./chatSection.component";
import Form from "./form.component";

const Chatbox = () => {
  return (
    <div className="p-2 bg-white rounded-xl">
      <div>
        <div className=" w-full ">
          <Header />
          <ChatSection />
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Chatbox;
