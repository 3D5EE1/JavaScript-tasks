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