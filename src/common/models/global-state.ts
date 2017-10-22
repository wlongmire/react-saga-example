import { AuthState } from './auth-state';
import { ChatState } from './chat-state';
import { DoseSpotState } from './dosespot-state'
import { PatientsState } from './patients-state';
import { UsersState } from './users-state';
import { VisitState } from './visits-state';

export interface GlobalState {
    auth: AuthState;    
    chat: ChatState;
    dosespot: DoseSpotState;
    patients: PatientsState;
    users: UsersState;
    visits: VisitState;
}