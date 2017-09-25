import { DoseSpotService } from './dosespot';
import { VisitService } from './visit';
import { UserService } from './user';
import { PatientService } from './patient';

export const Api = {
    visits: VisitService,
    dosespot: DoseSpotService,
    users: UserService,
    patients: PatientService
};