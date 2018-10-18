var vasya = { 
	name:'Vasya',
	age: 39,
	weight: 1.73,
}

document.write(vasya.name + "<br> vasya.age: " + vasya.age  + "<br> vasya.weight: " +  vasya.weight + "<br><hr>");

//---------------------------------------------------------------------------

var vova = new Object();
vova.x = "vova: 10";
vova.y = "vova: 20";
document.write(vova.x + "<br> " + vova.y + "<br><hr>");

//---------------------------------------------------------------------------

function Crash(a, b, c) {
	this.a = a;
	this.b = b;
	this.c = c;
	this.t = this.a + this.b + this.c;
}

var m = new Crash(10, 20, 30);

document.write(m.a + ", " + m.b + ", " + m.c + "<br>");

document.write(m.t + "<br><hr>");

//---------------------------------------------------------------------------

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
		document.write("Norm, beri" + "<br>");
		};
	}

}

var Audi = new Car(1500000);
var Bmw = new Car(700000);
var Lada = new Car(5000);

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



