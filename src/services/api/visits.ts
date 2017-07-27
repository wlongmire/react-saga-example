import { uuid } from 'uuid';

export class Visit {
    
}

export class VisitsService {
    static fetch() {

    }

    static fetchAll() {

    }

    static create() {

    }

    static schedule() {

    }
}

export const fetch = (visitId: string) => {

};

export const fetchAll = () => {

};

export const create = () => {
    // visit_created
};

export const schedule = (visitId: string) => {
    // visit_scheduled
};

export const process = (visitId: string) => {
    // visit_processed
};

export const finalize = (visitId: string) => {
    // visit_finalized
};

export const cancel = (visitId: string) => {
    // visit_cancelled
};

export const update = (visitId: string, changes: Array<object>) => {
    // visit_updated
};

/** Deletes */
export const remove = (visitId: string) => {
    // visit_deleted
};

/** Assigns a visit to the specified user */
export const assign = (visitId: string, to: number) => {
    // visit_assigned
};

/** Unassigns a visit */
export const unassign = (visitId: string) => {
    // visit_unassigned
};

/** Creates a follow-up to a visit */
export const createFollowUp = (visitId: string, on: Date) => {
    // visit_follow_up_created
};

/** Cancels a follow-up for a visit */
export const cancelFollowUp = (visitId: string, on: Date) => {
    // visit_follow_up_cancelled
};