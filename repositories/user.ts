import { prisma } from '@/prisma/client';

export abstract class IUserRepository {
    abstract updateOrCreateUser(userData: UserData): Promise<any>;
    abstract deactivateUser(userId: string): Promise<any>;
    abstract deleteUser(userId: string): Promise<any>;
}

export class UserRepository extends IUserRepository {
    async updateOrCreateUser(userData: UserData): Promise<any> {
        const upsertUser = await prisma.user.upsert({
            where: {
                id: userData.id,
            },
            update: {
                ...userData
            },
            create: {
                ...userData
            }
        });
        return upsertUser;
    }
    async deactivateUser(userId: string): Promise<any> {
        return await prisma.user.update({
            where: {
                id: userId,
            },
            data: {
                active: false,
            }
        })
    }
    async deleteUser(userId: string): Promise<any> {
        return await prisma.user.delete({
            where: {
                id: userId,
            }
        })
    }   
}