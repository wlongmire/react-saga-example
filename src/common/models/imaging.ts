import { Attachment } from './attachment';
import { InternalNote } from './internal-note';

export class Imaging {
    id: string;
    status: string;
    patientId: number;
    imagingTypeId: string;
    imagingTypeDescription: string;
    imagingLocation: string;
    scheduledFor: Date;
    attachments?: Array<Attachment>;
    publicNote?: string;
    internalNotes?: Array<InternalNote>;
}