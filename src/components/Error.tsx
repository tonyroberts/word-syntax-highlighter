import * as React from 'react';
import { MessageBar, MessageBarType } from 'office-ui-fabric-react';
import Header from './Header';

export interface ErrorProps {
    error: string;
}

export default class Error extends React.Component<ErrorProps> {
    render() {
        return (
            <div className='ms-welcome'>
                <Header message='An error occurred!' />
                <div className='ms-welcome__main ms-u-fadeIn500'>
                    <MessageBar messageBarType={MessageBarType.error} isMultiline={true}>
                        {this.props.error}
                    </MessageBar>
                </div>
            </div>
        );
    }
}
