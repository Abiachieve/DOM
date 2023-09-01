// function call(){
//      const result=document.getElementById("email").value;
//     if(result===b50wd2tamil@gmail.com)
//     {
//         console.log("valid");
//     }
//     else
//     {
//         console.log("invalid");
//     }
// }

function createLabel(tagname,content,attrname,attrvalue)
{
    var label=document.createElement(tagname)
    label.innerHTML= content;
    label.setAttribute(attrname,attrvalue)
    return label;

}
const label1=createLabel("label","Firstname","for","firstname")




