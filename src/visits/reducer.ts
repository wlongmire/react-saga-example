// import { ActionResult } from '../common';
// import { ActionType } from './actions';
// import { Diagnosis, InternalNote } from '../common/models';

// export class Visit {
//     id: string;
//     status: string;
//     assigneeId: string;
//     cases?: Array<string>;
//     patientId: number;
//     visitType: string;
//     maintenance: Array<string>;
//     doctorId: string;
//     doctorType: string;
//     clinic?: string;
//     scheduledFor: Date;
//     estimatedDuration?: number;
//     complaints?: Array<string>;
//     vitals?: Array<object>;
//     systemsReview?: Array<object>;
//     diagnosis?: Array<Diagnosis>;
//     subjective?: string;
//     objective?: string;
//     assessment?: string;
//     nextSteps?: string;
//     internalNotes?: Array<InternalNote>;
// }

// export interface VisitState {
//     items: Array<Visit>;
// }

// const initialState = () => {
//     return {
//         items: []
//     };
// }

// export default function reducer(state: VisitState = initialState(), action: ActionResult<{}>) {
//     switch (action.type) {
//         case ActionType.ADD:
//             return { ...state, visit: action.value }
//         case ActionType.LOAD_ALL_COMPLETED:
//             return { ...state, visits: action.value }
//         case ActionType.LOAD_ALL_FAILED:
//             return { ...state, error: action.value }
//         default:
//             return state;
//     }
// }