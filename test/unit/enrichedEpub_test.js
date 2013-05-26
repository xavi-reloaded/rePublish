'use strict';



define(['enrichedepub'], function(EnrichedEpub) {
    var container_xml = "" +
        "<?xml version='1.0' encoding='utf-8'?>" +
        "<container xmlns=\"urn:oasis:names:tc:opendocument:xmlns:container\" version=\"1.0\">" +
        "<rootfiles>" +
        "    <rootfile media-type=\"application/oebps-package+xml\" full-path=\"OEBPS/content.opf\"/>" +
        "</rootfiles>" +
        "</container>";

    var content_opf = "<?xml version='1.0' encoding='utf-8'?>" +
        "<package xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns=\"http://www.idpf.org/2007/opf\" version=\"2.0\" unique-identifier=\"bookid\">" +
        "<metadata>" +
        "    <meta content=\"cover-image\" name=\"cover\"/>" +
        "    <dc:type>Text</dc:type>" +
        "    <dc:title>Shelley's poetry</dc:title>" +
        "    <dc:creator>Yolland, Arthur Battishill, 1874-</dc:creator>" +
        "    <dc:subject>Shelley, Percy Bysshe, 1792-1822</dc:subject>" +
        "    <dc:description>26</dc:description>" +
        "    <dc:publisher>Budapest Stephaneum Print. Co</dc:publisher>" +
        "    <dc:date>1907</dc:date>" +
        "    <dc:language>en</dc:language>" +
        "    <dc:contributor>Robarts - University of Toronto</dc:contributor>" +
        "    <dc:identifier id=\"bookid\">shelleyspoetry00yolluoft</dc:identifier>" +
        "</metadata>" +
        "<manifest>" +
        "<item href=\"leaf0001.html\" id=\"leaf0001\" media-type=\"application/xhtml+xml\"/>" +
        "<item href=\"part0000.html\" id=\"part0000\" media-type=\"application/xhtml+xml\"/>" +
        "<item href=\"toc.ncx\" id=\"ncx\" media-type=\"application/x-dtbncx+xml\"/>" +
        "</manifest>" +
        "" +
        "<spine toc=\"ncx\">" +
        "<itemref idref=\"leaf0001\" linear=\"no\"/>" +
        "<itemref idref=\"part0000\"/>" +
        "</spine>" +
        "" +
        "<guide>" +
        "   <reference href=\"leaf0001.html\" type=\"cover\" title=\"Front Cover\"/>" +
        "    <reference href=\"part0000.html\" type=\"text\" title=\"Book\"/>" +
        "</guide>" +
        "</package>";

    var toc_ncx = "" +
        "<?xml version='1.0' encoding='utf-8'?>" +
        "<!DOCTYPE ncx PUBLIC \"-//NISO//DTD ncx 2005-1//EN\" \"http://www.daisy.org/z3986/2005/ncx-2005-1.dtd\">" +
        "<ncx xmlns=\"http://www.daisy.org/z3986/2005/ncx/\" version=\"2005-1\">" +
        "    <head>" +
        "        <meta content=\"test id\" name=\"dtb:uid\"/>" +
        "        <meta content=\"0\" name=\"dtb:totalPageCount\"/>" +
        "        <meta content=\"0\" name=\"dtb:maxPageNumber\"/>" +
        "    </head>" +
        "    <docTitle>" +
        "        <text>Shelley's poetry</text>" +
        "    </docTitle>" +
        "    <docAuthor>" +
        "        <text>Yolland, Arthur Battishill, 1874-</text>" +
        "    </docAuthor>" +
        "    <navMap>" +
        "        <navInfo>" +
        "            <text>Book navigation</text>" +
        "        </navInfo>" +
        "        <navPoint playOrder=\"1\" id=\"navpointnavpoint000001\" class=\"navpoint-level1\">" +
        "            <navLabel>" +
        "                <text>Front Cover</text>" +
        "            </navLabel>" +
        "            <content src=\"leaf0001.html\"/>" +
        "        </navPoint>" +
        "    </navMap>" +
        "    <pageList>" +
        "        <navLabel>" +
        "            <text>Pages</text>" +
        "        </navLabel>" +
        "        <pageTarget type=\"normal\" id=\"pagetarget000005\" value=\"4\" playOrder=\"5\">" +
        "            <navLabel>" +
        "                <text>4</text>" +
        "            </navLabel>" +
        "            <content src=\"part0000.html#page-4\"/>" +
        "        </pageTarget>" +
        "    </pageList>" +
        "</ncx>";


    var files=[];
    files.push('META-INF/container.xml');
    files['META-INF/container.xml']={content:function(){return container_xml;}}
    files['OEBPS/content.opf']={content:function(){return content_opf;}}
    files['OEBPS/leaf0001.html']={content:function(){return "<html><head></head><body>CACAHUÉ</body></html>";}}
    files['OEBPS/toc.ncx']={content:function(){return toc_ncx;}}
    files['OEBPS/part0000.html']={content:function(){return "<html><head></head><body>part</body></html>";}}

    var archive = {files:files};


    describe('EnrichedEpub ::>', function(){

        it('openFromByteArray() when called with valid epub should catch book title', function()
        {
            var title;
            EnrichedEpub.openFromByteArray(zipBlob(shelleypoetry_epub), function (book)
            {
                title = book.title;
            });
            expect(title).toBe('Shelley\'s poetry');
        });

        it('Book() should load Book from archive', function( )
        {
            var actual = new EnrichedEpub.Book(archive);
            expect(actual.title).toBe('Shelley\'s poetry');
        });

        it('OCF should return valid archive rootFile', function(){
            var actual = new EnrichedEpub.OCF(container_xml);
            expect(actual.rootFile).toBe('OEBPS/content.opf');
        })

        it('OPF should return valid archive rootFile', function(){
            var actual = new EnrichedEpub.OPF('OEBPS/content.opf',archive);
            expect(actual.title).toBe('Shelley\'s poetry');
        })
    });

});