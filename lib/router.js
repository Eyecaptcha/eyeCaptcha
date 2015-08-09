Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {
  template: 'login'
});

Router.route('/register', {
  template: 'register'
});

Router.route('/webmaster', {
  name: 'webmasterDash',
  template: 'webmasterDash',
  data: function(){
    var currentUser = Meteor.userId();
  },

  onBeforeAction: function(){
        var currentUser = Meteor.userId();
        if(currentUser){
            this.next();
        } else {
            this.render('/');
        }
    }
});

Router.route('/eyecaptcha', {
  name: 'eyecaptcha',
  template: 'eyecaptcha',
  data: function(){
    var currentUser = Meteor.userId();
  },

  onBeforeAction: function(){
        var currentUser = Meteor.userId();
        if(currentUser){
            this.next();
        } else {
            this.render('/');
        }
    }
});
