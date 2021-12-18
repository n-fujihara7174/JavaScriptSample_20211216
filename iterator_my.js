class MyIterator {

  constructor(data,data2){
    this.data = data;
  }

  [Symbol.iterator](){
    let current = 0;
    let that = this;
    return {
      next(){
        return current < that.data.length ?
          {value: that.data[current++], done: false} :
          {done: true};
      }
    };
  }
}

let itr = new MyIterator(['one', 'two', 'three'],['four', 'five', 'six']);
for(let value of itr) {
  console.log(value)
}