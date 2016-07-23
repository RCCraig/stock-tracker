Meteor.startup(function(){
  //count entries
  var num = Stocks.find().count();

  if(num === 0) {
    var fixtures = [
      { symbol: 'GOOG' },
      { symbol: 'AMZN' },
      { symbol: 'MSFT' },
      { symbol: 'BAC'},
      { symbol: 'F'}
     ];

     fixtures.forEach(function(element){
       Stocks.insert(element);
     });
  }
});
