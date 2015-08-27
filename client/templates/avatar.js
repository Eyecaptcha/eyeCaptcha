Template.imgDisplay.helpers({
	avatar: function() {
								// Declare variable for the avatar.
		var avatar = Free.findOne().copies.free.key;

		return (avatar);
	},
});

// Template.img11.helpers({
// 	eyecaptcha11: function(){
// 		var eyecaptcha11 = captchaArray[0];
// 		// console.log(eyecaptcha11);
// 		// Free.findOne({key : eyecaptcha11}).copies.free;
//
// 		return (eyecaptcha11);
// 	}
// });
//
// Template.img12.helpers({
// 	eyecaptcha12: function(){
// 		var eyecaptcha12 = captchaArray[1];
//
// 		return (eyecaptcha12);
// 	}
// });
//
// Template.img21.helpers({
// 	eyecaptcha21: function(){
// 		var eyecaptcha21 = captchaArray[2];
//
// 		return (eyecaptcha21);
// 	}
// });
//
// Template.img22.helpers({
// 	eyecaptcha22: function(){
// 		var eyecaptcha22 = captchaArray[3];
//
// 		return (eyecaptcha22);
// 	}
// });
//
// Template.img31.helpers({
// 	eyecaptcha31: function(){
// 		var eyecaptcha31 = captchaArray[4];
//
// 		return (eyecaptcha31);
// 	}
// });
//
// Template.img32.helpers({
// 	eyecaptcha32: function(){
// 		var eyecaptcha32 = captchaArray[5];
//
// 		return (eyecaptcha32);
// 	}
// });
