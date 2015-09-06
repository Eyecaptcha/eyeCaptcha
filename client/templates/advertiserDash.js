Meteor.subscribe('companies');
Meteor.subscribe('tests');

// Selected variables to allow select/deselect functionality for image buttons /
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
var select11 = false;
var select12 = false;
var select13 = false;
var select14 = false;
var select15 = false;
var select16 = false;
var select17 = false;
var select18 = false;
var select19 = false;
var select20 = false;

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

// Generate company images before they create a test //////////////////////////
Template.addNewTest.events({

});

// Upload new test ////////////////////////////////////////////////////////////
Template.addNewTest.events({
  'change #compName': function(event, template) {

    event.preventDefault;
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
    var select11 = false;
	var select12 = false;
	var select13 = false;
	var select14 = false;
	var select15 = false;
	var select16 = false;
	var select17 = false;
	var select18 = false;
	var select19 = false;
	var select20 = false;
    document.getElementById("imgid1").style.border = "5px solid #bbdefb";
		document.getElementById("imgid2").style.border = "5px solid #bbdefb";
		document.getElementById("imgid3").style.border = "5px solid #bbdefb";
		document.getElementById("imgid4").style.border = "5px solid #bbdefb";
		document.getElementById("imgid5").style.border = "5px solid #bbdefb";
		document.getElementById("imgid6").style.border = "5px solid #bbdefb";
    document.getElementById("imgid7").style.border = "5px solid #bbdefb";
    document.getElementById("imgid8").style.border = "5px solid #bbdefb";
    document.getElementById("imgid9").style.border = "5px solid #bbdefb";
    document.getElementById("imgid10").style.border = "5px solid #bbdefb";
	/*document.getElementById("imgid11").style.border = "5px solid #bbdefb";
		document.getElementById("imgid12").style.border = "5px solid #bbdefb";
		document.getElementById("imgid13").style.border = "5px solid #bbdefb";
		document.getElementById("imgid14").style.border = "5px solid #bbdefb";
		document.getElementById("imgid15").style.border = "5px solid #bbdefb";
		document.getElementById("imgid16").style.border = "5px solid #bbdefb";
    document.getElementById("imgid17").style.border = "5px solid #bbdefb";
    document.getElementById("imgid18").style.border = "5px solid #bbdefb";
    document.getElementById("imgid19").style.border = "5px solid #bbdefb";
    document.getElementById("imgid20").style.border = "5px solid #bbdefb";*/
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

  },
  
  'click .newTestSubmit': function(event, template) {

    // Get the image paths that have been selected
    var imgArray = [];
    if(select1==true){
      var imgsrc = document.getElementById("imgid1").src;
      var imgsrcarray = imgsrc.split("/");
      imgArray.push(imgsrcarray[3] + "/" + imgsrcarray[4] + "/" + imgsrcarray[5] + "/" + imgsrcarray[6] + "/" + imgsrcarray[7]);
    } else {};
    if(select2==true){
      var imgsrc = document.getElementById("imgid2").src;
      var imgsrcarray = imgsrc.split("/");
      imgArray.push(imgsrcarray[3] + "/" + imgsrcarray[4] + "/" + imgsrcarray[5] + "/" + imgsrcarray[6] + "/" + imgsrcarray[7]);
    } else {};
    if(select3==true){
      var imgsrc = document.getElementById("imgid3").src;
      var imgsrcarray = imgsrc.split("/");
      imgArray.push(imgsrcarray[3] + "/" + imgsrcarray[4] + "/" + imgsrcarray[5] + "/" + imgsrcarray[6] + "/" + imgsrcarray[7]);
    } else {};
    if(select4==true){
      var imgsrc = document.getElementById("imgid4").src;
      var imgsrcarray = imgsrc.split("/");
      imgArray.push(imgsrcarray[3] + "/" + imgsrcarray[4] + "/" + imgsrcarray[5] + "/" + imgsrcarray[6] + "/" + imgsrcarray[7]);
    } else {};
    if(select5==true){
      var imgsrc = document.getElementById("imgid5").src;
      var imgsrcarray = imgsrc.split("/");
      imgArray.push(imgsrcarray[3] + "/" + imgsrcarray[4] + "/" + imgsrcarray[5] + "/" + imgsrcarray[6] + "/" + imgsrcarray[7]);
    } else {};
    if(select6==true){
      var imgsrc = document.getElementById("imgid6").src;
      var imgsrcarray = imgsrc.split("/");
      imgArray.push(imgsrcarray[3] + "/" + imgsrcarray[4] + "/" + imgsrcarray[5] + "/" + imgsrcarray[6] + "/" + imgsrcarray[7]);
    } else {};
    if(select7==true){
      var imgsrc = document.getElementById("imgid7").src;
      var imgsrcarray = imgsrc.split("/");
      imgArray.push(imgsrcarray[3] + "/" + imgsrcarray[4] + "/" + imgsrcarray[5] + "/" + imgsrcarray[6] + "/" + imgsrcarray[7]);
    } else {};
    if(select8==true){
      var imgsrc = document.getElementById("imgid8").src;
      var imgsrcarray = imgsrc.split("/");
      imgArray.push(imgsrcarray[3] + "/" + imgsrcarray[4] + "/" + imgsrcarray[5] + "/" + imgsrcarray[6] + "/" + imgsrcarray[7]);
    } else {};
    if(select9==true){
      var imgsrc = document.getElementById("imgid9").src;
      var imgsrcarray = imgsrc.split("/");
      imgArray.push(imgsrcarray[3] + "/" + imgsrcarray[4] + "/" + imgsrcarray[5] + "/" + imgsrcarray[6] + "/" + imgsrcarray[7]);
    } else {};
    if(select10==true){
      var imgsrc = document.getElementById("imgid10").src;
      var imgsrcarray = imgsrc.split("/");
      imgArray.push(imgsrcarray[3] + "/" + imgsrcarray[4] + "/" + imgsrcarray[5] + "/" + imgsrcarray[6] + "/" + imgsrcarray[7]);
    } else {};
/*	if(select11==true){
      var imgsrc = document.getElementById("imgid11").src;
      var imgsrcarray = imgsrc.split("/");
      imgArray.push(imgsrcarray[3] + "/" + imgsrcarray[4] + "/" + imgsrcarray[5] + "/" + imgsrcarray[6] + "/" + imgsrcarray[7]);
    } else {};
    if(select12==true){
      var imgsrc = document.getElementById("imgid12").src;
      var imgsrcarray = imgsrc.split("/");
      imgArray.push(imgsrcarray[3] + "/" + imgsrcarray[4] + "/" + imgsrcarray[5] + "/" + imgsrcarray[6] + "/" + imgsrcarray[7]);
    } else {};
    if(select13==true){
      var imgsrc = document.getElementById("imgid13").src;
      var imgsrcarray = imgsrc.split("/");
      imgArray.push(imgsrcarray[3] + "/" + imgsrcarray[4] + "/" + imgsrcarray[5] + "/" + imgsrcarray[6] + "/" + imgsrcarray[7]);
    } else {};
    if(select14==true){
      var imgsrc = document.getElementById("imgid14").src;
      var imgsrcarray = imgsrc.split("/");
      imgArray.push(imgsrcarray[3] + "/" + imgsrcarray[4] + "/" + imgsrcarray[5] + "/" + imgsrcarray[6] + "/" + imgsrcarray[7]);
    } else {};
    if(select15==true){
      var imgsrc = document.getElementById("imgid15").src;
      var imgsrcarray = imgsrc.split("/");
      imgArray.push(imgsrcarray[3] + "/" + imgsrcarray[4] + "/" + imgsrcarray[5] + "/" + imgsrcarray[6] + "/" + imgsrcarray[7]);
    } else {};
    if(select16==true){
      var imgsrc = document.getElementById("imgid16").src;
      var imgsrcarray = imgsrc.split("/");
      imgArray.push(imgsrcarray[3] + "/" + imgsrcarray[4] + "/" + imgsrcarray[5] + "/" + imgsrcarray[6] + "/" + imgsrcarray[7]);
    } else {};
    if(select17==true){
      var imgsrc = document.getElementById("imgid17").src;
      var imgsrcarray = imgsrc.split("/");
      imgArray.push(imgsrcarray[3] + "/" + imgsrcarray[4] + "/" + imgsrcarray[5] + "/" + imgsrcarray[6] + "/" + imgsrcarray[7]);
    } else {};
    if(select18==true){
      var imgsrc = document.getElementById("imgid18").src;
      var imgsrcarray = imgsrc.split("/");
      imgArray.push(imgsrcarray[3] + "/" + imgsrcarray[4] + "/" + imgsrcarray[5] + "/" + imgsrcarray[6] + "/" + imgsrcarray[7]);
    } else {};
    if(select19==true){
      var imgsrc = document.getElementById("imgid19").src;
      var imgsrcarray = imgsrc.split("/");
      imgArray.push(imgsrcarray[3] + "/" + imgsrcarray[4] + "/" + imgsrcarray[5] + "/" + imgsrcarray[6] + "/" + imgsrcarray[7]);
    } else {};
    if(select20==true){
      var imgsrc = document.getElementById("imgid20").src;
      var imgsrcarray = imgsrc.split("/");
      imgArray.push(imgsrcarray[3] + "/" + imgsrcarray[4] + "/" + imgsrcarray[5] + "/" + imgsrcarray[6] + "/" + imgsrcarray[7]);
    } else {};*/

    // Get variable that contains the prompt text
    var prompt = document.getElementById('testPrompt').value;
    console.log(prompt);

    // Get company name from select field
    var company = document.getElementById('compName');
    var strCompany = company.options[company.selectedIndex].value;
    console.log(strCompany);

    // Push all relevant info into Tests collection
    var testCount = Tests.find().count() + 1;
    Tests.insert( { testKey : testCount, text : prompt, company : strCompany, images : imgArray });

    location.reload();
  },

  'click #imgid1': function(event) {
    if(select1==false){
      select1=true;
      event.target.style.border = "5px solid #1E88E5";
    }
    else{
      select1=false;
      event.target.style.border = "5px solid #BBDEFB";
    }
  },
  'click #imgid2': function(event) {
    if(select2==false){
      select2=true;
      event.target.style.border = "5px solid #1E88E5";
    }
    else{
      select2=false;
      event.target.style.border = "5px solid #BBDEFB";
    }
  },
  'click #imgid3': function(event) {
    if(select3==false){
      select3=true;
      event.target.style.border = "5px solid #1E88E5";
    }
    else{
      select3=false;
      event.target.style.border = "5px solid #BBDEFB";
    }
  },
  'click #imgid4': function(event) {
    if(select4==false){
      select4=true;
      event.target.style.border = "5px solid #1E88E5";
    }
    else{
      select4=false;
      event.target.style.border = "5px solid #BBDEFB";
    }
  },
  'click #imgid5': function(event) {
    if(select5==false){
      select5=true;
      event.target.style.border = "5px solid #1E88E5";
    }
    else{
      select5=false;
      event.target.style.border = "5px solid #BBDEFB";
    }
  },
  'click #imgid6': function(event) {
    if(select6==false){
      select6=true;
      event.target.style.border = "5px solid #1E88E5";
    }
    else{
      select6=false;
      event.target.style.border = "5px solid #BBDEFB";
    }
  },
  'click #imgid7': function(event) {
    if(select7==false){
      select7=true;
      event.target.style.border = "5px solid #1E88E5";
    }
    else{
      select7=false;
      event.target.style.border = "5px solid #BBDEFB";
    }
  },
  'click #imgid8': function(event) {
    if(select8==false){
      select8=true;
      event.target.style.border = "5px solid #1E88E5";
    }
    else{
      select8=false;
      event.target.style.border = "5px solid #BBDEFB";
    }
  },
  'click #imgid9': function(event) {
    if(select9==false){
      select9=true;
      event.target.style.border = "5px solid #1E88E5";
    }
    else{
      select9=false;
      event.target.style.border = "5px solid #BBDEFB";
    }
  },
  'click #imgid10': function(event) {
    if(select10==false){
      select10=true;
      event.target.style.border = "5px solid #1E88E5";
    }
    else{
      select10=false;
      event.target.style.border = "5px solid #BBDEFB";
    }
  },
});
