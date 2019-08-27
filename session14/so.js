var a;
var b;
var c;

a = prompt("Nhập vào số a", "0");
b = prompt("Nhập vào số b", "0");
c = prompt("Nhập vào số c", "0");

a = parseInt(a);
b = parseInt(b);
c = parseInt(c);



if (a > b && b > c){
    document.write("a lon nhat");
}
else if (a < b && c < b){
    document.write(" b lon nhat");
}
else { 
    document.write("c lon nhat");
}