import * as React from 'react';
import * as hljs from "highlight.js";
import { languages } from "../utils/highlighter";
import { getSnippet } from "../utils/snippets";
const parse = require('html-react-parser');



export interface SnippetProps {
    language: string;
}

export default class Snippet extends React.Component<SnippetProps> {
    constructor(props, context) {
        super(props, context);
    }

    get code(): {text: string, language: string} {
        let language = languages[this.props.language];
        let text = getSnippet(language ? language : 'python');
        if (!text) {
            text = 'No code sample available for selected language';
        }
        return {text, language};
    }

    render() {
        try {
            let {language, text} = this.code;
            let fragment = language ? hljs.highlight(language, text) : hljs.highlightAuto(text);
            let html = parse(fragment.value);

            return (
                    <div className='code-snippet'>
                        <pre>
                            <code className='hljs'>{html}</code>
                        </pre>
                    </div>
            );
        }
        catch (e) {
            return (<div><pre>{ JSON.stringify(e) }</pre></div>)
        }
    }
}
