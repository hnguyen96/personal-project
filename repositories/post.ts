import { CreatePostData, PaginationParam } from '@/utils/validators';
import { prisma } from '@/prisma/client';

export abstract class IPostRepository {
    abstract getPosts(pagination?: PaginationParam, userId?: string): Promise<any[]>;
    abstract createPost(userId: string, data: CreatePostData): Promise<any>;
}

export class PostRepository extends IPostRepository {
    async getPosts(pagination?: PaginationParam, userId?: string): Promise<any[]> {
        const posts = await prisma.post.findMany();
        return posts
    }

    async createPost(userId: string, data: CreatePostData): Promise<any> {
        const posts = await prisma.post.create({
            data: {
                userId: userId,
                data: data.data
            }
        })
        return posts;
    }
}