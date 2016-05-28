var Account = require('./lib/account');

var myAccount = new Account("Jim");
console.log(myAccount.balance());

myAccount.register(1200, 'opening deposit');

console.log(myAccount.balance());

myAccount.register(-420.20, 'for weed man');
console.log(myAccount.balance());

myAccount.register(60.00, 'a bro needed some weed');
console.log(myAccount.balance());

var log = function(item) {
  console.log(item.toString());
};

myAccount.lineItems.map(log);
