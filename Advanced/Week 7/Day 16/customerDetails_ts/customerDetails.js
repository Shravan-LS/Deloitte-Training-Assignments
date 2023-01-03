var Ccustomer = /** @class */ (function () {
    function Ccustomer(id, name, location) {
        if (id === void 0) { id = 1; }
        if (name === void 0) { name = "Scott"; }
        if (location === void 0) { location = "Hyd"; }
        this.id = id;
        this.name = name;
        this.location = location;
    }
    Ccustomer.prototype.showDetails = function () {
        console.log("Customer Details:: Id: ".concat(this.id, ", Name: ").concat(this.name, ", Location: ").concat(this.location));
    };
    return Ccustomer;
}());
var c1 = new Ccustomer();
var c2 = new Ccustomer(10256);
var c3 = new Ccustomer(10256, "Shravan");
var c4 = new Ccustomer(10256, "Evin", "Mumbai");
c1.showDetails();
c2.showDetails();
c3.showDetails();
c4.showDetails();
