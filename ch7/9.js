// 생성자 함수를 선언합니다.
function Rectangle(width, height){
    this.width = width;
    this.height = height;
}

Rectangle.prototype.getArea = function(){
    return this.width * this.height;
};

// 변수를 선언합니다.
var rectangle = new Rectangle(5,7);

// 출력합니다.
console.log('AREA: '+ rectangle.getArea());