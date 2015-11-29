/*****************************************************************************/
/* Profiles: Event Handlers */
/*****************************************************************************/
Template.Profiles.events({

	'submit form': function(e, tmpl){
		e.preventDefault();

		var profile = Profiles.findOne({owner_id: Meteor.userId()});
		var pid = profile._id;

		if (!profile){
			Profiles.insert({
				name: tmpl.find('#name').value,
				owner_id: Meteor.userId(),
				picture_url: tmpl.find('#picture').value,
				neighbourhood: tmpl.find('#neighbourhood').value,
				bio: tmpl.find('#bio').value,
				is_local: tmpl.find('#local').value,
			});
			console.log("profile added");
		}else{

			Profiles.update({_id: pid},
			{
				$set: {
					name: tmpl.find('#name').value,
					owner_id: Meteor.userId(),
					picture_url: tmpl.find('#picture').value,
					neighbourhood: tmpl.find('#neighbourhood').value,
					bio: tmpl.find('#bio').value,
					is_local: tmpl.find('#local').value,
				}
			});
			console.log("profile updated");
		}
	}
});

/*****************************************************************************/
/* Profiles: Helpers */
/*****************************************************************************/
Template.Profiles.helpers({
	placeholderText: function ()
    {
        var profile = Profiles.findOne({owner_id: Meteor.userId()});
        var textHelper = {};
        // console.log(profile);
        if (profile)
        {
            textHelper.name = profile.name;
            textHelper.picture_url = profile.picture_url;
            textHelper.neighbourhood = profile.neighbourhood;
            textHelper.bio = profile.bio;
        }

        console.log(textHelper);
        return textHelper;
    }
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
