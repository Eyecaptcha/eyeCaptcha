// Template.freeUploadForm.events({
// 	'change .imgSubmit': function(event, template) {
// 		event.preventDefault();
//
// 			var files = event.target.files;
// 			for (var i = 0, ln = files.length; i < ln; i++) {
// 			Free.insert(files[i], function (err, fileObj) {
// 				//Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
// 			});
// 		}
// 	}
// });

Template.freeUpload.events({
  'change .imgSubmit': function(event, template) {
    FS.Utility.eachFile(event, function(file) {
      Free.insert(file, function (err, fileObj) {
        //Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
      });
    });
  }
});
