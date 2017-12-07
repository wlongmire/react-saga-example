import { ActionResult, DosespotClinicianArgs, DosespotClinicianStatus } from '../common';

export module ActionType {
    export const START_MONITOR = 'dosespot/START_MONITOR';
    export const START_MONITOR_SUCCESS = 'dosespot/START_MONITOR_SUCCESS';
    export const START_MONITOR_FAIL = 'dosespot/START_MONITOR_FAIL';
    
    export const STOP_MONITOR = 'dosespot/STOP_MONITOR';
    export const STOP_MONITOR_SUCCESS = 'dosespot/STOP_MONITOR_SUCCESS';
    export const STOP_MONITOR_FAIL = 'dosespot/STOP_MONITOR_FAIL';

    export const FETCH_CLINICIAN_STATUS = 'dosespot/FETCH_CLINICIAN_STATUS';
    export const FETCH_CLINICIAN_STATUS_SUCCESS = 'dosespot/FETCH_CLINICIAN_STATUS_SUCCESS';
    export const FETCH_CLINICIAN_STATUS_FAIL = 'dosespot/FETCH_CLINICIAN_STATUS_FAIL';
}

export const startMonitor = (args: DosespotClinicianArgs): ActionResult<DosespotClinicianArgs> => {
    return {
        type: ActionType.START_MONITOR,
        value: args
    };
};

export const startMonitorSuccess = (timeoutId: number): ActionResult<number> => {
    return {
        type: ActionType.START_MONITOR_SUCCESS,
        value: timeoutId
    };
};

export const startMonitorFail = (e: Error): ActionResult<Error> => {
    return {
        type: ActionType.START_MONITOR_FAIL,
        value: e
    };
};

export const stopMonitor = (): ActionResult<{}> => {
    return {
        type: ActionType.STOP_MONITOR
    };
};

export const stopMonitorSuccess = (): ActionResult<{}> => {
    return {
        type: ActionType.START_MONITOR_FAIL
    };
};

export const stopMonitorFail = (e: Error): ActionResult<Error> => {
    return {
        type: ActionType.START_MONITOR_FAIL,
        value: e
    };
};

export const fetchClinicianStatus = (args: DosespotClinicianArgs): ActionResult<DosespotClinicianArgs> => {
    return {
        type: ActionType.FETCH_CLINICIAN_STATUS,
        value: args
    };
};

export const fetchClinicianStatusSuccess = (status: DosespotClinicianStatus): ActionResult<DosespotClinicianStatus> => {
    return {
        type: ActionType.FETCH_CLINICIAN_STATUS_SUCCESS,
        value: status
    };
};

export const fetchClinicianStatusFail = (error: Error): ActionResult<Error> => {
    return {
        type: ActionType.FETCH_CLINICIAN_STATUS_FAIL,
        value: error
    };
};