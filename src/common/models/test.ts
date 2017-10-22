import { Attachment } from './attachment';
import { InternalNote } from './internal-note';
import { TestPanel } from './test-panel';

export class Test {
    id: string;
    status: string;
    assigneeId: string;
    cases?: Array<string>;
    patientId: number;
    name: string;
    scheduledFor: Date;
    panels?: Array<TestPanel>;
    individualTests?: Array<Test>;
    labOrderNumber?: string;
    priority?: string;
    collectionDate?: Date;
    collectionLocation?: string;
    testingLocationId?: string;
    testingSupervisor?: string;
    publicNote?: string;
    attachments?: Array<Attachment>;
    internalNote?: Array<InternalNote>;
}