import { AuthInfo } from './auth-info';
import { Identity } from './identity';

export interface AuthState {
    isAuthenticated: boolean;
    auth?: AuthInfo,
    identity?: Identity;
    authError?: string;
    clientToken?: string;
    clientTokenVerified?: boolean;
    clientTokenVerificationError?: string;
}