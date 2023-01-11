var Tv = /** @class */ (function () {
    function Tv(b, s, r, c) {
        this._brand = b;
        this._connections = c;
        this._resolution = r;
        this._size = s;
    }
    Tv.prototype.turnOn = function () {
        console.log("TV ".concat(this._brand, ", ").concat(this._size, "\", resolution: ").concat(this._resolution, " \n\navailable connections: ").concat(this._connections));
    };
    Object.defineProperty(Tv.prototype, "connectedTo", {
        get: function () {
            return this._connectedTo;
        },
        set: function (value) {
            if (!value || this._connections.includes(value)) {
                this._connectedTo = value;
                console.log(this._connectedTo);
            }
            else {
                console.log('no connections');
            }
        },
        enumerable: false,
        configurable: true
    });
    return Tv;
}());
var tv1 = new Tv('LG', 32, '4K', ['HDMI', 'Ethernet', 'Wifi']);
tv1.turnOn();
tv1.connectedTo = 'Wifi';
console.log('Connected to: ', tv1.connectedTo);
