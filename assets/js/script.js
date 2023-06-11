"use strict";

class Company {
    constructor(companyName, locationName) {
        this.companyName = companyName;
        this.locationName = locationName;
        this.employee = [[], [], []];
    }

    table() {
        const tbody = document.getElementById('tbody');
        let tr = '';
        const employeeArr = this.employee;

        for (let i = 0; i < employeeArr[0].length; i++) {
            tr += `<tr>
                <th scope="row">${i + 1}</th>
                <td>${employeeArr[0][i]}</td>
                <td>${employeeArr[1][i]}</td>
                <td>${employeeArr[2][i]}</td>
            </tr>`;
        }

        tbody.innerHTML = tr;
    }

    addData() {
        const name = document.getElementById('name').value;
        const position = document.getElementById('position').value;
        const salary = document.getElementById('salary').value;
        const employeeArr = this.employee;

        employeeArr[0].push(name);
        employeeArr[1].push(position);
        employeeArr[2].push(salary);

        this.table();
    }
}

const ca = new Company('Code Academy', '28 May');
const na = new Company('Code Academy', 'Nizami');

document.getElementById('company').textContent = ca.companyName;
document.getElementById('location').textContent = ca.locationName;

const loc = document.getElementById('loc');
const tbody = document.getElementById('tbody');

function addData() {
    if (loc.value === '1') {
        ca.addData();
    } else if (loc.value === '2') {
        na.addData();
    }
}

loc.addEventListener('change', () => {
    if (loc.value === '1') {
        tbody.innerHTML = '';
        ca.table();
    } else if (loc.value === '2') {
        tbody.innerHTML = '';
        na.table();
    }
});



