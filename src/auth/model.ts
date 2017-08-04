export interface AuthState {
    isAuthenticated: boolean;
    clientToken?: string;
    userRole?: number;
    userChannel?: number;
}

export interface AuthInfo {
    clientToken: string;
    userRole: number;
    userChannel: number;
}