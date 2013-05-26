/**
 * Created with JetBrains PhpStorm.
 * User: fjhidalgo
 * Date: 5/23/13
 * Time: 12:56 PM
 * To change this template use File | Settings | File Templates.
 */



define(['zipclass'], function(zip) {

    describe('Z___||||> ZIP rePublish emmbeded class works', function() {
        it('should get zip class by requirejs', function() {
            var d = new zip();
            expect(d.giveMeSomeSugar()).toEqual('Hello, pinkainen');
        });

        it('Archive method should populate entries',function()
        {
            var z = new zip();
            var archive = new z.Archive(zipBlob(shelleypoetry_epub));
            expect(archive.entries.length).toEqual(18);
        });

        it('Archive method should populate files',function()
        {
            var z = new zip();
            var archive = new z.Archive(zipBlob(shelleypoetry_epub));
            var expected = 'META-INF/container.xml';
            expect(archive.files['META-INF/container.xml'].name).toEqual(expected);
        });

    });
});

