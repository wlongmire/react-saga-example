import * as React from 'react';
import * as uuidv4 from 'uuid/v4';
import * as Moment from 'moment';
import * as classnames from 'classnames';
import { KeyboardEvent } from 'react';
import { 
    ChannelEventMessage,
    ChannelEventMessageRequest,
    ChatMessage as ChatMessageInfo,
    Identity, 
    Patient 
} from '../../../common';
import ChatMessage from '../ChatMessage/ChatMessage';

import './ChatChannel.css';

interface ChatChannelProps {
    messages: Array<ChannelEventMessage<ChatMessageInfo>>;
    user: Identity;
    patient: Patient;
    onSendMessage: (message: ChannelEventMessageRequest<ChatMessageInfo>) => void;
}

interface ChatChannelState {
    messages: Array<ChannelEventMessage<ChatMessageInfo>>;
    messageText?: string;
    pendingSends: string[];
}

export class ChatChannel extends React.Component<ChatChannelProps, ChatChannelState> {
    state: ChatChannelState = {
        messages: [],
        pendingSends: [],
        messageText: ''
    };
    private chatContainerBody: HTMLDivElement | null;
    private chatTextInput: HTMLInputElement | null;

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
        
        if (this.props.messages) {
            this.props.messages.forEach((message: ChannelEventMessage<ChatMessageInfo>) => {
                const itemIndex = pendingSends.indexOf(message.event_id);
                
                if (itemIndex !== -1) {
                    pendingSends.splice(itemIndex, 1);
                    this.setState({pendingSends});
                    this.setState({messageText: ''});
                }
            });
        }
    }

    handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.keyCode === 13) {
            this.doSubmit();
        }
    }

    handleTextChange = (e: any) => {
        this.setState({messageText: e.target.value});
    }

    doSubmit() {
        if (!this.props.onSendMessage || !this.state.messageText) {
            return;
        }
        const { user } = this.props;
        if (!user.userInfo) {
            return;
        }
        const id = uuidv4();
        const pendingSends = this.state.pendingSends;

        this.setState({ pendingSends: [...pendingSends, id] });

        const message = {
            event_id: id,

            event_type: 'chat_message',
            channel_id: this.props.patient.primaryChannel,
            major: 1,
            minor: 1,
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
            } as ChannelEventMessageRequest<ChatMessageInfo>;

        this.props.onSendMessage(message);
    }

    handleSubmit = (e: any) => {
        e.preventDefault();
        this.doSubmit();
    }

    render() {
        return (
            <div className="chat-container">
                <div className="chat-container-header" />
                <div className="chat-container-body" ref={(el) => this.chatContainerBody = el}>
                    {this.props.messages &&
                        this.props.messages.map(
                            (
                                message: ChannelEventMessage<ChatMessageInfo>,
                                index: number, array: ChannelEventMessage<ChatMessageInfo>[]
                            ) => {
                                let showAvatar = true;
                                let showDayHeader = true;

                                if (index > 0) {
                                    const prev = array[index - 1];
                                    showAvatar = prev.user_id !== message.user_id;

                                    const prevDate = Moment(prev.recorded, 'X');
                                    const currentDate = Moment(message.recorded, 'X');

                                    showDayHeader = !prevDate.isSame(currentDate, 'day');
                                }

                                return (
                                    <div key={index} className="chat-message-container">
                                        {showDayHeader &&
                                            <div className="chat-message-day-title">
                                                {Moment(message.recorded, 'X').format('MMMM Do')}
                                            </div>
                                        }
                                        <ChatMessage
                                            key={index}
                                            message={message}
                                            isSender={this.props.user.userId === message.user_id}
                                            showAvatar={showAvatar}
                                        />
                                    </div>
                                );
                            }
                        )
                    }
                </div>
                <div className="chat-container-footer">
                    <a className="chat-attachments-button">
                        <i className="material-icons">attach_file</i>
                    </a>
                    <input 
                        className="chat-text-input" 
                        ref={(el) => this.chatTextInput = el}
                        value={this.state.messageText} 
                        onChange={this.handleTextChange} 
                        onKeyDown={this.handleKeyDown}
                    />
                    <input
                        type="button"
                        className={
                            classnames(
                                'chat-send-button',
                                {'active': this.state.messageText ? this.state.messageText.length > 0 : false}
                            )
                        }
                        onClick={this.handleSubmit}
                        value="Send"
                    />
                </div>
            </div>
        );
    }
}

export default ChatChannel;