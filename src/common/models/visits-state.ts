import { Visit } from './visit';

export interface VisitsState {
    isFetching: boolean;
    items: Array<Visit>;
    error: Error | null;
}