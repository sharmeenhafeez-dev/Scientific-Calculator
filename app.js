// first step ya h k jo btn press kry wo disply bar my nzr aya
function getNum(num){
    console.log(num)
    document.getElementById('result').value += num;
}
//second step clear screen
function clearScreen(){
    document.getElementById('result').value ="";
} 
//third step  one by one del the number
function removeNumber(){
    var res= document.getElementById('result').value
    document.getElementById('result').value =document.getElementById('result').value.slice(0,res.length-1);

    // console.log(document.getElementById('result').value.slice(0,res.length-1))
} 
 
function getAnswer(){
    document.getElementById('result').value =eval(document.getElementById('result').value)
    console.log(document.getElementById('result').value)
}