import { prisma } from "@/prisma/client";
import { IUserRepository, UserRepository } from "@/repositories/user";
import { Prisma } from "@prisma/client";

export abstract class IUserService {
    userRepository: IUserRepository;
    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }
    abstract handleWebhookRequest(data: WebhookRequest): Promise<unknown>;
}

export class UserService extends IUserService{
    async handleCreateOrUpdateUserByWebhook(requestData: WebhookRequest): Promise<WebhookResponse> {
        const { user, message } = await prisma.$transaction(async prisma => {
            let user: any = null;
            let message = "";
            const body = requestData.data as WebhookRequestCreateUpdateUserData;

            if (!body.username || !body.id) {
                throw Error("Username/Id must not be null");
            }

            const userData: UserData = {
                id: body.id,
                username: body.username,
                avatarUrl: body.image_url,
            }

            if (requestData.type === 'user.created') {
                userData.active = true;
            }

            try {
                user = await this.userRepository.updateOrCreateUser(userData);
            }  catch (e: any) {
                if (e instanceof Prisma.PrismaClientKnownRequestError) {
                    if (e.code === 'P2002') { 
                        // Duplicated key happen
                        // Retry upsert
                        user = await this.userRepository.updateOrCreateUser(userData);
                    } 
                }
                throw Error(e.message)
            }

            message = "Create/Update user successfully";
            return { user, message }
        }, {
            maxWait: 10000,
            timeout: 50000,
        })
        return { user, message }
    } 


    async handleWebhookRequest(requestData: WebhookRequest): Promise<WebhookResponse> {
        let user = null;
        let message = "";

        switch (requestData.type) {
            case 'user.created':
            case 'user.updated':
                const results = await this.handleCreateOrUpdateUserByWebhook(requestData);
                user = results.user;
                message = results.message;
                break;
            case 'user.deleted':
                const data = requestData.data as WebhookRequestDeleteUserData;
                const id = data.id;

                user = await this.userRepository.deleteUser(id);
                message = "Deactivate user successfully";
                break;
            default:
                break;
        }
        return {
            user: user,
            message: message,
        };
    }
}

export const userService = new UserService(new UserRepository());