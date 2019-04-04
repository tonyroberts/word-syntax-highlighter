
import * as hljs from "highlight.js";
import * as xmldom from 'xmldom';
import * as styles from "./styles";

export const languages = {
    'Auto Detect': null,
    '1c': '1c',
    'Abnf': 'abnf',
    'AccessLog': 'accesslog',
    'ActionsSript': 'actionscript',
    'Ada': 'ada',
    'AngelScript': 'angelscript',
    'Apache': 'apache',
    'AppleScript': 'applescript',
    'Arcade': 'arcade',
    'Arduino': 'arduino',
    'ArmAsm': 'armasm',
    'AsciiDoc': 'asciidoc',
    'AspectJ': 'aspectj',
    'AutoHotKey': 'autohotkey',
    'AutoIt': 'autoit',
    'AvrAsm': 'avrasm',
    'Awk': 'awk',
    'Axapta': 'axapta',
    'Bash': 'bash',
    'Basic': 'basic',
    'Bnf': 'bnf',
    'BrainFuck': 'brainfuck',
    'Cal': 'cal',
    'CapnProto': 'capnproto',
    'Ceylon': 'ceylon',
    'Clean': 'clean',
    'Clojure Repl': 'clojure-repl',
    'Clojure': 'clojure',
    'CMake': 'cmake',
    'CoffeeScript': 'coffeescript',
    'Coq': 'coq',
    'Cos': 'cos',
    'Cpp': 'cpp',
    'Crmsh': 'crmsh',
    'Crystal': 'crystal',
    'Cs': 'cs',
    'Csp': 'csp',
    'Css': 'css',
    'D': 'd',
    'Dart': 'dart',
    'Delphi': 'delphi',
    'Diff': 'diff',
    'Django': 'django',
    'Dns': 'dns',
    'DockerFile': 'dockerfile',
    'Dos': 'dos',
    'DsConfig': 'dsconfig',
    'Dts': 'dts',
    'Dust': 'dust',
    'Ebnf': 'ebnf',
    'Elixir': 'elixir',
    'Elm': 'elm',
    'Erb': 'erb',
    'Erlang Repl': 'erlang-repl',
    'Erlang': 'erlang',
    'Excel': 'excel',
    'Fix': 'fix',
    'Flix': 'flix',
    'Fortran': 'fortran',
    'FSharp': 'fsharp',
    'Gams': 'gams',
    'Gauss': 'gauss',
    'GCode': 'gcode',
    'Gherkin': 'gherkin',
    'Glsl': 'glsl',
    'Gml': 'gml',
    'Go': 'go',
    'Golo': 'golo',
    'Gradle': 'gradle',
    'Groovy': 'groovy',
    'Haml': 'haml',
    'HandleBars': 'handlebars',
    'Haskell': 'haskell',
    'Haxe': 'haxe',
    'Hsp': 'hsp',
    'HtmlBars': 'htmlbars',
    'Http': 'http',
    'Hy': 'hy',
    'Inform7': 'inform7',
    'Ini': 'ini',
    'Irpf90': 'irpf90',
    'Isbl': 'isbl',
    'Java': 'java',
    'JavaScript': 'javascript',
    'JBoss Cli': 'jboss-cli',
    'Json': 'json',
    'Julia Repl': 'julia-repl',
    'Julia': 'julia',
    'Kotlin': 'kotlin',
    'Lasso': 'lasso',
    'Ldif': 'ldif',
    'Leaf': 'leaf',
    'Less': 'less',
    'Lisp': 'lisp',
    'LiveCodeServer': 'livecodeserver',
    'LiveScript': 'livescript',
    'Llvm': 'llvm',
    'Lsl': 'lsl',
    'Lua': 'lua',
    'Makefile': 'makefile',
    'MarkDown': 'markdown',
    'Mathematica': 'mathematica',
    'Matlab': 'matlab',
    'Maxima': 'maxima',
    'Mel': 'mel',
    'Mercury': 'mercury',
    'Mipsasm': 'mipsasm',
    'Mizar': 'mizar',
    'Mojolicious': 'mojolicious',
    'Monkey': 'monkey',
    'MoonScript': 'moonscript',
    'N1ql': 'n1ql',
    'Nginx': 'nginx',
    'Nimrod': 'nimrod',
    'Nix': 'nix',
    'Nsis': 'nsis',
    'ObjectiveC': 'objectivec',
    'OCaml': 'ocaml',
    'OpenScad': 'openscad',
    'Oxygene': 'oxygene',
    'Parser3': 'parser3',
    'Perl': 'perl',
    'Pf': 'pf',
    'Pgsql': 'pgsql',
    'Php': 'php',
    'PlainText': 'plaintext',
    'Pony': 'pony',
    'Powershell': 'powershell',
    'Processing': 'processing',
    'Profile': 'profile',
    'Prolog': 'prolog',
    'Properties': 'properties',
    'Protobuf': 'protobuf',
    'Puppet': 'puppet',
    'PureBasic': 'purebasic',
    'Python': 'python',
    'Q': 'q',
    'Qml': 'qml',
    'R': 'r',
    'ReasonMl': 'reasonml',
    'Rib': 'rib',
    'RoboConf': 'roboconf',
    'Routeros': 'routeros',
    'Rsl': 'rsl',
    'Ruby': 'ruby',
    'RulesLanguage': 'ruleslanguage',
    'Rust': 'rust',
    'Sas': 'sas',
    'Scala': 'scala',
    'Scheme': 'scheme',
    'Scilab': 'scilab',
    'Scss': 'scss',
    'Shell': 'shell',
    'Smali': 'smali',
    'SmallTalk': 'smalltalk',
    'Sml': 'sml',
    'Sqf': 'sqf',
    'Sql': 'sql',
    'Stan': 'stan',
    'Stata': 'stata',
    'Step21': 'step21',
    'Stylus': 'stylus',
    'Subunit': 'subunit',
    'Swift': 'swift',
    'TaggerScript': 'taggerscript',
    'Tap': 'tap',
    'Tcl': 'tcl',
    'Tex': 'tex',
    'Thrift': 'thrift',
    'Tp': 'tp',
    'Twig': 'twig',
    'TypesSript': 'typescript',
    'Vala': 'vala',
    'VBNet': 'vbnet',
    'VBScript Html': 'vbscript-html',
    'VbScript': 'vbscript',
    'Verilog': 'verilog',
    'Vhdl': 'vhdl',
    'Vim': 'vim',
    'x86asm': 'x86asm',
    'Xl': 'xl',
    'Xml': 'xml',
    'XQuery': 'xquery',
    'Yaml': 'yaml',
    'Zephir': 'zephir'
};


