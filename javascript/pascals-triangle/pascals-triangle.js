//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
function fact(no){
  let p = 1;
  for(let i= 1;i<=no;i++)
  {
    p = p*i;
  }
  return p;
}
export const rows = (num) => {
  let arr = [],temp =[];
  for(let i = 1; i<=num; i++)
  {
    for(let j = 0;j<=i-1;j++)
    {
      temp[j] = fact(i-1)/(fact((i-1)-j)*fact(j));
    }
    console.log(temp);
    arr.push(temp);
    temp = [];
  }
  console.log(arr);
  return arr;
};
