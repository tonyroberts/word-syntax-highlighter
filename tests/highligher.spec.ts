import 'jasmine';
import * as highlighter from '../src/utils/highlighter';
import * as styles from "../src/utils/styles";


describe('Highlight Python', () => {
    it('Should highlight a number', () => {
        let result = [];

        highlighter.highlight("Python", 'Default',"1", (cls, text) => {
            result.push([cls, text]);
        })

        let expected = [
            ["number", "1"]
        ]

        expect(result).toEqual(expected);
    });

    it("Github numbers should be colored", () => {
        let style = styles.getStyle("Github", "number");
        expect(style["color"]).toBe("#008080");
    });

    it("Using the wrong language shouldn't fail", () => {
        let script = '' +
            'def test(x, y, z):' +
            '    """hello"""' +
            '    i = 100';

        let result = '';
        highlighter.highlight("Pgsql", 'Default', script, (_, text) => {
            result += text;
        })

        expect(result).toEqual(script);
    });
});
