class HeaderLoginComponent {
    constructor(){
        this.header = element.all(by.css('#root > div'));
        this.logo = element(by.css('.login_logo'));
    }
}


module.exports = new HeaderLoginComponent;