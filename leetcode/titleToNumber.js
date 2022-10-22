/**
 * @param {string} columnTitle
 * @return {number}
 */
 var titleToNumber = function (columnTitle) {
    let corresponding_number = 0;
    for (let i = 0; i < columnTitle.length; i++) {
        const current_letter = columnTitle[i]; // current Letter
        const current_number = current_letter.charCodeAt(0) - 64; // 
        corresponding_number += current_number * Math.pow(26, columnTitle.length - i - 1);
    }
    return corresponding_number;
};