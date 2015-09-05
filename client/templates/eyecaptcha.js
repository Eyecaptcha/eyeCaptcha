// Set variables to start, correct and selected are possibly redundant

	var correct = true;

	// Selected variables to allow select/deselect functionality for image buttons
	var selected1 = false;
	var selected2 = false;
	var selected3 = false;
	var selected4 = false;
	var selected5 = false;
	var selected6 = false;

// Wrap all of the EyeCaptcha Test code in a click function
Template.eyecaptchaContainer.events({
	'click #generateTest': function(event){
		event.preventDefault();

    // Reset selectedImages array
    Session.set('selectedImages', []);

          // Declare captchaArray variable to store image paths in array
          var captchaArray = [];

          // Generate random number function
          function randomIntFromInterval(min,max) {
             return Math.floor(Math.random()*(max-min+1)+min);
          }

          // adImages variable calls randomIntFromInterval function with values 1, 6
          var adImages = randomIntFromInterval(1,5);
          adCount = adImages;

          // Declare limit of images to 6, calculate # of freeImages
          var captchaLimit = 6;
          var freeImages = captchaLimit - adImages;

          // Generate the correct amount of random images from the free images
          for( var i = 0; i < freeImages; i++ ) {

							// Get count for Free collection
							var freeImgCount = Free.find().count();
							console.log(freeImgCount);

							// Generate random number and find freeKey
							var randomIndex = Math.floor( Math.random() * freeImgCount );
							var img = Free.findOne( { freeKey : randomIndex } );

							// Push the key imgPath into captchaArray
              captchaArray.push(img.url());
							console.log(captchaArray);
          };

          // Randomly select a prompt to choose from
					var testCount = Tests.find().count();
          var randomTest = Math.floor(Math.random() * testCount);
					var test = Tests.findOne( { testKey : randomTest } );
					var testPrompt = Tests.findOne( { testKey : randomTest } )['text'];

          // Display the prompt in promptBox
          document.getElementById('promptBox').innerHTML = testPrompt;

					var testImgCount = Tests.findOne( { testKey : randomTest } ).images;
					console.log(testImgCount);

          // Generate the correct amount of random images from the paid images
          for( i = 0; i < adImages; i++){
						var randomTestImg = Math.floor(Math.random() * testImgCount.length);
            captchaArray.push(testImgCount[randomTestImg]);
						console.log(captchaArray);
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

            }

					console.log(captchaArray);

          // Loop through the array to add .src to images and check whether they are free or paid
          for( j = 0, i = 1; i <= captchaLimit; i++, j++ ) {
             document.getElementById("imageid" + i).src = captchaArray[j];
           };

	},

	'click .paidImg': function(event, template) {

		var selectedImageId = event.target.id
		var selectedImages = Session.get('selectedImages');

		if (selectedImages.indexOf(selectedImageId) == -1) {
			selectedImages.push(event.target.id);
		}

		Session.set('selectedImages', selectedImages);
		console.log(Session.get('selectedImages'));
	},

	'click .freeImg': function(event) {

		correct=false;
		console.log('Free image clicked');
	},

	//Selecting/Unselecting images
	'click #imageid1': function(event) {
		if(selected1==false){
			selected1=true;
			event.target.style.border = "5px solid #1E88E5";
			event.target.style.borderRadius = "5px";
		}
		else{
			selected1=false;
			event.target.style.border = "5px solid #BBDEFB";
			event.target.style.borderRadius = "5px";
		}
	},
	'click #imageid2': function(event) {
		if(selected2==false){
			selected2=true;
			event.target.style.border = "5px solid #1E88E5";
			event.target.style.borderRadius = "5px";
		}
		else{
			selected2=false;
			event.target.style.border = "5px solid #BBDEFB";
			event.target.style.borderRadius = "5px";
		}
	},
	'click #imageid3': function(event) {
		if(selected3==false){
			selected3=true;
			event.target.style.border = "5px solid #1E88E5";
			event.target.style.borderRadius = "5px";
		}
		else{
			selected3=false;
			event.target.style.border = "5px solid #BBDEFB";
			event.target.style.borderRadius = "5px";
		}
	},
	'click #imageid4': function(event) {
		if(selected4==false){
			selected4=true;
			event.target.style.border = "5px solid #1E88E5";
			event.target.style.borderRadius = "5px";
		}
		else{
			selected4=false;
			event.target.style.border = "5px solid #BBDEFB";
			event.target.style.borderRadius = "5px";
		}
	},
	'click #imageid5': function(event) {
		if(selected5==false){
			selected5=true;
			event.target.style.border = "5px solid #1E88E5";
			event.target.style.borderRadius = "5px";
		}
		else{
			selected5=false;
			event.target.style.border = "5px solid #BBDEFB";
			event.target.style.borderRadius = "5px";
		}
	},
	'click #imageid6': function(event) {
		if(selected6==false){
			selected6=true;
			event.target.style.border = "5px solid #1E88E5";
			event.target.style.borderRadius = "5px";
		}
		else{
			selected6=false;
			event.target.style.border = "5px solid #BBDEFB";
			event.target.style.borderRadius = "5px";
		}
	},

});


Template.eyecaptchaContainer.events({
	'click #submitTest': function(event){
		var checkCount = Session.get('selectedImages');
		// console.log(checkCount);
		// console.log(adCount);
		if ((checkCount.length == adCount) && (correct == true)) {
			console.log("SUCCESS!");
			alert("The test was passed.");
		} else {
			console.log("FAILURE!");
			alert("The test was failed.");
		}
		correct = true;
		document.location.reload(true);
	}
});
