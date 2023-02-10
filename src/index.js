module.exports = function check(str, bracketsConfig) {
    for (i = 0; i < str.length; i++){
        for (j = 0; j < bracketsConfig.length; j++){
            if (bracketsConfig[j][1] === str[i] && bracketsConfig[j][0] === str[i-1]){
                str = str.slice(0, i -1) + str.slice(i + 1, str.length);
                i = 0;
            }
        }
    }
    return str.length === 0 ? true : false;
}
