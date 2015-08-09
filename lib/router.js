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
  template: 'webmasterDash'
});

Router.route('/advertiser', {
  template: 'advertiserDash'
});

Router.route('/test', {
  template: 'eyecaptcha'
});
