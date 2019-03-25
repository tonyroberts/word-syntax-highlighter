import * as React from 'react';
import { Spinner, SpinnerSize } from 'office-ui-fabric-react';

export interface ProgressProps {
    message: string;
    enabled: boolean;
}

export interface ProgressState {
    message: string;
    enabled: boolean;
}

export default class Progress extends React.Component<ProgressProps, ProgressState> {
    constructor(props, context) {
        super(props, context);
        const {message, enabled} = props;
        this.state = {message: message, enabled: enabled};
    }

    show() {
        this.setState({enabled: true});
    }

    hide() {
        this.setState({enabled: false});
    }

    render() {
        const {message} = this.props;

        if (this.state.enabled) {
            return (
                <Spinner size={SpinnerSize.large} label={message}/>
            );
        }

        return (<div/>);
    }
}
