//FREE IMAGE COLLECTION
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

Meteor.publish('freeimagescount', function() {
  var freeimagecount = Free.find().count();
	return freeimagecount;
});

//ADVERTISERS IMAGE COLLECTION
Meteor.publish('Advertisers', function(){
	return Free.find();
});

Advertisers.allow({
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
