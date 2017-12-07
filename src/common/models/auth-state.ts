import { AuthInfo } from './auth-info';
import { Identity } from './identity';

export interface AuthState {
    isAuthenticated: boolean;
    pending: boolean;
    auth?: AuthInfo,
    identity?: Identity;
    authError?: string;
    clientToken?: string;
    clientTokenVerified?: boolean;
    clientTokenVerificationError?: string;
}