export function highlight(languageName: string,
                          themeName: string,
                          text: string,
                          callback: (cls: string, text: string) => void): string {
    let language = languages[languageName];
    if (language === undefined) {
        throw new Error("Unknown language '" + languageName + "'");
    }

    // Use highlight.js to get html highlighted version of the text
    var fragment = language ? hljs.highlight(language, text) : hljs.highlightAuto(text);
    var html = '<div class="hljs"><pre><code>' + fragment.value + '\r\n </code></pre></div>'

    // Parse the result into a DOM
    let parser = new xmldom.DOMParser();
    let dom = parser.parseFromString(html, "text/html");

    function walk(node: Node, cls: string = null) {
        // Add extra styling to the node
        let nodeClass = null;
        if (node.nodeType == node.ELEMENT_NODE)
        {
            let element = node as Element;
            nodeClass = element.getAttribute("class");

            // strip the leading hljs- from the class name
            if (nodeClass && nodeClass.search(/^hljs-/) == 0) {
                nodeClass = nodeClass.substr(5);
            }

            if (nodeClass) {
                let style = styles.getStyle(themeName, nodeClass);
                if (style) {
                    let css: string[] = [];
                    for (let key of Object.keys(style)) {
                        let value = style[key];
                        if (value) {
                            css.push(`${key}: '${value}'`);
                        }
                    }
                    element.setAttribute('style', css.join(';'));
                }
            }
        }

        // If we've found a text node, call the callback with the current class and the text
        if (node.nodeType == node.TEXT_NODE && callback) {
            callback(cls, node.textContent);
        }

        // Traverse down into the children nodes
        if (node.hasChildNodes()) {
            // If we come across a span element use its class as the child class for the next elements
            let childCls = null;
            if (node.nodeType == node.ELEMENT_NODE && node.nodeName == "span") {
                childCls = nodeClass;
            }

            walk(node.firstChild, childCls);
        }

        // Continue to any siblings, keeping the same class (although there should only be
        // one child node of any span elements.
        if (node.nextSibling) {
            walk(node.nextSibling, cls);
        }
    }

    walk(dom.documentElement);

    return dom.documentElement.toString();
}


export function getLanguages() {
    return Object.keys(languages);
}
