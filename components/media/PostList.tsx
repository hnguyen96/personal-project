import { auth } from "@clerk/nextjs";
import { getPosts } from "@/app/_actions/posts";
import UserDetail from "./UserDetail";
import Image from "next/image";

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
                <div className="flex gap-2 items-center">
                  <div className="avatar">
                    <div className="w-10 rounded-full">
                      <Image
                        src={post.user.avatarUrl}
                        alt="User image"
                        width={40}
                        height={40}
                      />
                    </div>
                  </div>
                  <span className="text-sm font-semibold">{post.user.username}</span>
                </div>
                <div className="text-xs font-normal">{post.data}</div>
              </div>
            </div>
          )
        }
        )}
    </div>
  );
}
