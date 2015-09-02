Template.freeUpload.events({
  'change .imgSubmit': function(event, template) {

    var inp = document.getElementById('freeUpload');

    for (var i = 0; i < inp.files.length; i++) {

      var file = event.target.files[i];
      var fsFile = new FS.File(file);
      var count = Free.find().count() + 1;
      console.log(count);
      fsFile.freeKey = count;

      Free.insert(fsFile, function(error, fileObject) {
        if (error) {
          showErrorMessage(error.reason);
        } else {
          console.log(fsFile);
        }
      });

    };

  }
});
