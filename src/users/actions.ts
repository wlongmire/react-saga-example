import { ActionResult, User } from '../common';

// const BASE_URL = 'https://api.life.cheap/exposed/list_my_patients'

/**
 * Action types for Patients.
 */
export module ActionType {
    // fetch all users
    export const FETCH_ALL_USERS = 'users/FETCH_ALL_USERS';
    export const FETCH_ALL_USERS_SUCCESS = 'users/FETCH_ALL_USERS_SUCCESS';
    export const FETCH_ALL_USERS_FAILURE = 'users/FETCH_ALL_USERS_FAILURE';

    // fetch specific user (how to do it with the shim? fetch all???)

    // create user
    export const CREATE_USER = 'users/CREATE_USER';
    export const CREATE_USER_SUCCESS = 'users/CREATE_USER_SUCCESS';
    export const CREATE_USER_FAILURE = 'users/CREATE_USER_FAILURE';

    // update user
    export const UPDATE_USER = 'users/UPDATE_USER';
    export const UPDATE_USER_SUCCESS = 'users/UPDATE_USER_SUCCESS';
    export const UPDATE_USER_FAILURE = 'users/UPDATE_USER_FAILURE';
    
    
    // export const ADD_PATIENT = 'users/ADD_PATIENT';
    // // Add the remaining actions for ensuring the add patients success and 
    // // failure have a success and failure action
    // export const LOAD_ALL_PATIENTS = 'users/LOAD_ALL_PATIENTS';
    // export const LOAD_ALL_PATIENTS_SUCCESS = 'users/LOAD_ALL_PATIENTS_SUCCESS';
    // export const LOAD_ALL_PATIENTS_FAILURE = 'users/LOAD_ALL_PATIENTS_FAILURE';
    // // Add the remaining actions for ensuring the add patients success and 
    // // failure have a success and failure action
    // export const LOAD_PATIENT = 'users/LOAD_PATIENT';
    // export const LOAD_PATIENT_SUCCESS = 'users/LOAD_PATIENT_SUCCESS';
    // export const LOAD_PATIENT_FAILURE = 'users/LOAD_PATIENT_FAILURE';
}

export const fetchAllUsers = (): ActionResult<{}> => {
    return {
        type: ActionType.FETCH_ALL_USERS
    };
}

export const fetAllUsersSuccess = (users: Array<User>): ActionResult<Array<User>> => {
    return {
        type: ActionType.FETCH_ALL_USERS_SUCCESS,
        value: users
    };
}

export const fetchAllUsersFailure = (e: Error): ActionResult<Error> => {
    return {
        type: ActionType.FETCH_ALL_USERS_FAILURE,
        value: e
    };
}

export const createUser = (user: User): ActionResult<User> => {
    return {
        type: ActionType.CREATE_USER,
        value: user
    };
}

export const createUserSuccess = (user: User): ActionResult<User> => {
    return {
        type: ActionType.CREATE_USER_SUCCESS,
        value: user
    };
}

export const createUserFailure = (e: Error): ActionResult<Error> => {
    return {
        type: ActionType.CREATE_USER_FAILURE,
        value: e
    };
}

export const updateUser = (user: User): ActionResult<User> => {
    return {
        type: ActionType.UPDATE_USER,
        value: user
    };
}

export const updateUserSuccess = (user: User): ActionResult<User> => {
    return {
        type: ActionType.UPDATE_USER_SUCCESS,
        value: user
    };
}

export const updateUserFailure = (e: Error): ActionResult<Error> => {
    return {
        type: ActionType.UPDATE_USER_FAILURE,
        value: e
    };
}

// export const loadAllPatients = ():Common.ActionResult<{}> =>  {
//     return {
//         type: ActionType.LOAD_ALL_PATIENTS
//     };
// }

// export const loadAllPatientsSuccess = (patients: Array<Model.Patient>): Common.ActionResult<Array<Model.Patient>> =>  {
//     return   {
//         type: ActionType.LOAD_ALL_PATIENTS_SUCCESS,
//         value: patients
//     };
// }

// export const loadAllPatientsFailure = (error: Error): Common.ActionResult<Error> => {
//     return {
//         type: ActionType.LOAD_ALL_PATIENTS_FAILURE,
//         value: error
//     };
// }

// export const loadPatient = ():Common.ActionResult<{}> => {
//     return {
//         type: ActionType.LOAD_PATIENT
//     }
// }

// export const loadPatientSuccess = (patient:Model.Patient):Common.ActionResult<Model.Patient> => {
//     return {
//         type: ActionType.LOAD_PATIENT_SUCCESS,
//         value: patient
//     }
// }

// export const loadPatientFailure = (error: Error): Common.ActionResult<Error> => {
//     return {
//         type: ActionType.LOAD_PATIENT_FAILURE,
//         value: error
//     };
// }


