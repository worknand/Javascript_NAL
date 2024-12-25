// reverse a number

 function reverseNumber(num){
    if(num>=0 && num <= 9){
        return num;
    }

    let reverseNum=0;
    while(num!=0){
        reverseNum=reverseNum*10 +(num%10);//0 +3 
        // console.log(reverseNum);
         
        num=Math.floor(num/10); //123/10 12
    }
    return reverseNum;
}

const result = reverseNumber(12345);
console.log(result);

