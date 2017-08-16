/**
 * Created by Ivan Talalaev on 3/17/2017.
 */
let nodeSchedule = require('node-schedule');

function super_action() {
  if (!super_action.times && super_action.times != 0) {
    super_action.times = 0;
  } else {
    super_action.times ++;
  }
  console.log(super_action.times);
}

function go() {
   nodeSchedule.scheduleJob('53 11 * * *', super_action);
}
go();
