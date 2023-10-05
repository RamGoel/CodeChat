"use client";
import { Colors } from "@/utils/colors";
import { ArrowRight2, Google } from "iconsax-react";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import NameToPic from "../nameToPic/page";
import Menu from "./menu.component";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import MenuComponent from "./menu.component";
import { useSelector } from "react-redux";
import { type GlobalState } from "@/redux/store";
import { switchTab } from "@/redux/slices/miscSlice";
import { useAppDispatch } from "@/services/hooks";

export interface HeaderProps {
  pageName?: string;
}
const SiteHeader = ({ pageName }: HeaderProps) => {
  const [isPopupShow, setPopupShow] = useState(false);
  const { data: session } = useSession();
  const activeTab = useSelector((state: GlobalState) => state.misc.activeTab);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleSignin = async (): Promise<any> => {
    return await signIn("google", { callbackUrl: "/dashboard" });
  };
  return (
    <div className="p-4 bg-black text-white flex flex-row items-center justify-between">
      <Toaster />
      <div className="md:flex md:items-baseline w-full md:w-2/5 md:justify-start">
        <h3
          style={{
            fontWeight: 700,
            fontSize: 30,
          }}
          className="sm:text-small"
        >
          cochat<span style={{ color: Colors.primary }}>.</span>
        </h3>
        <p className="ml-2">/built by @RamGoel</p>
      </div>
      <div>
        <button
          onClick={() => {
            dispatch(switchTab("Chat"));
          }}
          className={`p-2 text-white ${
            activeTab === "Chat" ? "bg-purple-500" : ""
          } border-2 rounded-lg mx-2`}
        >
          Chat
        </button>
        <button
          onClick={() => {
            dispatch(switchTab("Code"));
          }}
          className={`p-2 text-white ${
            activeTab === "Code" ? "bg-purple-500" : ""
          } border-2 rounded-lg mx-2`}
        >
          Code
        </button>
      </div>
      <div className="flex flex-row items-baseline  w-full md:w-1/5 justify-end">
        {!!session && session?.user ? (
          <div className="flex flex-row items-center justify-between">
            {pageName === "site" ? (
              <button
                onClick={() => {
                  router.push("/dashboard");
                }}
                className="text-white border-red-500 flex items-center justify-start rounded-lg px-4 font-medium text-black py-2"
              >
                Go to dashboard
                <ArrowRight2 size={20} />
              </button>
            ) : null}
            {session?.user?.image ? (
              <Image
                onClick={() => {
                  setPopupShow((old) => !old);
                }}
                src={session?.user?.image}
                className="rounded-full ml-2 cursor-pointer"
                width={40}
                height={40}
                alt="profile-image"
              />
            ) : (
              <div
                style={{
                  width: "40px",
                  height: "40px",
                }}
              >
                <NameToPic
                  onClick={() => {
                    setPopupShow((old) => !old);
                  }}
                  name={session.user.name || "A"}
                />
              </div>
            )}
            {isPopupShow ? (
              <MenuComponent
                closeMenu={() => {
                  setPopupShow(false);
                }}
              />
            ) : (
              false
            )}
          </div>
        ) : (
          <button
            onClick={handleSignin}
            className="flex flex-row items-center justify-between bg-zinc-900 p-2 px-3 rounded-lg"
          >
            <Image
              src={require("@/public/google.png")}
              width={20}
              height={20}
              alt="google-icon"
            />
            <p className="ml-2">Sign in with Google</p>
          </button>
        )}
      </div>
    </div>
  );
};

export default SiteHeader;
