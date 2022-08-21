
describe('Тестирование главной страницы Google', function () {
   it('Проверка, что при поиске хатико в выдаче есть хатико', function () {
        cy.visit('https://google.com');
        cy.get("input[type='text']").type('хатико').type('{enter}');
        cy.contains('хатико');
    })
}
