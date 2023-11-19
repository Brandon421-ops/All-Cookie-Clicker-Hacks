//inspect element
var productIdNum = prompt("Enter product number. (For Example, \n Cursor = 0, \n Grandma = 1, \n Farm = 2, \n (e.t.c.))");
function buy(){document.getElementById("product" + productIdNum).click();}setInterval(buy, 250);

//bookmarklet
javascript:var productIdNum = prompt("Enter product number. (For Example, \n Cursor = 0, \n Grandma = 1, \n Farm = 2, \n (e.t.c.))");function buy(){document.getElementById("product" + productIdNum).click();}setInterval(buy, 250);

