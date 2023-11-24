"use client";
import { useUser } from "@clerk/nextjs";

export default function About() {
    const { isLoaded, isSignedIn, user } = useUser();

    if (!isLoaded || !isSignedIn) {
        return null;
    }

    return <div>Hello, {user?.username} welcome to Clerk</div>;
}

