function getRecords() {
    let data = localStorage.getItem("signUpRecords");
    return data ? JSON.parse(data) : [];
}

function saveRecords(records) {
    localStorage.setItem("signUpRecords", JSON.stringify(records));
}

function signUp() {
    let records = getRecords();

    let record = {
        name: document.getElementById("name").value,
        id: document.getElementById("userid").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        address: document.getElementById("address").value
    };

    records.push(record);
    saveRecords(records);

    alert("Record saved!");
    clearForm();
    displayRecords();
}

function displayRecords() {
    const records = getRecords();
    const tbody = document.getElementById("recordList");
    
    tbody.innerHTML = ""; // clear table first

    for (let i = 0; i < records.length; i++) {
        const rec = records[i];

        const row = `
            <tr>
                <td>${rec.name}</td>
                <td>${rec.id}</td>
                <td>${rec.phone}</td>
                <td>${rec.email}</td>
                <td>${rec.address}</td>
                <td><button class="delete-btn" onclick="deleteRecord(${i})">Delete</button></td>
            </tr>
        `;

        tbody.innerHTML += row;
    }
}


function deleteRecord(index) {
    let records = getRecords();
    records.splice(index, 1);
    saveRecords(records);
    displayRecords();
}

function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("userid").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("address").value = "";
}

displayRecords();
