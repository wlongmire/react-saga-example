import { DosespotClinicianStatus, PatientUser } from '../../common';
import { getRequestInit } from './util';

const DOSESPOT_API_URL = process.env.REACT_APP_DOSESPOT_API_HOST;

export const createPatient = (clinicId: number, clinicianId: number, patient: PatientUser) => {
    const requestInit = getRequestInit(
        'POST', 
        JSON.stringify(PatientUser.toDosespotPayload(patient)), 
        true, 
        'application/json'
    );
    return fetch(`${DOSESPOT_API_URL}/clinics/${clinicId}/clinicians/${clinicianId}/patients`, requestInit)
        .then((response: any) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('create dosespot failed');
            }
        });
};

export const updatePatient = (clinicId: number, clinicianId: number, patient: PatientUser) => {
    const requestInit = getRequestInit(
        'PATCH', 
        JSON.stringify(PatientUser.toDosespotPayload(patient)), 
        true, 
        'application/json'
    );
    return fetch(
        `${DOSESPOT_API_URL}/clinics/${clinicId}/clinicians/${clinicianId}/patients/${patient.dosespotPatientId}`, 
        requestInit
    )
    .then((response: any) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('create dosespot failed');
        }
    });
};

export const fetchPatientMedications = (clinicId: number, clinicianId: number, patientId: number) => {
    const requestInit = getRequestInit('GET');
    return fetch(
        `${DOSESPOT_API_URL}/clinics/${clinicId}/clinicians/${clinicianId}/patients/${patientId}/medications`,
        requestInit
    )
    .then((response: any) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('fetch patient treatments failed');
        }
    }).then((raw: any) => {
        // TODO: map responses to treatments
        // and return them
    });
};

export const fetchPatientUrl = (clinicId: number, clinicianId: number, patient: PatientUser): Promise<string> => {
    const requestInit = getRequestInit(
        'POST', 
        JSON.stringify(PatientUser.toDosespotPayload(patient)), 
        true, 
        'application/json'
    );
    return fetch(
        `${DOSESPOT_API_URL}/clinics/${clinicId}/clinicians/${clinicianId}/patients/${patient.dosespotPatientId}/sso`, 
        requestInit
    )
    .then((response: any) => {
        if (response.ok) {
            return response.json().url;
        } else {
            throw new Error('fetch patient url failed');
        }
    });
};

export const fetchClinicianStatus = (clinicId: number, clinicianId: number): Promise<DosespotClinicianStatus> => {
    const requestInit = getRequestInit('GET');
    return fetch(
        `${DOSESPOT_API_URL}/clinics/${clinicId}/clinicians/${clinicianId}`, 
        requestInit
    )
    .then((response: any) => {
        if (response.ok) {
            return response.json() as DosespotClinicianStatus;
        } else {
            throw new Error('fetch patient url failed');
        }
    });
};