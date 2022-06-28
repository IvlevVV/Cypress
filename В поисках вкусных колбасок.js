describe('Проверка яндекс поиск', function () {
   it('Проверка, поиска по значению «колбаса»', function () {
        cy.visit('https://yandex.ru/');
        cy.get('#text').click().type('колбаса').type('{enter}');
        cy.contains('Картинки по запросу «колбаса»')
    })
})
