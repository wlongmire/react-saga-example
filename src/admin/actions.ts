import { ActionResult, DoseSpotStatus } from '../common';

export module ActionType {
    export const FETCH_DOSESPOT_STATUS = 'admin/FETCH_DOSESPOT_STATUS';
    export const FETCH_DOSESPOT_STATUS_SUCCESS = 'admin/FETCH_DOSESPOT_STATUS_SUCCESS';
    export const FETCH_DOSESPOT_STATUS_FAILURE = 'admin/FETCH_DOSESPOT_STATUS_FAILURE';
}

export const fetchDoseSpotStatus = (): ActionResult<{}> => {
    return {
        type: ActionType.FETCH_DOSESPOT_STATUS
    };
}

export const fetchDoseSpotStatusSuccess = (status: DoseSpotStatus): ActionResult<DoseSpotStatus> => {
    return {
        type: ActionType.FETCH_DOSESPOT_STATUS_SUCCESS,
        value: status
    };
}

export const fetchDoseSpotStatusFailure = (error: Error): ActionResult<Error> => {
    return {
        type: ActionType.FETCH_DOSESPOT_STATUS_FAILURE,
        value: error
    };
}
