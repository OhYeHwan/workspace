const array = [6, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 해당 값의 인덱스를 반환한다.
// 해당 값이 배열안에 여러개 존재할 경우 제일 첫번째에 해당하는 값의 인덱스를 반환한다.
console.log(array.indexOf(1));

const index = array.indexOf(2);
console.log(index);


const filtered = array.filter(i => array.indexOf(i) === 9);
console.log(filtered)

const dup = array.indexOf(6);
console.log(dup);