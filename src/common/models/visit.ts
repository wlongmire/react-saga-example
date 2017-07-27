import { Address } from './address';
import { StringEnum, Dictionary } from '../utils';

/** K:V for visit status */
export const VisitStatus = StringEnum([
    'New',
    'Scheduled',
    'Process Visit',
    'Finalized',
    'Cancelled'
]);

/** Create a type for the Visit Status */
export type VisitStatus = keyof typeof VisitStatus;

/** K:V for visit type */
export const VisitType = StringEnum([
    'LifeCo',
    'External'
]);

/** Create a type for the Visit Type */
export type VisitType = keyof typeof VisitType;

/** K:V for visit type */
export const VisitProviderType = StringEnum([
    'Primary',
    'Gynocologist',
    'Dermatologist'
]);

/** Create a type for the Visit Type */
export type VisitProviderType = keyof typeof VisitProviderType;

/** Visit model */
export class Visit {
    referenceEvent?: string;
    status: VisitStatus;
    assigneeId: number;
    visitType: VisitType;
    maintenance: Array<string>;
    providerName: string;
    providerType: VisitProviderType;
    providerLocation: Address;
    complaints: Array<string>;
    vitals: Dictionary<number>;
    systemReview: Array<object>;
    subjective: string;
    objective: string;
    assessment: string;
    nextSteps: string;
}