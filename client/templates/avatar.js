Template.imgDisplay.helpers({
	avatar: function() {
								// Declare variable for the avatar.
		var avatar = Free.findOne().copies.free.key;

		return (avatar);
	},
});
