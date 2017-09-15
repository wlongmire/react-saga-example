/**
 * Reducer state model
 */
 export class ReducerState {}

 /**
  * Represents a Patient
  */
export interface Patient {
    id: number;
    name: string;
    primaryChannel: number;
    age?: string;
    gender?: string;
    avatar?: string    
}