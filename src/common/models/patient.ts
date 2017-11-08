// import { ChatChannelInfo } from './chat-channel-info';
// import { Imaging } from './imaging';
// import { Other } from './other';
// import { TestOrder } from './test-order';
// import { Treatment } from './treatment';
// import { Visit } from './visit';
// import { Wellness } from './wellness';

// import { SingleSignOnInfo } from './single-sign-on-info';

export interface Patient {
    id: number;
    firstName: string;
    lastName: string;
    name: string;
    primaryChannel: number;
    age?: string;
    gender?: string;
    avatar?: string;
    phone?: string;
    email?: string;
    // sso?: SingleSignOnInfo;
    // channel?: ChatChannelInfo;
    // treatments: Array<Treatment>;
    // visits: Array<Visit>;
    // tests: Array<TestOrder>;
    // imaging: Array<Imaging>;
    // wellness: Wellness;
    // other: Other;
}