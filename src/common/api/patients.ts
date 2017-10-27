import * as _ from 'lodash';
import * as treatmentsApi from './treatments';
import * as visitsApi from './visits';
import * as imagingOrdersApi from './imaging-orders';
import * as testOrdersApi from './test-orders';
import * as wellnessApi from './wellness';
import * as otherApi from './other';
import { getRequestInit, BASE_URL } from './util';
import { Patient } from '../models';

export const fetchAll = () => {
    const requestInit = getRequestInit('GET');
    return fetch(`${BASE_URL}/list_my_patients`, requestInit).then((response: any) => {
        if (response.ok) { 
            return response.json();
        } else {
            throw new Error('fetch patients failed');
        }
    }).then((data: any) => {
        return data.map((raw: any) => {
            return {
                id: raw.user_id,
                firstName: raw.first,
                lastName: raw.last,
                phone: raw.phone,
                email: raw.email,
                name: `${raw.first} ${raw.last}`,
                primaryChannel: raw.primary_channel,
                treatments: [],
                visits: [],
                tests: [],
                imaging: [],
                wellness: {
                    patientId: raw.user_id,
                    goals: [],
                    maintenance: [],
                    immunizations: []
                },
                other: {}
            } as Patient;
        });
    });
};

export const fetchPatient = (patient: Patient) => {
    return Promise.all([
        visitsApi.getVisitsForChannel(patient.primaryChannel),
        treatmentsApi.getTreatmentsForChannel(patient.primaryChannel),
        imagingOrdersApi.getImagingForChannel(patient.primaryChannel),
        testOrdersApi.getTestOrdersForChannel(patient.primaryChannel),
        wellnessApi.getWellnessForChannel(patient.primaryChannel),
        otherApi.getOtherForChannel(patient.primaryChannel)
    ]).then(([visits, treatments, imagingOrders, testOrders, wellness, other]) => {
        const newPatient = _.cloneDeep(patient);
        newPatient.treatments = treatments;
        newPatient.visits = visits;
        newPatient.imaging = imagingOrders;
        newPatient.tests = testOrders;
        newPatient.wellness = wellness;
        newPatient.other = other;
        return newPatient;
    });
}