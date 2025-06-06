// 객체 리터럴 생성
var student = {
    // 프로퍼티 : 객체의 상태를 나타내는 값으로 키-값 쌍으로 구성함
    name: "유관순",
    age : 16,
    // 메서드 : 프로퍼티를 참조하고 조작할 수 있음
    getInfo : function() {
        return `${this.name}(은)는 ${this.age}세입니다.`
    }
};

console.log(typeof student);
console.log(`student >>>`, student);
console.log(`student.name : `, student.name);

// 프로퍼티를 정의하지 않은 빈 객체 생성
var student2 = {};
console.log(typeof student2);
console.log(`student2 >>> `, student2);