function maxValue() {
    var ar = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ar[_i] = arguments[_i];
    }
    var i = 0;
    for (var _a = 0, ar_1 = ar; _a < ar_1.length; _a++) {
        var k = ar_1[_a];
        if (k > i) {
            i = k;
        }
    }
    console.log(i);
}
maxValue(10, 20, 11, 110, 74);
maxValue(36, 26, 47, 84, 32, 73, 47, 93, 23);
