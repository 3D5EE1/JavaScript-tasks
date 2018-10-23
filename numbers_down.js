// Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending
// order. Essentially, rearrange the digits to create the highest possible number.
// 
// Examples:
// Input: 21445 Output: 54421
// 
// Input: 145263 Output: 654321
// 
// Input: 1254859723 Output: 9875543221

function descendingOrder(n){
    var str = String(n);
    var list = [];
    var result = ''

    for (var x = 0; x < str.length; x++) {
        list[x] = Number(str[x]);
    }

    for (var i = 9; i >= 0; i--) {
        for (var j = 0; j < str.length; j++){
            if (list[j] === i) {
                result += i;
            }
        }
    }
	return Number(result);
}