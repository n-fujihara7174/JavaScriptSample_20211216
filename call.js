//letの場合はブロックでスコープが分かれる
let data = 'global data';
let obj1 = {data: 'obj1 data'};
let obj2 = {data: 'obj2 data'};

function hoge() {
  console.log(this.data)
}

//letで変数を宣言した場合はundefinedになる。varの場合はglobal dataが呼ばれる
hoge.call(null);
hoge.call(obj1);
hoge.call(obj2);

