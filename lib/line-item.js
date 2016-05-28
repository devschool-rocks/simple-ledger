var LineItem = function(amount, label) {
  this.amount = amount;
  this.label = label;
  return this;
};

LineItem.prototype.toString = function() {
  return [this.amount, ": -", this.label].join("");
};

module.exports = LineItem;
