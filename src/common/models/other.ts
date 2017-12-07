export class Other {
    social: string;
    family: string;
    allergies: string;

    constructor(social?: string, family?: string, allergies?: string) {
        this.social = social || '';
        this.family = family || '';
        this.allergies = allergies || '';
    }
}