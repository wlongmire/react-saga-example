export interface DosespotMedicationListItem {
    medicationId: number;
    source: string;
    medicationStatus: string;
    prescriptionStatus: string;
    displayName: string;
    quantity: number;
    dispenseUnits: string;
    refills: number;
    schedule: number;
    noSubstitution: boolean;
    notes: string;
    dateWritten: string;
    pharmacyId: number;
    monographPath: string;
    drugClassification: string;
    ndc: string;
    strength: string;
}