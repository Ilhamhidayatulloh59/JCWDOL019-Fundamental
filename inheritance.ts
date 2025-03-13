class Product {
  productName: string;
  price: number;

  constructor(nama: string, harga: number) {
    this.productName = nama;
    this.price = harga;
  }
}

class Book extends Product {
  author: string;

  constructor(nama: string, penulis: string, harga: number) {
    super(nama, harga);
    this.author = penulis;
  }
}

const book = new Book("Harry Potter", "J.K. Rowling", 500000);
console.log(book);

console.log(book instanceof Book);
console.log(book instanceof Product)
