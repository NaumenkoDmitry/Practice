//1 
function number(){
  const arr = [4,-2,5,19,-130,0,10];
  console.log(Math.min(...arr),Math.max(...arr));
}
// console.log(number());

//2
function average(arr,sum){
   arr = [12, 15, 20, 25, 59, 79];
   sum = 0;
  for(let i=0;i<arr.length;i++){
    sum+=arr[i];
  }
  return sum/arr.length;
}
// console.log(average());

//3
function getRandom(){
  let max=100;
  return Math.floor(Math.random() * max);
}
// console.log(getRandom());
//4 
function getRandomPush(){
  const arr = [];
  for(let i=0;i<10;i++){
    arr[i] = Math.round(Math.random());
  }
  return arr;
}
// console.log(getRandomPush());
//===================================================

//1 Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
function getConcat(){
  let arr1 = [1,2,3],arr2 = [4,5,6];
  return arr1.concat(arr2);
}
// console.log(getConcat());

//2 Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
function getReverse(){
  let arr = [1,2,3];
  return arr.reverse();
}
// console.log(getReverse());

//3 Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
function getPush(){
  let arr = [1,2,3];
  arr.push(4,5,6);
  return arr;
}
// console.log(getPush());

//4 Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
function getUnshift(){
  let arr = [1,2,3];
  arr.unshift(4,5,6);
  return arr;
}
// console.log(getUnshift());

//5 Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент и удалите его.
function getShift(){
  let arr = ['js','css','iq'];
  return arr.shift();
}
// console.log(getShift());

//6 Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент и удалите его
function getPop(){
  let arr = ['js','css','iq'];
  return arr.pop();
}
// console.log(getPop());

//7 Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
function getSlice(){
  let arr = [1,2,3,4,5];
  return arr.slice(0,3);
}
// console.log(getSlice());

//8 Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
function getSliceTwo(){
  let arr = [1,2,3,4,5];
  return arr.slice(3,4);
}
// console.log(getSliceTwo());

//9 Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
function getSplice(){
  let arr = [1,2,3,4,5];
  arr.splice(1, 2);
  return arr;
}
// console.log(getSplice());

//10 Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2,3,4].
function getSpliceTwo(){
  let arr = [1,2,3,4,5];
  arr.splice(3, 0, 2,3,4);
  return arr;
}
// console.log(getSpliceTwo());

//11 Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b','c', 4, 5].
function getSpliceThree(){
  let arr = [1,2,3,4,5];
  arr.splice(3, 0, 'a','b','c');
  return arr;
}
// console.log(getSpliceThree());

//12 Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
function getSpliceFour(){
  let arr = [1,2,3,4,5];
  arr.splice(1, 0, 'a','b');
  arr.splice(6, 0, 'c');
  arr.splice(8, 0, 'e');
  return arr;
}
// console.log(getSpliceFour());

//13 Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
function getSort(){
  let arr = [3,4,1,2,7];
  arr.sort();
  return arr;
}
// console.log(getSort());
//14 Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.
function getObject(){
  let obj = {js:'test', jq: 'hello', css: 'world'};
  return Object.keys(obj);

}
// console.log(getObject());



