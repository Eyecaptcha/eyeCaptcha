Meteor.subscribe('companies');
Meteor.subscribe('tests');

// Add a company to collection "Companies"
Template.companyInsert.events({
  'submit .company-insert': function(event, template) {

    var name = event.target.text.value;
    Companies.insert({ company: name });

  }
});

// Upload new test
Template.addNewTest.events({
  'click .newTestSubmit': function(event, template) {

    // Get variable that contains the images being uploaded
    var input = document.getElementById('testUpload');

    // Get variable that contains the prompt text
    var prompt = document.getElementById('testPrompt').value;
    console.log(prompt);

    // Get company name from select field
    var company = document.getElementById('companyName');
    var strCompany = company.options[company.selectedIndex].value;
    console.log(strCompany);
    // Get matching company's ID from Companies collection
    var companyID = Companies.findOne( { company: strCompany } );

    //Loop through adding images to Advertisers collection, also store keys in Tests Mongo colllection
    for (var i = 0; i < input.files.length; i++) {

      var file = document.getElementById('testUpload').files[i];
      var fsFile = new FS.File(file);
      var count = Advertisers.find().count() + 1;
      console.log(count);
      fsFile.freeKey = count;

      // Get the copies.free.key for the image, this statement is the only way to get just the key
      var imgKey = fsFile.name();
      console.log(imgKey);
      var imgArray = "prompt.img" + i;

      Advertisers.insert(fsFile, function(error, fileObject) {
        if (error) {
          showErrorMessage(error.reason);
        } else {
          console.log(fsFile);

        }
      });

      var imgKey = Advertisers.findOne( { freeKey : count } );

      // Get the copies.free.key for the image, this statement is the only way to get just the key
        if (imgKey) {
           var imgPath = imgKey.copies.free.key;

           console.log(imgPath);
        }

      Tests.insert({ imgArray: imgKey, "company": companyID, "prompt": prompt })

    };

  }
});
