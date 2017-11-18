'use strict';
var totalScore=0;
function fillBlank()
{
    let answer=['统一建模语言','封装性','继承性','多态性'];
    for(let i=0;i<4;i++)
    {
         let domValue = document.getElementsByClassName("form-control")[i].value;
         if(domValue===answer[i])
             totalScore+=5;
    }
}
function singleChoice()
{
    let name2=document.getElementsByClassName("radio");
    if(name2[1].checked==="checked")
    totalScore+=10;
    if(name2[4].checked==="checked")
    totalScore+=10;

}
function multipleChoice()
{
    let name3=document.getElementsByClassName("multiple");
    if((name3[0].checked)&&(name3[1].checked)&&
         (name3[2].checked===false)&&(name3[3].checked))
         totalScore+=10;
     
     if((name3[4].checked)&&(name3[5].checked)&&
         (name3[6].checked)&&(name3[7].checked===false))
         totalScore+=10;

}
function judge()
{
     let name4=document.getElementById("judge2");
     if(name4.checked)
         totalScore+=10;
     name4=document.getElementById("judge3");
     if(name4.checked)
         totalScore+=10;
     
}
function shortAnswer()
{
     let name5=document.getElementById("shortanswer");
     if(name5.value==='模型是对现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体；可以是某种图形；或者是一种数学表达式。')
     totalScore+=20;
}
function countScore()
{
     
     fillBlank();
     singleChoice();
     multipleChoice();
     judge();
     shortAnswer();   
     //alert(totalScore); 
     let res="得分:"+totalScore.toString();
     document.getElementById("showScore").innerHTML=res;              
}