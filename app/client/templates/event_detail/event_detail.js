/*****************************************************************************/
/* EventDetail: Event Handlers */
/*****************************************************************************/
Template.EventDetail.events({
});

/*****************************************************************************/
/* EventDetail: Helpers */
/*****************************************************************************/
Template.EventDetail.helpers({
	chats: function(){
		// return Chats.find({topic_id: this._id}, 
		// 	{sort: {createdAt: -1}
		// });
// console.log(debug);
// console.log(Chats.findOne({event_id: this._id}, {sort: {createdAt: -1}}));
		return Chats.find({event_id: this._id}, {sort: {createdAt: -1}});
	},

	isMyEvent: function(){
		return this.created_by == Meteor.userId();
	}
});

/*****************************************************************************/
/* EventDetail: Lifecycle Hooks */
/*****************************************************************************/
Template.EventDetail.onCreated(function () {
});

Template.EventDetail.onRendered(function () {
});

Template.EventDetail.onDestroyed(function () {
});
