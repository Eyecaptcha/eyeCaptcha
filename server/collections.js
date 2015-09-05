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

//ADVERTISERS IMAGE COLLECTION
Meteor.publish('Advertisers', function(){
	return Advertisers.find();
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

//TESTS COLLECTION (MONGO COLLECTION REFERS TO COMPANIES COLLECTION)
Meteor.publish('Tests', function(){
	return Tests.find();
});
