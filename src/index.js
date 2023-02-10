module.exports = function check(str, bracketsConfig) {
    let current = '';
    for (i = 0; i < str.length; i++){
            switch (bracketsConfig.length){
                case 1:
                    if (str[i] == bracketsConfig[0][0]){
                    current + str.length[i];
                    } else if (str[i] == bracketsConfig[0][1]){
                        if (current.includes(bracketsConfig[0][0])){
                            current--;
                        }
                    }
                    break;
                case 2:
                    if (str[i] == bracketsConfig[0][0] || str[i] == bracketsConfig[1][0]){
                    current + str.length[i];
                    } else if (str[i] == bracketsConfig[0][1] || str[i] == bracketsConfig[1][1]){
                        if (current.includes(bracketsConfig[0][0]) || current.includes(bracketsConfig[1][0])){
                            current--;
                        }
                    }
                    break;
                case 3:
                    if (str[i] == bracketsConfig[0][0] || str[i] == bracketsConfig[1][0] || str[i] == bracketsConfig[2][0]){
                    current + str.length[i];
                    } else if (str[i] == bracketsConfig[0][1] || str[i] == bracketsConfig[1][1] || str[i] == bracketsConfig[2][1]){
                        if (current.includes(bracketsConfig[0][0]) || current.includes(bracketsConfig[1][0]) || current.includes(bracketsConfig[2][0])){
                            current--;
                        }
                    }
                break;
            }
    }
    if (current == 0){
        return true;
    } else {
        return false
    }
