import * as React from 'react';
import * as Model from '../../reducer';
import Avatar from 'material-ui/Avatar';
import * as classNames from 'classnames';
import * as Moment from 'moment';

import './ChatMessage.css';

interface ChatMessageProps {
    message: Model.ChatMessage
    isSender: boolean;
}

interface ChatMessageState {}

export class ChatMessage extends React.Component<ChatMessageProps, ChatMessageState> {

    getWebAvatarUrl(message: Model.ChatMessage): string | undefined {
        if (message.payload.sender_meta.avatar_urls.web) {
            return message.payload.sender_meta.avatar_urls.web.url;
        }

        return undefined;
    }

    render() {
        // console.log(this.props.message.recorded);
        // console.log(Moment(Number(this.props.message.recorded)));
        // console.log(new Date(Number(this.props.message.recorded)));
        return (
            <div className={classNames('chat-message', {'my-message': this.props.isSender})}>
                <div className="chat-message-avatar">
                    <Avatar 
                        size={28}
                        src={this.getWebAvatarUrl(this.props.message)}>
                    </Avatar>
                </div>
                <div className={classNames('chat-message-content')}>
                    {this.props.message.payload.content_text}
                </div>
                <div className="chat-message-time">
                    {Moment(this.props.message.recorded).format('h:mmA')}
                </div>
            </div>
        )
    }
}