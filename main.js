//CÂU 1
function Ngto(num){
    var i;
   if(num<=1) return false
   for( i=2;i<=Math.sqrt(num); i++){
    if(num%i==0)
         return "không phải là số nguyên tố"
   
   }
   return "là số nguyên tố"
}
console.log(Ngto(12))

//CÂU 2
function printNgto(n,m) {
    if(n==m) {
       return false }
    
    if(n<m){
    for( let j=n+1;j<m;j++){
       if(Ngto(j)){
         console.log(j)}
            
    }
 }  
 
 else if(n>m)
   {
    for( let j=n-1;j>m;j--){
        if(Ngto(j)){
          console.log(j)}
    
             
     }

}
    return
}

printNgto(9,15)
printNgto(12,5)


//CÂU 3
function mounth(x){
    if(x>12||x<1){
        return false
    }
    console.log('thang '+x)
    return true
    
    }

console.log(mounth(12))
// CÂU 4
function longestWord(string) {
    var str = string.split(" ");
    var longest = 0;
    var word = str[0];
    for (var i = 0; i < str.length ; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
}

console.log(longestWord("Tao là Linh xe ôm, đàn em Tài cho điên"))
//CÂU 5
function customTrimFn( str){
    return str.trim()
  
}
let input=" Tran Tam Nhu "
console.log(`tôi tên là:${input}`)
console.log(`tôi tên là:${customTrimFn(input)}`)
