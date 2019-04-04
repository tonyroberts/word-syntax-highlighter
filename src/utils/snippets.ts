import {languages} from "./highlighter";

const _1c = require('../snippets/1c.txt');
const _abnf = require('../snippets/abnf.txt');
const _accesslog = require('../snippets/accesslog.txt');
const _actionscript = require('../snippets/actionscript.txt');
const _ada = require('../snippets/ada.txt');
const _angelscript = require('../snippets/angelscript.txt');
const _apache = require('../snippets/apache.txt');
const _applescript = require('../snippets/applescript.txt');
const _arcade = require('../snippets/arcade.txt');
const _arduino = require('../snippets/arduino.txt');
const _armasm = require('../snippets/armasm.txt');
const _asciidoc = require('../snippets/asciidoc.txt');
const _aspectj = require('../snippets/aspectj.txt');
const _autohotkey = require('../snippets/autohotkey.txt');
const _autoit = require('../snippets/autoit.txt');
const _avrasm = require('../snippets/avrasm.txt');
const _awk = require('../snippets/awk.txt');
const _axapta = require('../snippets/axapta.txt');
const _bash = require('../snippets/bash.txt');
const _basic = require('../snippets/basic.txt');
const _bnf = require('../snippets/bnf.txt');
const _brainfuck = require('../snippets/brainfuck.txt');
const _cal = require('../snippets/cal.txt');
const _capnproto = require('../snippets/capnproto.txt');
const _ceylon = require('../snippets/ceylon.txt');
const _clean = require('../snippets/clean.txt');
const _clojure_repl = require('../snippets/clojure-repl.txt');
const _clojure = require('../snippets/clojure.txt');
const _cmake = require('../snippets/cmake.txt');
const _coffeescript = require('../snippets/coffeescript.txt');
const _coq = require('../snippets/coq.txt');
const _cos = require('../snippets/cos.txt');
const _cpp = require('../snippets/cpp.txt');
const _crmsh = require('../snippets/crmsh.txt');
const _crystal = require('../snippets/crystal.txt');
const _cs = require('../snippets/cs.txt');
const _csp = require('../snippets/csp.txt');
const _css = require('../snippets/css.txt');
const _d = require('../snippets/d.txt');
const _dart = require('../snippets/dart.txt');
const _delphi = require('../snippets/delphi.txt');
const _diff = require('../snippets/diff.txt');
const _django = require('../snippets/django.txt');
const _dns = require('../snippets/dns.txt');
const _dockerfile = require('../snippets/dockerfile.txt');
const _dos = require('../snippets/dos.txt');
const _dsconfig = require('../snippets/dsconfig.txt');
const _dts = require('../snippets/dts.txt');
const _dust = require('../snippets/dust.txt');
const _ebnf = require('../snippets/ebnf.txt');
const _elixir = require('../snippets/elixir.txt');
const _elm = require('../snippets/elm.txt');
const _erb = require('../snippets/erb.txt');
const _erlang_repl = require('../snippets/erlang-repl.txt');
const _erlang = require('../snippets/erlang.txt');
const _excel = require('../snippets/excel.txt');
const _fix = require('../snippets/fix.txt');
const _flix = require('../snippets/flix.txt');
const _fortran = require('../snippets/fortran.txt');
const _fsharp = require('../snippets/fsharp.txt');
const _gams = require('../snippets/gams.txt');
const _gauss = require('../snippets/gauss.txt');
const _gcode = require('../snippets/gcode.txt');
const _gherkin = require('../snippets/gherkin.txt');
const _glsl = require('../snippets/glsl.txt');
const _gml = require('../snippets/gml.txt');
const _go = require('../snippets/go.txt');
const _golo = require('../snippets/golo.txt');
const _gradle = require('../snippets/gradle.txt');
const _groovy = require('../snippets/groovy.txt');
const _haml = require('../snippets/haml.txt');
const _handlebars = require('../snippets/handlebars.txt');
const _haskell = require('../snippets/haskell.txt');
const _haxe = require('../snippets/haxe.txt');
const _hsp = require('../snippets/hsp.txt');
const _htmlbars = require('../snippets/htmlbars.txt');
const _http = require('../snippets/http.txt');
const _hy = require('../snippets/hy.txt');
const _inform7 = require('../snippets/inform7.txt');
const _ini = require('../snippets/ini.txt');
const _irpf90 = require('../snippets/irpf90.txt');
const _isbl = require('../snippets/isbl.txt');
const _java = require('../snippets/java.txt');
const _javascript = require('../snippets/javascript.txt');
const _jboss_cli = require('../snippets/jboss-cli.txt');
const _json = require('../snippets/json.txt');
const _julia_repl = require('../snippets/julia-repl.txt');
const _julia = require('../snippets/julia.txt');
const _kotlin = require('../snippets/kotlin.txt');
const _lasso = require('../snippets/lasso.txt');
const _ldif = require('../snippets/ldif.txt');
const _leaf = require('../snippets/leaf.txt');
const _less = require('../snippets/less.txt');
const _lisp = require('../snippets/lisp.txt');
const _livecodeserver = require('../snippets/livecodeserver.txt');
const _livescript = require('../snippets/livescript.txt');
const _llvm = require('../snippets/llvm.txt');
const _lsl = require('../snippets/lsl.txt');
const _lua = require('../snippets/lua.txt');
const _makefile = require('../snippets/makefile.txt');
const _markdown = require('../snippets/markdown.txt');
const _mathematica = require('../snippets/mathematica.txt');
const _matlab = require('../snippets/matlab.txt');
const _maxima = require('../snippets/maxima.txt');
const _mel = require('../snippets/mel.txt');
const _mercury = require('../snippets/mercury.txt');
const _mipsasm = require('../snippets/mipsasm.txt');
const _mizar = require('../snippets/mizar.txt');
const _mojolicious = require('../snippets/mojolicious.txt');
const _monkey = require('../snippets/monkey.txt');
const _moonscript = require('../snippets/moonscript.txt');
const _n1ql = require('../snippets/n1ql.txt');
const _nginx = require('../snippets/nginx.txt');
const _nimrod = require('../snippets/nimrod.txt');
const _nix = require('../snippets/nix.txt');
const _nsis = require('../snippets/nsis.txt');
const _objectivec = require('../snippets/objectivec.txt');
const _ocaml = require('../snippets/ocaml.txt');
const _openscad = require('../snippets/openscad.txt');
const _oxygene = require('../snippets/oxygene.txt');
const _parser3 = require('../snippets/parser3.txt');
const _perl = require('../snippets/perl.txt');
const _pf = require('../snippets/pf.txt');
const _pgsql = require('../snippets/pgsql.txt');
const _php = require('../snippets/php.txt');
const _plaintext = require('../snippets/plaintext.txt');
const _pony = require('../snippets/pony.txt');
const _powershell = require('../snippets/powershell.txt');
const _processing = require('../snippets/processing.txt');
const _profile = require('../snippets/profile.txt');
const _prolog = require('../snippets/prolog.txt');
const _properties = require('../snippets/properties.txt');
const _protobuf = require('../snippets/protobuf.txt');
const _puppet = require('../snippets/puppet.txt');
const _purebasic = require('../snippets/purebasic.txt');
const _python = require('../snippets/python.txt');
const _q = require('../snippets/q.txt');
const _qml = require('../snippets/qml.txt');
const _r = require('../snippets/r.txt');
const _reasonml = require('../snippets/reasonml.txt');
const _rib = require('../snippets/rib.txt');
const _roboconf = require('../snippets/roboconf.txt');
const _routeros = require('../snippets/routeros.txt');
const _rsl = require('../snippets/rsl.txt');
const _ruby = require('../snippets/ruby.txt');
const _ruleslanguage = require('../snippets/ruleslanguage.txt');
const _rust = require('../snippets/rust.txt');
const _sas = require('../snippets/sas.txt');
const _scala = require('../snippets/scala.txt');
const _scheme = require('../snippets/scheme.txt');
const _scilab = require('../snippets/scilab.txt');
const _scss = require('../snippets/scss.txt');
const _shell = require('../snippets/shell.txt');
const _smali = require('../snippets/smali.txt');
const _smalltalk = require('../snippets/smalltalk.txt');
const _sml = require('../snippets/sml.txt');
const _sqf = require('../snippets/sqf.txt');
const _sql = require('../snippets/sql.txt');
const _stan = require('../snippets/stan.txt');
const _stata = require('../snippets/stata.txt');
const _step21 = require('../snippets/step21.txt');
const _stylus = require('../snippets/stylus.txt');
const _subunit = require('../snippets/subunit.txt');
const _swift = require('../snippets/swift.txt');
const _taggerscript = require('../snippets/taggerscript.txt');
const _tap = require('../snippets/tap.txt');
const _tcl = require('../snippets/tcl.txt');
const _tex = require('../snippets/tex.txt');
const _thrift = require('../snippets/thrift.txt');
const _tp = require('../snippets/tp.txt');
const _twig = require('../snippets/twig.txt');
const _typescript = require('../snippets/typescript.txt');
const _vala = require('../snippets/vala.txt');
const _vbnet = require('../snippets/vbnet.txt');
const _vbscript_html = require('../snippets/vbscript-html.txt');
const _vbscript = require('../snippets/vbscript.txt');
const _verilog = require('../snippets/verilog.txt');
const _vhdl = require('../snippets/vhdl.txt');
const _vim = require('../snippets/vim.txt');
const _x86asm = require('../snippets/x86asm.txt');
const _xl = require('../snippets/xl.txt');
const _xml = require('../snippets/xml.txt');
const _xquery = require('../snippets/xquery.txt');
const _yaml = require('../snippets/yaml.txt');
const _zephir = require('../snippets/zephir.txt');

