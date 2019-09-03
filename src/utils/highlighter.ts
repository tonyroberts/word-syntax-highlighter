
import * as hljs from "highlight.js";
import * as xmldom from 'xmldom';
import * as styles from "./styles";

export const languages = {
    'Detect Automatically': null,
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


export function highlightOoxml(languageName: string,
                               themeName: string,
                               text: string)
{
    let language = languages[languageName];
    if (language === undefined) {
        throw new Error("Unknown language '" + languageName + "'");
    }

    // Normalize line endings
    // LF:    Line Feed, U+000A
    // VT:    Vertical Tab, U+000B
    // FF:    Form Feed, U+000C
    // CR:    Carriage Return, U+000D
    // CR+LF: CR (U+000D) followed by LF (U+000A)
    // NEL:   Next Line, U+0085
    // LS:    Line Separator, U+2028
    // PS:    Paragraph Separator, U+2029
    //Unicode regex not supported in IE11
    //text = text.replace(/[\n\u{000A}\u{000B}\u{000C}\u{0085}\u{2028}\u{2029}]/ug, '\r');
    for (let u of ['\n', '\u000a', '\u000b', '\u000c', '\u0085', '\u2028', '\u2029']) {
        while (text.indexOf(u) >= 0) {
            text = text.replace(u, '\r');
        }
    }
    text = text.trimRight();

    // Use highlight.js to get html highlighted version of the text
    var fragment = language ? hljs.highlight(language, text) : hljs.highlightAuto(text);
    var html = '<div class="hljs">' + fragment.value + '</div>'

    // Parse the result into a DOM
    let parser = new xmldom.DOMParser();
    let htmlDoc = parser.parseFromString(html, "text/html");

    // Create a new DOM for the Ooxml document
    let xmlns = {
        a: "http://schemas.openxmlformats.org/drawingml/2006/main",
        ve: "http://schemas.openxmlformats.org/markup-compatibility/2006",
        o: "urn:schemas-microsoft-com:office:office",
        r: "http://schemas.openxmlformats.org/package/2006/relationships",
        m: "http://schemas.openxmlformats.org/officeDocument/2006/math",
        v: "urn:schemas-microsoft-com:vml",
        wp: "http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing",
        w10: "urn:schemas-microsoft-com:office:word",
        w: "http://schemas.openxmlformats.org/wordprocessingml/2006/main",
        wne: "http://schemas.microsoft.com/office/word/2006/wordml",
        pkg: "http://schemas.microsoft.com/office/2006/xmlPackage"
    };
    
    let doc = htmlDoc.implementation.createDocument('', '', null);
    let pkg = doc.appendChild(doc.createElementNS(xmlns.pkg, 'pkg:package'));

    // Top-level part specifies the document relationship
    let part = pkg.appendChild(doc.createElementNS(xmlns.pkg, 'pkg:part'));
    part.setAttributeNS(xmlns.pkg, 'pkg:name', '/_rels/.rels');
    part.setAttributeNS(xmlns.pkg, 'pkg:contentType', 'application/vnd.openxmlformats-package.relationships+xml');
    part.setAttributeNS(xmlns.pkg, 'pkg:padding', '512');

    let xmlData = part.appendChild(doc.createElementNS(xmlns.pkg, 'pkg:xmlData'));
    let relationships = xmlData.appendChild(doc.createElement('Relationships'));
    relationships.setAttribute('xmlns', xmlns.r);

    let docRelationship = relationships.appendChild(doc.createElement('Relationship'));
    docRelationship.setAttribute('Id', 'rId1');
    docRelationship.setAttribute('Type', 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument');
    docRelationship.setAttribute('Target', 'word/document.xml');

    // docPart is the word document
    let docPart = pkg.appendChild(doc.createElementNS(xmlns.pkg, 'pkg:part'));
    docPart.setAttributeNS(xmlns.pkg, 'pkg:name', '/word/document.xml');
    docPart.setAttributeNS(xmlns.pkg, 'pkg:contentType', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml');
    let docData = docPart.appendChild(doc.createElementNS(xmlns.pkg, 'pkg:xmlData'));

    let document = docData.appendChild(doc.createElementNS(xmlns.w, 'w:document'));
    let body = document.appendChild(doc.createElementNS(xmlns.w, 'w:body'));
    var paragraph = body.appendChild(doc.createElementNS(xmlns.w, 'w:p'));

    // check if there a main style for this theme
    let baseStyle = styles.getStyle(themeName, 'hljs');
    if (baseStyle) {
        let bgColor = baseStyle['background'];
        if (bgColor && bgColor[0] == '#') {
            // bgColor can be '#xxx url(...' so only get the color part
            bgColor = bgColor.split(' ', 1)[0].substr(1);
            if (bgColor.length == 3) {
                bgColor = bgColor[0] + bgColor[0] + bgColor[1] + bgColor[1] + bgColor[2] + bgColor[2];
            }

            let pPr = paragraph.appendChild(doc.createElementNS(xmlns.w, 'w:pPr'));
            let pShd = pPr.appendChild(doc.createElementNS(xmlns.w, 'w:shd'));
            pShd.setAttributeNS(xmlns.w, 'w:val', 'clear');
            pShd.setAttributeNS(xmlns.w, 'w:color', 'auto');
            pShd.setAttributeNS(xmlns.w, 'w:fill', bgColor);

            // empty paragraph is needed for fill to work
            body.appendChild(doc.createElementNS(xmlns.w, 'w:p'));
        }
    }

    function walk(node: Node, styleIds: string[]) {
        // If we've found a text node, add it to the ooxml document
        if (node.nodeType == node.TEXT_NODE) {
            let run = paragraph.appendChild(doc.createElementNS(xmlns.w, 'w:r'));
            let runPr = run.appendChild(doc.createElementNS(xmlns.w, 'w:rPr'));

            let rFonts = runPr.appendChild(doc.createElementNS(xmlns.w, 'w:rFonts'));
            rFonts.setAttributeNS(xmlns.w, 'w:ascii', 'Courier New');
            rFonts.setAttributeNS(xmlns.w, 'w:hAnsi', 'Courier New');
            rFonts.setAttributeNS(xmlns.w, 'w:cs', 'Courier New');

            var combinedStyle = {};
            for (var styleId of styleIds) {
                let style = styles.getStyle(themeName, styleId, false);
                if (style) {
                    Object.keys(style).forEach((key) => {
                        combinedStyle[key] = style[key];
                    });
                }
            }

            if (combinedStyle['color']) {
                let color = combinedStyle['color'];

                if (color[0] == '#') {
                    color = color.substr(1);
                }

                if (color.length == 3) {
                    color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2];
                }

                let rColor = runPr.appendChild(doc.createElementNS(xmlns.w, 'w:color'));
                rColor.setAttributeNS(xmlns.w, 'w:val', color);
            }

            let bgColor = combinedStyle['background-color'];
            if (bgColor && bgColor[0] == '#') {
                bgColor = bgColor.substr(1);

                if (bgColor.length == 3) {
                    bgColor = bgColor[0] + bgColor[0] + bgColor[1] + bgColor[1] + bgColor[2] + bgColor[2];
                }

                let rShd = runPr.appendChild(doc.createElementNS(xmlns.w, 'w:shd'));
                rShd.setAttributeNS(xmlns.w, 'w:fill', bgColor);
                rShd.setAttributeNS(xmlns.w, 'w:color', bgColor);
                rShd.setAttributeNS(xmlns.w, 'w:val', 'solid');
            }

            if (combinedStyle['font-weight']) {
                let fontWeight = combinedStyle['font-weight'];
                if (fontWeight == 'bold') {
                    runPr.appendChild(doc.createElementNS(xmlns.w, 'w:b'));
                }
            }

            if (combinedStyle['font-style']) {
                let fontStyle = combinedStyle['font-style'];
                if (fontStyle == 'italic') {
                    runPr.appendChild(doc.createElementNS(xmlns.w, 'w:i'));
                }
            }

            let count = 0;
            for (let line of node.textContent.split('\r')) {
                if (count > 0) {
                    run.appendChild(doc.createElementNS(xmlns.w, 'w:br'))
                }
                if (line) {
                    let text = run.appendChild(doc.createElementNS(xmlns.w, 'w:t'))
                    text.setAttribute('xml:space', 'preserve');
                    text.appendChild(doc.createTextNode(line));
                }
                count++;
            }
        }

        // Traverse down into the children nodes
        if (node.hasChildNodes()) {
            // If we come across a span element add its class to the styleIds for the next elements
            let childStyleIds = styleIds;
            if (node.nodeType == node.ELEMENT_NODE && node.nodeName == "span") {
                let element = node as Element;
                let nodeClass = element.getAttribute("class");

                if (nodeClass && nodeClass.search(/^hljs-/) == 0) {
                    let styleId = nodeClass.substr(5);
                    childStyleIds = [...childStyleIds, styleId];
                }
            }

            walk(node.firstChild, childStyleIds);
        }

        // Continue to any siblings, keeping the same styles (although there should only be
        // one child node of any span elements.
        if (node.nextSibling) {
            walk(node.nextSibling, styleIds);
        }
    }

    walk(htmlDoc.documentElement, ['hljs']);

    let preamble = `
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<?mso-application progid="Word.Document"?>`.replace(/[\n\r]/g, '');

    return preamble + doc.documentElement.toString();
}

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
    var html = '<div class="hljs"><pre><code>' + fragment.value + '</code></pre></div>'

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
                        css.push(`${key}: ${value}`);
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
