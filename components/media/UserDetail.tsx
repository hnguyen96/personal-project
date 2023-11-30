import { clerkClient } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";

// export default async function UserDetail(userId: string) {
//     const user = await clerkClient.users.getUser(userId)
//         .then((res) => {
//             console.log(res);
//             setUsername(res.username);
//         })

//     return username;
// }