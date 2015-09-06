// Selected variables to allow select/deselect functionality for image buttons
var selected1 = false;
var selected2 = false;
var selected3 = false;
var selected4 = false;
var selected5 = false;
var selected6 = false;

// Wrap all of the EyeCaptcha Test code in a click function
Template.eyecaptchaContainer.events({
	'click #generateTest': function generator(event){
		event.preventDefault();

    // Reset selectedImages array and selected variables
    Session.set('selectedImages', []);
		selected1 = false;
		selected2 = false;
		selected3 = false;
		selected4 = false;
		selected5 = false;
		selected6 = false;
		document.getElementById("imageid1").style.border = "5px solid #bbdefb";
		document.getElementById("imageid2").style.border = "5px solid #bbdefb";
		document.getElementById("imageid3").style.border = "5px solid #bbdefb";
		document.getElementById("imageid4").style.border = "5px solid #bbdefb";
		document.getElementById("imageid5").style.border = "5px solid #bbdefb";
		document.getElementById("imageid6").style.border = "5px solid #bbdefb";

          // Declare captchaArray variable to store image paths in array
          var captchaArray = [];

          // Generate random number function
          function randomIntFromInterval(min,max) {
             return Math.floor(Math.random()*(max-min+1)+min);
          }

          // adImages variable calls randomIntFromInterval function with values 1, 6
          var adImages = randomIntFromInterval(1,5);

          // Declare limit of images to 6, calculate # of freeImages
          var captchaLimit = 6;
          var freeImages = captchaLimit - adImages;

          // Generate the correct amount of random images from the free images
          for( var i = 0; i < freeImages; i++ ) {

							// Get count for Free collection
							var freeImgCount = Free.find().count();

							// Generate random number and find freeKey
							var randomIndex = Math.floor( Math.random() * freeImgCount ) + 1;
							var img = Free.findOne( { freeKey : randomIndex } );

							// Push the key imgPath into captchaArray
              captchaArray.push(img.url());
          };

          // Randomly select a prompt to choose from
					var testCount = Tests.find().count();
          var randomTest = Math.floor(Math.random() * testCount) + 1;
					var test = Tests.findOne( { testKey : randomTest } );
					var testPrompt = Tests.findOne( { testKey : randomTest } )['text'];

          // Display the prompt in promptBox
          document.getElementById('promptBox').innerHTML = testPrompt;

					var testImgCount = Tests.findOne( { testKey : randomTest } ).images;

          // Generate the correct amount of random images from the paid images
          for( i = 0; i < adImages; i++){
						var randomTestImg = Math.floor(Math.random() * testImgCount.length);
            captchaArray.push(testImgCount[randomTestImg]);
          };

          // Shuffle the order of captchaArray - source-code can be found here: http://bost.ocks.org/mike/shuffle/
            var m = captchaArray.length, t, i;

            // While there remain elements to shuffle…
            while (m) {

              // Pick a remaining element…
              i = Math.floor(Math.random() * m--);

              // And swap it with the current element.
              t = captchaArray[m];
              captchaArray[m] = captchaArray[i];
              captchaArray[i] = t;

            };

          // Loop through the array to add .src to images and check whether they are free or paid
          for( j = 0, i = 1; i <= captchaLimit; i++, j++ ) {
             document.getElementById("imageid" + i).src = captchaArray[j];
           };

	},

	'click #imageid1': function(event) {
		if(selected1==false){
      selected1=true;
      event.target.style.border = "5px solid #1E88E5";
    }
    else{
      selected1=false;
      event.target.style.border = "5px solid #BBDEFB";
    }
	},
	'click #imageid2': function(event) {
		if(selected2==false){
      selected2=true;
      event.target.style.border = "5px solid #1E88E5";
    }
    else{
      selected2=false;
      event.target.style.border = "5px solid #BBDEFB";
    }
	},
	'click #imageid3': function(event) {
		if(selected3==false){
      selected3=true;
      event.target.style.border = "5px solid #1E88E5";
    }
    else{
      selected3=false;
      event.target.style.border = "5px solid #BBDEFB";
    }
	},
	'click #imageid4': function(event) {
		if(selected4==false){
      selected4=true;
      event.target.style.border = "5px solid #1E88E5";
    }
    else{
      selected4=false;
      event.target.style.border = "5px solid #BBDEFB";
    }
	},
	'click #imageid5': function(event) {
		if(selected5==false){
      selected5=true;
      event.target.style.border = "5px solid #1E88E5";
    }
    else{
      selected5=false;
      event.target.style.border = "5px solid #BBDEFB";
    }
	},
	'click #imageid6': function(event) {
		if(selected6==false){
      selected6=true;
      event.target.style.border = "5px solid #1E88E5";
    }
    else{
      selected6=false;
      event.target.style.border = "5px solid #BBDEFB";
    }
	}
});

