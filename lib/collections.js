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

//MONGO COLLECTION FOR COMPANIES THAT REFERS TO IMAGES IN ADVERTISERS FS COLLECTION
Companies = new Mongo.Collection('companies');

if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    companies: function () {
      return Companies.find({});
    }
  });
};

//MONGO COLLECTION THAT STORES TESTS AND REFERENCES COMPANIES COLLECTION
Tests = new Mongo.Collection('tests');

if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    tests: function () {
      return Tests.find({});
    }
  });
};
