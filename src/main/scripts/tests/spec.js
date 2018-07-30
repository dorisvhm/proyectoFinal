describe('Protractor  App', function() {

	var testurl = 'http://localhost:3002';

	beforeEach(function() {
		browser.get(testurl);
	  });

	it('should have a title', function() {
		expect(browser.getTitle()).toEqual('MP');
	});

	it('should have same text', function() {
		element(by.id('nombre')).sendKeys('DORIS');
		expect(element(by.binding('persona.nombre')).getText())
			.toEqual('DORIS');
	});

});
