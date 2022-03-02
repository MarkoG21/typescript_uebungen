type Combinable = number | string; //type aliases

function combine(
  input1: number | string, //Union Type
  input2: Combinable,
  resultType: "as-number" | "as-string" //literal type:
) {
  let result: number | string;

  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  if (resultType === "as-number") {
    return +result;
  } else if (resultType === "as-string") {
    return result.toString();
  }
  return result;
}

console.log(combine(20, 90, "as-number"));
console.log(combine("Buzz", "Fizz", "as-number"));
