import { Address } from './address';
import { InternalNote } from './internal-note';

export class Visit {
    id: string;
    assessment?: string;
    assigneeId?: string;
    cases?: Array<string>;
    clinic?: Address;
    complaints?: Array<string>;
    diagnosis?: string;
    doctorId?: string;
    doctorName?: string;
    doctorType?: string;
    estimatedDuration?: number;
    internalNotes?: Array<InternalNote>;
    maintenance?: Array<string>;
    nextSteps?: string;
    objective?: string;
    patientId?: number;
    scheduledFor?: Date;
    status?: string;
    subjective?: string;
    systemsReview?: Array<Map<string, string>>;
    visitType?: string;
    vitals?: Array<Map<string, number>>;
    
    isNew: boolean;
    isDirty: boolean;
    isValid: boolean;
}

export interface VisitsMap {
    [id: string]: Visit;
}

export const Doctors = [
    'Dr. Shirin Peters',
    'Dr. Venus Wilder',
    'Samuel Glazer, MD',
    'Lisa Goldfarb, MD',
    'Stuart Kloda, MD',
    'Jacqueline Cosme, MD',
    'Erin Hannah, MD',
    'VIctoria Riese, MD',
    'Jukie Kuriakose, MD',
    'Clifford Basett, MD',
    'Shoban Dave, MD',
    'Michael Ghalchi, MD',
    'Larry Chinitz, MD',
    'Anthony Aizer, MD',
    'Seol  Han, MD',
    'Edward Bernaski, MD',
    'Harmony Reynolds, MD',
    'Mark Adelman, MD',
    'Neal Cayne, MD',
    'Cezar Staniloe, MD',
    'Steven Brandeis, MD',
    'Marsha Harris, MD',
    'Joel Bauer, MD',
    'Anthony Lubinski, MD',
    'Doreen J Addrizzo-Harris, MD',
    'Ari Klapholz, MD',
    'RIta Linkner, MD',
    'Sapna Palep, MD',
    'Sherry Shieh, MD',
    'Bernard Dreyer, MD'
]

export const DoctorTypes = [
    'Primary Care Physician',
    'Addiction psychiatrist',
    'Adolescent medicine specialist',
    'Allergist (immunologist)',
    'Cardiac electrophysiologist',
    'Cardiologist',
    'Cardiovascular surgeon',
    'Colon and rectal surgeon',
    'Critical care medicine/pulmonology specialist',
    'Dermatologist',
    'Developmental pediatrician',
    'Endocrinologist',
    'Gastroenterologist',
    'Geriatric medicine specialist',
    'Gynecologist',
    'Gynecologic oncologist',
    'Hand surgeon',
    'Hematologist',
    'Hepatologist',
    'Hospice and palliative medicine specialist',
    'Infectious disease specialist',
    'Interventional cardiologist',
    'Medical geneticist',
    'Nephrologist',
    'Neurosurgeon',
    'Neurologist',
    'Obstetrician',
    'Ophthalmologist',
    'Oral surgeon (maxillofacial surgeon)',
    'Orthopedic surgeon',
    'Otolaryngologist (ear, nose, and throat specialist)',
    'Pain management specialist',
    'Pediatrician',
    'Physiatrist',
    'Plastic surgeon',
    'Reproductive endocrinologist',
    'Rheumatologist',
    'Sleep disorders specialist',
    'Surgeon',
    'Urologist'
]

export const LifeCoLocations = [
    'NoMad, 79 Madison Ave, 8th Floor',
    'Flatiron 339 14th Street'
]

export const VisitStatus = [
    'New',
    'Ordered',
    'Scheduled',
    'Process Visit',
    'Released',
    'Cancelled'
]

export const Complaints = [
    'Abdominal pain',
    'Acne',
    'Allergic hives',
    'Animal bite',
    'Ankle injury',
    'Anal pain',
    'Anxiety',
    'Lump on arm',
    'Arm numbness',
    'Asthma',
    'Athlete\'s foot',
    'Back injury',
    'Back lump',
    'Bacterial vaginosis',
    'Birth control refill',
    'Black stool',
    'Blood in stool',
    'Blood in urine',
    'Breast lump',
    'Bruising',
    'Chest pain',
    'Cold symptoms',
    'Contact dermatitis',
    'Cut needing suture',
    'Depression',
    'Diarrhea ',
    'Urinary tract infection',
    'Vaginal discharge',
    'Sexually transmitted infection',
    'Potential blood clot',
    'Abnormal menstrual bleeding',
    'Potential HIV exposure',
    'Genital lesion',
    'Missed period',
    'Missed birth control pills',
    'Potential pregnancy',
    'Lump in pelvic area',
    'Erectile dysfunction',
    'Groin pain',
    'Hair loss',
    'Jock itch',
    'Painful urination in a man',
    'Penis sore',
    'Hemorrhoids',
    'Testicular pain',
    'Tesicular swelling',
    'High blood pressure',
    'Painful urination in a woman',
    'High cholesterol',
    'Ear infection',
    'Elbow pain',
    'Eye infection',
    'Eye injury',
    'Fainting',
    'Fast heartbeat',
    'Fatigue',
    'Fever',
    'Finger injury ',
    'Flu symptoms',
    'Food allergy',
    'Food poisoning',
    'Foot injury',
    'Foot rash',
    'Something in eye',
    'Gluten allergy',
    'Hand injury',
    'Headache',
    'Hearing loss',
    'Heartburn',
    'Heat exhaustion',
    'Hip pain',
    'Hives',
    'Human bite',
    'Hyperthyroidism',
    'Hypothyroidism',
    'Insect bite',
    'Insomnia',
    'Itching',
    'Itchy scalp',
    'Knee inury',
    'Low back pain',
    'Lung infection ',
    'Migraine',
    'Mouth ulcer',
    'Nausea and vomiting',
    'Neck injury ',
    'Lump in neck',
    'Neck pain',
    'Potential appendicitis',
    'Rash',
    'Rib injury ',
    'Ringing ears',
    'Scabies',
    'Sesonal allergies',
    'Shortness of breath',
    'Shoulder injuries',
    'Sinus problems',
    'Sinus infections',
    'Sleep apnea',
    'Slow heartbeat',
    'Sore throat',
    'Styes',
    'Vomiting'
]

export const Vitals = [
    'Height',
    'Weight',
    'BMI',
    'BP',
    'Temperature',
    'Pulse',
    'Respiratory Rate',
    'O2 Saturation',
]

export const SystemsReview = [
    'Eyes',
    'Ear, Nose, Mouth, Throat',
    'Cardiovascular',
    'Respiratory',
    'Gastrointestinal',
    'Genitourinary',
    'Musculoskeletal',
    'Integumentary / breast',
    'Neurological',
    'Psychiatric',
    'Endocrine',
    'Hematologic/ lymphatic',
    'Allergic / immunologic',
]

export enum VisitType {
    LifeCo,
    External
}

export enum DoctorType {
    Primary,
    Gynecologist,
    Dermatologist
}

export enum TimeDuration {
    QuarterHour = 15,
    HalfHour = 30,
    ThreeQuarterHour = 45,
    Hour = 60
}

export enum MaintenanceFlags {
    Physical,
    PapSmear
}
