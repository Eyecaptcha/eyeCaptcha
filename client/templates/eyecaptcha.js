// EyeCaptcha Test Page

Template.eyecaptchaContainer.events({
    'click .img-button': function(event){
        event.preventDefault();
	//alert(event.target.id);
	alert(event.target.id);
        //record picked image
    }


});

// Wrap all of the EyeCaptcha Test code in a click function
Template.eyecaptchaContainer.events({
	'click #generateTest': function(event){
		event.preventDefault();
		//alert("Submission attempt.")

          // Declare captchaArray variable to be used later
          var captchaArray = [];

          // Generate random number function
          function randomIntFromInterval(min,max) {
             return Math.floor(Math.random()*(max-min+1)+min);
          }

          // adImages variable calls randomIntFromInterval function with values 1, 6
          var adImages = randomIntFromInterval(1,6);

          // Declare limit of images to 6, calculate # of freeImages
          var captchaLimit = 6;
          var freeImages = captchaLimit - adImages;

          // Generate the correct amount of random images from the free images
          for( i = 0; i < freeImages; i++ ){
              var randomNumber = Math.floor(Math.random() * 149) + 1;
              var imgName = "img" + randomNumber;
              var imgPath = "/img/Free/" + imgName + ".jpg";
              captchaArray.push(imgPath);
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

          // Loop through the array to add .src to images and check whether they are free or paid
          var freeClass = " freeImg";
          var paidClass = " paidImg";

          for( j = 0, i = 1; i <= captchaLimit; i++, j++ ) {
            document.getElementById("imageid" + i).src = captchaArray[j];
            if(captchaArray[j].indexOf('/Free') > -1) {
              var d = document.getElementById("button" + i);
              d.className = d.className + freeClass;
            } else {
              var d = document.getElementById("button" + i);
              d.className = d.className + paidClass;
            }
          };

          // Check how many of each button are selected. If # of paidImg buttons = # of adImages, test is successful.
          var paidCount = 0;

	}
});