const snippets = {
    "1c": _1c,
    "abnf": _abnf,
    "accesslog": _accesslog,
    "actionscript": _actionscript,
    "ada": _ada,
    "angelscript": _angelscript,
    "apache": _apache,
    "applescript": _applescript,
    "arcade": _arcade,
    "arduino": _arduino,
    "armasm": _armasm,
    "asciidoc": _asciidoc,
    "aspectj": _aspectj,
    "autohotkey": _autohotkey,
    "autoit": _autoit,
    "avrasm": _avrasm,
    "awk": _awk,
    "axapta": _axapta,
    "bash": _bash,
    "basic": _basic,
    "bnf": _bnf,
    "brainfuck": _brainfuck,
    "cal": _cal,
    "capnproto": _capnproto,
    "ceylon": _ceylon,
    "clean": _clean,
    "clojure-repl": _clojure_repl,
    "clojure": _clojure,
    "cmake": _cmake,
    "coffeescript": _coffeescript,
    "coq": _coq,
    "cos": _cos,
    "cpp": _cpp,
    "crmsh": _crmsh,
    "crystal": _crystal,
    "cs": _cs,
    "csp": _csp,
    "css": _css,
    "d": _d,
    "dart": _dart,
    "delphi": _delphi,
    "diff": _diff,
    "django": _django,
    "dns": _dns,
    "dockerfile": _dockerfile,
    "dos": _dos,
    "dsconfig": _dsconfig,
    "dts": _dts,
    "dust": _dust,
    "ebnf": _ebnf,
    "elixir": _elixir,
    "elm": _elm,
    "erb": _erb,
    "erlang-repl": _erlang_repl,
    "erlang": _erlang,
    "excel": _excel,
    "fix": _fix,
    "flix": _flix,
    "fortran": _fortran,
    "fsharp": _fsharp,
    "gams": _gams,
    "gauss": _gauss,
    "gcode": _gcode,
    "gherkin": _gherkin,
    "glsl": _glsl,
    "gml": _gml,
    "go": _go,
    "golo": _golo,
    "gradle": _gradle,
    "groovy": _groovy,
    "haml": _haml,
    "handlebars": _handlebars,
    "haskell": _haskell,
    "haxe": _haxe,
    "hsp": _hsp,
    "htmlbars": _htmlbars,
    "http": _http,
    "hy": _hy,
    "inform7": _inform7,
    "ini": _ini,
    "irpf90": _irpf90,
    "isbl": _isbl,
    "java": _java,
    "javascript": _javascript,
    "jboss-cli": _jboss_cli,
    "json": _json,
    "julia-repl": _julia_repl,
    "julia": _julia,
    "kotlin": _kotlin,
    "lasso": _lasso,
    "ldif": _ldif,
    "leaf": _leaf,
    "less": _less,
    "lisp": _lisp,
    "livecodeserver": _livecodeserver,
    "livescript": _livescript,
    "llvm": _llvm,
    "lsl": _lsl,
    "lua": _lua,
    "makefile": _makefile,
    "markdown": _markdown,
    "mathematica": _mathematica,
    "matlab": _matlab,
    "maxima": _maxima,
    "mel": _mel,
    "mercury": _mercury,
    "mipsasm": _mipsasm,
    "mizar": _mizar,
    "mojolicious": _mojolicious,
    "monkey": _monkey,
    "moonscript": _moonscript,
    "n1ql": _n1ql,
    "nginx": _nginx,
    "nimrod": _nimrod,
    "nix": _nix,
    "nsis": _nsis,
    "objectivec": _objectivec,
    "ocaml": _ocaml,
    "openscad": _openscad,
    "oxygene": _oxygene,
    "parser3": _parser3,
    "perl": _perl,
    "pf": _pf,
    "pgsql": _pgsql,
    "php": _php,
    "plaintext": _plaintext,
    "pony": _pony,
    "powershell": _powershell,
    "processing": _processing,
    "profile": _profile,
    "prolog": _prolog,
    "properties": _properties,
    "protobuf": _protobuf,
    "puppet": _puppet,
    "purebasic": _purebasic,
    "python": _python,
    "q": _q,
    "qml": _qml,
    "r": _r,
    "reasonml": _reasonml,
    "rib": _rib,
    "roboconf": _roboconf,
    "routeros": _routeros,
    "rsl": _rsl,
    "ruby": _ruby,
    "ruleslanguage": _ruleslanguage,
    "rust": _rust,
    "sas": _sas,
    "scala": _scala,
    "scheme": _scheme,
    "scilab": _scilab,
    "scss": _scss,
    "shell": _shell,
    "smali": _smali,
    "smalltalk": _smalltalk,
    "sml": _sml,
    "sqf": _sqf,
    "sql": _sql,
    "stan": _stan,
    "stata": _stata,
    "step21": _step21,
    "stylus": _stylus,
    "subunit": _subunit,
    "swift": _swift,
    "taggerscript": _taggerscript,
    "tap": _tap,
    "tcl": _tcl,
    "tex": _tex,
    "thrift": _thrift,
    "tp": _tp,
    "twig": _twig,
    "typescript": _typescript,
    "vala": _vala,
    "vbnet": _vbnet,
    "vbscript-html": _vbscript_html,
    "vbscript": _vbscript,
    "verilog": _verilog,
    "vhdl": _vhdl,
    "vim": _vim,
    "x86asm": _x86asm,
    "xl": _xl,
    "xml": _xml,
    "xquery": _xquery,
    "yaml": _yaml,
    "zephir": _zephir,
};


export function getSnippet(languageName: string): string | null {
    let language = languages[languageName];
    if (language === undefined) {
        language = languageName;
    }
    let code = snippets[language];
    return code ? code.default.trim().replace(/\r\n/g, '\n') : null;
}
