export class ChatState {
    isConnecting: boolean;
    isConnected: boolean;
    outboundMessages: Object;
    channels: Object;
    connectionError?: any;
}