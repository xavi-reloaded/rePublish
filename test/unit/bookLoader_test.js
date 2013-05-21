'use strict';




describe('BookLoader ::>', function()
{

    var sut;

//    beforeEach(
//
//    );

    it('BookLoader Class when instanciate should not throw errors', function()
    {
        sut = new BookLoader('test/resources/wizardofoz.epub');
        expect(sut.epubUrl).toBe('test/resources/wizardofoz.epub');
    });

    it('openEpubFromByteArray() when called should open ePub', function()
    {
        sut = new BookLoader('test/resources/wizardofoz.epub');
        sut.openEpubFromByteArray(zipBlob(shelleypoetry_epub));
        expect(sut.epubUrl).toBe('test/resources/wizardofoz.epub');
    });

    it('openEpubFromByteArray() when called without epub shoud continue with no error', function()
    {
        sut = new BookLoader();
        sut.openEpubFromByteArray(zipBlob(shelleypoetry_epub));
        expect(sut.epubUrl).toBe('');
    });

    it('openEpubFromByteArray() when called with callback uses it', function()
    {
        sut = new BookLoader();
        var actual;
        var callback = function (book)
        {
            for (var i = 0, l = book.toc.length; i < l; i++) {
                if (book.toc[i] === undefined) continue;
                var secName = book.toc[i].fileName;
                var title = book.toc[i].title;

                console.log( book.toc[i]);
                console.log(secName);
                console.log(title);
                console.log('______________________________________________________________________________');
            }
            actual = book.toc.length;
        };
        sut.openEpubFromByteArray(zipBlob(shelleypoetry_epub), callback);

        expect(actual).toBe(21);
    });


});