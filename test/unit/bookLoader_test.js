'use strict';


describe('BookLoader ::>', function(){

    var sut;

//    beforeEach(
//
//    );

    it('BookLoader Class when instanciate should not throw errors', function()
    {
        sut = new BookLoader('test/resources/wizardofoz.epub');
        expect(sut.epubUrl).toBe('test/resources/wizardofoz.epub');
    });

    it('openEpub() when called should open ePub', function()
    {
        sut = new BookLoader('test/resources/wizardofoz.epub');
        sut.openEpub();
        expect(sut.epubUrl).toBe('test/resources/wizardofoz.epub');
    });

    it('openEpub() when called should callback paint methods', function()
    {
        sut = new BookLoader('test/resources/wizardofoz.epub');
        sut.openEpub();
//        var viewStub=createHomeView($scope)
//        viewStub=sinon.mock(viewStub);
//        viewStub.init=function() {viewStub.onInit();};
//
//        var getView=function()
//        {
//            return viewStub;
//        }
//        var newsModel=sinon.mock(New);
//        newsModel.getNews=function()
//        {
//            return array();
//        }
//        var homePresenter = $controller('HomeCtrl', {
//            $scope: $scope,
//            modelNew: newsModel,
//            constructor: getView
//        });

//        expect(sut.epubUrl).toBe('test/resources/wizardofoz.epub23');
    });


});