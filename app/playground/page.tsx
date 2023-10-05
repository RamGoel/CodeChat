"use client";
import Chatbox from "@/components/chatbox/chatbox.component";
import Editor from "@/components/editor/main.component";
import Header from "@/components/common/header/header.component";
import Sidebar from "@/components/sidebar/page";
import { GlobalState } from "@/redux/store";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import SiteHeader from "@/components/common/header/site.header";
import Form from "@/components/chatbox/form.component";
import Main from "@/components/editor/main.component";

const Playground = () => {
    const { inviteLink, userName, roomName, code, output } = useSelector(
        (state: GlobalState) => state.auth,
    );
    return (
        <div className="w-11/12 mx-auto">
           <Main />
        </div>
    );
};

export default Playground;

{/* <div
    style={{
        position: "absolute",
        top: 60,
        left: sidebar ? 0 : -300,
        backgroundColor: "black",
        transition: "0.5s",
    }}
    className={`w-1/5`}
>
    <Sidebar />
</div> */}
