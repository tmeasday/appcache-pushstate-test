if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to appcache-pushstate-test.";
  };

  Template.hello.events({
    'click input' : function () {
      history.pushState({}, 'foo', '/bar');
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
