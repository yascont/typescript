var Calculator;
(function (Calculator) {
    var BasicCalculator = /** @class */ (function () {
        function BasicCalculator() {
        }
        BasicCalculator.prototype.add = function (x, y) {
            return x + y;
        };
        BasicCalculator.prototype.subtract = function (x, y) {
            return x - y;
        };
        return BasicCalculator;
    }());
    Calculator.BasicCalculator = BasicCalculator;
})(Calculator || (Calculator = {}));
