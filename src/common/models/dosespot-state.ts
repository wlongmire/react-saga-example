import { DosespotClinicianStatus, DosespotMedicationListItem } from '../../common';

export class DosespotState {
    isFetching: boolean;
    status?: DosespotClinicianStatus;
    medications: DosespotMedicationListItem[];
    error?: Error;
}