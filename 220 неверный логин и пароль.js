describe('Вход с неверным паролем', function () {
   it('Вход с неверным паролем', function () {
        cy.visit('https://www.220-volt.ru');
        cy.get('.header-panel-user-icon').click();
        cy.get('#user_email').click().type('qaivlev@yandex.ru');
        cy.get('#user_password').click().type('123');
        cy.get('#link_login').click();
        cy.contains('Ошибка аутентификации.')
    })
})
