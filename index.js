// Recursive Function

function countDown(num){
    console.log(num);
    if(num > 0){
        countDown(num - 1);
    }
  
}

countDown(10); 