import { AuthState } from './auth-state';
import { ChatState } from './chat-state';
import { DosespotState } from './dosespot-state'
import { OtherState } from './other-state';
import { PatientsState } from './patients-state';
import { TreatmentsState } from './treatments-state';
import { UsersState } from './users-state';
import { VisitsState } from './visits-state';
import { WellnessState } from './wellness-state';

export interface GlobalState {
    auth: AuthState;    
    chat: ChatState;
    dosespot: DosespotState;
    other: OtherState;
    patients: PatientsState;
    treatments: TreatmentsState;
    users: UsersState;
    visits: VisitsState;
    wellness: WellnessState;
}