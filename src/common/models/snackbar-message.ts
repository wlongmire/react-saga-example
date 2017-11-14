export enum SnackbarMessageType {
    Error,
    Success
}

export interface SnackbarMessage {
    type: SnackbarMessageType;
    message: string;
}