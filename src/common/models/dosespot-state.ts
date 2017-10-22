import { DoseSpotStatus } from './dosespot-status';
import { SingleSignOnInfo } from './single-sign-on-info';

export class DoseSpotState {
    isFetching: boolean;
    items: DoseSpotStatus[];
    clinicians: number[]
    sso: SingleSignOnInfo | null | undefined;
}