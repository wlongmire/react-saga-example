import * as React from 'react';
import { connect } from 'react-redux';
import * as Model from '../../reducer';
import { Patient } from '../../../patients';
import { ChatMessage } from '../ChatMessage';
import { Identity } from '../../../auth';
import * as uuidv4 from 'uuid/v4';
import * as Moment from 'moment';

import './ChatChannel.css';

interface ChatChannelProps {
    channel?: Model.ChatChannelInfo;
    user: Identity;
    patient: Patient;
    onSendMessage: (message: Model.ChatMessage) => void;
}

interface ChatChannelState {
    messages: Array<Model.ChatMessage>;
    messageText?: string;
    pendingSends: string[];
}

class _ChatChannel extends React.Component<ChatChannelProps, ChatChannelState> {
    private chatContainerBody: HTMLDivElement | null;
    private chatTextInput: HTMLInputElement | null;

    constructor() {
        super();

        this.state = {
            messages: [],
            pendingSends: []
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    componentDidMount() {
        if (this.chatContainerBody) {
            this.chatContainerBody.scrollTop = this.chatContainerBody.scrollHeight;
        }

        if (this.chatTextInput) {
            this.chatTextInput.focus();
        }
    }

    componentDidUpdate() {
        this.refreshPending();

        if (this.chatContainerBody) {
            this.chatContainerBody.scrollTop = this.chatContainerBody.scrollHeight;
        }

        if (this.chatTextInput) {
            this.chatTextInput.focus();
        }
    }

    refreshPending() {
        // clear pending sends
        const pendingSends = this.state.pendingSends;
        
        if (this.props.channel) {
            this.props.channel.messages.forEach((message: Model.ChatMessage) => {
                const itemIndex = pendingSends.indexOf(message.event_id);
                
                if (itemIndex != -1) {
                    pendingSends.splice(itemIndex, 1);
                    this.setState({pendingSends});
                    this.setState({messageText: ''});
                }
            });
        }
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
        if (!this.props.onSendMessage || !this.state.messageText) return;
        
            const { user } = this.props;
            if (!user.userInfo) return;
            const id = uuidv4();
            const pendingSends = this.state.pendingSends;
            pendingSends.push(id);
            this.setState({ pendingSends });

            const message: Model.ChatMessage = {
                channel_id: this.props.channel ? this.props.channel.channelId : -1,
                event_id: id,
                user_id: user.userId,
                event_type: "chat_message",
                version_major: 1,
                version_minor: 1,
                payload: {
                    content_text: this.state.messageText,
                    sender_meta: {
                            user_id: user.userId,
                            first_name: user.userInfo.first || '',
                            last_name: user.userInfo.last || '',
                            title: user.roleName ? user.roleName.toLowerCase() : '',
                            avatar_urls: {
                                ios: {
                                    url: ''
                                },
                                android: {
                                    url: ''
                                },
                                web: {
                                    url: ''
                                }
                            }
                        },
                    content_type: 'text/plain',
                    content_uri: undefined,
                    content_preview_uri: undefined,
                    content_action_uri: undefined
                    }
                };

        this.props.onSendMessage(message);
    }

    handleSubmit(e: any) {
        e.preventDefault();
        this.doSubmit();
    }

    parseMessage(data: any): Model.ChatMessage {
        return JSON.parse(data) as Model.ChatMessage;
    }

    render() {
        return (
            <div className="chat-container">
                <div className="chat-container-header"></div>
                <div className="chat-container-body" ref={(el) => this.chatContainerBody = el}>
                    {this.props.channel &&
                        this.props.channel.messages.map((message: Model.ChatMessage, index: number, array: Model.ChatMessage[]) => {
                            let showAvatar = true;
                            let showDayHeader = true;

                            if (index > 0) {
                                const prev = array[index - 1];
                                showAvatar = prev.user_id != message.user_id;
                                
                                const prevDate = Moment(prev.recorded, 'X');
                                const currentDate = Moment(message.recorded, 'X');

                                showDayHeader = !prevDate.isSame(currentDate, 'day');
                            }
                            
                            return (
                                <div key={index} className="chat-message-container">
                                    {showDayHeader &&
                                        <div className="chat-message-day-title">{Moment(message.recorded, 'X').format('MMMM Do')}</div>
                                    }
                                    <ChatMessage 
                                        key={index} 
                                        message={message} 
                                        isSender={this.props.user.userId == message.user_id} 
                                        showAvatar={showAvatar}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
                <div className="chat-container-footer">
                    <a className="chat-attachments-button">
                        <i className="material-icons">attach_file</i>
                    </a>
                    <input 
                        className="chat-text-input" 
                        ref={(el) => this.chatTextInput = el }
                        value={this.state.messageText} 
                        onChange={this.handleTextChange} 
                        onKeyDown={this.handleKeyDown} />
                    <input type="button" className="chat-send-button" onClick={this.handleSubmit} value="Send" />
                </div>
            </div>
        )
    }
}

export const ChatChannel = connect<{}, ChatChannelProps, ChatChannelProps>(null, {  })(_ChatChannel);