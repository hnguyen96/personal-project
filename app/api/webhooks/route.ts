import { userService } from "@/services/user";
import { NextResponse } from "next/server";
import { Webhook } from "svix";

async function verifyWebhookRequest(request: Request): Promise<WebhookRequest> {
    const headers = request.headers;
    const body =  await request.json();
    const secretKey = process.env.WEBHOOK_SECRET || "";
    const verifyHeaders = {
        "svix-id": headers.get("svix-id") || "",
        "svix-timestamp": headers.get("svix-timestamp") || "",
        "svix-signature": headers.get("svix-signature") || "",
    }
    const payload = JSON.stringify(body);
    const wh = new Webhook(secretKey);
    return wh.verify(payload, verifyHeaders) as WebhookRequest;
}

export async function POST(request: Request) {
    try {
        const data = await verifyWebhookRequest(request);
        const response = await userService.handleWebhookRequest(data);
        
        return NextResponse.json(response);
    } catch (error: any){
        return NextResponse.json({
            message: error.message
        }, {
            status: 500
        })
    }
}