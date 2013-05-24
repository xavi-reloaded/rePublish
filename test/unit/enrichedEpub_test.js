'use strict';



define(['enrichedepub'], function(EnrichedEpub) {

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
    });

});