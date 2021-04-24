// Data type
1. number
2. string
3. boolean
4. symbol
5. undefined

// null vs undefined
null : 값이 정해지지 않은 것 
undefined: 타입이 정해지지 않은 것

// object
let yehwan = {
    name: "예환",
    age: 27,
    weight: 74
}

// 객체 프로퍼티 참조 방법
1. yehwan.name
2. yehwan["name"]

// 산술 연산자
    + -  * /(나누기) %(나머지) 

// 삼항 연산자
표현식(조건) ? 참(값) : 거짓(값)

//if문
if (조건) {
    실행문
} else if (조건) {
    실행문
} else {
    실행문
}

// switch
switch (조건 값) {
    case 값1:
        실행문
        break;
    case 값2:
        실행문
        break;
    case 값3:
        실행문
        break;
    default:
        실행문
        break;
}

//while
while (표현식) {
    
}

//for
for (let i = 0; i < 10; i++) {
    
}

//for in
for (변수 in 객체) -> 인덱스


//for of
for (변수 of 객체) -> 값

//배열
let arr = [값];
let arr = Array(값);
let arr = new Array(값);

let arr = new Array(); // 빈배열생성

// 배열 메소드
push, pop,
shift // 첫요소 제거 
unshift // 앞에 값 추가
reverse
sort
splice // 기준배열 요소를 제거하거나 새로운 배열 요소를 추가하여 배열의 내용 변경
var arr = [1, true, 'J', '자'];
var removed = arr.splice(1, 2, false, 'C'); // 첫번째 인덱스 값부터 2개 제거(true와 'J') 하고 false, 'C' 추가
removed = [1, false, 'C', '자'];

//forEach()
해당 배열의 모든 요소에 대하여 반복적으로 명시된 콜백함수 실행
var arr = [1, true, 'J'];
arr.forEach((i) => console.log(i)) // 1, true, 'J'

//map()
해당 배열의 모든 요소에 대하여 반복적으로 명시된 콜백 함수를 실행 후, 그 실행 결과를 새로운 배열에 담아 리턴
var arr = [1, 2, 3, 4];
var aftermap = arr.map((i) => i + 2); // [3,4,5,6]

//filter()
해당 배열의 모든 요소에 대하여 반복적으로 명시된 콜백 함수를 실행한 후 그 결과 값이 true인 요소들만을 새로운 배열에 담아 반환
var arr = [-10, 5, 100, -20, 40];
var lessten = arr.filter(i => i < 10);

//reduce()
해당 배열의 모든 요소를 하나의 값으로 줄이기 위해, 두개의 인수를 전달받는 콜백 함수를 실행
var arr = [1, 2, 3, 4, 5];
arr.reduce((x, y) => x - y);


//Array.isArray 메소드
Array.isArray([]) // true
Array.isArray(123) // false