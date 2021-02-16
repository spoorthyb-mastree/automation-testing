import { isPermissionAllowed, isPermissionBlocked, isPermissionAsk } from 'cypress-browser-permissions'

var loginField = '[autocomplete="email"]';
var passwordField = '[autocomplete="current-password"]'
var submitbutton = '[type="submit"]';

    // it ('Verify login',()=>{
    //    cy.visit('https://q3.tfulabs.com/login');
    //     cy.wait(3000)
    //     cy.get(loginField).type('royalj_teacher@mastree.io')
    //     cy.wait(3000)
    //     cy.get(passwordField).type('qwerty')
    //     cy.wait(3000)
    //     cy.get(submitbutton).click();
    //     cy.wait(20000)
    //     cy.get(':nth-child(5) > .liveLessonContent > :nth-child(1) > :nth-child(1) > .liveLessonCard').click({force:true});
    // })

    it ('enter ll',()=>{
      cy.visit('https://mastree.com/login');
       cy.wait(1000)
       cy.get(loginField).type('royalj_teacher@mastree.io')
       cy.wait(1000)
       cy.get(passwordField).type('qwerty')
       cy.wait(1000)
       cy.get(submitbutton).click();
       cy.wait(10000)
       cy.get(':nth-child(5) > .liveLessonContent > .liveLessonInner > :nth-child(1) > .liveLessonCard').click({force:true});
   })
//})
