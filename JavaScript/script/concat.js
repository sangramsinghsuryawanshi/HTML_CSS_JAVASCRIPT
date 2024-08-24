/* let s = "Hello JavaScript";
let s2 = " Hello word";
let s3=" Hello java";
console.log("First string : ",s);
console.log("Second string : ",s2);
console.log("Third string : ",s3);
console.log("s[0] = ",s[0]);
console.log("s[1] = ",s[1]);
console.log("s[2] = ",s[2]);
console.log("Concat : ",s+s2);
console.log("Last character : ",s2[s2.length-1])
let c=s.concat(s2).concat(s3);
console.log("concat three string: ",c); */

let s="This is 1st String ";
let s1="This is 2nd String ";
let s2="This is 3rd String";
console.log(s);
console.log(s1);
console.log("s[0]",s[0]);
console.log("s[1]",s[1]);
console.log("s[2]",s[2]);
console.log("Concat:-->",s.concat(s1));
console.log("MultipleConcat:-->",s.concat(s1).concat(s2));
console.log("toLowercase:-->",s.toLowerCase());
console.log("toUppercase:-->",s.toUpperCase());
console.log("without outer space:-->",s.trim());

for(let i=0;i<s1.length;i++)
    {
        document.write(s1.charAt(i));
    }

