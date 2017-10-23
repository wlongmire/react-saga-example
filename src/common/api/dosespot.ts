import { DoseSpotStatus, SingleSignOnInfo } from '../../common';

export const fetchClinicians = () => {
    let clinicians;
    const cliniciansString = localStorage.getItem('clinicians')

    if (cliniciansString === null) {
        clinicians = [];
    } else {
        clinicians = JSON.parse(cliniciansString);
    }

    return Promise.resolve(clinicians);
}

export const addClinician = (clinicianId: number) => {
    let clinicians;
    const cliniciansString = localStorage.getItem('clinicians');

    if (cliniciansString === null) {
        clinicians = [];
    } else {
        clinicians = JSON.parse(cliniciansString);
    }

    (<Array<number>>clinicians).push(clinicianId);
    localStorage.setItem('clinicians', JSON.stringify(clinicians));

    return Promise.resolve(clinicianId);
}

export const fetchSingleSignOnInfo = (clinicId: number, clinicianId: number) => {
    return fetch(`http://${process.env.REACT_APP_DOSESPOT_API_HOST}/clinics/${clinicId}/clinicians/${clinicianId}/sso`, {
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
            ssoInfo['singleSignOnUrl'] = raw.SingleSignOnUrl;
        }

        return ssoInfo;
    });
}

export const fetchStatus = (clinicId: number, clinicianId: number) => {
    return fetch(`http://${process.env.REACT_APP_DOSESPOT_API_HOST}/clinics/${clinicId}/clinicians/${clinicianId}/status`, {
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
}