Template.eyecaptchaContainer.events({
	'click #submitTest': function(event){
		var imgArray = [];
		var adImgCount = 0;
		var freeImgCount = 0;
		var correctAdCount = 0;

    if(selected1==true){
      var imgsrc = document.getElementById("imageid1").src;
      imgArray.push(imgsrc);
			if(imgsrc.indexOf("/free/") > -1){
				freeImgCount += 1;
			} else if (imgsrc.indexOf("/advertisers/") > -1) {
				adImgCount += 1;
			}
    } else {};
    if(selected2==true){
      var imgsrc = document.getElementById("imageid2").src;
      imgArray.push(imgsrc);
			if(imgsrc.indexOf("/free/") > -1){
				freeImgCount += 1;
			} else if (imgsrc.indexOf("/advertisers/") > -1) {
				adImgCount += 1;
			}
    } else {};
    if(selected3==true){
      var imgsrc = document.getElementById("imageid3").src;
      imgArray.push(imgsrc);
			if(imgsrc.indexOf("/free/") > -1){
				freeImgCount += 1;
			} else if (imgsrc.indexOf("/advertisers/") > -1) {
				adImgCount += 1;
			}
    } else {};
    if(selected4==true){
      var imgsrc = document.getElementById("imageid4").src;
      imgArray.push(imgsrc);
			if(imgsrc.indexOf("/free/") > -1){
				freeImgCount += 1;
			} else if (imgsrc.indexOf("/advertisers/") > -1) {
				adImgCount += 1;
			}
    } else {};
    if(selected5==true){
      var imgsrc = document.getElementById("imageid5").src;
      imgArray.push(imgsrc);
			if(imgsrc.indexOf("/free/") > -1){
				freeImgCount += 1;
			} else if (imgsrc.indexOf("/advertisers/") > -1) {
				adImgCount += 1;
			}
    } else {};
    if(selected6==true){
      var imgsrc = document.getElementById("imageid6").src;
      imgArray.push(imgsrc);
			if(imgsrc.indexOf("/free/") > -1){
				freeImgCount += 1;
			} else if (imgsrc.indexOf("/advertisers/") > -1) {
				adImgCount += 1;
			}
    } else {};

		for ( var i = 1; i <= 6; i++ ) {
			var imgPath = document.getElementById("imageid" + i).src;
			if(imgPath.indexOf("/advertisers/") > -1){
				correctAdCount += 1;
			} else {}
		};

		var confirmPrompt = document.getElementById('promptBox').innerHTML;
		var testID = Tests.findOne( { text : confirmPrompt } )['_id'];
		
		if((adImgCount == correctAdCount) && (freeImgCount == 0)) {
			alert("The test was successfully completed!");
			Tests.update( { _id : testID }, { $inc: { successes: 1, attempts: 1 } } );
		} else {
			alert("The test was failed.");
			Tests.update( { _id : testID }, { $inc: { failures: 1, attempts: 1 } } );
		}

		document.location.reload(true);
	}
});
