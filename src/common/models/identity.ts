import { IdentityUserInfo } from './identity-user-info';

export class Identity {
    channelId: number;
    roleId?: number;
    roleName?: string;
    userId: number;
    userInfo?: IdentityUserInfo;    
}