import { NextResponse } from "next/server";
import { BaseException } from "./exceptions";
import { ZodError } from "zod";

export function errorHandler(error: unknown) {
    if (error instanceof BaseException) {
        return NextResponse.json({
            "message": error.message
        }, {status: error.code})
    }
    if (error instanceof ZodError) {
        return NextResponse.json({
            "message": "Validation error",
            "errors": error.errors
        }, {status: 400})
    }
    throw error;
}