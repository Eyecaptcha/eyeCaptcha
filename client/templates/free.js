Template.freeUpload.events({
  'change .imgSubmit': function(event, template) {

    // FS.Utility.eachFile(event, function(file) {
    //   Free.insert(file, function (err, fileObj) {
    //   });
    // });
    var inp = document.getElementById('freeUpload');

    for (var i = 0; i < inp.files.length; i++) {

      var file = event.target.files[i];
      var fsFile = new FS.File(file);

      Free.insert(fsFile, function(error, fileObject) {
        if (error) {
          showErrorMessage(error.reason);
        } else {
          var imgKey = {"key" : "free-" + fileObject._id};
          console.log(imgKey);
          FreeKeys.insert(imgKey);
        }
      });

    };

  }
});
