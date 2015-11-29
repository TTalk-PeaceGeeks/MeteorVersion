if (Meteor.isClient) {
  Meteor.startup(function() {
    GoogleMaps.load();
  });
}

Template.MasterLayout.helpers({
});

Template.MasterLayout.events({
});
