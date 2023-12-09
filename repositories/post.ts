import { CreatePostData, PaginationParam } from '@/utils/validators';
import { prisma } from '@/prisma/client';

export abstract class IPostRepository {
    abstract getPosts(pagination?: PaginationParam, userId?: string): Promise<any[]>;
    abstract createPost(userId: string, data: CreatePostData): Promise<any>;
}

export class PostRepository extends IPostRepository {
    async getPosts(pagination?: PaginationParam, userId?: string): Promise<any[]> {
        const query: any = {
            orderBy: [
                {
                    createdAt: "desc"
                }
            ],
        };
        if (pagination) {
            query["skip"] = pagination.offset;
            query["take"] = pagination.limit;
        }
        query["select"] = {
            user: {
                select: {
                    id: true,
                    username: true,
                    avatarUrl: true
                }
            },
            id: true,
            data: true,
            createdAt: true,
        }
        const posts = await prisma.post.findMany(query);
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