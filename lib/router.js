Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {
  template: 'login'
});

Router.route('/register', {
  template: 'register'
});

Router.route('/reset', {
  template: 'reset'
});

Router.route('/webmaster', {
  template: 'webmasterDash',

  onBeforeAction: function(){
        var currentUser = Meteor.userId();
        if(currentUser){
            this.next();
        } else {
            this.render("login");
        }
    }
});

Router.route('/advertiser', {
  template: 'advertiserDash',

  onBeforeAction: function(){
        var currentUser = Meteor.userId();
        if(currentUser){
            this.next();
        } else {
            this.render("login");
        }
    }
});

Router.route('/test', {
  template: 'eyecaptcha',

  onBeforeAction: function(){
        var currentUser = Meteor.userId();
        if(currentUser){
            this.next();
        } else {
            this.render("login");
        }
    }
});

Router.route('/free', {
  template: 'free',

  onBeforeAction: function(){
        var currentUser = Meteor.userId();
        if(currentUser){
            this.next();
        } else {
            this.render("login");
        }
    }
});
