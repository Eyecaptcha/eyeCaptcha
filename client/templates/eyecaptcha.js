// Selected variables to allow select/deselect functionality for image buttons
var selected1 = 0;
var selected2 = 0;
var selected3 = 0;
var selected4 = 0;
var selected5 = 0;
var selected6 = 0;

// Wrap all of the EyeCaptcha Test code in a click function
Template.eyecaptchaContainer.events({
	'click #generateTest': function generator(event){
		event.preventDefault();

    // Reset selectedImages array and selected variables
    Session.set('selectedImages', []);
		selected1 = 0;
		selected2 = 0;
		selected3 = 0;
		selected4 = 0;
		selected5 = 0;
		selected6 = 0;
		console.log(selected1);

		if(selected1 % 2 == 0 || selected1 == 0){
			event.target.style.border = "5px solid #BBDEFB";
			event.target.style.borderRadius = "5px";
		}
		else{
			event.target.style.border = "5px solid #1E88E5";
			event.target.style.borderRadius = "5px";
		}

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

	'click .images': function(event, template) {

		var selectedImageId = event.target.id;
		var selectedImages = Session.get('selectedImages');

		if (selectedImages.indexOf(selectedImageId) == -1) {
			selectedImages.push(event.target.src);
		}

		Session.set('selectedImages', selectedImages);
		console.log(Session.get('selectedImages'));
	},

	'click #imageid1': function(event) {
		selected1 += 1;
		console.log(selected1);
	},
	'click #imageid2': function(event) {
		selected2 += 1;
		if(selected2 % 2 == 0 || selected2 == 0){
			event.target.style.border = "5px solid #BBDEFB";
			event.target.style.borderRadius = "5px";
		}
		else{
			event.target.style.border = "5px solid #1E88E5";
			event.target.style.borderRadius = "5px";
		}
	},
	'click #imageid3': function(event) {
		selected3 += 1;
		if(selected3 % 2 == 0 || selected3 == 0){
			event.target.style.border = "5px solid #BBDEFB";
			event.target.style.borderRadius = "5px";
		}
		else{
			event.target.style.border = "5px solid #1E88E5";
			event.target.style.borderRadius = "5px";
		}
	},
	'click #imageid4': function(event) {
		selected4 += 1;
		if(selected4 % 2 == 0 || selected4 == 0){
			event.target.style.border = "5px solid #BBDEFB";
			event.target.style.borderRadius = "5px";
		}
		else{
			event.target.style.border = "5px solid #1E88E5";
			event.target.style.borderRadius = "5px";
		}
	},
	'click #imageid5': function(event) {
		selected5 += 1;
		if(selected5 % 2 == 0 || selected5 == 0){
			event.target.style.border = "5px solid #BBDEFB";
			event.target.style.borderRadius = "5px";
		}
		else{
			event.target.style.border = "5px solid #1E88E5";
			event.target.style.borderRadius = "5px";
		}
	},
	'click #imageid6': function(event) {
		selected6 += 1;
		if(selected6 % 2 == 0 || selected6 == 0){
			event.target.style.border = "5px solid #BBDEFB";
			event.target.style.borderRadius = "5px";
		}
		else{
			event.target.style.border = "5px solid #1E88E5";
			event.target.style.borderRadius = "5px";
		}
	}
});

Template.img11.events( function() {
	if(selected1 % 2 == 0 || selected1 == 0){
		event.target.style.border = "5px solid #BBDEFB";
		event.target.style.borderRadius = "5px";
	}
	else{
		event.target.style.border = "5px solid #1E88E5";
		event.target.style.borderRadius = "5px";
	}
});
Template.eyecaptchaContainer.events({
	'click #submitTest': function(event){
		var checkCount = Session.get('selectedImages');
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
