var https = require("https");

class smsSender {
    constructor(smsSenderParameters) {
        this.login = smsSenderParameters.login;
        this.password = smsSenderParameters.password;
        this.companyId = smsSenderParameters.companyId;
        this.smsServiceAddress = smsSenderParameters.smsServiceAddress;
        this.servicePort = smsSenderParameters.servicePort;
    }

    _getUrlForSms(destination, smsText, referenceNumber) {
        return "/v3/send?"
            + "username=" + encodeURIComponent(this.login)
            + "&password=" + encodeURIComponent(this.password)
            + "&tel=" + encodeURIComponent(destination)
            + "&SourceAddr=" + encodeURIComponent(destination)
            + "&msg=" + encodeURIComponent(smsText)
            + "&campaignid=" + encodeURIComponent(this.companyId)
            + "&refno=" + encodeURIComponent(referenceNumber);
    }

    sendSms(destination, smsTemplate, referenceNumber) {
        var httpsRequestParameters = {
            hostname: this.smsServiceAddress,
            port: this.servicePort,
            path: this._getUrlForSms(destination, smsTemplate.text(), referenceNumber),
            method: 'POST',
            headers: {}
        }
        var req = https.request(options, (res) => {
            if (res.statusCode == 200) {
                return {
                    success: true,
                    errorCode: ''
                }
            } else {
                return {
                    success: false,
                    errorCode: 'server responsed with ' + res.statusCode
                }
            }
        });
    }
}

module.export{

}