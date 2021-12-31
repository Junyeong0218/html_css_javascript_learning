/*
const = constance 상수
let = 변수
var = 변수 
hoisting(호이스팅) = 인터프리터가 변수와 함수의 메모리 공간을 선언 전에
                    미리 할당하는 것
var형으로 선언한 변수의 경우 호이스팅 시 변수를 자동으로 초기화 시켜주지만
let or const 형으로 선언시 변수를 초기화 하지 않기 때문에
변수를 선언하기 전에 각 변수를 참조할 시
var = undefined
let or const = Error

let 의 경우 언제나 값의 재할당이 가능하므로 선언시 할당하지 않아도 상관없음
const 의 경우 값의 재할당이 불가능하므로 선언시 초기화가 필수적임


배열
cosnt a = []; < 선언

배열에 값 추가시
a.push(<값>);

배열 참조시
a[<index>]

배열 자체는 const 로 선언되었지만 배열내에 값 추가 및 삭제, 변경은 가능하다.
배열 내에는 어떤 자료형이든 올 수 있다.
String int float boolean undefined null etc..


Object
const a = {
    <columnName: value>
}; < 선언

Object 값 참조시
a.<columnName> == value

Object 에 column 추가 및 변경시
a.<columnName> = value;

Object 내에는 배열, 메소드도 속할 수 있다.
const a = {
    weekday: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
    today: function([<arguments>]) {
        whateverYouNeed;
    }
};


function <functionName>([<argument>, ...]) {
    toDo;
}; < 메소드의 선언

<functionName>([<argument]); < 메소드의 사용

객체 내 메소드 선언과 사용예시
    const calc = {
        add: function(a, b) {
            console.log(a + b);
        },
        minus: function(a, b) {
            console.log(a - b);
        },
        mul: function(a, b) {
            console.log(a * b);
        },
        divide: function(a, b) {
            console.log(a / b);
        },
        powerOf: function(a, b){
            console.log(a ** b);
        }
    };

    calc.add(1, 2);

** < 거듭제곱 연산자
a ** b == a의 b승;
a ** b ** c == a ** (b ** c);
우측 결합성을 가지므로 ** 연산자로 나열되어 있는 경우 우측부터 계산한다.

메소드에서 연산 결과를 반환하고 싶은 경우 return 사용
ex)
function <functionName>([<arguments>]) {
    toDo;
    return Value;
}

typeof <variable> or typeof(<variable>) < 값의 자료형을 보는 방법

parseInt(<variable>) < String to Int
if(variable === NaN) {
    return NaN;
} else {
    return Int;
}
isNaN(<variable: Number>) === boolean

conditional(if)
typeof condition === boolean
if(condition) {
    execute When Its true;
} else {
    execute When Its false;
};

&& == and
|| == or

console.dir(<Element>); < You can see all properties of this <Element>


document == an Object of HTML which linked this script
document.title == html's title
document.title = "<String>"; < set html's title
document.body == html's body
document.location == html's location of server

document.getElementById("<Id>") < Id is only one thing in HTML
document.getElementById("<Id>").innerText = "<String>";
// change text between tag which uses this <Id>.

Element.id < get Element's Id
Element.className < get Element's className

document.getElementsByClassName("<ClassName>")
// return Elements which uses class defined <ClassName> to Array
document.getElementsByTagName("<TagName>")
// return Elements which uses this Tag to Array

document.querySelector("CSS Selector") // return first Element
document.querySelectorAll("CSS Selector") // return Elements to Array
// select Element or Elements to Array by CSS Selector

document.querySelector("#container h1").style.color = "#000000";
// Change Element's style of font-color to #000000
// Why is this able to?
// Because the Element is an Object.
// Also style is an property of this Element.
// color same.

[[ Event ]]
Javascript can LISTEN the Event

Element.addEventListener("<event>", <functionName>); 
// Execute this <functionName> when the User <event> this Element.
// DOT'T INPUT () AFTER <functionName>
ex)
function chageFontColor() {
    Element.style.color = "#000000"; // to black
}

Element.addEventListener("click", changeFontColor);
// Execute function "changeFontColor" when the User "click" this Element.

// ELEMENT'S STYLE SHOULD BE CHANGE THROUGH CSS.

Element.addEventListener("click", <functionName>);
// == Element.onclick = <functionName>;
// You can use events this way but, I recommend to you this first one.
// Because you can remove the event if you choose the first way by this.
// Element.removeEventListener("event");

// If you want to see any events about Elements,
// search the keyword through Google and click the link "Web API | MDN"

[[ window ]]

window.addEventListener("resize", <functionName>);
// Execute this <functionName> when the window is resized.

window.addEventListener("resize", <functionName>);
// Execute this <functionName> when any Element is copied.

window.addEventListener("offline", <functionName>);
// Execute this <functionName> when User's device has no connection of network.

window.addEventListener("online", <functionName>);
// Execute this <functionName> when User's device is connected any network.


[[ Change CSS in JavaScript ]]
function handleTitleColor() {
    const currentColor = Element.style.color;
    let newColor;

    if(currentColor === "blue") {
        newColor = "black";
    } else {
        newColor = "blue";
    }
    
    Element.style.color = newColor;
}

.active {
    color: red;
} < in CSS

function handleTitleClick() {
    const activeClass = "active";
    if(Element.className === activeClass) {
        Element.className = "";
    } else {
        Element.className = activeClass;
    }
} < in JS

function handleTitleClick() {
    const activeClass = "active";
    if(Element.classList.contains(activeClass)) {
        Element.classList.remove(activeClass);
    } else {
        Element.classList.add(activeClass);
    }
}
// classList is the List contains classes.
// You can add or remove class without any affectation to the other classes.

function handleTitleClick() {
    const activeClass = "active";
    Element.classList.toggle(activeClass);
}
// toggle is the same thing above codes.
// if the className is exist already, it will be remove.
// if the className isn't exist in the List, it will be add.


*/