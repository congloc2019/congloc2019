var x = 5;
var y = "Van Hau is a Vietnamese footballer who plays as a left-back";
console.log(typeof x);
console.log(typeof y);
document.write('<br>' + y);
// Kiem tra chieu dai cua string
document.write('<br>' + y.length);
console.log(y.length);

function countCharInString(charSearch, myStr) {
	var count = 0;
	var newMyStr = '';
	while (myStr.indexOf(charSearch) != -1) {
		count++;
		newMyStr = myStr.substring(myStr.indexOf(charSearch) + 1, myStr.length);
		myStr = newMyStr;
	}
	return count;
}
document.write('<br>');
document.write(countCharInString('a', 'I am Chad!'));
//b4
function countCharInString(charSearch, myStr) {
	var count = 0;
	var newMyStr = '';
	while (myStr.indexOf(charSearch) != -1) {
		count++;
		newMyStr = myStr.substring(myStr.indexOf(charSearch) + 1, myStr.length);
		myStr = newMyStr;
	}
	return count;
}
document.write('<br>');
document.write(countCharInString('a', 'I am Chad!'));
//3
var x = "TOI LA TAO";
var y = x.indexOf("TAO");
if(y ==  -1)
{
  console.log("Chuỗi x không có từ cần tìm");
}
else
{
 
  console.log("Chuỗi x có từ cần tìm, vị trí của từ cần tìm là: "+y);
}