// // Redux Thunk operations begin here
// export const loadPatients = () => {
//     // return (dispatch:any) => {
//     //     dispatch(loadAllPatients)
//     //     const accessToken = localStorage.getItem('access_token');
//     //     const headers = new Headers();
//     //     headers.append('Authorization', `Token ${accessToken}`);
//     //     return fetch(BASE_URL, {
//     //         method: 'GET',
//     //         headers,
//     //         mode: 'cors',
//     //         cache: 'default'
//     //     }).then((response:any) => {
//     //         if(response.ok) {
//     //             return response.json()
//     //         }
//     //         return response.json().then((err:Error) => {
//     //             throw new Error;
//     //         })
//     //     }).then((data:any) => {
//     //         const patients = data.map((raw: any) => {
//     //             return <Model.Patient>{
//     //                 id: raw.user_id,
//     //                 name: `${raw.first} ${raw.last}`,
//     //                 primaryChannel: raw.primary_channel,
//     //                 avatar: 'http://www.gravatar.com/avatar/1f27b03f119910811d8cc8ff9dc1e922?s=48&d=identicon' // replace with raw when available
//     //             };
//     //         });
//     //         dispatch (loadAllPatientsSuccess(patients))
//     //     }).catch(err => {
//     //         dispatch(loadAllPatientsSuccess(err))
//     //     })
//     // }
// }

// export const loadSinglePatient = (id:number) => {
//     return(dispatch:any) => {
//         dispatch(loadPatient)
//         const accessToken = localStorage.getItem('access_token');
//         const headers = new Headers();
//         headers.append('Authorization', `Token ${accessToken}`);
//         return fetch(BASE_URL + id.toString(), {
//             method: 'GET',
//             headers,
//             mode: 'cors',
//             cache: 'default'
//         }).then((response: any)=>{
//             if(response.ok){
//                 return response.json()
//             }
//             return response.json().then((err:Error)=>{
//                 throw new Error;
//             })
//         }).then((patient:Model.Patient)=>{
//             dispatch(loadPatientSuccess(patient))
//         }).catch(err=>{
//             dispatch(loadPatientFailure(err))
//         })
//     }
// }

// export const loadPatients = () => {
//     return Model.patientsList;
// }

// export const loadSinglePatient = (id:string) => {
//     let patient = Model.patientsList.filter((patient:any)=>{
//         return patient.id == id
//     })
//     return patient[0];
// }
// export const updateUserSuccess = (user: User): ActionResult<User> => {
//     return {
//         type: ActionType.UPDATE_USER_SUCCESS,
//         value: user
//     };
// }

// export const updateUserFailure = (e: Error): ActionResult<Error> => {
//     return {
//         type: ActionType.UPDATE_USER_FAILURE,
//         value: e
//     };
// }

// export const loadAllPatients = ():Common.ActionResult<{}> =>  {
//     return {
//         type: ActionType.LOAD_ALL_PATIENTS
//     };
// }

// export const loadAllPatientsSuccess = (patients: Array<Model.Patient>): Common.ActionResult<Array<Model.Patient>> =>  {
//     return   {
//         type: ActionType.LOAD_ALL_PATIENTS_SUCCESS,
//         value: patients
//     };
// }

// export const loadAllPatientsFailure = (error: Error): Common.ActionResult<Error> => {
//     return {
//         type: ActionType.LOAD_ALL_PATIENTS_FAILURE,
//         value: error
//     };
// }

// export const loadPatient = ():Common.ActionResult<{}> => {
//     return {
//         type: ActionType.LOAD_PATIENT
//     }
// }

// export const loadPatientSuccess = (patient:Model.Patient):Common.ActionResult<Model.Patient> => {
//     return {
//         type: ActionType.LOAD_PATIENT_SUCCESS,
//         value: patient
//     }
// }

// export const loadPatientFailure = (error: Error): Common.ActionResult<Error> => {
//     return {
//         type: ActionType.LOAD_PATIENT_FAILURE,
//         value: error
//     };
// }


// // Redux Thunk operations begin here
// export const loadPatients = () => {
//     // return (dispatch:any) => {
//     //     dispatch(loadAllPatients)
//     //     const accessToken = localStorage.getItem('access_token');
//     //     const headers = new Headers();
//     //     headers.append('Authorization', `Token ${accessToken}`);
//     //     return fetch(BASE_URL, {
//     //         method: 'GET',
//     //         headers,
//     //         mode: 'cors',
//     //         cache: 'default'
//     //     }).then((response:any) => {
//     //         if(response.ok) {
//     //             return response.json()
//     //         }
//     //         return response.json().then((err:Error) => {
//     //             throw new Error;
//     //         })
//     //     }).then((data:any) => {
//     //         const patients = data.map((raw: any) => {
//     //             return <Model.Patient>{
//     //                 id: raw.user_id,
//     //                 name: `${raw.first} ${raw.last}`,
//     //                 primaryChannel: raw.primary_channel,
//     //                 avatar: 'http://www.gravatar.com/avatar/1f27b03f119910811d8cc8ff9dc1e922?s=48&d=identicon' // replace with raw when available
//     //             };
//     //         });
//     //         dispatch (loadAllPatientsSuccess(patients))
//     //     }).catch(err => {
//     //         dispatch(loadAllPatientsSuccess(err))
//     //     })
//     // }
// }

// export const loadSinglePatient = (id:number) => {
//     return(dispatch:any) => {
//         dispatch(loadPatient)
//         const accessToken = localStorage.getItem('access_token');
//         const headers = new Headers();
//         headers.append('Authorization', `Token ${accessToken}`);
//         return fetch(BASE_URL + id.toString(), {
//             method: 'GET',
//             headers,
//             mode: 'cors',
//             cache: 'default'
//         }).then((response: any)=>{
//             if(response.ok){
//                 return response.json()
//             }
//             return response.json().then((err:Error)=>{
//                 throw new Error;
//             })
//         }).then((patient:Model.Patient)=>{
//             dispatch(loadPatientSuccess(patient))
//         }).catch(err=>{
//             dispatch(loadPatientFailure(err))
//         })
//     }
// }
