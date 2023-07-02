//jshint esversion:6
//module.exports can be reduced to exports
exports.getDate= () => {

const today=new Date();
const options={weekday:"long",
              day:"numeric",
              month:"long"};
return today.toLocaleDateString("en-US",options);


}

exports.getDay= () => {

const today=new Date();
const options={weekday:"long",
              };
return today.toLocaleDateString("en-US",options);
};
