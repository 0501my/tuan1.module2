let recipe = {
    "dish" : "sườn xào chua ngọt",
    "meal" : 2,
    "element": ["400 g sườn thăn\n" +
    "\n" +
    "- 4 tbsp nước mắm\n" +
    "\n" +
    "- 5 tsp đường\n" +
    "\n" +
    "- 5 tsp nước cốt chanh\n" +
    "\n" +
    "- 1/3 bát nước sôi\n" +
    "\n" +
    "- Hành khô, tỏi, ớt, hành lá\n" +
    "\n" +
    "- 2 quả cà chua\n" +
    "\n" +
    "- Hành tây (ớt chuông)"],
};
console.log('Tên món ăn: ' + recipe.dish);


console.log('Khẩu phần ăn: : ' + recipe.meal);


console.log('Thành phần: ');


for (var i = 0; i < recipe.element.length; i++) {


    console.log(' - ' + recipe.element[i]);
}