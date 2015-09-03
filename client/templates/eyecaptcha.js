// Set variables to start, correct and selected are possibly redundant

var adCount = 0;
var correct = true;
var selected1 = false;
var selected2 = false;
var selected3 = false;
var selected4 = false;
var selected5 = false;
var selected6 = false;
var captchaCopy = [];
var captchaArray = [];

// Wrap all of the EyeCaptcha Test code in a click function

Template.eyecaptchaContainer.events({
	'click #generateTest': function(event){
		event.preventDefault();

    // Reset selectedImages array
    Session.set('selectedImages', []);

          // Declare captchaArray variable to be used later
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
          for( i = 0; i < freeImages; i++ ) {

							// Get count for Free collection
							var freeImgCount = Free.find().count();
							console.log(freeImgCount);

							// Generate random number and find freeKey
							var randomIndex = Math.floor( Math.random() * freeImgCount );
							var imgKey = Free.findOne( { freeKey : randomIndex } );

							// Get the copies.free.key for the image, this statement is the only way to get just the key
								if (imgKey) {
								   var imgPath = imgKey.copies.free.key;

								   console.log(imgPath);
								}

							// Push the key imgPath into captchaArray
              captchaArray.push(imgPath);
							console.log(captchaArray);
          };

          // Randomly select a prompt to choose from
          var prompts = ["Select the images of the sustainably grown artisanal bouquets now available from Bouqs.",
          "Select the images of the soft drink filled with happiness, now available for only $0.99.",
          "JUST DO IT! Select the images of the footwear brand that gives you the WILL TO WIN!",
          "Select the images of the backpack that can take you anywhere, now available from Patagonia.",
          "Hungry? Select the images of the candy bar that satisfies your craving.",
          "Never stop exploring. Select the images of the jacket that you can take on any expedition, now available from North Face."]

          var randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];

          // Display the prompt in promptBox
          document.getElementById('promptBox').innerHTML = randomPrompt;

          // Generate the correct amount of random images from the paid images
          for( i = 0; i < adImages; i++){
            if(randomPrompt == prompts[0]) {
                var randomNumber = Math.floor(Math.random() * 11) + 1;
                var imgName = "bouqs" + randomNumber;
                var paidImgPath = "/img/Paid/Bouqs/" + imgName + ".jpg";
            } else if (randomPrompt == prompts[1]) {
                var randomNumber = Math.floor(Math.random() * 10) + 1;
                var imgName = "coke" + randomNumber;
                var paidImgPath = "/img/Paid/CocaCola/" + imgName + ".jpg";
            } else if (randomPrompt == prompts[2]) {
                var randomNumber = Math.floor(Math.random() * 10) + 1;
                var imgName = "nike" + randomNumber;
                var paidImgPath = "/img/Paid/Nike/" + imgName + ".jpg";
            } else if (randomPrompt == prompts[3]) {
                var randomNumber = Math.floor(Math.random() * 10) + 1;
                var imgName = "patagonia" + randomNumber;
                var paidImgPath = "/img/Paid/Patagonia/" + imgName + ".jpg";
            } else if (randomPrompt == prompts[4]) {
                var randomNumber = Math.floor(Math.random() * 10) + 1;
                var imgName = "snickers" + randomNumber;
                var paidImgPath = "/img/Paid/Snickers/" + imgName + ".jpg";
            } else if (randomPrompt == prompts[5]) {
                var randomNumber = Math.floor(Math.random() * 10) + 1;
                var imgName = "northface" + randomNumber;
                var paidImgPath = "/img/Paid/NorthFace/" + imgName + ".jpg";
            }
            captchaArray.push(paidImgPath);
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
          var freeClass = " freeImg";
          var paidClass = " paidImg";

          for( j = 0, i = 1; i <= captchaLimit; i++, j++ ) {
             document.getElementById("imageid" + i).src = "img/tests/" + captchaArray[j];
            //  if(captchaArray[j].indexOf('/Free') > -1) {
            //    document.getElementById("button" + i).className = "";
            //    document.getElementById("button" + i).className = "img-button";
            //    var d = document.getElementById("button" + i);
            //    d.className = d.className + freeClass;
            //  } else {
            //    document.getElementById("button" + i).className = "";
            //    document.getElementById("button" + i).className = "img-button";
            //    var d = document.getElementById("button" + i);
            //    d.className = d.className + paidClass;
            //  }
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

// Template.img11.helpers({
// 	eyecaptcha11: function(captchaArray){
// 		var eyecaptcha11 = captchaArray[0];
//
// 		return (eyecaptcha11);
// 	}
// });
//
// Template.img12.helpers({
// 	eyecaptcha12: function(captchaArray){
// 		var eyecaptcha12 = captchaArray[1];
//
// 		return (eyecaptcha12);
// 	}
// });
//
// Template.img21.helpers({
// 	eyecaptcha21: function(captchaArray){
// 		var eyecaptcha21 = captchaArray[2];
//
// 		return (eyecaptcha21);
// 	}
// });
//
// Template.img22.helpers({
// 	eyecaptcha22: function(captchaArray){
// 		var eyecaptcha22 = captchaArray[3];
//
// 		return (eyecaptcha22);
// 	}
// });
//
// Template.img31.helpers({
// 	eyecaptcha31: function(captchaArray){
// 		var eyecaptcha31 = captchaArray[4];
//
// 		return (eyecaptcha31);
// 	}
// });
//
// Template.img32.helpers({
// 	eyecaptcha32: function(captchaArray){
// 		var eyecaptcha32 = captchaArray[5];
//
// 		return (eyecaptcha32);
// 	}
// });
