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
    status?: string;
    assigneeId?: string;
    cases?: Array<string>;
    patientId?: number;
    visitType?: string;
    maintenance?: Array<string>;
    doctorName?: string;
    doctorType?: string;
    clinic?: string;
    scheduledFor?: Date;
    estimatedDuration?: number;
    complaints?: Array<string>;
    vitals?: Array<object>;
    systemsReview?: Array<object>;
    diagnosis?: string;
    subjective?: string;
    objective?: string;
    assessment?: string;
    nextSteps?: string;
    internalNotes?: Array<InternalNote>;

    isNew: boolean;
    isDirty: boolean;
    isValid: boolean;
}