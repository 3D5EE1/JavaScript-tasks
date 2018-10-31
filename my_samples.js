// создание объекта

var vasya = { 
	name:'Vasya',
	age: 39,
	weight: 1.73,
}

document.write(vasya.name + "<br> vasya.age: " + vasya.age  + "<br> vasya.weight: " +  vasya.weight + "<br><hr>");

// создание объекта

var vova = new Object();
vova.x = "vova: 10";
vova.y = "vova: 20";
document.write(vova.x + "<br> " + vova.y + "<br><hr>");

// функция-конструктор

function Crash(a, b, c) {
	this.a = a;
	this.b = b;
	this.c = c;
	this.t = this.a + this.b + this.c;
}

var m = new Crash(10, 20, 30);

document.write(m.a + ", " + m.b + ", " + m.c + "<br>");

document.write(m.t + "<br><hr>");

// функция-конструктор

var Car = function (cash) {
	this.cash = cash;

	if (cash > 1000000) {
		this.result = function() {
			document.write("Dorogo" + "<br>");
		};
	}

	else if (cash > 500000 ) {
		this.result = function() {
			document.write("Vse ravno Dorogo" + "<br>");
		};
	}

	else {
		this.result = function() {
		document.write("Norm, beri" + "<br><hr>");
		};
	}

}

var Audi = new Car(1500000);
Audi.result();
var Bmw = new Car(700000);
Bmw.result();
var Lada = new Car(5000);
Lada.result();


//---------------------------------------------------------------------------

function masha() {
	document.write("masha" + "<br><hr>");
}

masha();

//---------------------------------------------------------------------------

var misha = function() {
	document.write("misha" + "<br><hr>");
};

misha();

//---------------------------------------------------------------------------


function Const(tag) {
	this.tag = tag;
	this.print = function() {
		document.write("constructor: " + tag + "<br><hr>");
	}
}

var u = new Const("first constructor");
u.print();

var t = new Const("second constuctor");
t.print();

//---------------------------------------------------------------------------

function Proto(tag) {
	this.tag = tag;
}

Proto.prototype.print = function() {
	document.write("constructor prototype: " + this.tag + "<br><hr>")
}

var m = new Proto("first prototype").print();

var n = new Proto("second prototype");
n.print();

//---------------------------------------------------------------------------


// Play drum by keyboard press
window.addEventListener('click' , playDrum);
function playDrum(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    key.classList.add('playing');
};

// Remove .playing class after transition action over
const keys = document.querySelectorAll('.key');
keys.forEach( key => key.addEventListener('transitionend' , removePlayingClass ) );
function removePlayingClass(e)
{
    //if( e.propertyName != 'transform' ) return;
    this.classList.remove('playing');
}


// Play music by mouse click
keys.forEach( key => key.addEventListener('click' , playByMouse ) );
function playByMouse(e)
{
    const keyCode = this.getAttribute('data-key');
	const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
	audio.currentTime = 0;
	audio.play();
	const key = document.querySelector(`.key[data-key="${keyCode}"]`);
    key.classList.add('playing');
}


// ;(function () {

// 	const keys = document.getElementsByClassName('key');
// 	const audiolist = document.getElementsByTagName('audio');

//   for (let key of keys) {
//     key.onclick = function () {
// 			key.style.transform = "scale(1.2)";
// 			key.style.transition = "50ms ease-in";
//       for ( audio of audiolist) {
// 				if (audio.dataset.key === key.dataset.key) {
// 					audio.play();
// 					break;
// 				}
// 		}
//     }
//   }

// })();


