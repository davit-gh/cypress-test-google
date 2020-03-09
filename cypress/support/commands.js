
Cypress.Commands.add("checkFooterLink", (index, anchorText) => {
    cy.get('div.fbar > span > a').eq(index).contains(anchorText).click(() => {
        cy.url().should('include', anchorText);
    });
    cy.go('back');
});


