function calculateBMI(weight: number, height: number) {
  const res = weight / (height * height);

  if (res < 18.5) {
    return "Less Weight";
  } else if (res < 24.9) {
    return "Ideal";
  } else if (res < 29.9) {
    return "Overweight";
  } else if (res < 39.9) {
    return "Very Overweigth";
  } else {
    return "Obesity";
  }
}

console.log(calculateBMI(80, 1.6));
