function isOnetoThousand(num){
    if(num>=1 && num <=1000) return true;
    else return false;
}
function isValid(firstNum,secondNum){
    if(firstNum<=secondNum && isOnetoThousand(firstNum) && isOnetoThousand(secondNum)) 
        return true;
    else return false;
}
function creatMultiplyTable(firstNum,secondNum){
    if(isValid(firstNum,secondNum) ){
        var column,row;
        var result="";
        var temp="";
        for(column=firstNum;column<=secondNum;column++){
            for(row=firstNum;row<=column;row++){
                temp=row+"*"+column+"="+row*column;
                if(row < column){
                    temp+=" ";
                }
                result=result+temp;
                //console.log(row+"*"+column+"="+row*column );
            }
            //console.log("\n");
            if(column != secondNum){
                result+="\n"
            }
            //result+="\n";
        }
        return result;
    }
    else{
        return null;
    }
    
}

module.exports = {
    creatMultiplyTable,
    isValid,
    isOnetoThousand
}
