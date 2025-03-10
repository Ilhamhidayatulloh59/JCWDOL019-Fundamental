function triangle(height: number) {
  let count: number = 0;
  for (let i = 1; i <= height; i++) {
    let str: string = "";
    for (let j = 1; j <= i; j++) {
      count++;
      if (count < 10) {
        str = str + "0" + count + " ";
      } else {
        str = str + count + " ";
      }
    }
    console.log(str);
  }
}

triangle(5);
