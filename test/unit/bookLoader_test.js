'use strict';




define(['bookloader'], function(BookLoader) {
    var actual;
    var callback = function (book)
    {
        for (var i = 0, l = book.toc.length; i < l; i++) {
            if (book.toc[i] === undefined) continue;
            var secName = book.toc[i].fileName;
            var title = book.toc[i].title;
        }
        actual = book.toc.length;
    };

    describe('BookLoader ::>', function()
    {

        var sut;

        beforeEach(function()
        {
            sut = null;
        });

        it('BookLoader Class when instanciate should not throw errors', function()
        {
            sut = new BookLoader('test/resources/wizardofoz.epub');
            expect(sut.epubUrl).toBe('test/resources/wizardofoz.epub');
        });

        it('openFromByteArray() when called should open ePub', function()
        {
            sut = new BookLoader('test/resources/wizardofoz.epub');
            sut.openEpubFromByteArray(zipBlob(shelleypoetry_epub),callback);
            expect(sut.epubUrl).toBe('test/resources/wizardofoz.epub');
        });

        it('openFromByteArray() when called without epub shoud continue with no error', function()
        {
            sut = new BookLoader();
            sut.openEpubFromByteArray(zipBlob(shelleypoetry_epub),callback);
            expect(sut.epubUrl).toBe('');
        });

        it('openEpubFromByteArray() when called with callback uses it', function()
        {
            sut = new BookLoader();

            sut.openEpubFromByteArray(zipBlob(shelleypoetry_epub), callback);

            expect(actual).toBe(21);
        });


    });

});