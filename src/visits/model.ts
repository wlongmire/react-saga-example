import { IAddress, Utils } from '../common';

/** K:V for visit status */
const VisitStatus = Utils.strEnum([
    'New',
    'Scheduled',
    'Process Visit',
    'Finalized',
    'Cancelled'
]);

/** Create a type for the Visit Status */
type VisitStatus = keyof typeof VisitStatus;

const VisitType = Utils.strEnum([
    'LifeCo',
    'External'
]);

type VisitType = keyof typeof VisitType;

const ProviderType = Utils.strEnum([
    'Primary',
    'Gynocologist',
    'Dermatologist'
]);

type ProviderType = keyof typeof ProviderType;

export interface IVisitAddress extends IAddress {
    name: string;
}

export interface IVisit {
    referenceEvent?: string;
    status: VisitStatus;
    assigneeId: number;
    visitType: VisitType;
    maintenance: Array<string>;
    providerName: string;
    providerType: ProviderType;
    providerLocation: IVisitAddress;
    complaints: Array<string>;
    vitals: object;
    systemReview: Array<object>;
    subjective: string;
    objective: string;
    assessment: string;
    nextSteps: string;
}