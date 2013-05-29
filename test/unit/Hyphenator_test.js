'use strict';

define(['hyphenator'], function(h) {

    describe('Hyphenator', function(){

        var Hyphenator;

        beforeEach(function()
        {
            Hyphenator = new h();
        })

        it('Hyphenator should be a valid EventedCache Object', function()
        {
            expect(Hyphenator==null).toBe(false);
        });

        it('run() should return hyphenated text', function()
        {
            Hyphenator.config({displaytogglebox: true, intermediatestate: 'visible'});
            Hyphenator.run();
        })

        it('calling version should return current correct version', function()
        {
            expect(Hyphenator.version).toBe('2.4.0');
        });

        it('loadPatterns( lang ) should load js language file placed on the patterns folder', function()
        {
            expect(Hyphenator.loadPatterns()).toBe(1);
        })

        it('languageHint should be accessed from ', function()
        {
            expect(Hyphenator.languageHint).toBe('cs, da, bn, de, en, es, fi, fr, gu, hi, hu, it, kn, ml, nl, or, pa, pl, pt, ru, sv, ta, te, tr, uk');
        })

        it('isBookmarklet() should work', function()
        {
            expect(Hyphenator.isBookmarklet()).toBe('asdf');
        })





    });


});

