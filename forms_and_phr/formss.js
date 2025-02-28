const form = document.querySelector('#form');
 
form.onsubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form)
    const entries = formData.entries()
    const formValues = Object.fromEntries(entries);
    const formJSON = JSON.stringify(formValues);


    const table = document.createElement("table");
    for (let [name,value] of formData.entries()){
        const row = document.createElement("tr");
        // console.log(`${name}: ${value}`);
        const th = document.createElement("th");
        th.innerText = name;
        const td = document.createElement("td");
        td.innerText = value;
        
        row.append(th, td);
        table.append(row);
    }
    document.querySelector("body").append(table)


    // console.log(formJSON);


    // for (let [name, value] of formData.entries()){
    //     console.log(`${name}: ${value}`);
    // }
}