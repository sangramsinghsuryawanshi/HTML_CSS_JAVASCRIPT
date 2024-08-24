/*s="Wlecome to javaScript";
console.log(s);
document.write("javaScript in web page");
var i=20;
var i=50;
console.log("var updated i: ",i);

let l =30;
i=90;
console.log("let updated i: ",l);

const c=78;
console.log("const c: ",c)



// Arithmetic operators in javaScript

const a=100,b=20;
console.log("Addition of two number in js: ",(a+b));
console.log("Substraction of two number in js: ",(a-b));
console.log("Multiplication of two number in js: ",(a*b));
console.log("Division of two number in js: ",(a/b));

let n=1,n1=20;
document.writeln("<br>Even number");
for(let i=n;i<=n1;i++)
    {
         if(i%2==0)
        {
            document.writeln(i);
        }
    }

n=1,n1=20;
document.writeln("<br>Odd number");
for(let i=n;i<=n1;i++)
    {
         if(i%2!=0)
        {
            document.writeln(i);
        }
    }
n=1,n1=20;
document.writeln("<br>prime number");
for(let i=n;i<=n1;i++)
    {
        let c=0;
         for(let j=1;j<=i;j++)
            {
                if(i%j==0)
                    {
                        c++;
                    }
            }
            if(c==2)
                {
                    document.writeln(i);
                }
    }
 */
let marks=prompt("entr array")
for(let i=0;i<=marks.length;i++)
    {
       
    }
console.log("Without for loop: ",marks);
let n=[1,2,3,4,5,6,7,8,9,10];
document.writeln("odd number: ")
for(let i=0;i<n.length;i++)
    {
       if(n[i]%2!=0)
        {
            document.writeln(n[i]);
        }
    }