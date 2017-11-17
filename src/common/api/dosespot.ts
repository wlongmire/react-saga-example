import { DoseSpotStatus, PatientUser, SingleSignOnInfo } from '../../common';
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

export const fetchPatientTreatments = (clinicId: number, clinicianId: number, patientId: number) => {
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

export const fetchSingleSignOnInfo = (clinicId: number, clinicianId: number) => {
    // TODO move construct api url in separate variable
    return fetch(`${DOSESPOT_API_URL}/clinics/${clinicId}/clinicians/${clinicianId}/sso`, {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }).then((response: any) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('fetch single sign on info failed');
        }
    }).then((raw: any) => {
        const ssoInfo = <SingleSignOnInfo> {
            clinicId: raw.SingleSignOnClinicId,
            userId: raw.SingleSignOnUserId,
            ssoPhraseLength: raw.SingleSignOnPhraseLength,
            singleSignOnCode: raw.SingleSignOnCode,
            singleSignOnUserIdVerify: raw.SingleSignOnUserIdVerify
        };

        if (Object.keys(raw).indexOf('SingleSignOnUrl') > -1) {
            ssoInfo.singleSignOnUrl = raw.SingleSignOnUrl;
        }

        return ssoInfo;
    });
};

export const fetchStatus = (clinicId: number, clinicianId: number) => {
    return fetch(`${DOSESPOT_API_URL}/clinics/${clinicId}/clinicians/${clinicianId}/status`, {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }).then((response: any) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('fetch dosespot status failed');
        }
    }).then((raw: any) => {
        return <DoseSpotStatus> {
            clinicianId: raw.ClinicianId,
            refillRequestsCount: raw.RefillRequestsCount,
            transactionErrorsCount: raw.TransactionErrorsCount,
            pendingPrescriptionsCount: raw.PendingPrescriptionsCount,
            url: raw.Url
        };
    });
};
