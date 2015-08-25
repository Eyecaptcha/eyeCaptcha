Free = new FS.Collection('free', {
	stores: [new FS.Store.FileSystem('free', {path: "../../../../../public/img/free"})]
});

if (Meteor.isClient) {
	Meteor.subscribe('Free');
};
