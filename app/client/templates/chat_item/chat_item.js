/*****************************************************************************/
/* ChatItem: Event Handlers */
/*****************************************************************************/
Template.ChatItem.events({
});

/*****************************************************************************/
/* ChatItem: Helpers */
/*****************************************************************************/
Template.ChatItem.helpers({
	time: function(){
		return moment(this.CreatedAt).fromNow();
	},

	author: function(){
		return Profiles.findOne({owner_id: this.author_id}).name;
	}
});

/*****************************************************************************/
/* ChatItem: Lifecycle Hooks */
/*****************************************************************************/
Template.ChatItem.onCreated(function () {
});

Template.ChatItem.onRendered(function () {
});

Template.ChatItem.onDestroyed(function () {
});
