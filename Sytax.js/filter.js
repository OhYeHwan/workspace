//  배열 filter Method 정리

const array = [1, 2, 4];

const example_1 = array.filter(i => i >= 2);
console.log(example_1);

//  1. filter 메서드는 콜백함수를 받아온다
//  2. 조건이 참인 요소들만 모아 새로운 배열로 반환.

// i => i>=2 해당조건을 만족하는 i만을 모아 새로운 배열로 반환!

const example_2 = array.filter(i => {
    if (i >= 4) {
        return true;
    }
})
console.log(example_2);

const example_3 = array.filter(function (i) {
    if (i > 0) {
        return true;
    }
})
console.log(example_3);


const example_4 = array.filter(i => i !== 2);
// 각 원소들 중에서 2가 아닌 것만 뽑는다. [1,4]
console.log(example_4)