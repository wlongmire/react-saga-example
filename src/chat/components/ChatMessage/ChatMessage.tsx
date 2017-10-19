import * as React from 'react';
import * as Model from '../../reducer';
import Avatar from 'material-ui/Avatar';
import * as classNames from 'classnames';
import * as Moment from 'moment';

import './ChatMessage.css';

interface ChatMessageProps {
    message: Model.ChatMessage
    isSender: boolean;
    showAvatar: boolean;
    contentUrl?: string;
}

interface ChatMessageState {
    contentType?: string;
}

export class ChatMessage extends React.Component<ChatMessageProps, ChatMessageState> {
    getWebAvatarUrl(message: Model.ChatMessage): string | undefined {
        if (message.payload.sender_meta.avatar_urls && message.payload.sender_meta.avatar_urls.web) {
            return message.payload.sender_meta.avatar_urls.web.url;
        }

        return undefined;
    }

    render() {
        return (
            <div className={classNames('chat-message', {'my-message': this.props.isSender})}>
                {this.props.showAvatar &&
                    <div className="chat-message-avatar">
                        <Avatar 
                            size={28}
                            src={this.getWebAvatarUrl(this.props.message)}>
                        </Avatar>   
                    </div>
                }
                <div className={classNames('chat-message-content')}>
                    {this.props.message.payload.content_text}
                </div>
                <div className="chat-message-time">
                    {Moment(this.props.message.recorded, 'X').format('h:mm A')}
                </div>
            </div>
        )
    }
}