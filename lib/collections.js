Free = new FS.Collection('free', {
	stores: [new FS.Store.FileSystem('free', {path: "../../../../../public/img/free"})]
});

if (Meteor.isClient) {
	Meteor.subscribe('Free');
};

FreeKeys = new Mongo.Collection('freekeys');

Websites = new Mongo.Collection("websites");
Advertisers = new Mongo.Collection("advertisers");

if (Meteor.isClient) {
	Template.website.helpers({
		'websites': function() {
			return Websites.find();
		}
	});
}

if (Meteor.isClient) {
	Template.advertiser.helpers({
		'advertisers': function() {
			return Advertisers.find();
		}
	});
}

Websites.remove({});
Advertisers.remove({});

Websites.insert({name: "facebook.com", attempts: 304, solved: 120, failed: 184, success: 39.47, cost: 30.00, keywords: "social media"});
Websites.insert({name: "twitch.tv", attempts: 92, solved: 30, failed: 62, success: 32.6, cost: 7.50, keywords: "streaming, gaming, video games"});

Advertisers.insert({name: "Coca Cola", attempts: 251, solved: 100, failed: 151, success: 39.84, cost: 10.00, keywords: "soda, soft drink"});
Advertisers.insert({name: "Nike", attempts: 63, solved: 20, failed: 43, success: 31.74, cost: 2.00, keywords: "shoes, fashion"});

