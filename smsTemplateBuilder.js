'use strict';

class smsTemplateBuilder {
    constructor() {
        this.text = "";
    };

    emailConfirmation() {
        this.text = "Dear " + this.username + ", we have send to you email '" + this.email
            + "' confirmation letter. Please follow the link";
    };

    registrationGreetings() {
        this.text =  "Dear " + this.username + ", you have already signed in bolink.no! Feel free to contact us!";
    };
}


module.exports = {
    smsTemplateBuilder
};