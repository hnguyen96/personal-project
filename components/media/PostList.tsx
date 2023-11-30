import { auth } from "@clerk/nextjs";
import { getPosts } from "@/app/_actions/posts";
import { useState } from "react";
import { User } from "@clerk/nextjs/server";

export default async function PostList() {
  const { getToken } = auth();
  const token = await getToken({
    template: process.env.JWT_TEMPLATE,
  });

  const postResponse = await getPosts(token);
  const posts = postResponse?.results;

  return (
    <div className="flex flex-col gap-6 mt-16">
      {posts &&
        posts?.map((post: Post) => {
          return (
            <div key={post.id}>
              <div className="flex flex-col gap-2 border-t p-2">
                <div className="text-xs font-normal">{post.data}</div>
                <div className="text-xs font-normal">{post.createdAt}</div>
              </div>
            </div>
          )
        })}
    </div>
  );
}