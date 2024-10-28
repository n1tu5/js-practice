let arr = [1, 2, 3, 4, 5, 6];
for (let i = 0; i <= arr.length-1; i++) {
document.write(`<p>${arr[i]}</p>`);
}

console.log('Задание 7')
let arr1 = [1, 3, 5, 44, 777, 8888];
for(let i = 0; i <= arr1.length; i++){
	if (arr1[i] == 5){
console.log('Есть');
break;
}
if (i == arr1.length){
	console.log('Нету')
}
}