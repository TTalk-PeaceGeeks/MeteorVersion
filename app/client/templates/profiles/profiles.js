/*****************************************************************************/
/* Profiles: Event Handlers */
/*****************************************************************************/
Template.Profiles.events({

	'submit form': function(e, tmpl){
		e.preventDefault();

		var profile = Profiles.findOne({owner_id: Meteor.userId()});

		if (!profile){
			Profiles.insert({
				name: tmpl.find('#name').value,
				owner_id: Meteor.userId(),
				picture_url: tmpl.find('#picture').value,
				neighbourhood: tmpl.find('#neighbourhood').value,
				bio: tmpl.find('#bio').value,
				is_local: tmpl.find('#local').value,
			});
		}else{
			console.log("don't save");
		}
	}
});

/*****************************************************************************/
/* Profiles: Helpers */
/*****************************************************************************/
Template.Profiles.helpers({
});

/*****************************************************************************/
/* Profiles: Lifecycle Hooks */
/*****************************************************************************/
Template.Profiles.onCreated(function () {
});

Template.Profiles.onRendered(function () {
});

Template.Profiles.onDestroyed(function () {
});
