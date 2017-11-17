import { User } from './user';

export interface UserArgs { 
    user: User;
    clinicId?: number;
    clinicianId?: number;
}