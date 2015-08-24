Template.freeContainer.events({
	'change #submitFree': function(event, template){
		event.preventDefault();

// Insert images into Free Collection https://github.com/CollectionFS/Meteor-CollectionFS/wiki/Getting-Started
		FS.Utility.eachFile(event, function(file) {
	      Free.insert(file, function (err, fileObj) {
	        //Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
	      });
	    });
	}
});
