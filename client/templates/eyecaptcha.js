// EyeCaptcha Test Page

Template.eyecaptchaContainer.events({
    'click .img-button': function(event){
        event.preventDefault();
	//alert(event.target.id);
	alert(event.target.id);
        //record picked image
    }


});

Template.eyecaptchaContainer.events({
	'click .submit': function(event){
		event.preventDefault();
		alert("Submission attempt.")
        //recognise if all chosen images are correct - pass or refresh
	}
});


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
for( i = 0; i < freeImages; i++){
  function randomImg(){
    var randomNumber = Math.floor(Math.random() * 149) + 1;
    var imgName = "img" + randomNumber;
    document.getElementById("imageid").src = img/Free + "/" + imgName;
  }
};

// Randomly select a prompt to choose from
var prompts = ["Select the images of the sustainably grown artisanal bouquets now available from Bouqs.",
"Select the images of the soft drink filled with happiness, now available for only $0.99.",
"Select the images of the footwear brand that gives you the WILL TO WIN!",
"Select the images of the backpack that can take you anywhere, now available from Patagonia.",
"Hungry? Select the images of the candy bar that satisfies your craving.",
"Never stop exploring. Select the images of the jacket that you can take on any expedition, now available from North Face."]

var randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];

// Generate the correct amount of random images from the paid images
for( i = 0; i < adImages; i++){
  if(randomPrompt === prompts[0]){
    function randomImg(){
      var randomNumber = Math.floor(Math.random() * 149) + 1;
      var imgName = "bouqs" + randomNumber;
      document.getElementById("imageid").src = img/Paid/Bouqs + "/" + imgName;
    }
  } else if (randomPrompt === prompts[1]) {
    function randomImg(){
      var randomNumber = Math.floor(Math.random() * 149) + 1;
      var imgName = "img_" + randomNumber;
      document.getElementById("imageid").src = img/Free + "/" + imgName;
    }
  } else if (randomPrompt === prompts[2]) {
    function randomImg(){
      var randomNumber = Math.floor(Math.random() * 149) + 1;
      var imgName = "img_" + randomNumber;
      document.getElementById("imageid").src = img/Free + "/" + imgName;
    }
  } else if (randomPrompt === prompts[3]) {
    function randomImg(){
      var randomNumber = Math.floor(Math.random() * 149) + 1;
      var imgName = "img_" + randomNumber;
      document.getElementById("imageid").src = img/Free + "/" + imgName;
    }
  } else if (randomPrompt === prompts[4]) {
    function randomImg(){
      var randomNumber = Math.floor(Math.random() * 149) + 1;
      var imgName = "img_" + randomNumber;
      document.getElementById("imageid").src = img/Free + "/" + imgName;
    }
  } else if (randomPrompt === prompts[5]) {
    function randomImg(){
      var randomNumber = Math.floor(Math.random() * 149) + 1;
      var imgName = "img_" + randomNumber;
      document.getElementById("imageid").src = img/Free + "/" + imgName;
    }
  }
};
