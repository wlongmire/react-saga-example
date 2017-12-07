export class AuthCredentials {
    email: string;
    password: string;
    deviceId?: string;

    constructor(email: string, password: string, deviceId?: string) {
        this.email = email;
        this.password = password;
        this.deviceId = deviceId;
    }
}