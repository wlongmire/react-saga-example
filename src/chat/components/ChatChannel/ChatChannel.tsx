import * as React from 'react';
import { connect } from 'react-redux';
import * as Model from '../../reducer';
import { Patient } from '../../../patients';
import { ChatMessage } from '../ChatMessage';
import * as uuidv4 from 'uuid/v4';
// import { ChatConversation } from '../ChatConversation';

import './ChatChannel.css';

interface ChatChannelProps {
    channel: number;
    userId: number;
    patient: Patient
    accessToken: string;
}

interface ChatChannelState {
    socket?: WebSocket;
    messages: Array<Model.ChatMessage>;
    messageText?: string;
    pendingSends: string[];
}

class _ChatChannel extends React.Component<ChatChannelProps, ChatChannelState> {
    private messagesEnd: HTMLDivElement | null;

    constructor() {
        super();

        this.state = {
            messages: [],
            pendingSends: []
        };

        this.onSocketClose = this.onSocketClose.bind(this);
        this.onSocketError = this.onSocketError.bind(this);
        this.onSocketMessageReceived = this.onSocketMessageReceived.bind(this);
        this.onSocketOpen = this.onSocketOpen.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    componentDidMount() {
        // wss://api.life.cheap -- hit a different server instead - koa, express
        // let token = localStorage.getItem('access_token') as string;
        // console.log('token');
        // let target = "wss://@api.life.co/phi";
        // const socket = new WebSocket(target, '235caa2f-cac5-4a58-b57e-dec99a398db2');
        const socket = new WebSocket(`ws://${process.env.REACT_APP_CHAT_API_HOST}`);
        socket.addEventListener('open', this.onSocketOpen);
        socket.addEventListener('message', this.onSocketMessageReceived);
        socket.addEventListener('error', this.onSocketError);
        socket.addEventListener('close', this.onSocketClose);
        this.setState({ socket });
    }

    handleKeyDown(e: any) {
        if (e.keyCode == 13) {
            this.doSubmit();
        }
    }

    handleTextChange(e: any) {
        this.setState({messageText: e.target.value});
    }

    doSubmit() {
        if (!this.state.socket || (this.state.messageText == '')) return;
        
            const id = uuidv4();
            const pendingSends = this.state.pendingSends;
            pendingSends.push(id);
            this.setState({ pendingSends });
    
            this.state.socket.send(JSON.stringify(
                {
                    channel_id: this.props.channel,
                    event_id: id,
                    user_id: `${this.props.userId}`,
                    event_name: "chat_message",
                    version_major: 1,
                    version_minor: 1,
                    payload: {
                        content_text: this.state.messageText,
                        sender_meta: {
                            user_id: this.props.patient.id,
                            // first_name: user.firstName,
                            // last_name: user.lastName,
                            // title: user.title,
                            avatar_urls: {
                                ios: {
                                    url: 'https://randomuser.me/api/portraits/thumb/men/47.jpg'
                                },
                                android: {
                                    url: 'https://randomuser.me/api/portraits/thumb/men/47.jpg'
                                },
                                web: {
                                    url: 'https://randomuser.me/api/portraits/thumb/men/47.jpg'
                                }
                            },
                            content_type: 'application/x-vnd.lifeco.schedule;version=1.0.0',
                            content_uri: '8a80709f-d0aa-44cc-83ea-79897f8829be',
                            content_preview_uri: '8a80709f-d0aa-44cc-83ea-79897f8829be',
                            content_action_url: 'schedule/123'
                        }
                    }
                }
            ));
    }

    handleSubmit(e: any) {
        e.preventDefault();
        this.doSubmit();
    }

    parseMessage(data: any): Model.ChatMessage {
        return JSON.parse(data) as Model.ChatMessage;
    }

    onSocketError(e: any) {
        console.log('error: ', e);
    }

    onSocketOpen(e: any) {
        console.log('open: ', e);
    }

    onSocketMessageReceived(e: any) {
        const msg = this.parseMessage(e.data);
        console.log('message: ', msg);

        const pendingSends = this.state.pendingSends;

        console.log('eventId:', msg.event_id);
        const itemIndex = pendingSends.indexOf(msg.event_id);
        console.log('index:', itemIndex);

        if (itemIndex != -1) {
            pendingSends.splice(itemIndex, 1);
            this.setState({pendingSends});
            this.setState({messageText: ''});
        }
        
        const messages = this.state.messages;
        messages.push(msg);
        this.setState({messages}, () => {
            if (!this.messagesEnd) return;
            this.messagesEnd.scrollIntoView();
        });
    }

    onSocketClose(e: any) {
        console.log('close: ', e);
    }

    render() {
        return (
            <div className="chat-container">
                <div className="chat-container-header"></div>
                <div className="chat-container-body">
                    {
                        this.state.messages.map((message: Model.ChatMessage, index: number) => {
                            return (<ChatMessage key={index} message={message} isSender={this.props.userId == message.user_id} />)
                        })
                    }
                    <div ref={(el) => this.messagesEnd = el}></div>
                </div>
                <div className="chat-container-footer">
                    <a className="chat-attachments-button">

                    </a>
                    <input className="chat-text-input" value={this.state.messageText} onChange={this.handleTextChange} onKeyDown={this.handleKeyDown} />
                    <input type="button" className="chat-send-button" onClick={this.handleSubmit} value="Send" />
                </div>
            </div>
        )
    }
}

export const ChatChannel = connect<{}, ChatChannelProps, ChatChannelProps>(null, { })(_ChatChannel);