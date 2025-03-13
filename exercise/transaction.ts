class Product {
  name: string;
  price: number;

  constructor(nama: string, harga: number) {
    this.name = nama;
    this.price = harga;
  }
}

const product1 = new Product("Apple", 10000);
const product2 = new Product("Banana", 20000);
const product3 = new Product("Cherry", 5000);
const product4 = new Product("Orange", 30000);

interface Cart extends Product {
  qty: number;
  subtotal: number;
}

class Transaction {
  total: number = 0;
  products: Cart[] = [];

  addToCart(item: Product, qty: number) {
    const cartItem: Cart = {
      ...item,
      qty,
      subtotal: item.price * qty,
    };
    this.products.push(cartItem);
    this.total += cartItem.subtotal;
  }
  showTotal() {
    console.table(this.products);
    console.log(`Total : ${this.total}`);
  }
  checkout(money: number) {
    if (money < this.total) {
      console.log("Uang anda tidak cukup!");
    } else {
      console.log(`Cash : ${money}`);
      console.log(`Return : ${money - this.total}`);
    }
  }
}

const transaction1 = new Transaction();
transaction1.addToCart(product1, 3);
transaction1.addToCart(product4, 5);
transaction1.addToCart(product2, 2);
transaction1.showTotal();
transaction1.checkout(250000)
