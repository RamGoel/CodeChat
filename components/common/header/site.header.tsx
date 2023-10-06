"use client";
import { Colors } from "@/utils/colors";
import { ArrowRight2, DocumentUpload, Google, Play } from "iconsax-react";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import NameToPic from "../nameToPic/page";
import Menu from "./menu.component";
import { usePathname, useRouter } from "next/navigation";
import toast, { LoaderIcon, Toaster } from "react-hot-toast";
import MenuComponent from "./menu.component";


export interface HeaderProps {
    pageName?: string;
    isCompiling?: boolean,
    compileHandler?: Function,
    setLang?: Function,
    lang?: String
}
const SiteHeader = ({ pageName, isCompiling, compileHandler, lang, setLang }: HeaderProps) => {
    const [isPopupShow, setPopupShow] = useState(false);
    const { data: session } = useSession();
    const router = useRouter();
    const pathname=usePathname()
    const handleSignin = async (): Promise<any> => {
        return await signIn("google", { callbackUrl: "/dashboard" });
    };
    console.log(router)
    return (
        <div className="p-3 text-white flex flex-row items-center justify-between">
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
            {pathname === '/playground' ? <div style={{ all: "inherit" }}>
                <button
                    onClick={() => compileHandler(lang)}
                    style={{ width: 100, height: 40 }}
                    className="p-2 bg-violet-900 text-center rounded-lg px-3 text-white hover:scale-105 transition"
                >
                    {!isCompiling ? (
                        <p className="">Execute</p>
                    ) : <LoaderIcon className="mx-auto" />}
                </button>

                <select style={{ width: 100, height: 40 }} className="p-2 rounded-lg mx-2 bg-stone-900 px-3" onChange={(e) => setLang(e.target.value)}>
                    <option className="p-2 border-0" value={"python3"} selected>
                        Python
                    </option>
                    <option className="p-2 border-0" value={"nodejs"}>Nodejs</option>
                    <option className="p-2 border-0" value={"c"}>C</option>
                    <option className="p-2 border-0" value={"cpp"}>C++</option>
                    <option className="p-2 border-0" value={"java"}>Java</option>
                </select>
            </div> : null}
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
                        {isPopupShow && pathname!=='/playground' ? (
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
