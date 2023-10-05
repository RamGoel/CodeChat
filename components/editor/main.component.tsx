import React, { useEffect, useMemo, useState } from "react";
import InputEditor from "./editor.component";
import Output from "./output.component";
import { useSocket } from "@/redux/Provider";
import { useAppDispatch } from "@/services/hooks";
import { setOutput } from "@/redux/slices/code.slice";
import SiteHeader from "../common/header/site.header";
import { Message2 } from "iconsax-react";
import Chatbox from "../chatbox/chatbox.component";

const Main = () => {
  const [code, setCode] = useState('print("Hello")');
  const [isCompiling, setCompiling] = useState(false);
  const [lang, setLang] = useState('python3')
  const [isEnabled, setEnabled] = useState(false);
  const socket = useSocket();
  const dispatch = useAppDispatch();
  const executeCode = (language: string) => {
    socket?.emit("code exec", { code, language });
    setCompiling(true);
  };

  useEffect(() => {
    socket?.on("code executed", (data) => {
      dispatch(setOutput(data));
      setCompiling(false);
    });
  }, [socket]);
  return (
    <div
      className="rounded-lg overflow-hidden py-2 w-full"
      style={{ height: "fit-content", overflowY: "scroll" }}>
      <SiteHeader lang={lang} setLang={setLang} isCompiling={isCompiling} compileHandler={executeCode} />
      <div className="flex flex-row">
        <InputEditor code={code} setCode={setCode} language={lang} />
        <Output />
        <Chatbox isEnabled={isEnabled} />
      </div>
      <div onClick={()=>setEnabled(old=>!old)} style={{
        height: 50,
        width: 50,
        position: 'absolute',
        bottom: 50,
        left:50
      }} className="bg-violet-700 p-2 hover:scale-110 transition-all cursor-pointer flex items-center justify-center rounded-full">
        <Message2 color="white" size={30} />
      </div>
    </div>
  );
};

export default Main;
