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
                treatments: [
                    {
                        id: '1',
                        dateWritten: new Date('2017-09-16'),
                        medicationName: 'Rimabotulinumtoxin',
                        status: 'Pharmacy Received',
                        sig: 'Take once everyday.',
                        refills: 0,
                        pharmacyName: ''
                    },
                    {
                        id: '2',
                        dateWritten: new Date('2017-08-16'),
                        medicationName: 'Rituxan',
                        status: 'Pharmacy Received',
                        sig: 'Do this all the time.',
                        refills: 0,
                        pharmacyName: ''
                        
                    },
                    {
                        id: '3',
                        dateWritten: new Date('2016-12-16'),
                        medicationName: 'Super Advil',
                        status: 'Pharmacy Received',
                        sig: 'If you notice anything cray call me.',
                        refills: 0,
                        pharmacyName: ''
                    }
                ],
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
        visitsApi.getForChannel(patient.primaryChannel),
        treatmentsApi.getForChannel(patient.primaryChannel),
        imagingOrdersApi.getForChannel(patient.primaryChannel),
        testOrdersApi.getForChannel(patient.primaryChannel),
        wellnessApi.getForChannel(patient.primaryChannel),
        otherApi.getForChannel(patient.primaryChannel)
    ]).then(([visits, treatments, imagingOrders, testOrders, wellness, other]) => {
        const newPatient = _.cloneDeep(patient);
        newPatient.treatments = [
            {
                id: '1',
                dateWritten: new Date('2017-09-16'),
                medicationName: 'Rimabotulinumtoxin',
                status: 'Pharmacy Received',
                sig: 'Take once everyday.',
                refills: 0,
                pharmacyName: ''
            },
            {
                id: '2',
                dateWritten: new Date('2017-08-16'),
                medicationName: 'Rituxan',
                status: 'Pharmacy Received',
                sig: 'Do this all the time.',
                refills: 0,
                pharmacyName: ''
                
            },
            {
                id: '3',
                dateWritten: new Date('2016-12-16'),
                medicationName: 'Super Advil',
                status: 'Pharmacy Received',
                sig: 'If you notice anything cray call me.',
                refills: 0,
                pharmacyName: ''
            }
        ],
        newPatient.visits = visits;
        newPatient.imaging = [{
            id: '1',
            status: 'Scheduled',
            patientId: patient.id,
            imagingTypeId: '',
            imagingTypeDescription: 'CT Scan',
            imagingLocation: 'Dexter\'s Lab - 25 Broadway, Jersey City, NJ 33048',
            scheduledFor: new Date('2017-08-16'),
            publicNote: 'CT scan of the left foot to confirm abnormalities.'
        },
        {
            id: '2',
            status: 'Scheduled',
            patientId: patient.id,
            imagingTypeId: '',
            imagingTypeDescription: 'CT Scan',
            imagingLocation: 'Dexter\'s Lab - 25 Broadway, Jersey City, NJ 33048',
            scheduledFor: new Date('2017-08-16'),
            publicNote: 'CT scan of the left foot to confirm abnormalities.'
        }];
        newPatient.tests = [{
            id: '1',
            status: 'Collected',
            assigneeId: '',
            patientId: patient.id,
            name: 'Hormone Tests',
            scheduledFor: new Date('2017-08-16'),
            publicNote: 'Albumin levels were higher than expected. Updated your case to the flu and will send medication shortly.'
        },
        {
            id: '2',
            status: 'Results in',
            assigneeId: '',
            patientId: patient.id,
            name: 'Routine blood work',
            scheduledFor: new Date('2017-08-16'),
            publicNote: 'Albumin levels were higher than expected. Updated your case to the flu and will send medication shortly.'
        },
        {
            id: '1',
            status: 'Released',
            assigneeId: '',
            patientId: patient.id,
            name: 'Flu confirmation',
            scheduledFor: new Date('2017-08-16'),
            publicNote: 'Albumin levels were higher than expected. Updated your case to the flu and will send medication shortly.'
        }];
        newPatient.wellness = {
            goals: [{
                id: '1',
                goal: 'Run 24 miles',
                status: 'Active',
                note: 'Wants to run 24 miles before his next birthday. We put him on a nutrition plan.'
            }],
            maintenance: [{
                id: '1',
                type: 'Pap Smear',
                date: new Date('2013-06-24')
            }],
            immunizations: [{
                id: '1',
                type: 'Yellow Fever',
                date: new Date('2012-06-24')
            }],
            activity: 'Anemia biopsy blood pressure bronchoconstriction...',
            sleep: 'Anemia biopsy blood pressure bronchoconstriction...',
            behavioral: 'Anemia biopsy blood pressure bronchoconstriction...',
            community: 'Anemia biopsy blood pressure bronchoconstriction...'
        };
        newPatient.other = {
            social: 'Anemia biopsy blood pressure bronchoconstriction...',
            family: 'Anemia biopsy blood pressure bronchoconstriction...',
            allergies: 'Anemia biopsy blood pressure bronchoconstriction...'
        };
        return newPatient;
    });
}