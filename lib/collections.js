//FREE IMAGE COLLECTION
Free = new FS.Collection('free', {
	stores: [new FS.Store.FileSystem('free', {path: "../../../../../public/img/free"})]
});

if (Meteor.isClient) {
	Meteor.subscribe('Free');
};

//ADVERTISERS IMAGE COLLECTION
Advertisers = new FS.Collection('advertisers', {
	stores: [new FS.Store.FileSystem('advertisers', {path: "../../../../../public/img/free"})]
});

if (Meteor.isClient) {
	Meteor.subscribe('Advertisers');
};
