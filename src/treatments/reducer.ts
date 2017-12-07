import { ActionResult, TreatmentsState } from '../common';
// import { ActionType } from './actions';

const initialState = (): TreatmentsState => {
    return {
        isFetching: false,
        items: [],
        error: null
    };
};

export default function reducer(state: TreatmentsState = initialState(), action: ActionResult<{}>) {
    switch (action.type) {
        default: 
            return state;
    }
}