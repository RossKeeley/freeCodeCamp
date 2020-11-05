function convertToRoman(num) {
    let romanNumeral = "";
    let numberTiers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 3, 2, 1];
    let romanNumerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "III", "II", "I"];
    
    for (let i = 0; i < numberTiers.length; i++) {
        while (numberTiers[i] <= num) {
            romanNumeral += romanNumerals[i];
            num -= numberTiers[i];
        }
    }

 return romanNumeral;
}

console.log(convertToRoman(3999));
