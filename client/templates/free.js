Template.freeUpload.events({
	'change .submitFree': function(event, template) {
		event.preventDefault();

			var file = event.target.files;
			var fsFile = new FS.File(file);

			Free.insert(fsFile, function(error, fileObject) {
				if (error) {
					showErrorMessage(error.reason);
				} else {
					console.log(fsFile);
				}
			});

	}
});
