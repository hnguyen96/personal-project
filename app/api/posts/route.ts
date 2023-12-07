import { postService } from "@/services/post";
import { errorHandler } from "@/utils/error_handler";
import { CreatePostBody, Pagination } from "@/utils/validators";
import { getAuth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
    const body = await request.json();
    const data = CreatePostBody.parse(body);
    const { userId } = getAuth(request);

    await postService.createPost(userId, data);
    return NextResponse.json({
        "message": data,
        "user": userId
    }, {
        status: 200
    })
    } catch (error) {
        return errorHandler(error)
    }
}

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const { userId } = getAuth(request);
        const pagination = Pagination.parse({
            limit:  Number(searchParams.get("limit") || "20"),
            offset: Number(searchParams.get("offset") || "0")
        })
        return NextResponse.json(
            await postService.getPosts(userId, pagination), {status: 200}
        );
    } catch (error) {
        return errorHandler(error)
    }
}