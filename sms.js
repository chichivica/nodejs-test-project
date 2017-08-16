let mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    smsStatuses = require('schema-enums').smsStatuses,
    smsTypes = require('schema-enums').smsTypes;

let SmsSchema = new Schema({
    from: {type: String, required: true},
    to: {type: String, required: true},
    smsType: {
        type: Number,
        required: true,
        default: smsTypes.serverToUser,
        enum: smsTypes
    },
    smsStatus: {
        type: Number,
        required: true,
        default: smsStatuses.pending,
        enum: smsTypes
    },
    errorCode: { //in case of sending error
        type: String,
        required: true,
        default: new String(),
    },
    //internal id in terms of Vianett. Needed to identify receivement confirmations
    refno: {type: Number, required: true},
    sentAt: {type: Date},
    receivedAt: {type: Date},
    sendingAttempts: {type: Number, default: 0}
});

SmsSchema.methods.markAsSent = function () {
    this.sendingAttempts ++;
    this.sentAt = Date.now();
    this.smsStatus = smsStatuses.sent;
    this.errorCode = "";
    return this.save();
};

SmsSchema.methods.markAsFailed = function (error){
    this.smsStatus = smsStatuses.error;
    this.errorCode = error;
    return this.save();
};

SmsSchema.methods.markAsReceived = function (){
    this.smsStatus = smsStatuses.received;
    this.receivedAt = Date.now();
    this.errorCode = "";
    return this.save();
};

let Sms = mongoose.model('Sms', SmsSchema);

SmsSchema.statics.findFailedAndPended = function ()=> {
    return Sms.find({
        smsStatus: {
            '$in': [smsStatuses.pending,
                smsStatuses.error]
        }
    }).exec();
};


module.exports = {
    Sms
};