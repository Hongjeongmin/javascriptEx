function Student(name, korean, math, english, science) {
    this.이름 = name;
    this.국어 = korean;
    this.수학 = math;
    this.영어 = english;
    this.과학 = science;


    this.getSum = function () {
        return this.국어 + this.수학 + this.영어 + this.과학;
    };

    this.getAverage = function () {
        return this.getSum() / 4;
    };

    this.toString = function () {
        return this.이름 + '\t' + this.getSum() + '\t' + this.getAverage();
    };

}

var student = new Student('윤하린', 96, 98, 92, 98);