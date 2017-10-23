export class AuthInfo {
    clientToken: string;
    userId: number;
    userChannel: number;
    phoneHint?: string;
    roleId?: number;

    constructor(
        clientToken: string, 
        userId: number,
        userChannel: number,
        phoneHint?: string,
        roleId?: number
    ) {
        this.clientToken = clientToken;
        this.userId = userId;
        this.userChannel = userChannel;
        this.phoneHint = phoneHint;
        this.roleId = roleId
    }
}





