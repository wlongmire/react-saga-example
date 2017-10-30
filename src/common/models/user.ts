export abstract class User {
    id?: number;
    type: string;
    email: string;
    password?: string;
    firstName: string;
    preferredName?: string;
    middleName?: string;
    lastName: string;
    dateOfBirth?: Date;
    gender: string;
    sex?: string;
    streetAddress1: string;
    streetAddress2?: string;
    city: string;
    state: string;
    postalCode: string;
    countryCode?: string;
    primaryPhone?: string;
    primaryPhoneType?: string;
    avatarId?: number;
    primaryChannel?: number;

    lifecoStartDate?: Date;
    insuranceId?: string;
    insuranceGroup?: string;
    rxBin?: string;
    rxPcn?: string;
    rxGroup?: string;
    ssn?: string;
    driversLicense?: string;
    pharmacyId?: string;
    contactFirstName?: string;
    contactLastName?: string;
    contactRelationship?: string;
    contactPhone?: string;
    contactEmail?: string;

    npi?: string;
    specialty?: string;
    credential?: string;
    clinicianId?: number;

    dosespotPatientId?: number

    isNew() {
        return this.id === undefined;
    }

    abstract isValid(): boolean;
}