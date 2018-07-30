describe('Protractor  App', function() {

	var testurl = 'http://localhost:3002';
	var alterarButton = element(by.id('alterar'));

	beforeEach(function() {
		browser.get(testurl);
	  });

	it('should have a title', function() {
		expect(browser.getTitle()).toEqual('MP');
	});

	it('should have same text', function() {
		element(by.id('simpleText')).sendKeys('Juan Paco Pedro');
		expect(element(by.binding('simpleModel')).getText())
			.toEqual('Juan Paco Pedro');
	});

});
