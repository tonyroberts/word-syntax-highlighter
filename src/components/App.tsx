import * as React from 'react';
import { PrimaryButton, DefaultButton } from 'office-ui-fabric-react';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import Header from './Header';
import Progress from './Progress';
import {MessageList, MessageBarType} from './MessageList';
import * as highlighter from "../utils/highlighter";
import * as styles from "../utils/styles";
import {highlightSelection, insertHighlightedText} from '../functions';
import {changeTheme} from '../utils/themes';
import Snippet from "./Snippet";



export interface AppProps {
    title: string;
    isOfficeInitialized: boolean;
}

export interface AppState {
    language: string;
    theme: string;
}

export default class App extends React.Component<AppProps, AppState> {
    constructor(props, context) {
        super(props, context);
        this.state = {
            language: "Detect Automatically",
            theme: "Default"
        };

        this.handleSetLanguage = this.handleSetLanguage.bind(this);
        this.handleSetTheme = this.handleSetTheme.bind(this);
        this.highlightSelection = this.highlightSelection.bind(this);
        this.copySnippet = this.copySnippet.bind(this);
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
                changeTheme(theme);
            }
        }
    }

    componentWillUpdate(_nextProps: AppProps, nextState: AppState) {
        if (nextState.theme) {
            changeTheme(nextState.theme);
        }
    }

    async highlightSelection() {
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

    async copySnippet() {
        let self = this;
        let messages = self.refs.messages as MessageList;
        let spinner = self.refs.spinner as Progress;
        let snippet= self.refs.snippet as Snippet;

        return Word.run(async context => {
            // Clear any previous errors
            messages.clear();
            spinner.show();

            // Get the text and add it the the document
            let {text} = snippet.code;
            await insertHighlightedText(context, text);

            spinner.hide();
            console.log('Copied code snippet.');
            messages.addMessage('Copied code snippet.', MessageBarType.success);
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
                <Header message='Easy Syntax Highlighter' />
                <div className='ms-welcome__main ms-u-fadeIn500'>
                    <p>The <em>Easy Syntax Highlighter</em> allows you to apply syntax highlighting to code
                    blocks in your Word document.</p>
                    <p>It will automatically detect the programming langugage of your code block and
                    there are 89 styles to choose from.</p>

                    <h3>Instructions</h3>
                    <ol>
                        <li>
                            Add some code to your Word document.<br/>
                            <span className='tip'>
                                <Icon iconName="Lightbulb" />Tip: Use the <em>Copy to document</em> button below to quickly test.
                            </span>
                        </li>
                        <li>
                            Select the code block you want to highlight.
                        </li>
                        <li>
                            Press the Highlight Selection button.
                            <span className='tip'>
                                <Icon iconName="Lightbulb" />Tip: Don't like the colors? Change the <em>Theme</em>
                                &nbsp;below, reselect your code and try again.
                            </span>
                        </li>
                    </ol>

                    <div className='text-center'>
                        <PrimaryButton className='ms-welcome__action'
                                iconProps={{ iconName: 'ChevronRight' }}
                                onClick={this.highlightSelection}
                                text="Highlight Selection" />
                    </div>

                    <Progress message='Working' enabled={false} ref='spinner'/>
                    <MessageList ref='messages'/>

                    <h3>Settings</h3>
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

                    <div className="preview">
                        <h3>Preview</h3>
                        <DefaultButton
                            text='Copy to document'
                            onClick={this.copySnippet}/>
                        <Snippet ref='snippet' language={this.state.language}/>
                    </div>
                </div>
            </div>
        );
    }
}
