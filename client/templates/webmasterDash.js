Meteor.subscribe('tests');

Template.advertiser.helpers({
  ads: function() {
    return Tests.find();
  }
});
Template.webmasterDashContainer.helpers({
  totalprofit: function() {
    var sum = 0;
         var cursor = Tests.find( { } );
         cursor.forEach(function(tests){
           sum = sum + tests.price
         });
    return sum;
  }
});
