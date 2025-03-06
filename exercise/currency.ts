const price: number = 1000;

const formatted = price.toLocaleString("id-ID", {
  style: "currency",
  currency: "IDR",
  minimumFractionDigits: 2,
});

console.log(formatted)
