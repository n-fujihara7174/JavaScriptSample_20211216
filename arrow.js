//functionを省略して記述することができる。
let getTriangle = (base, height) => {
  return base * height / 2;
}

console.log(getTriangle(5,1));

//処理記述部分が一行であれば{}も省略することが可能
let getTriangle2 = (base = 2, height = 2) => base * height / 2;
console.log(getTriangle2());

//引数が一つの場合であれば引数の()も省略が可能
let getCircle = (radius=1) => radius * radius * Math.PI;
console.log(getCircle());