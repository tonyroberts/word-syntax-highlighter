/*
 * Code for loading and inspecting the various different highlight.js styles.
 */
const cssparser = require("cssparser/lib/cssparser.js");

//
// These are URLs of the bundled CSS files.
// See webpack.config.js.
//
const default_style = require('highlight.js/styles/default.css');
const a11y_dark = require('highlight.js/styles/a11y-dark.css');
const a11y_light = require('highlight.js/styles/a11y-light.css');
const agate = require('highlight.js/styles/agate.css');
const an_old_hope = require('highlight.js/styles/an-old-hope.css');
const androidstudio = require('highlight.js/styles/androidstudio.css');
const arduino_light = require('highlight.js/styles/arduino-light.css');
const arta = require('highlight.js/styles/arta.css');
const ascetic = require('highlight.js/styles/ascetic.css');
const atelier_cave_dark = require('highlight.js/styles/atelier-cave-dark.css');
const atelier_cave_light = require('highlight.js/styles/atelier-cave-light.css');
const atelier_dune_dark = require('highlight.js/styles/atelier-dune-dark.css');
const atelier_dune_light = require('highlight.js/styles/atelier-dune-light.css');
const atelier_estuary_dark = require('highlight.js/styles/atelier-estuary-dark.css');
const atelier_estuary_light = require('highlight.js/styles/atelier-estuary-light.css');
const atelier_forest_dark = require('highlight.js/styles/atelier-forest-dark.css');
const atelier_forest_light = require('highlight.js/styles/atelier-forest-light.css');
const atelier_heath_dark = require('highlight.js/styles/atelier-heath-dark.css');
const atelier_heath_light = require('highlight.js/styles/atelier-heath-light.css');
const atelier_lakeside_dark = require('highlight.js/styles/atelier-lakeside-dark.css');
const atelier_lakeside_light = require('highlight.js/styles/atelier-lakeside-light.css');
const atelier_plateau_dark = require('highlight.js/styles/atelier-plateau-dark.css');
const atelier_plateau_light = require('highlight.js/styles/atelier-plateau-light.css');
const atelier_savanna_dark = require('highlight.js/styles/atelier-savanna-dark.css');
const atelier_savanna_light = require('highlight.js/styles/atelier-savanna-light.css');
const atelier_seaside_dark = require('highlight.js/styles/atelier-seaside-dark.css');
const atelier_seaside_light = require('highlight.js/styles/atelier-seaside-light.css');
const atelier_sulphurpool_dark = require('highlight.js/styles/atelier-sulphurpool-dark.css');
const atelier_sulphurpool_light = require('highlight.js/styles/atelier-sulphurpool-light.css');
const atom_one_dark_reasonable = require('highlight.js/styles/atom-one-dark-reasonable.css');
const atom_one_dark = require('highlight.js/styles/atom-one-dark.css');
const atom_one_light = require('highlight.js/styles/atom-one-light.css');
const brown_paper = require('highlight.js/styles/brown-paper.css');
const codepen_embed = require('highlight.js/styles/codepen-embed.css');
const color_brewer = require('highlight.js/styles/color-brewer.css');
const darcula = require('highlight.js/styles/darcula.css');
const dark = require('highlight.js/styles/dark.css');
const darkula = require('highlight.js/styles/darkula.css');
const docco = require('highlight.js/styles/docco.css');
const dracula = require('highlight.js/styles/dracula.css');
const far = require('highlight.js/styles/far.css');
const foundation = require('highlight.js/styles/foundation.css');
const github_gist = require('highlight.js/styles/github-gist.css');
const github = require('highlight.js/styles/github.css');
const gml = require('highlight.js/styles/gml.css');
const googlecode = require('highlight.js/styles/googlecode.css');
const grayscale = require('highlight.js/styles/grayscale.css');
const gruvbox_dark = require('highlight.js/styles/gruvbox-dark.css');
const gruvbox_light = require('highlight.js/styles/gruvbox-light.css');
const hopscotch = require('highlight.js/styles/hopscotch.css');
const hybrid = require('highlight.js/styles/hybrid.css');
const idea = require('highlight.js/styles/idea.css');
const ir_black = require('highlight.js/styles/ir-black.css');
const isbl_editor_dark = require('highlight.js/styles/isbl-editor-dark.css');
const isbl_editor_light = require('highlight.js/styles/isbl-editor-light.css');
const kimbie_dark = require('highlight.js/styles/kimbie.dark.css');
const kimbie_light = require('highlight.js/styles/kimbie.light.css');
const lightfair = require('highlight.js/styles/lightfair.css');
const magula = require('highlight.js/styles/magula.css');
const mono_blue = require('highlight.js/styles/mono-blue.css');
const monokai_sublime = require('highlight.js/styles/monokai-sublime.css');
const monokai = require('highlight.js/styles/monokai.css');
const nord = require('highlight.js/styles/nord.css');
const obsidian = require('highlight.js/styles/obsidian.css');
const ocean = require('highlight.js/styles/ocean.css');
const paraiso_dark = require('highlight.js/styles/paraiso-dark.css');
const paraiso_light = require('highlight.js/styles/paraiso-light.css');
const pojoaque = require('highlight.js/styles/pojoaque.css');
const purebasic = require('highlight.js/styles/purebasic.css');
const qtcreator_dark = require('highlight.js/styles/qtcreator_dark.css');
const qtcreator_light = require('highlight.js/styles/qtcreator_light.css');
const railscasts = require('highlight.js/styles/railscasts.css');
const rainbow = require('highlight.js/styles/rainbow.css');
const routeros = require('highlight.js/styles/routeros.css');
const school_book = require('highlight.js/styles/school-book.css');
const shades_of_purple = require('highlight.js/styles/shades-of-purple.css');
const solarized_dark = require('highlight.js/styles/solarized-dark.css');
const solarized_light = require('highlight.js/styles/solarized-light.css');
const sunburst = require('highlight.js/styles/sunburst.css');
const tomorrow_night_blue = require('highlight.js/styles/tomorrow-night-blue.css');
const tomorrow_night_bright = require('highlight.js/styles/tomorrow-night-bright.css');
const tomorrow_night_eighties = require('highlight.js/styles/tomorrow-night-eighties.css');
const tomorrow_night = require('highlight.js/styles/tomorrow-night.css');
const tomorrow = require('highlight.js/styles/tomorrow.css');
const vs = require('highlight.js/styles/vs.css');
const vs2015 = require('highlight.js/styles/vs2015.css');
const xcode = require('highlight.js/styles/xcode.css');
const xt256 = require('highlight.js/styles/xt256.css');
const zenburn = require('highlight.js/styles/zenburn.css');


