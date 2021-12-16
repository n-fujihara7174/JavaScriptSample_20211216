function getMaxMin(...nums) {
  return [Math.max(...nums), Math.min(...nums)];
}

let result = getMaxMin(10,35,-5,78,0,-20);
console.log(result);

let [max, min] = getMaxMin(10,35,-5,78,0,-20);
console.log(max);
console.log(min);

let getCircle = radius => radius * radius * Math.PI;
let sample1 = () => {
  let circle1 = getCircle(1)
  let circle2 = getCircle(2)
  return [circle1,circle2]
}

//名前がマッチしているものに代入してくれる訳ではない
let[circle4,circle2] = sample1()
console.log(circle4);
console.log(circle2);

//片方の値のみ取得したい場合は以下の様に記載
//let[,min] = getMaxMin(10,35,-5,78,0,-20);
