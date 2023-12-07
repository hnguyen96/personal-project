import { clerkClient } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";
import { useEffect, useState } from "react";

export default function UserDetail(userId: string) {    

        const user = clerkClient.users.getUser(userId)


    return user;
}