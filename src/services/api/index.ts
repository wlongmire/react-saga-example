import { DoseSpotService } from './dosespot';
import { VisitService } from './visit';
import { UserService } from './user';

export const Api = {
    visits: VisitService,
    dosespot: DoseSpotService,
    users: UserService
};