//
// Map of theme name to URLs
//
const themes = {
    "Default": default_style,
    "A11y Dark": a11y_dark,
    "A11y Light": a11y_light,
    "Agate": agate,
    "An Old Hope": an_old_hope,
    "AndroidStudio": androidstudio,
    "Arduino Light": arduino_light,
    "Arta": arta,
    "Ascetic": ascetic,
    "Atelier Cave Dark": atelier_cave_dark,
    "Atelier Cave Light": atelier_cave_light,
    "Atelier Dune Dark": atelier_dune_dark,
    "Atelier Dune Light": atelier_dune_light,
    "Atelier Estuary Dark": atelier_estuary_dark,
    "Atelier Estuary Light": atelier_estuary_light,
    "Atelier Forest Dark": atelier_forest_dark,
    "Atelier Forest Light": atelier_forest_light,
    "Atelier Heath Dark": atelier_heath_dark,
    "Atelier Heath Light": atelier_heath_light,
    "Atelier Lakeside Dark": atelier_lakeside_dark,
    "Atelier Lakeside Light": atelier_lakeside_light,
    "Atelier Plateau Dark": atelier_plateau_dark,
    "Atelier Plateau Light": atelier_plateau_light,
    "Atelier Savanna Dark": atelier_savanna_dark,
    "Atelier Savanna Light": atelier_savanna_light,
    "Atelier Seaside Dark": atelier_seaside_dark,
    "Atelier Seaside Light": atelier_seaside_light,
    "Atelier Sulphurpool Dark": atelier_sulphurpool_dark,
    "Atelier Sulphurpool Light": atelier_sulphurpool_light,
    "Atom One Dark": atom_one_dark,
    "Atom One Dark Reasonable": atom_one_dark_reasonable,
    "Atom One Light": atom_one_light,
    "Brown Paper": brown_paper,
    "Codepen Embed": codepen_embed,
    "Color Brewer": color_brewer,
    "Darcula": darcula,
    "Dark": dark,
    "Darkula": darkula,
    "Docco": docco,
    "Dracula": dracula,
    "Far": far,
    "Foundation": foundation,
    "Github": github,
    "Github Gist": github_gist,
    "Gml": gml,
    "Googlecode": googlecode,
    "Grayscale": grayscale,
    "Gruvbox Dark": gruvbox_dark,
    "Gruvbox Light": gruvbox_light,
    "Hopscotch": hopscotch,
    "Hybrid": hybrid,
    "Idea": idea,
    "Ir Black": ir_black,
    "Isbl Editor Dark": isbl_editor_dark,
    "Isbl Editor Light": isbl_editor_light,
    "Kimbie Dark": kimbie_dark,
    "Kimbie Light": kimbie_light,
    "Lightfair": lightfair,
    "Magula": magula,
    "Mono Blue": mono_blue,
    "Monokai": monokai,
    "Monokai Sublime": monokai_sublime,
    "Nord": nord,
    "Obsidian": obsidian,
    "Ocean": ocean,
    "Paraiso Dark": paraiso_dark,
    "Paraiso Light": paraiso_light,
    "Pojoaque": pojoaque,
    "Purebasic": purebasic,
    "Qtcreator Dark": qtcreator_dark,
    "Qtcreator Light": qtcreator_light,
    "Railscasts": railscasts,
    "Rainbow": rainbow,
    "Routeros": routeros,
    "School Book": school_book,
    "Shades Of Purple": shades_of_purple,
    "Solarized Dark": solarized_dark,
    "Solarized Light": solarized_light,
    "Sunburst": sunburst,
    "Tomorrow": tomorrow,
    "Tomorrow Night": tomorrow_night,
    "Tomorrow Night Blue": tomorrow_night_blue,
    "Tomorrow Night Bright": tomorrow_night_bright,
    "Tomorrow Night Eighties": tomorrow_night_eighties,
    "VS": vs,
    "VS2015": vs2015,
    "Xcode": xcode,
    "Xt256": xt256,
    "Zenburn": zenburn
}


