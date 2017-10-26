import * as _ from 'lodash';
import { getRequestInit, BASE_URL } from './util';
import { Visit } from '../models/visit';

export const getVisitsForChannel = (channelId: number): Promise<Array<Visit>> => {
    const requestInit = getRequestInit('GET');
    return fetch(`${BASE_URL}/visits/${channelId}`, requestInit)
        .then((response: any) => {
            if (!response.ok) {
                throw new Error(`Error fetching visits for channel ${channelId}`);
            }
            return response.json();
        }).then((result: any) => {     
            return _.map<any, Visit>(result, (value: any, key: string) => {
                return {
                    assessment: value.assessment,
                    assigneeId: value.assignee_id ? Number(value.assignee_id) : null,
                    clinic: value.clinic,
                    complaints: value.complaints,
                    diagnosis: value.diagnosis,
                    doctorId: value.doctor_id,
                    doctorName: value.doctor_name,
                    doctorType: value.doctor_type,
                    estimatedDuration: value.estimated_duration,
                    id: key,
                    maintenance: value.maintenance,
                    nextSteps: value.next_steps,
                    objective: value.objective,
                    patientId: value.patient_id,
                    scheduledFor: value.scheduledFor,
                    status: value.status,
                    subjective: value.subjective,
                    systemsReview: value.systems_review,
                    visitType: value.visit_type,
                    vitals: value.vitals,
                    internalNotes: value.internalNotes
                } as Visit
            });
        });
}

export const saveVisit = (visit: Visit, channelId: number) => {
    console.log('scheduledFor', visit.scheduledFor);
    const body = {
        assessment: visit.assessment,
        assignee_id: visit.assigneeId,
        clinic: visit.clinic,
        complaints: visit.complaints,
        diagnosis: visit.diagnosis,
        doctor_id: visit.doctorId,
        doctor_name: visit.doctorName,
        doctor_type: visit.doctorType,
        estimated_duration: visit.estimatedDuration,
        maintenance: visit.maintenance,
        next_steps: visit.nextSteps,
        objective: visit.objective,
        patient_id: visit.patientId,
        scheduledFor: visit.scheduledFor,
        status: visit.status,
        subjective: visit.subjective,
        systems_review: visit.systemsReview,
        visit_type: visit.visitType,
        vitals: visit.vitals,
        internal_notes: visit.internalNotes
    };

    const requestInit = getRequestInit('PUT', JSON.stringify(body));
    return fetch(`${BASE_URL}/visits/${channelId}/${visit.id}`, requestInit)
        .then((response: any) => {
            return Promise.resolve(visit);
        }
    );
}