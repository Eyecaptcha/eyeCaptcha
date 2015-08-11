if ( Meteor.users.find().count() === 0 ) {
  Accounts.createUser({
                             username: 'eyecaptcha',
                             password : 'A100Grove',
     });
}
