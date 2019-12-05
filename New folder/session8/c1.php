1. lấy ra danh sách sản phẩm thuộc danh mục "Guitars" có gía lớn hơn 500

SELECT productName, listPrice, categoryID
FROM products
WHERE categoryID = 1 AND  listPrice > 500;



2. Lấy ra danh sách sản phẩm được thêm vào tháng 7/2014, có giá lớn hơn 300, và sắp xếp giảm dần theo giá

SELECT dateAdded , listPrice 
FROM products
WHERE listPrice > 300 AND '2014-06-30' < dateAdded AND dateAdded < '2014-08-01'
ORDER BY listPrice DESC

3. Lấy ra danh sách sản phẩm mà tên có chứa chữ "o", thuộc danh mục "Basses", sắp xếp giảm dần theo tên

SELECT productName, listPrice, categoryID
FROM products
WHERE productName LIKE '%o%'
AND categoryID = 1
ORDER BY productName DESC;

4. Lấy ra danh sách sản phẩm mà khách hàng sử dụng gmail để mua

SELECT  emailAddress , firstName, lastName 
FROM custumers
WHERE emailAddress


5. Lấy ra danh sách sản phẩm có giá lơn hơn 300, đăng năm 2014, giới
hạn lấy 4 sản phẩm và sắp xếp theo giảm giá giảm dần

SELECT productName, listPrice, dateAdded
FROM products
WHERE listPrice > 300
AND dateAdded LIKE '2014-__%-__%' 
ORDER BY listPrice DESC LIMIT 4


6. Lấy ra tên thành phố mà khách hàng đã mua sản phẩm "Yamaha FG700S
