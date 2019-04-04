
//
// Map of theme name to URLs
//
const themes = {
    'Default': 'highlight-js/styles/theme-default.css',
    'A11y Dark': 'highlight-js/styles/theme-a11y-dark.css',
    'A11y Light': 'highlight-js/styles/theme-a11y-light.css',
    'Agate': 'highlight-js/styles/theme-agate.css',
    'An Old Hope': 'highlight-js/styles/theme-an-old-hope.css',
    'AndroidStudio': 'highlight-js/styles/theme-androidstudio.css',
    'Arduino Light': 'highlight-js/styles/theme-arduino-light.css',
    'Arta': 'highlight-js/styles/theme-arta.css',
    'Ascetic': 'highlight-js/styles/theme-ascetic.css',
    'Atelier Cave Dark': 'highlight-js/styles/theme-atelier-cave-dark.css',
    'Atelier Cave Light': 'highlight-js/styles/theme-atelier-cave-light.css',
    'Atelier Dune Dark': 'highlight-js/styles/theme-atelier-dune-dark.css',
    'Atelier Dune Light': 'highlight-js/styles/theme-atelier-dune-light.css',
    'Atelier Estuary Dark': 'highlight-js/styles/theme-atelier-estuary-dark.css',
    'Atelier Estuary Light': 'highlight-js/styles/theme-atelier-estuary-light.css',
    'Atelier Forest Dark': 'highlight-js/styles/theme-atelier-forest-dark.css',
    'Atelier Forest Light': 'highlight-js/styles/theme-atelier-forest-light.css',
    'Atelier Heath Dark': 'highlight-js/styles/theme-atelier-heath-dark.css',
    'Atelier Heath Light': 'highlight-js/styles/theme-atelier-heath-light.css',
    'Atelier Lakeside Dark': 'highlight-js/styles/theme-atelier-lakeside-dark.css',
    'Atelier Lakeside Light': 'highlight-js/styles/theme-atelier-lakeside-light.css',
    'Atelier Plateau Dark': 'highlight-js/styles/theme-atelier-plateau-dark.css',
    'Atelier Plateau Light': 'highlight-js/styles/theme-atelier-plateau-light.css',
    'Atelier Savanna Dark': 'highlight-js/styles/theme-atelier-savanna-dark.css',
    'Atelier Savanna Light': 'highlight-js/styles/theme-atelier-savanna-light.css',
    'Atelier Seaside Dark': 'highlight-js/styles/theme-atelier-seaside-dark.css',
    'Atelier Seaside Light': 'highlight-js/styles/theme-atelier-seaside-light.css',
    'Atelier Sulphurpool Dark': 'highlight-js/styles/theme-atelier-sulphurpool-dark.css',
    'Atelier Sulphurpool Light': 'highlight-js/styles/theme-atelier-sulphurpool-light.css',
    'Atom One Dark Reasonable': 'highlight-js/styles/theme-atom-one-dark-reasonable.css',
    'Atom One Dark': 'highlight-js/styles/theme-atom-one-dark.css',
    'Atom One Light': 'highlight-js/styles/theme-atom-one-light.css',
    'Brown Paper': 'highlight-js/styles/theme-brown-paper.css',
    'Codepen Embed': 'highlight-js/styles/theme-codepen-embed.css',
    'Color Brewer': 'highlight-js/styles/theme-color-brewer.css',
    'Darcula': 'highlight-js/styles/theme-darcula.css',
    'Dark': 'highlight-js/styles/theme-dark.css',
    'Darkula': 'highlight-js/styles/theme-darkula.css',
    'Docco': 'highlight-js/styles/theme-docco.css',
    'Dracula': 'highlight-js/styles/theme-dracula.css',
    'Far': 'highlight-js/styles/theme-far.css',
    'Foundation': 'highlight-js/styles/theme-foundation.css',
    'Github Gist': 'highlight-js/styles/theme-github-gist.css',
    'Github': 'highlight-js/styles/theme-github.css',
    'Gml': 'highlight-js/styles/theme-gml.css',
    'Googlecode': 'highlight-js/styles/theme-googlecode.css',
    'Grayscale': 'highlight-js/styles/theme-grayscale.css',
    'Gruvbox Dark': 'highlight-js/styles/theme-gruvbox-dark.css',
    'Gruvbox Light': 'highlight-js/styles/theme-gruvbox-light.css',
    'Hopscotch': 'highlight-js/styles/theme-hopscotch.css',
    'Hybrid': 'highlight-js/styles/theme-hybrid.css',
    'Idea': 'highlight-js/styles/theme-idea.css',
    'Ir Black': 'highlight-js/styles/theme-ir-black.css',
    'Isbl Editor Dark': 'highlight-js/styles/theme-isbl-editor-dark.css',
    'Isbl Editor Light': 'highlight-js/styles/theme-isbl-editor-light.css',
    'Kimbie Dark': 'highlight-js/styles/theme-kimbie.dark.css',
    'Kimbie Light': 'highlight-js/styles/theme-kimbie.light.css',
    'Lightfair': 'highlight-js/styles/theme-lightfair.css',
    'Magula': 'highlight-js/styles/theme-magula.css',
    'Mono Blue': 'highlight-js/styles/theme-mono-blue.css',
    'Monokai Sublime': 'highlight-js/styles/theme-monokai-sublime.css',
    'Monokai': 'highlight-js/styles/theme-monokai.css',
    'Nord': 'highlight-js/styles/theme-nord.css',
    'Obsidian': 'highlight-js/styles/theme-obsidian.css',
    'Ocean': 'highlight-js/styles/theme-ocean.css',
    'Paraiso Dark': 'highlight-js/styles/theme-paraiso-dark.css',
    'Paraiso Light': 'highlight-js/styles/theme-paraiso-light.css',
    'Pojoaque': 'highlight-js/styles/theme-pojoaque.css',
    'Purebasic': 'highlight-js/styles/theme-purebasic.css',
    'Qtcreator Dark': 'highlight-js/styles/theme-qtcreator_dark.css',
    'Qtcreator Light': 'highlight-js/styles/theme-qtcreator_light.css',
    'Railscasts': 'highlight-js/styles/theme-railscasts.css',
    'Rainbow': 'highlight-js/styles/theme-rainbow.css',
    'Routeros': 'highlight-js/styles/theme-routeros.css',
    'School Book': 'highlight-js/styles/theme-school-book.css',
    'Shades Of Purple': 'highlight-js/styles/theme-shades-of-purple.css',
    'Solarized Dark': 'highlight-js/styles/theme-solarized-dark.css',
    'Solarized Light': 'highlight-js/styles/theme-solarized-light.css',
    'Sunburst': 'highlight-js/styles/theme-sunburst.css',
    'Tomorrow Night Blue': 'highlight-js/styles/theme-tomorrow-night-blue.css',
    'Tomorrow Night Bright': 'highlight-js/styles/theme-tomorrow-night-bright.css',
    'Tomorrow Night Eighties': 'highlight-js/styles/theme-tomorrow-night-eighties.css',
    'Tomorrow Night': 'highlight-js/styles/theme-tomorrow-night.css',
    'Tomorrow': 'highlight-js/styles/theme-tomorrow.css',
    'VS': 'highlight-js/styles/theme-vs.css',
    'VS2015': 'highlight-js/styles/theme-vs2015.css',
    'Xcode': 'highlight-js/styles/theme-xcode.css',
    'Xt256': 'highlight-js/styles/theme-xt256.css',
    'Zenburn': 'highlight-js/styles/theme-zenburn.css'
}

export function changeTheme(theme: string) {
    // look up the url for the theme
    let themeUrl = themes[theme];
    if (!themeUrl) {
        console.error("Unknown theme " + theme);
        return;
    }

    // Check any current links for the 'data-theme' attribute
    let currentLinks = document.getElementsByTagName('link');
    let linksToRemove = new Array<HTMLLinkElement>();
    if (currentLinks) {
        for (let i=0; i<currentLinks.length; ++i) {
            let currentLink = currentLinks[i] as HTMLLinkElement;
            let currentTheme = currentLink.dataset ? currentLink.dataset.theme : currentLink.getAttribute('data-theme');
            if (currentTheme) {
                linksToRemove.push(currentLink);
            }
            if (currentTheme == theme){
                return;
            }
        }
    }

    // create a new element to load the theme
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = themeUrl;
    if (link.dataset) {
        link.dataset.theme = theme;
    } else {
        link.setAttribute('data-theme', theme);
    }

    // add the new link to the page
    const head = document.head || document.getElementsByTagName('head')[0];
    head.appendChild(link);

    // once the theme has loaded, remove the previous one
    link.onload = () => {
        for (let link of linksToRemove) {
            link.parentNode.removeChild(link);
        }
    };
}

