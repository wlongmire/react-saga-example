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
<<<<<<< HEAD
    avatar?: string    
}
=======
    avatar?: string;
}

export const patientsList = [
    {
    "id": 1,
    "name": "Barrack Obama",
    "age": "24",
    "gender": "Male",
    "avatar": "(https://lh3.googleusercontent.com/-BG6ovFezOrI/AAAAAAAAAAI/AAAAAAAAAAA/APJypA22mcSVvpIe38npGJvOFfpV5gUHng/s64-c-mo/photo.jpg"
    },
    {
    "id": 2,
    "name": "Uhuru Kenyatta",
    "age": "54",
    "gender": "Male",
    "avatar": "(https://lh3.googleusercontent.com/-BG6ovFezOrI/AAAAAAAAAAI/AAAAAAAAAAA/APJypA22mcSVvpIe38npGJvOFfpV5gUHng/s64-c-mo/photo.jpg"
    },
    {
    "id": 3,
    "name": "Lady Tesla",
    "age": "21",
    "gender": "Female",
    "avatar": "(https://lh3.googleusercontent.com/-BG6ovFezOrI/AAAAAAAAAAI/AAAAAAAAAAA/APJypA22mcSVvpIe38npGJvOFfpV5gUHng/s64-c-mo/photo.jpg"
    },
    {
    "id": 4,
    "name": "Lindsey Cole",
    "age": "16",
    "gender": "Female",
    "avatar": "(https://lh3.googleusercontent.com/-BG6ovFezOrI/AAAAAAAAAAI/AAAAAAAAAAA/APJypA22mcSVvpIe38npGJvOFfpV5gUHng/s64-c-mo/photo.jpg"
    },
    {
    "id": 5,
    "name": "Keke Palmer",
    "age": "24",
    "gender": "Female",
    "avatar": "(https://lh3.googleusercontent.com/-BG6ovFezOrI/AAAAAAAAAAI/AAAAAAAAAAA/APJypA22mcSVvpIe38npGJvOFfpV5gUHng/s64-c-mo/photo.jpg"
    },
    {
    "id": 6,
    "name": "Folarin Wale",
    "age": "30",
    "gender": "Male",
    "avatar": "(https://lh3.googleusercontent.com/-BG6ovFezOrI/AAAAAAAAAAI/AAAAAAAAAAA/APJypA22mcSVvpIe38npGJvOFfpV5gUHng/s64-c-mo/photo.jpg"
    },
    {
    "id": 7,
    "name": "Chris Bosh",
    "age": "41",
    "gender": "Male",
    "avatar": "(https://lh3.googleusercontent.com/-BG6ovFezOrI/AAAAAAAAAAI/AAAAAAAAAAA/APJypA22mcSVvpIe38npGJvOFfpV5gUHng/s64-c-mo/photo.jpg"
    }
    ]
>>>>>>> develop
