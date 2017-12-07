import { ActionResult, Treatment } from '../common';

// TODO: Update to get medications
// For sso: POST https://api.life.cheap/clinics/1141/clinicians/44747/patients/400793/sso
// For medication list: GET https://api.life.cheap/clinics/1141/clinicians/44747/patients/400793/medications
// For error counts & status: GET https://api.life.cheap/clinics/1141/clinicians/44747

export module ActionType {
    export const FETCH_PATIENT_TREATMENTS = 'rx/FETCH_PATIENT_TREATMENTS';
    export const FETCH_PATIENT_TREATMENTS_SUCCESS = 'rx/FETCH_PATIENT_TREATMENTS_SUCCESS';
    export const FETCH_PATIENT_TREATMENTS_FAIL = 'rx/FETCH_PATIENT_TREATMENTS_FAIL';

    export const FETCH_PATIENT_RECORD_URL = 'rx/FETCH_PATIENT_DOSESPOT_URL';
    export const FETCH_PATIENT_RECORD_URL_SUCCESS = 'rx/FETCH_PATIENT_RECORD_URL_SUCCESS';
    export const FETCH_PATIENT_RECORD_URL_FAIL = 'rx/FETCH_PATIENT_RECORD_URL_FAIL';

    // export const ADD = 'rx/ADD';
    // export const LOAD_ALL = 'rx/LOAD_ALL_TREATMENTS';
    // export const LOAD_ALL_DONE = 'rx/LOAD_ALL_TREATMENTS_COMPLETED';
    // export const LOAD_ALL_FAILED = 'rx/LOAD_ALL_FAILED';
    // export const FETCH_SSO_INFO = 'rx/FETCH_SSO_INFO';
    // export const FETCH_SSO_INFO_FAILED = 'rx/FETCH_SSO_INFO_FAILED';
    // export const FETCH_SSO_INFO_SUCCESS = 'rx/FETCH_SSO_INFO_SUCCESS';
    // export const FETCH_TREATMENTS = 'visits/FETCH_TREATMENTS';
    // export const FETCH_TREATMENTS_SUCCESS = 'visits/FETCH_TREATMENTS_SUCCESS';
    // export const FETCH_TREATMENTS_FAIL = 'visits/FETCH_TREATMENTS_FAIL';
}

export const fetchPatientTreatments = (args: any): ActionResult<any> => {
    return {
        type: ActionType.FETCH_PATIENT_TREATMENTS,
        value: args
    };
};

export const fetchPatientTreatmentsSuccess = (treatments: Array<Treatment>): ActionResult<Treatment[]> => {
    return {
        type: ActionType.FETCH_PATIENT_TREATMENTS_SUCCESS,
        value: treatments
    };
};

export const fetchPatientTreatmentsFail = (error: Error): ActionResult<Error> => {
    return {
        type: ActionType.FETCH_PATIENT_TREATMENTS_FAIL,
        value: error
    };
};

// export const loadAllRxCompleted = (treatments: Array<any>): ActionResult<any[]> => {
//     return{
//         type: ActionType.LOAD_ALL_DONE,
//         value: treatments
//     };
// };

// export const loadAllRx = (): ActionResult<{}> => {
//     return {
//         type: ActionType.LOAD_ALL
//     };
// };

// export const loadAllRxFailed = (error: Error): ActionResult<Error> => {
//     return {
//         type: ActionType.LOAD_ALL_FAILED,
//         value: error
//     };
// };

// export const fetchSingleSignOnInfo = (): ActionResult<{}> => {
//     return {
//         type: ActionType.FETCH_SSO_INFO
//     };
// };

// export const fetchSingleSignOnInfoFailed = (error: Error): ActionResult<Error> => {
//     return {
//         type: ActionType.FETCH_SSO_INFO_FAILED,
//         value: error
//     };
// };

// export const fetchSingleSignOnInfoSuccess = (ssoInfo: SingleSignOnInfo): ActionResult<SingleSignOnInfo> => {
//     return {
//         type: ActionType.FETCH_SSO_INFO_SUCCESS,
//         value: ssoInfo
//     };
// };

// export const fetchTreatments = (channelId: number): ActionResult<number> => {
//     return {
//         type: ActionType.FETCH_TREATMENTS,
//         value: channelId
//     };
// };

// export const fetchTreatmentsSuccess = (visits: Array<Treatment>): ActionResult<Array<Treatment>> => {
//     return {
//         type: ActionType.FETCH_TREATMENTS_SUCCESS,
//         value: visits
//     };
// };

// export const fetchTreatmentsFail = (e: Error): ActionResult<Error> => {
//     return {
//         type: ActionType.FETCH_TREATMENTS_FAIL,
//         value: e
//     };
// };

// export const getAllTreatments = () => {
//     return(dispatch:any) => {
//         dispatch(loadAllRx)
//         return fetch(BASE_URL_RX, {
//             method : 'GET',
//             headers:{
//                 "Authorization": "Token 6ecc5c6a-3e3f-4aaf-bfd3-ba095aa2e62b'",
//                 'Content-Type': 'application/json'
//             },
//             mode: 'cors',
//             cache: 'default'
//         }).then((response:any)=>{
//             if (response.ok){
//                 return response.json()
//             }

//             return response.json().then((err:Error)=>{
//                 throw err;
//             })
//         }).then((treatments:any)=>{
//             dispatch(loadAllRxCompleted(treatments))
//         }).catch(err =>{
//             dispatch(loadAllRxFailed(err))
//         })    
//     }
// }