// 1. boolean 생성자 함수를 new 연산자 없이 호출
console.log(Boolean('javaScript'));
console.log(Boolean(''));
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(Infinity));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean({}));
console.log(Boolean([]));
console.log('-------------------------------------------');


// 2. !부정 논리 연산자를 두번 사용하는 방법
console.log(!!'JavaScript');
console.log(!!'');
console.log(!!1);
console.log(!!0);
console.log(!!NaN);
console.log(!!Infinity);
console.log(!!null);
console.log(!!undefined);
console.log(!!{});
console.log(!![]);
