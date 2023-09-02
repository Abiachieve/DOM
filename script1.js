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

// function createLabel(tagname,content,attrname,attrvalue)
// {
//     var label=document.createElement(tagname)
//     label.innerHTML= content;
//     label.setAttribute(attrname,attrvalue)
//     return label;

// }
// const label1=createLabel("label","Firstname","for","firstname")




// function calculateAge(){
//     const dob= new Date(document.getElementById("dob").value);
//     const today= new Date();

// if(isNaN(dob.getTime())){
//    var error= document.getElementById("output").innerHTML="Please enter the valid dob";
//     return error;
// }
// let age= today.getFullYear()-dob.getFullYear();
// const monthdiff= today.getMonth()- dob.getMonth();

// document.getElementById("output").innerHTML="You are"+" "+ age +"years old";
// }


// function createLabel(tagname,content,attrname,attrvalue){
//     const label=document.createElement(tagname);
//     label.innerHTML= content;
//     label.setAttribute(attrname,attrvalue);
//     return label;
// }


// var linebreak= document.createElement("br");

// function createinput(tagname,content,attrname,attrvalue){
//     const label2=document.createElement(tagname);
//     label2.innerHTML= content;
//     label2.setAttribute(attrname,attrvalue);
//     return label2;
// }

// const form= document.createElement("form")

// const label4=createLabel("label","FirstName","for","FirstName");
// const label5=createinput("input","text","type","text");
// form.append(label4,label5);

// const label6=createLabel("label","LastName","for","LastName");
// const label7=createinput("input","text","type","text");
// form.append(label6,label7);

// const label8=createLabel("label","PhoneNumber","for","PhoneNumber");
// const label9=createinput("input","number","type","number");
// form.append(label8,label9);

// const label1=createLabel("label","Email","for","Email");
// const label3=createinput("input","text","type","text");
// form.append(label1,label3);

// document.body.append(form);

// function createLabel(tagname, content, attrname, attrvalue) {
//     const label = document.createElement(tagname);
//     label.innerHTML = content;
//     label.setAttribute(attrname, attrvalue);
//     return label;
//   }
  
//   function createInput(tagname, attrname, attrvalue) {
//     const input = document.createElement(tagname);
//     input.setAttribute(attrname, attrvalue);
//     return input;
//   }
  
//   const form = document.createElement("form");
  
//   const label4 = createLabel("label", "First Name", "for", "FirstName");
//   const input4 = createInput("input", "type", "text");
//   form.append(label4, input4);
  
//   const label6 = createLabel("label", "Last Name", "for", "LastName");
//   const input6 = createInput("input", "type", "text");
//   form.append(label6, input6);
  
//   const label8 = createLabel("label", "Phone Number", "for", "PhoneNumber");
//   const input8 = createInput("input", "type", "number");
//   form.append(label8, input8);
  
//   const label1 = createLabel("label", "Email", "for", "Email");
//   const input1 = createInput("input", "type", "text");
//   form.append(label1, input1);
  
//   document.body.append(form);
  
