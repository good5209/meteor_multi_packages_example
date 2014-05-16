if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to meteor_package_test.";
  };

  Template.hello.events({
    'click input': function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
	console.log('Basic package: ' + Basic);
	console.log('Package a: ' + Basic.A.test());
	console.log('Package b: ' + Basic.B.test());
  });
}
