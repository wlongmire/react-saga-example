import { InternalNote } from './internal-note';

export class Treatment {
    id: string;
    status: string;
    dateWritten: Date;
    medicationName: string;
    refills: number;
    sig?: string;
    form?: string;
    dosage?: string;
    quantity?: string;
    pharmacyName: string;
    daysSupply?: number;
    endOn?: Date;
    patientId?: number;
    internalNotes?: Array<InternalNote>;

    isNew: boolean;
}

export const TreatmentStatus = [
    'New',
    'Ordered',
    'Pharmacy Received',
    'Pharmacy Error',
    'Patient Received',
    'Refill',
    'Inactive',
    'Cancelled'
]