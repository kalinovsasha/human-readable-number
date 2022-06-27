module.exports = function toReadable (number) {
  let template=["zero","one","two","three","four","five","six","seven","eight","nine","ten",
  "eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
  let tmp=["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety",];
  let hungred="hundred";

  if(number<20){
    console.log(template[number]);
    return template[number];
  }

  let result=[];
  const len = number.toString().length;
  const _number=number.toString().split('');

  if(len===2){
    if(_number[1]==0){
      result[0]=tmp[_number[0]];
    } else {
      result[0]=tmp[_number[0]];
      result[1]=template[_number[1]];
    }

  } else 
  if(len===3)
  {
    if(Number(_number[1])==0 && _number[2]==0){
      result[0]=template[_number[0]];
      result[1]=hungred;
    } else
    if(Number(_number[1])<2){
        result[0]=template[_number[0]];
        result[1]=hungred;
        result[2]=template[Number(_number[1]+_number[2])];
      } else
        {
          if(_number[2]==0){
            result[0]=template[_number[0]];
            result[1]=hungred;
            result[2]=tmp[_number[1]];
          } 
          else {
            result[0]=template[_number[0]];
            result[1]=hungred;
            result[2]=tmp[_number[1]];
            result[3]=template[_number[2]]
          }
        }
  }
  return(result.join(" "));
} 

/*
function toReadable (number) {
  let template=["zero","one","two","three","four","five","six","seven","eight","nine","ten",
  "eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
  let tmp=["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety",];
  let hungred="hundred";

  if(number<20){
    console.log(template[number]);
    return template[number];
  }

  let result=[];
  const len = number.toString().length;
  const _number=number.toString().split('');

  if(len===2){
    if(_number[1]==0){
      result[0]=tmp[_number[0]];
    } else {
      result[0]=tmp[_number[0]];
      result[1]=template[_number[1]];
    }

  } else if(len===3){
    if(Number(_number[1])==0 && _number[2]==0){
      result[0]=template[_number[0]];
      result[1]=hungred;
    } else
    if(Number(_number[1])<2){
      result[0]=template[_number[0]];
      result[1]=hungred;
      result[2]=template[Number(_number[1]+_number[2])];
    } else{
      if(_number[2]==0){
        console.log(_number[1])
        result[0]=template[_number[0]];
        result[1]=hungred;
        result[2]=tmp[_number[1]];
      } else {
        result[0]=template[_number[0]];
        result[1]=hungred;
        result[2]=tmp[_number[1]];
        result[3]=template[_number[2]]
      }
  }}

  console.log(result.join(" "))
}
toReadable(300);

*/