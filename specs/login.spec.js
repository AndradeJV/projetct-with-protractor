const LoginPage = require('../views/pages/LoginPage.js');
const HeaderLoginComponent = require('../views/components/HeaderLoginComponent.js');

const helper = require('protractor-helper');


describe('Login with any users', () => {
    beforeAll(() => {
        LoginPage.visit();
    });

    it('login with valid user', () => {
        
    });
});