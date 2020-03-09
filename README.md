# Google Videos page automated testing with Cypress

The tests are in the file integration/google-images_spec.js 
The following tests are written
- validate the logo is displayed
- search videos by typing a keyword and pressing Enter
- search videos by typing a keyword and clicking Search
- validate the footer links

A custom command *cy.checkFooterLink(index, anchorText)* is added to support/commands.js file. The command accepts 2 arguments - index and text then checks that a tag with given index contains the given text. Then clicks the **a** tag and checks that the resulting URL contains the given text.
5 footer links are checked using this command.
