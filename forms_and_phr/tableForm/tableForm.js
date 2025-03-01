const form = document.querySelector("#form");
form.onsubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    // const FirstName = formData.get("First");
    // const LastName = formData.get("Last");
    // const Birthday = formData.get("Birthday");
    // const Gender = formData.get("Gender");
    // const Country = formData.get("Country");
    // const City = formData.get("City");
    const skills = formData.getAll("skills");
    const skillsString = skills.join(", ");
    
    const table = document.createElement("table");
    for (let [name,value] of formData.entries()){
        const row = document.createElement("tr");
        const th = document.createElement("th");    
        th.innerText = name;
        const td = document.createElement("td");    
        td.innerText = value;
        if (name === "skills"){
            th.style.display = "none";
            td.style.display = "none";
        }
        row.append(th, td);
        table.append(row);
    }

    const row = document.createElement("tr");
    const th = document.createElement("th");
    th.innerText = "Skills";
    const td = document.createElement("td");
    td.innerText = skillsString;
    row.append(th, td);
    table.append(row);


    document.querySelector("#table").append(table)

    
}
// /////
// const temp = /^\+\d{11}$/;
// const email = /^([0-9A-Za-z-_]+)@([0-9A-Za-z-_]+)\.([A-Za-z])/;
// const phoneNum = "+77078081234"
// console.log(temp.test(phoneNum));

// HTML
// CSS
// JS
// PHP
// Cpp
// Java
// Cs