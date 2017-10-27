import { DoseSpotStatus, SingleSignOnInfo } from '../../common';

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
