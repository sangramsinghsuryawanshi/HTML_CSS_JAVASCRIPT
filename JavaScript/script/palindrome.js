let n = parseInt(prompt("Enter a number"));
let rem=0,rev=0;
for(let i=n;i!=0;i=(parseInt)(i/10))
    {
        rem=i%10;
        rev=(rev*10)+rem;
    }
    if(rev===n)
        {
            console.log("Given number is palindrome: ",n);
        }
        else
        {
            console.log("Given number is not palindrome: ",n)
        } 
       let a=[1,2,3,4];
       let b=[5,6,7,8];
       let s=a.concat(b);
       console.log(s);
       s.push(100);
       console.log("push: ",s);
       s.pop(100);
       console.log("pop: ",s);
       s1=s.slice(1,3);
       console.log("slice: ",s1);
       
