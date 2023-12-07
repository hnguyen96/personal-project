import { z } from "zod";

export const CreatePostBody = z.object({
    data: z.string(),
})

export type CreatePostData = z.infer<typeof CreatePostBody>;


export const Pagination = z.object({
    limit: z.number().default(10),
    offset: z.number().default(0),
})

export type PaginationParam = z.infer<typeof Pagination>