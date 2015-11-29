/*****************************************************************************/
/* EventItem: Event Handlers */
/*****************************************************************************/
Template.EventItem.events({
});

/*****************************************************************************/
/* EventItem: Helpers */
/*****************************************************************************/
Template.EventItem.helpers({
	creator: function(){
		return Profiles.findOne({owner_id: this.created_by}).name;
	}
});

/*****************************************************************************/
/* EventItem: Lifecycle Hooks */
/*****************************************************************************/
Template.EventItem.onCreated(function () {
});

Template.EventItem.onRendered(function () {
});

Template.EventItem.onDestroyed(function () {
});
