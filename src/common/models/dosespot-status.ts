export interface DoseSpotStatus {
    clinicianId: number;
    refillRequestsCount: number;
    transactionErrorsCount: number;
    pendingPrescriptionsCount: number;
    url: string;
}  