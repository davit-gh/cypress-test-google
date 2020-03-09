describe('Google Images', () => {

    beforeEach(() => {
        cy.visit('https://www.google.com/ncr')
    });

    // Check Google logo is displayed
    it('should be assert Google logo exists', () => {
        cy.get('img#hplogo').should('exist');
    });

    it('should search videos by typing a keyword and pressing Enter', () => {
        cy.get('input[name=q]').type("car").type('{enter}');
        // Navigate to Videos tab
        cy.get('a.q.qs').eq(1).click();
        cy.url().should('include','car');
    });


    it('should search videos by typing a keyword and clicking Search', () => {

        cy.get('input[name=q]').type("car");
        cy.get('center>input[type="submit"]').eq(2).click();
        cy.wait(1000);
        // Navigate to Videos tab
        cy.get('a.q.qs').eq(1).click();
        cy.url().should('include','car');
    });

    // I'm Feeling Lucky button testing is commented out because it
    // redirects to a third-party website but Cypress doesn't support cross origin testing

    // it('should search videos by typing a keyword and clicking Im Feeling Lucky', () => {
    //     cy.get('input[name=q]').type("car");
    //     cy.get('center>input[type="submit"]').eq(3).click();
    //     cy.url().should('include','youtube.com');
    // })

    it('should navigate to footer links', () => {

        cy.checkFooterLink(0, 'Privacy');
        cy.checkFooterLink(1, 'Terms');
        cy.checkFooterLink(2, 'Advertising');
        cy.checkFooterLink(3, 'Business');
        // This one is not allowed by Cypress because of cross-origin request
        //cy.checkFooterLink(4, 'About');
        cy.checkFooterLink(5, 'How Search works');
    });
});
