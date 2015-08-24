Free = new FS.Collection('free', {
	stores: [new FS.Store.FileSystem('free')]
});

if (Meteor.isClient) {
	Meteor.subscribe('Free');
};
