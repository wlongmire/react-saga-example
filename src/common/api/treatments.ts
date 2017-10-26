import { getRequestInit, BASE_URL } from './util';
import { Treatment } from '../models/treatment';
import * as _ from 'lodash';

export const getTreatmentsForChannel = (channelId: number) => {
    const requestInit = getRequestInit('GET');
    return fetch(`${BASE_URL}/treatments/${channelId}`, requestInit)
        .then((response: any) => {
            if (!response.ok) {
                throw new Error(`Error fetching treatments for channel ${channelId}`);
            }
            return response.json();
        }).then((result: Map<string, any>) => {
            return _.map<any, Treatment>(result, (value: any, key: string) => {
                return {
                    patientId: value.patient_id,
                    pharmacyName: value.pharmacy_name,
                    quantity: value.quantity,
                    dosage: value.dosage,
                    dateWritten: value.date_written,
                    refills: value.refills,
                    daysSupply: value.days_supply,
                    sig: value.sig,
                    status: value.status,
                    form: value.form,
                    endOn: value.end_on,
                    medicationName: value.medication_name,
                    id: key
                } as Treatment
            });
        });
}

export const createTreatment = (treatment: Treatment, channelId: number) => {
    const body = {
        patient_id: treatment.patientId,
        pharmacy_name: treatment.pharmacyName,
        quantity: treatment.quantity,
        dosage: treatment.dosage,
        date_written: treatment.dateWritten,
        refills: treatment.refills,
        days_supply: treatment.daysSupply,
        sig: treatment.sig,
        status: treatment.status,
        form: treatment.form,
        end_on: treatment.endOn,
        medication_name: treatment.medicationName
    };

    const requestInit = getRequestInit('PUT', JSON.stringify(body));
    return fetch(`${BASE_URL}/treatments/${channelId}/${treatment.id}`, requestInit)
        .then((response: any) => {
            console.log('create response', response);
            return Promise.resolve(treatment);
        }
    );
}

export const updateTreatment = (treatment: Treatment, channelId: number) => {
    const body = {
        patient_id: treatment.patientId,
        pharmacy_name: treatment.pharmacyName,
        quantity: treatment.quantity,
        dosage: treatment.dosage,
        date_written: treatment.dateWritten,
        refills: treatment.refills,
        days_supply: treatment.daysSupply,
        sig: treatment.sig,
        status: treatment.status,
        form: treatment.form,
        end_on: treatment.endOn,
        medication_name: treatment.medicationName
    };

    const requestInit = getRequestInit('PUT', JSON.stringify(body));
    return fetch(`${BASE_URL}/treatments/${channelId}/${treatment.id}`, requestInit)
        .then((response: any) => {
            console.log('create response', response);
            return Promise.resolve(treatment);
        }
    );
}