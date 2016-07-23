Meteor.setInterval(function(){
  //make an array with symbols
  var symbols = [];
  Stocks.find().forEach(function(stock){
    symbols.push(stock.symbol);
  });

  //get data from Yahoo Finance API
  var results = YahooFinance.snapshot({symbols: symbols, fields: ['s', 'b']});

  //update collection
  results.forEach(function(result){
    let stock = Stocks.findOne({symbol: result.symbol});

    if(result.bid) {
      //price change
      let change = stock.price ? result.bid - stock.price : null;

      //update entry
      Stocks.update(stock._id, {$set: {price: result.bid, change: change}});
    }
  });

}, 3000);
