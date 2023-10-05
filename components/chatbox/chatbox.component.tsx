import { GlobalState } from "@/redux/store";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import Header from "./header";
import ChatSection from "./chatSection.component";
import Form from "./form.component";

const Chatbox = ({ isEnabled }) => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            right: 0,
            translate: isEnabled ? 0 : 500,
            transition:'.5s'
        }} className="p-2 bg-white transition-all h-screen w-1/3">
            <div>
                <div className=" w-full ">
                    <Header />
                    <ChatSection />
                </div>
            </div>
        </div>
    );
};

export default Chatbox;
