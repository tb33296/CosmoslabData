url = 'https://script.google.com/macros/s/AKfycbxlBcCE5C62WLREGy4UX0V4fx1BT2IovXeK5nh69vhAJbkrT0J_BtRZF7cjOWO8wPO7/exec';

async function getNames() {
   const response = await fetch(url);
   const data = await response.json();
   var nameList = document.getElementById("nameList")
   // console.log("we are looking at the response to fetch BELOW")
   // console.log(data.data.length)
   var lent = data.data.length

   // Getting the Names From the List.
   for (let i = 1; i <= lent - 1; i++) {
      name = data.data[i].name.toUpperCase();
      // console.log(name);


      var newItem = document.createElement("li");

      // Making Buttons
      const button = document.createElement('button')
      // Set the button text to 'Can you click me?'
      button.innerText = name;
      button.className = "button-16"
      // Attach the "click" event to your button
      button.addEventListener('click', (e) => {
         let element = e.target;
         if (element.tagName == "BUTTON") {
            name = `${element.innerText}`;
            var newUrl = url + "?name=" + name
            console.log("EventListner>>> " + name)
            document.getElementById("glassContainer").style.opacity=1;
            uncheck();
            getDetails(newUrl)
         }
      })
      newItem.appendChild(button)
      nameList.appendChild(newItem);

   }

}

async function getDetails(url) {
   const response = await fetch(url);
   const data = await response.json();
   console.log("url>>>>>>>" + url);
   console.log("url>>>>>>>" + data.data[0].Id_no);
   console.log("url>>>>>>>" + data.data[0].name);

   document.getElementById("Id_no").innerHTML =  data.data[0].Id_no;
   document.getElementById("name").innerHTML =  data.data[0].name;
   document.getElementById("Fathers_Name").innerHTML =  data.data[0].Fathers_Name;

   var date = new Date(data.data[0].DOB);
   dd=date.getDate()
   mm=(date.getMonth() + 1)
   if(dd<10){
    	dd = '0' + dd;
   }
   if(mm<10){
      mm = '0' + mm;
   }
   var newdate=  dd + '-' + mm + '-' +  date.getFullYear();
   document.getElementById("DOB").innerHTML = newdate ;
   document.getElementById("Aadhar_Number").innerHTML =  data.data[0].Aadhar_Number;
   document.getElementById("ESIC_NAME").innerHTML =  data.data[0].ESIC_NAME;
   document.getElementById("ESIC_no").innerHTML =  data.data[0].ESIC_no;
   document.getElementById("UAN_no").innerHTML =  data.data[0].UAN_no;
   document.getElementById("Type").innerHTML =  data.data[0].Type;
   document.getElementById("IFSC_Code").innerHTML =  data.data[0].IFSC_Code;
   document.getElementById("Account_no").innerHTML =  data.data[0].Account_no;
   document.getElementById("Bank").innerHTML =  data.data[0].Bank;

   var date = new Date(data.data[0].Vaccine_1st_Dose);
   dd=date.getDate()
   mm=(date.getMonth() + 1)
   if(dd<10){
    	dd = '0' + dd;
   }
   if(mm<10){
      mm = '0' + mm;
   }
   var newdate=  dd + '-' + mm + '-' +  date.getFullYear();
   document.getElementById("Vaccine_1st_Dose").innerHTML =  newdate;

   var date = new Date(data.data[0].Vaccine_2nd_Dose);
   dd=date.getDate()
   mm=(date.getMonth() + 1)
   if(dd<10){
    	dd = '0' + dd;
   }
   if(mm<10){
      mm = '0' + mm;
   }
   var newdate=  dd + '-' + mm + '-' +  date.getFullYear();
   document.getElementById("Vaccine_2nd_Dose").innerHTML = newdate ;
   document.getElementById("Address").innerHTML =  data.data[0].Address;
}

document.getElementById("clsBtn").onclick = function() {
   closePannel()
};
function closePannel() {
  document.getElementById("glassContainer").style.opacity=0;
}

// Function to uncheck the
function uncheck(){
   document.getElementById("checkbox").checked = false;
}

getNames();
