Meteor.subscribe('companies');
Meteor.subscribe('tests');

// Selected variables to allow select/deselect functionality for image buttons
var select1 = false;
var select2 = false;
var select3 = false;
var select4 = false;
var select5 = false;
var select6 = false;
var select7 = false;
var select8 = false;
var select9 = false;
var select10 = false;

// Add images for a company
Template.addNewImages.events({
  'click .newImageSubmit': function(event, template) {

    event.preventDefault;

    // Get variable that contains the images being uploaded
    var input = document.getElementById('imgUpload');

    // Get company name from select field
    var company = document.getElementById('companyName');
    var strCompany = company.options[company.selectedIndex].value;
    console.log(strCompany);

    // Loop through adding images to Advertisers collection
    for (var i = 0; i < input.files.length; i++) {

      var file = document.getElementById('imgUpload').files[i];
      var fsFile = new FS.File(file);
      fsFile.company = strCompany;

      Advertisers.insert(fsFile, function(error, fileObject) {
        if (error) {
          showErrorMessage(error.reason);
        } else {
          console.log(fileObject);
        }
      });

    };

  }
});

// Generate company images before they create a test
Template.addNewTest.events({
  'change #compName': function(event, template) {

    var compimgArray = [];

    // Get the selected company
    var company = document.getElementById('compName');
    var strCompany = company.options[company.selectedIndex].value;

    // Find the images where the company equals the selection
    var compimg = Advertisers.find( { company : strCompany } ).fetch();
    console.log(compimg);

    // Push the path into array
    for( var i = 0; i < compimg.length; i++ ) {
      var imgurl = compimg[i];
      compimgArray.push(imgurl.url());

    };

    // Loop through to add .src to images
    for( j = 0, i = 1; i <= compimg.length; i++, j++ ) {
       document.getElementById("imgid" + i).src = compimgArray[j];
     };

  }
});

//Selecting/Unselecting Company Images
Template.addNewTest.events({
  'click #imgid1': function(event) {
    if(select1==false){
      select1=true;
      event.target.style.border = "5px solid #1E88E5";
      event.target.style.borderRadius = "5px";
    }
    else{
      select1=false;
      event.target.style.border = "5px solid #BBDEFB";
      event.target.style.borderRadius = "5px";
    }
  },
  'click #imgid2': function(event) {
    if(select2==false){
      select2=true;
      event.target.style.border = "5px solid #1E88E5";
      event.target.style.borderRadius = "5px";
    }
    else{
      select2=false;
      event.target.style.border = "5px solid #BBDEFB";
      event.target.style.borderRadius = "5px";
    }
  },
  'click #imgid3': function(event) {
    if(select3==false){
      select3=true;
      event.target.style.border = "5px solid #1E88E5";
      event.target.style.borderRadius = "5px";
    }
    else{
      select3=false;
      event.target.style.border = "5px solid #BBDEFB";
      event.target.style.borderRadius = "5px";
    }
  },
  'click #imgid4': function(event) {
    if(select4==false){
      select4=true;
      event.target.style.border = "5px solid #1E88E5";
      event.target.style.borderRadius = "5px";
    }
    else{
      select4=false;
      event.target.style.border = "5px solid #BBDEFB";
      event.target.style.borderRadius = "5px";
    }
  },
  'click #imgid5': function(event) {
    if(select5==false){
      select5=true;
      event.target.style.border = "5px solid #1E88E5";
      event.target.style.borderRadius = "5px";
    }
    else{
      select5=false;
      event.target.style.border = "5px solid #BBDEFB";
      event.target.style.borderRadius = "5px";
    }
  },
  'click #imgid6': function(event) {
    if(select6==false){
      select6=true;
      event.target.style.border = "5px solid #1E88E5";
      event.target.style.borderRadius = "5px";
    }
    else{
      select6=false;
      event.target.style.border = "5px solid #BBDEFB";
      event.target.style.borderRadius = "5px";
    }
  },
  'click #imgid7': function(event) {
    if(select7==false){
      select7=true;
      event.target.style.border = "5px solid #1E88E5";
      event.target.style.borderRadius = "5px";
    }
    else{
      select7=false;
      event.target.style.border = "5px solid #BBDEFB";
      event.target.style.borderRadius = "5px";
    }
  },
  'click #imgid8': function(event) {
    if(select8==false){
      select8=true;
      event.target.style.border = "5px solid #1E88E5";
      event.target.style.borderRadius = "5px";
    }
    else{
      select8=false;
      event.target.style.border = "5px solid #BBDEFB";
      event.target.style.borderRadius = "5px";
    }
  },
  'click #imgid9': function(event) {
    if(select9==false){
      select9=true;
      event.target.style.border = "5px solid #1E88E5";
      event.target.style.borderRadius = "5px";
    }
    else{
      select9=false;
      event.target.style.border = "5px solid #BBDEFB";
      event.target.style.borderRadius = "5px";
    }
  },
  'click #imgid10': function(event) {
    if(select10==false){
      select10=true;
      event.target.style.border = "5px solid #1E88E5";
      event.target.style.borderRadius = "5px";
    }
    else{
      select10=false;
      event.target.style.border = "5px solid #BBDEFB";
      event.target.style.borderRadius = "5px";
    }
  },
});

// // Upload new test
// Template.addNewTest.events({
//   'click .newTestSubmit': function(event, template) {
//
//     // Get variable that contains the images being uploaded
//     var input = document.getElementById('testUpload');
//
//     // Get variable that contains the prompt text
//     var prompt = document.getElementById('testPrompt').value;
//     console.log(prompt);
//
//     // Get company name from select field
//     var company = document.getElementById('companyName');
//     var strCompany = company.options[company.selectedIndex].value;
//     console.log(strCompany);
//
//     // Get matching company's ID from Companies collection
//     var companyID = Companies.findOne( { company: strCompany } );
//
//     //Loop through adding images to Advertisers collection, also store keys in Tests Mongo colllection
//     for (var i = 0; i < input.files.length; i++) {
//
//       var file = document.getElementById('testUpload').files[i];
//       var fsFile = new FS.File(file);
//       var count = Advertisers.find().count() + 1;
//       console.log(count);
//       fsFile.freeKey = count;
//
//       // Get the copies.free.key for the image, this statement is the only way to get just the key
//       var imgKey = fsFile.name();
//       console.log(imgKey);
//       var imgArray = "prompt.img" + i;
//
//       Advertisers.insert(fsFile, function(error, fileObject) {
//         if (error) {
//           showErrorMessage(error.reason);
//         } else {
//           console.log(fsFile);
//
//         }
//       });
//
//       var imgKey = Advertisers.findOne( { freeKey : count } );
//
//       // Get the copies.free.key for the image, this statement is the only way to get just the key
//         if (imgKey) {
//            var imgPath = imgKey.copies.free.key;
//
//            console.log(imgPath);
//         }
//
//       Tests.insert({ imgArray: imgKey, "company": companyID, "prompt": prompt })
//
//     };
//
//   }
// });
