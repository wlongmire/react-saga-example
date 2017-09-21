
// const BASE_URL = 'http://localhost:8080/v1/dosespot';

export class DoseSpotService {

    static fetchSingleSignOnInfo() {
        return Promise.resolve(
        {
            "clinicId": 1141,
            "userId": 28486,
            "ssoPhraseLength": 32,
            "singleSignOnCode": "HCNhBCIV0aErjCQvLmD0mSZgZTgvhvw0QMTxKhC6+EDuRDsKplVS4vl9thnV+8FlkjBCUA1/K2iAXM5Nf/ykyPDJFl0ZISToUHq9++s4HuvmS+dQK/AJJg",
            "singleSignOnUserIdVerify": "10LlyTQo4bZnuNeFfJ5AkbTpaAA6QIMMgg766Zrqa8/sjjLYpUIqN8MXGH52SsLEEEvQK9SYmgmT+NSk/C/NVg",
            "singleSignOnUrl": "https://my.staging.dosespot.com/LoginSingleSignOn.aspx?SingleSignOnClinicId=1141&SingleSignOnUserId=28486&SingleSignOnPhraseLength=32&SingleSignOnCode=HCNhBCIV0aErjCQvLmD0mSZgZTgvhvw0QMTxKhC6%2BEDuRDsKplVS4vl9thnV%2B8FlkjBCUA1%2FK2iAXM5Nf%2FykyPDJFl0ZISToUHq9%2B%2Bs4HuvmS%2BdQK%2FAJJg&SingleSignOnUserIdVerify=10LlyTQo4bZnuNeFfJ5AkbTpaAA6QIMMgg766Zrqa8%2FsjjLYpUIqN8MXGH52SsLEEEvQK9SYmgmT%2BNSk%2FC%2FNVg"
        });

        // const headers = new Headers();
        // headers.append('Content-Type', 'application/json');
        // headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkxpZmVDbyBVc2VyIiwiYWRtaW4iOnRydWUsImlzcyI6ImxpZmVjbyIsInNjb3BlIjoicmVhZDp2aXNpdHMgY3JlYXRlOnZpc2l0cyBkZWxldGU6Y2xpZW50X2dyYW50cyB1cGRhdGU6Y2xpZW50X2dyYW50cyByZWFkOnJlc291cmNlX3NlcnZlcnMgY3JlYXRlOnJlc291cmNlX3NlcnZlcnMgZGVsZXRlOnJlc291cmNlX3NlcnZlcnMgdXBkYXRlOnJlc291cmNlX3NlcnZlcnMgcmVhZDpwYXRpZW50cyBjcmVhdGU6cHJlc2NyaXB0aW9ucyIsImp0aSI6IjEyMzQxMTIzMzQ1Njc1Njc3IiwiYXVkIjoiaHR0cDovL2FwaS5saWZlLmNoZWFwOjgwODAiLCJleHAiOiIxNTE0NzAzNzcxICJ9.zi1OKHov_FhG15AoKlECPEviTjWFCBeeZrFkZXvjKIs');
        // return fetch(BASE_URL, {
        //     method: 'GET',
        //     headers,
        //     mode: 'no-cors',
        //     cache: 'default'
        // }).then((response: any) => {
        //     console.log(response);
        //     return null;
        // })
    }
}