import { Treatment } from './treatment';

export interface TreatmentsState {
    isFetching: boolean;
    items: Array<Treatment>;
    error: Error | null;
}