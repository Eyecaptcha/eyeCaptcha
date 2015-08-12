// eyecaptcha

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
