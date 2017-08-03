import * as Common from '../common';

/**
 * Action Types
 */
export module ActionType {
    export const NAVIGATE = 'navigation/NAVIGATE';
}

/**
 * Navigates to the specified pathname or if undefined, navigates to root.
 * @param pathname The path to navigate to or undefined.
 */
export const navigate = (pathname: string | undefined): Common.ActionResult<string> => {
    return {
        type: ActionType.NAVIGATE,
        value: pathname
    };
};