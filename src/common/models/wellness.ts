import { Goal } from './goal';
import { Maintenance } from './maintenance';
import { Immunization } from './immunization';

export class Wellness {
    goals: Array<Goal>;
    maintenance: Array<Maintenance>;
    immunizations: Array<Immunization>;
    activity?: string;
    sleep?: string;
    behavioral?: string;
    community?: string;
}