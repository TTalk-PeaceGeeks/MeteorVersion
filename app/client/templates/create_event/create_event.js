/*****************************************************************************/
/* CreateEvent: Event Handlers */
/*****************************************************************************/
Template.CreateEvent.events({
	 /*
	 events:
created_by:
name:
location:
date:
picture_URL:
cost:*/
'submit form': function(e, tmpl){
	e.preventDefault();

	Events.insert({
		name: tmpl.find('#name').value,
		create_by: Meteor.userId(),
		location: tmpl.find('#location').value,
		date: tmpl.find('#eventDate').value,
		picture_url: tmpl.find('#picture').value,
		cost: tmpl.find('#cost').value,
	});
	console.log("event added");

}
});

/*****************************************************************************/
/* CreateEvent: Helpers */
/*****************************************************************************/
Template.CreateEvent.helpers({
});

/*****************************************************************************/
/* CreateEvent: Lifecycle Hooks */
/*****************************************************************************/
Template.CreateEvent.onCreated(function () {
});

Template.CreateEvent.onRendered(function () {
});

Template.CreateEvent.onDestroyed(function () {
});
