let form = document.querySelector("form")
let arr = [];
form.addEventListener("submit",myFunc)
function myFunc(event){
    event.preventDefault()
    let Name = document.querySelector("#name").value
    let EmployeeID = document.querySelector("#employeeID").value
    let Department = document.querySelector("#department").value
    let Exp = document.querySelector("#exp").value
    let Email = document.querySelector("#email").value
    let Mobile =document.querySelector("#mbl").value

    let data={
        DName : Name,
        DEmpId : EmployeeID,
        DDepartment : Department,
        DExp : Exp,
        DEmail : Email,
        DMobile : Mobile
    }

    arr.push(data);
    console.log(arr);
    Display(arr);
}

function Display(arr){
  document.querySelector("tbody").innerHTML ="";

 arr.forEach( function (data) {
    
    let tr = document.createElement("tr");

    let name = document.createElement("td");
    name.innerText =data.DName;

    let id = document.createElement("td");
    id.innerText =data.DEmpId;

    let department = document.createElement("td");
    department.innerText =data.DDepartment;

    let exp = document.createElement("td");
    exp.innerText =data.DExp;

    let email = document.createElement("td");
    email.innerText =data.DEmail;

    let Mob = document.createElement("td");
    Mob.innerText =data.DMobile;

    let role = document.createElement("td");
    let roleText = giveRole(data.DExp);
    role.innerText = roleText;

    let DeleteElement = document.createElement("td")
    DeleteElement.innerText = "Delete"
    
    DeleteElement.addEventListener("click",function(event)
    {
        event.target.parentNode.remove()
    })

    DeleteElement.style.backgroundColor ="Red"
    
    tr.append(name,id,department,exp,email,Mob,role,DeleteElement);
    document.querySelector("tbody").append(tr);
 
 });


}
    function giveRole(DExp)
    {
        if(DExp>5){
            return "Senior";
        }
        else if(DExp>=2 && DExp<=5){
            return "Junior";
        }
        else if(DExp<=1 ){
            return "Fresher"
        }
    }
