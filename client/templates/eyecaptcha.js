// eyecaptcha

Template.eyecaptchaContainer.events({
    'click .img-button': function(event){
        event.preventDefault();
	alert(event);
        //record picked image
    }
	
    
});

Template.eyecaptchaContainer.events({
	'click .submit': function(event){
		event.preventDefault();
        //recognise if all chosen images are correct - pass or refresh
	}
});
