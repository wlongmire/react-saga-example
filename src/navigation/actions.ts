import { ActionResult } from '../common';

export module ActionType {
    export const NAVIGATE = 'navigation/NAVIGATE';
}

export const navigate = (pathname: string | undefined): ActionResult<string> => {
    return {
        type: ActionType.NAVIGATE,
        value: pathname
    };
};