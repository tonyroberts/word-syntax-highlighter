import * as React from 'react';
import { MessageBar, MessageBarType } from 'office-ui-fabric-react';

export { MessageBarType } from 'office-ui-fabric-react';

export interface MessageListItem {
    message: string;
    type: MessageBarType;
}

export interface MessageListProps {
}

export interface MessageListState {
    messages: MessageListItem[]
}

export class MessageList extends React.Component<MessageListProps, MessageListState> {

    constructor(props, context) {
        super(props, context);
        this.state = {messages: []};
    }

    addMessage(message: string, type: MessageBarType) {
        this.state.messages.push({message, type});
        this.setState({messages: this.state.messages});
    }

    clear() {
        this.setState({messages: []});
    }

    componentDidMount() {
        this.setState({});
    }

    handleDismiss(index) {
        this.state.messages.splice(index, 1);
        this.setState({messages: this.state.messages});
    }

    render() {
        const { messages } = this.state;

        const listItems = messages.map((msg, index) => (
            <div className='ms-u-slideUpIn20'>
                <MessageBar messageBarType={msg.type}
                            isMultiline={false}
                            onDismiss={this.handleDismiss.bind(this, index)}
                            dismissButtonAriaLabel="Close">
                    {msg.message}
                </MessageBar>
            </div>
        ));

        return (
            <div>
                {listItems}
            </div>
        );
    }
}
