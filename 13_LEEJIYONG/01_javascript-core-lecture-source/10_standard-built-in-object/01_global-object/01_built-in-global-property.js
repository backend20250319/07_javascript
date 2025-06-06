// global object는 코드가 실행되기 이전 단계에 자바스크립트 엔진에 의해 어떤 객체보다도 먼저 생성되는
// 특수한 객체 Node.js환경에서는 global이 전역 객체이고, 브라우저 환경에서는 window가 전역객체이다.
// 전역 객체는 계층 구조 상 어떤 객체에도 속하지 않는 최상위 객체이다.
console.log(this);

// Infinity : 무한대를 나타내는 숫자값
// 전역 프로퍼티는 global을 생략하고 참조할 수 있다.
console.log(global.Infinity === Infinity);
// 양의 무한대
console.log(10 / 0); // Infinity
// 음의 무한대
console.log(-10 / 0); // Infinity
console.log(typeof Infinity); // number

// NaN: 숫자가 아님(Not a Number)을 나타내는 숫자 값
// Number.NaN 프로퍼티와 같다.
console.log(global.NaN); // NaN
console.log(Number("abc")); // NaN
console.log(10 * "abcf"); // NaN
console.log(typeof NaN); // number
// NaN의 을 비교 >>> isNaN()

// undefined : 원시 타입 undefined
console.log(global.undefined); // undefined
let nothing;
console.log(nothing); // undefined
console.log(typeof undefined); // undefined

// Falty, thruthy
// 0, null, undefined, NaN, ''
