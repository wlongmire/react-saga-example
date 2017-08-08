export interface AuthState {
    isAuthenticated: boolean;
    clientToken?: string;
    userRole?: number;
    userChannel?: number;
    authError?: string;
}

export interface AuthInfo {
    clientToken: string;
    userRole: number;
    userChannel: number;
}