import * as _ from 'lodash';
import { getRequestInit, BASE_URL } from './util';
import { Visit } from '../models/visit';

export const getForChannel = (channelId: number): Promise<Array<Visit>> => {
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
                    assigneeId: value.assignee_id,
                    clinic: {
                        name: value.clinic.name,
                        streetAddress1: value.clinic.address_line_1,
                        streetAddress2: value.clinic.address_line_2,
                        city: value.clinic.city,
                        state: value.clinic.state,
                        postalCode: value.clinic.postal_code
                    }, 
                    doctorId: value.doctor_id,
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