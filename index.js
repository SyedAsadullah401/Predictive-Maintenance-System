window.onload = function () {
    const csv = localStorage.getItem("uploadedCSV");
    if (!csv) {
        document.getElementById("system-status").innerText = "No data uploaded.";
        return;
    }

    const rows = csv.trim().split("\n").map(row => row.split(","));
    const headers = rows[0];
    const data = rows.slice(1);

    // Display total entries in system status
    document.getElementById("system-status").innerText = `Total Entries: ${data.length}`;

    // Fill prediction table
    const tbody = document.querySelector("#predictions-table tbody");
    tbody.innerHTML = "";

    data.forEach(row => {
        const tr = document.createElement("tr");

        row.slice(0, 4).forEach(cell => {
            const td = document.createElement("td");
            td.textContent = cell;
            tr.appendChild(td);
        });

        const actionTd = document.createElement("td");
        actionTd.innerHTML = "<button>Inspect</button>";
        tr.appendChild(actionTd);

        tbody.appendChild(tr);
    });
};
