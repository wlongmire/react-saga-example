import { DoseSpotStatus } from '../../admin';
import { SingleSignOnInfo } from '../../dosespot';

// const BASE_URL = 'http://localhost:8080/v1/dosespot';

export class DoseSpotService {

    static fetchClinicians() {
        let clinicians;
        const cliniciansString = localStorage.getItem('clinicians')

        if (cliniciansString === null) {
            clinicians = [];
        } else {
            clinicians = JSON.parse(cliniciansString);
        }

        return Promise.resolve(clinicians);
    }

    static addClinician(clinicianId: number) {
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

    static fetchSingleSignOnInfo(clinicId: number, clinicianId: number) {
        return fetch(`http://localhost:3001/clinics/${clinicId}/clinicians/${clinicianId}/sso`, {
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

    static fetchStatus(clinicId: number, clinicianId: number) {
        return fetch(`http://localhost:3001/clinics/${clinicId}/clinicians/${clinicianId}/status`, {
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
}