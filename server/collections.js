Meteor.publish('Free', function(){
	return Free.find();
});

Free.allow({
	download: function () {
		return true;
	},

	insert: function () {
		return true;
	},

	update: function () {
		return true;
	},

	remove: function () {
		return true;
	}
});