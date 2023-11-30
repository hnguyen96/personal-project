"use client";

import { useState } from "react";
import Image from "next/image";
import { addPost, getPosts } from "@/app/_actions/posts";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { MESSAGE_ADD_POST_SUCCESSFULLY } from "./message/posts";

export default function NewPost() {
    const [postValue, setPostValue] = useState("");

    const { getToken } = useAuth();
    const router = useRouter();

    const handleAddPost = async (postValue: string) => {
        const token = await getToken({
            template: process.env.JWT_TEMPLATE,
        });
        if (!token) return;

        const resAddPost = await addPost(token, postValue);

        if (resAddPost?.message === MESSAGE_ADD_POST_SUCCESSFULLY) {
            setPostValue("");
            getPosts(token);
        }
        router.refresh();
    };

    return (
        <div className="flex-auto">
            <div className="flex flex-col gap-3">
                <span className="uppercase font-semibold text-xs">New Post</span>
                <hr />
                <div className="flex justify-between gap-16">
                    <textarea
                        placeholder="What's on your mind"
                        className="!outline-none flex-1"
                        value={postValue}
                        onChange={(e) => setPostValue(e.target.value)}
                    />
                    <div className="flex gap-6 cursor-pointer">
                        <button
                            type="submit"
                            onClick={() => handleAddPost(postValue)}
                            className={`h-[32px] rounded-lg bg-gradient-to-b from-primary-top to-primary-bottom flex items-center justify-center p-2`}
                        >
                            <Image
                                src="/icons/send.svg"
                                alt="Send"
                                height={16}
                                width={16}
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}