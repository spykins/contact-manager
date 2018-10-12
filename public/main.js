let form = document.getElementById("form");
let contactTable = document.getElementById("contactTable");


function populateDataInTable(data) {
    for (let i = 0; i< data.length; i++) {
        createNewTableData(data[i]);
    }
}

function fetchAllContacts() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "/api/", true);
    xhr.onreadystatechange = function () {
        if (this.readyState != 4) return;
        if (this.status == 200) {
            var data = JSON.parse(this.responseText);
            populateDataInTable(data);
        }
    };
    xhr.send();
}


window.onload = function() {
    fetchAllContacts();
} 

/**
 * creates a new table data row from a data given
 */
createNewTableData = (data) => {
    let tr = document.createElement("tr");
    for (key in data) {
    let td = document.createElement("td");
    let name = document.createTextNode(data[key]);
    td.appendChild(name);
    tr.appendChild(td);
    }
    contactTable.appendChild(tr);
}

function getFormData() {
    return {
        name: document.getElementById('name').value,
        phoneNumber: document.getElementById('phoneNumber').value,
        address: document.getElementById('address').value
    }
}

function fetchSavedContact(value) {
    var xhr = new XMLHttpRequest();
        xhr.open("POST", "/api/save_contact", true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onreadystatechange = function () {
            if (this.readyState != 4) return;
            if (this.status == 200) {
                var data = JSON.parse(this.responseText);
                createNewTableData(data);
            }
        };
        xhr.send(JSON.stringify(value));
}

form.addEventListener('submit', event => {
    event.preventDefault();
    document.getElementById("error").innerHTML = "";

   let formData = getFormData();

    if (formData.name === "" && formData.phoneNumber === "" && formData.address === "") {
        document.getElementById("error").innerHTML = "Input text value in the field";
    } else {
       
        fetchSavedContact(formData);
        document.getElementById('name').value = "";
        document.getElementById('phoneNumber').value = "";
        document.getElementById('address').value = "";
    }
});

