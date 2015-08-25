Template.imgDisplay.helpers({
	avatar: function() {
								// Declare variables for the user, and then for the avatar itself.
		var avatar = Free.findOne().copies.free.key;

								//Use a conditional operator to determine whether to show a placeholder image or avatar image, and use the url()                     method on the avatar image object to update the source attribute.
		return (avatar);
	},
});
