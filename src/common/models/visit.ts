import { Address } from './address';
import { InternalNote } from './internal-note';

export enum VisitStatus {
    New,
    Scheduled,
    ProcessVisit,
    Finalized,
    Cancelled
}

export enum VisitType {
    LifeCo,
    External
}

export enum DoctorType {
    Primary,
    Gynecologist,
    Dermatologist
}

export enum TimeDuration {
    QuarterHour = 15,
    HalfHour = 30,
    ThreeQuarterHour = 45,
    Hour = 60
}

export enum MaintenanceFlags {
    Physical,
    PapSmear
}

export class Visit {
    id: string;
    assessment?: string;
    assigneeId?: string;
    cases?: Array<string>;
    clinic?: Address;
    complaints?: Array<string>;
    diagnosis?: string;
    doctorId?: string;
    doctorName?: string;
    doctorType?: string;
    estimatedDuration?: number;
    internalNotes?: Array<InternalNote>;
    maintenance?: Array<string>;
    nextSteps?: string;
    objective?: string;
    patientId?: number;
    scheduledFor?: Date;
    status?: string;
    subjective?: string;
    systemsReview?: Array<Map<string, string>>;
    visitType?: string;
    vitals?: Array<Map<string, number>>;
    
    isNew: boolean;
    isDirty: boolean;
    isValid: boolean;
}

export interface VisitsMap {
    [id: string]: Visit;
}