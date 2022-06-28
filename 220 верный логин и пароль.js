describe('Вход в личный кабинет', function () {
   it('Вход в личный кабинет', function () {
        cy.visit('https://www.220-volt.ru');
        cy.get('.header-panel-user-icon').click();
        cy.get('.form-submit-default').click();
        cy.get('#user_email').click().type('qaivlev@yandex.ru');
        cy.get('#user_password').click().type('qwerty11');
        cy.get('#link_login').click();
        cy.contains('валерий');
    })
})
