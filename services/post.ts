import {CreatePostData, PaginationParam} from "@/utils/validators"
import { prisma } from "@/prisma/client";
import { IPostRepository, PostRepository } from "@/repositories/post";
import { ServerErrorException, UnAuthorizedException } from "@/utils/exceptions";

export abstract class IPostService {
    postRepository: IPostRepository;
    constructor(postRepository: IPostRepository) {
        this.postRepository = postRepository;
    }
    abstract getPosts(userId: string | null, pagination: PaginationParam): Promise<any>;
    abstract createPost(userId: string | null, postData: CreatePostData): Promise<any>;
}

class PostService extends IPostService {
    async getPosts(userId: string | null, pagination: PaginationParam): Promise<any> {
        if (!userId) {
            throw new UnAuthorizedException("Unauthorized");
        }
        const posts = await this.postRepository.getPosts(pagination, userId);

        return {
            results: posts,
            limit: pagination.limit,
            offset: pagination.offset
        }
    }

    async createPost(userId: string | null , postData: CreatePostData): Promise<any> {
        if (!userId) {
            throw new UnAuthorizedException("Unauthorized");
        }
        return await prisma.$transaction(async prisma => {
            try {
                await this.postRepository.createPost(userId, postData);
            } catch (err) {
                console.log(err);
                throw new ServerErrorException("Creating post failed!")
            }
        });
    }
}

export const postService = new PostService(
    new PostRepository()
);