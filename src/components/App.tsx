import * as React from 'react';
import { Button, ButtonType } from 'office-ui-fabric-react';
import Header from './Header';
import Progress from './Progress';
import {MessageList, MessageBarType} from './MessageList';
import * as highlighter from "../utils/highlighter";
import * as styles from "../utils/styles";
import {highlightSelection} from '../functions';



export interface AppProps {
    title: string;
    isOfficeInitialized: boolean;
}

export interface AppState {
    language: string;
    theme: string;
    setHighlightColor: boolean;
}

export default class App extends React.Component<AppProps, AppState> {
    constructor(props, context) {
        super(props, context);
        this.state = {
            language: "Auto Detect",
            theme: "Default",
            setHighlightColor: false
        };

        this.handleSetLanguage = this.handleSetLanguage.bind(this);
        this.handleSetTheme = this.handleSetTheme.bind(this);
        this.handleSetHighlightColor = this.handleSetHighlightColor.bind(this);
        this.click = this.click.bind(this);
    }

    componentDidMount() {
        if (Office.context != undefined && Office.context.document != undefined) {
            let settings = Office.context.document.settings;

            let language = settings.get("language");
            if (language) {
                this.setState({language: language});

            }

            let theme = settings.get("theme");
            if (theme) {
                this.setState({theme: theme});
            }

            let setHighlightColor = settings.get("setHighlightColor");
            if (setHighlightColor != undefined) {
                this.setState({setHighlightColor: setHighlightColor});
            }
        }
    }

    async click() {
        let self = this;
        let messages = self.refs.messages as MessageList;
        let spinner = self.refs.spinner as Progress;

        return Word.run(async context => {
            // Clear any previous errors
            messages.clear();
            spinner.show();

            await highlightSelection(context);

            spinner.hide();
            console.log('Applied syntax highlighting.');
            messages.addMessage('Applied syntax highlighting.', MessageBarType.success);
        })
        .catch(function (error) {
            spinner.hide();
            messages.addMessage(error.message, MessageBarType.warning);
            console.log('Error: ' + JSON.stringify(error));
            if (error instanceof OfficeExtension.Error) {
                console.log('Debug info: ' + JSON.stringify(error.debugInfo));
            }
        });
    }

    handleSetLanguage(event) {
        this.setState({language: event.target.value});

        let settings = Office.context.document.settings;
        settings.set("language", event.target.value);
        settings.saveAsync();
    }

    handleSetTheme(event) {
        this.setState({theme: event.target.value});

        let settings = Office.context.document.settings;
        settings.set("theme", event.target.value);
        settings.saveAsync();
    }

    handleSetHighlightColor(event) {
        this.setState({setHighlightColor: event.target.checked});

        let settings = Office.context.document.settings;
        settings.set("setHighlightColor", event.target.checked);
        settings.saveAsync();
    }

    render() {
        const {
            title,
            isOfficeInitialized,
        } = this.props;

        if (!isOfficeInitialized) {
            return (
                <div>
                    <Header message={title} />
                    <section className='ms-welcome__progress ms-u-fadeIn500'>
                        <Progress message='Please sideload the addin to see app body.' enabled={true} />
                    </section>
                </div>
            );
        }

        let languages = highlighter.getLanguages();
        let languageOptions = languages.map(item => (
            <option value={item}>{item}</option>
        ));

        let themes = styles.getThemes();
        let themeOptions = themes.map(item => (
                <option value={item}>{item}</option>
        ));

        return (
            <div className='ms-welcome'>
                <Header message='Settings' />
                <div className='ms-welcome__main ms-u-fadeIn500'>
                    <div className="ms-Grid" dir="ltr">
                        <div className="ms-Grid-row">
                            <div className="ms-Grid-col ms-sm4 ms-md4 ms-lg4">
                                <label className="ms-label">Language:</label>
                            </div>
                            <div className="ms-Grid-col ms-sm8 ms-md8 ms-lg8">
                                <select id="language" value={this.state.language} onChange={this.handleSetLanguage}>
                                    {languageOptions}
                                </select>
                            </div>
                        </div>
                        <div className="ms-Grid-row">
                            <div className="ms-Grid-col ms-sm4 ms-md4 ms-lg4">
                                <label className="ms-label">Theme:</label>
                            </div>
                            <div className="ms-Grid-col ms-sm8 ms-md8 ms-lg8">
                                <select id="theme" value={this.state.theme} onChange={this.handleSetTheme}>
                                    {themeOptions}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="ms-Grid" dir="ltr">
                        <div className="ms-Grid-row">
                            <div className="ms-Grid-col ms-sm10 ms-md10 ms-lg10">
                                <label className="ms-label">Color Background:</label>
                            </div>
                            <div className="ms-Grid-col ms-sm2 ms-md2 ms-lg2">
                                <input id="highlight"
                                       type="checkbox"
                                       checked={this.state.setHighlightColor}
                                       onChange={this.handleSetHighlightColor} />
                            </div>
                        </div>
                    </div>

                    <Button className='ms-welcome__action'
                            buttonType={ButtonType.primary}
                            iconProps={{ iconName: 'ChevronRight' }}
                            onClick={this.click}>
                        Highlight Selection
                    </Button>

                    <Progress message='Working' enabled={false} ref='spinner'/>
                    <MessageList ref='messages'/>
                </div>
            </div>
        );
    }
}
