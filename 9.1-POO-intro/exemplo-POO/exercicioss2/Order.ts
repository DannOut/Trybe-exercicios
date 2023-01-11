import Client from './Client';
import OrderItem from './OrderItem';

export default class Order {
  private _client: Client;
  private _items: OrderItem[] = [];
  private _paymentMethod: string;
  private _discount = 0;

  constructor(
    client: Client,
    items: OrderItem[],
    payment: string,
    discount: number
  ) {
    this._client = client;
    this._items = items;
    this._paymentMethod = payment;
    this._discount = discount;
  }

  public get client(): Client {
    return this._client;
  }
  public set client(value: Client) {
    this._client = value;
  }

  public get items(): OrderItem[] {
    return this._items;
  }
  public set items(value: OrderItem[]) {
    if (value.length === 0) {
      throw new Error('O pedido deve ter pelo meno um item.');
    }
    this._items = value;
  }

  public get paymentMethod(): string {
    return this._paymentMethod;
  }
  public set paymentMethod(value: string) {
    this._paymentMethod = value;
  }

  public get discount() {
    return this._discount;
  }
  public set discount(value) {
    if (value < 0) {
      throw new Error('O desconto não pode ser um valor negativo.');
    }
    this._discount = value;
  }

  public calculateTotal(): number {
    const total = this.items.reduce((acc, curr) => {
      const total = acc + curr.price;
      return total;
    }, 0);
    return total;
  }

  public calculateTotalWithDiscount(): number {
    return this.calculateTotal() * (1 - this.discount);
  }
}
