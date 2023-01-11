class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo?: string;

  constructor(b: string, s: number, r: string, c: string[]) {
    this._brand = b;
    this._connections = c;
    this._resolution = r;
    this._size = s;
  }

  turnOn(): void {
    console.log(
      `TV ${this._brand}, ${this._size}", resolution: ${this._resolution} \n\

available connections: ${this._connections}`
    );
  }

  get connectedTo(): string | undefined {
    return this._connectedTo;
  }

  set connectedTo(value: string | undefined) {
    if (!value || this._connections.includes(value)) {
      this._connectedTo = value;
      console.log(this._connectedTo);
    } else {
      console.log('no connections');
    }
  }
}

const tv1 = new Tv('LG', 32, '4K', ['HDMI', 'Ethernet', 'Wifi']);
tv1.turnOn();
tv1.connectedTo = 'Wifi';
console.log('Connected to: ', tv1.connectedTo);
