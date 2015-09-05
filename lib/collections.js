//FREE IMAGE COLLECTION
Free = new FS.Collection('free', {
	stores: [new FS.Store.FileSystem('free', {path: "../../../../../public/img/tests"})]
});

if (Meteor.isClient) {
	Meteor.subscribe('Free');
};

//ADVERTISERS IMAGE COLLECTION
Advertisers = new FS.Collection('advertisers', {
	stores: [new FS.Store.FileSystem('advertisers', {path: "../../../../../public/img/tests"})]
});

if (Meteor.isClient) {
	Meteor.subscribe('Advertisers');
};

//MONGO COLLECTION THAT STORES TESTS AND COMPANIES
Tests = new Mongo.Collection('tests');

if (Meteor.isClient) {
  // This code only runs on the client
	Meteor.subscribe("Tests", function(){
	      console.log(Tests, Tests.find(), Tests.find().fetch());
	});
};
