"use server"

import { clerkClient } from "@clerk/nextjs";

export async function getPosts(token: string | null, params?: any) {
  if (!token) return;
  const query = params ? "?" + new URLSearchParams(params).toString() : "";
  const response = await fetch(`${process.env.BASE_URL}/posts` + query, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });
  const data = await response.json();
  return data as Promise<PostResponse>;
}

export async function addPost(token: string | null, postValue?: string) {
  if (!token) return;

  const response = await fetch(`${process.env.BASE_URL}/posts`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      data: postValue,
    }),
  });
  const data = await response.json();
  return data as Promise<AddPostResponse>;
}