const styleOverrides = {
    'background': {
        "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAJ0lEQVQIW2O8e/fufwYGBgZBQUEQxcCIIfDu3Tuwivfv30NUoAsAALHpFMMLqZlPAAAAAElFTkSuQmCC) repeat": {
            'background-color': '#eee'
        }
    }
};


/*
 * Style interface for the individual styles loaded
 * from the CSS files.
 */
interface Style {
    color: string;
}

// Only load styles once
let loadedThemes = new Map<string, Style>();

/*
 * Load a theme as a map of Style instances.
 */
function loadTheme(name: string) {
    if (name in loadedThemes) {
        return loadedThemes[name];
    }

    let css = themes[name];
    if (!css) {
        throw new Error("Invalid style '" + name + "'.");
    }

    // Read the styles from the CSS
    var parser = new cssparser.Parser();
    var ast = parser.parse(css.toString());
    var json = ast.toJSON('simple');

    let styles = {};
    json.value.filter((r) => r.type == 'rule').forEach((rule) => {
        if (!rule.selectors || !rule.declarations) {
            return;
        }

        rule.selectors.filter((s) => s[0] == '.').map((s) => s.substr(1)).forEach((cls) => {
            let style = styles[cls];
            if (!style) {
                style = styles[cls] = {};
            }

            Object.keys(rule.declarations).forEach((key) => {
                let value = rule.declarations[key];
                let overrides = styleOverrides[key];
                if (overrides && overrides[value] && overrides[value] != 'inherit') {
                    // use the override value(s) instead of the actual value
                    let overrideValues = overrides[value];
                    Object.keys(overrideValues).forEach((oKey) => {
                        style[oKey] = overrideValues[oKey];
                    });
                }
                else {
                    style[key] = rule.declarations[key];
                }
            });
        });
    });

    loadedThemes[name] = styles;
    return styles;
}

/*
 * Returns the style for a token type with a specific theme
 */
export function getStyle(themeName: string, tokenType: string, includeBase: boolean = true) {
    let theme = loadTheme(themeName)

    if (includeBase) {
        let style = {};

        let base = theme["hljs"];
        if (base) {
            Object.keys(base).forEach((key) => {
                style[key] = base[key];
            });
        }

        let overrides = theme['hljs-' + tokenType];
        if (overrides) {
            Object.keys(overrides).forEach((key) => {
                style[key] = overrides[key];
            });
        }

        return style;
    }

    if (tokenType == 'hljs') {
        return theme['hljs'];
    }

    return theme['hljs-' + tokenType];
}

/*
 * Return a list of available themes
 */
export function getThemes() {
    return Object.keys(themes);
}

