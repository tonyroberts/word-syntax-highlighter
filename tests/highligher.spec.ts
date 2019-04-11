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


describe('Convert to OOXML', () => {

    it('Should create simple document', () => {
        let result = highlighter.highlightOoxml("Python", 'Default', 'test');

        let expected = `
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<?mso-application progid="Word.Document"?>
<pkg:package xmlns:pkg="http://schemas.microsoft.com/office/2006/xmlPackage">
<pkg:part pkg:name="/_rels/.rels" pkg:contentType="application/vnd.openxmlformats-package.relationships+xml" pkg:padding="512">
<pkg:xmlData>
    <Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
        <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
    </Relationships>
</pkg:xmlData>
</pkg:part>
<pkg:part pkg:name="/word/document.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml">
<pkg:xmlData>
    <w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
    <w:body>
        <w:p>
            <w:pPr>
                <w:shd w:val="clear" w:color="auto" w:fill="F0F0F0"/>
            </w:pPr>
            <w:r>
                <w:rPr>
                    <w:rFonts w:ascii="Courier New" w:hAnsi="Courier New" w:cs="Courier New"/>
                </w:rPr>
                <w:t xml:space="preserve">test</w:t>
            </w:r>
        </w:p>
        <w:p/>
    </w:body>
</w:document>
</pkg:xmlData>
</pkg:part>
</pkg:package>`;

        expected = expected.replace(/\s*(.*)\n/g, '$1');
        expected = expected.replace(/"xmlns:/g, '" xmlns:');

        if (result != expected) {
            console.info(result);
            console.info(expected);
        }

        expect(result).toEqual(expected);

    });

});
