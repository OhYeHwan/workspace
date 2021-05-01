// Array 설정 방법
const A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const B = new Array();
const C = [];
const D = Array(0);

console.log(A);
console.log(B);
console.log(C);
console.log(D);

console.log("-----");
// push : 뒤로 추가
B.push(1);
console.log(B);
B.push(0);
console.log(B);

// pop 뒤에서부터삭제
B.pop();
console.log(B);
A.pop();
console.log(A);

console.log('--------Join----')
// join은 배열의 모든 원소를 스트링으로 변환하여 새로운 문자열을 만든다!
const afterA = A.join('');
console.log(afterA);