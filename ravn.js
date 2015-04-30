if (Meteor.isClient) {
  Template.sendEmailForm.helpers({
    return Meteor.users.find({});
  });  
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
