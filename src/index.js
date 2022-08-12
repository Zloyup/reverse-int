module.exports = function reverse(n) {

    let strng;

    if (n < 0) {
        n *= -1;
        strng = n.toString(10);
        return strng.split('').reverse().join('');
    } else {
        strng = n.toString(10);
        return strng.split('').reverse().join('');;
    };

}
