document.write('================' + '<br>');
document.write('Bài 1' + '<br>');

var a = 27,
    b = a / 3;
var c;
for (c = 0; c <= 27; c++) {
    if (a - c == (b + c) * 2)
        document.write('Số sách cần chuyển cho Minh là: ' + c);
}

document.write('<br>' + '================' + '<br>');
document.write('Bài 2' + '<br>');
var m = n = 10;
while (n > 1) {
    m = Math.floor(m + n / 2);
    if (n % 2 == 0) n = n / 2;
    else if (n % 2 == 1) n = (n + 1) / 2;
}
document.write('Số kẹo mua được là: ' + m);

document.write('<br>' + '================' + '<br>');
document.write('Bài 3' + '<br>');

var x, y, z;
var i = 0;
for (x = 0; x <= 100; x++) {
    for (y = 0; y <= 50; y++) {
        for (z = 0; z <= 20; z++) {
            if (10000 * x + 20000 * y + 50000 * z == 1000000) {
                document.write(x + ' tờ 10000, ' + y + ' tờ 20000, ' + z + ' tờ 50000' + '<br>');
                i++;
            }
        }

    }
}
document.write('Có ' + i + ' cách chia.');

document.write('<br>' + '================' + '<br>');
document.write('Bài 4' + '<br>');

document.write('Số tiền có được sau 3 năm: ' + (20000000 * Math.pow((1 + 0.6 / 100), 36)).toFixed(1) + ' VNĐ');

document.write('<br>' + '================' + '<br>');
document.write('Bài 5' + '<br>');

var so_tien = 150000000;
for (var j = 1; j <= 36; j++) {
    so_tien = so_tien * 1.007;
    if (j % 3 == 0) so_tien = so_tien - 3000000 - 1000000 * (j / 3 - 1);
}
document.write('Số tiền có được sau 3 năm: ' + so_tien.toFixed(1) + ' VNĐ');