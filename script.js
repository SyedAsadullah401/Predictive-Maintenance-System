window.addEventListener("DOMContentLoaded", function () {
    const csvText = localStorage.getItem("uploadedCSV");
    if (csvText) {
        const rows = csvText.trim().split("\n");
        const table = document.createElement("table");
        table.border = "1";
        table.style.borderCollapse = "collapse";
        table.style.width = "100%";

        rows.forEach((row, i) => {
            const tr = document.createElement("tr");
            row.split(",").forEach(cell => {
                const td = document.createElement(i === 0 ? "th" : "td");
                td.textContent = cell.trim();
                td.style.padding = "8px";
                td.style.border = "1px solid #ccc";
                tr.appendChild(td);
            });
            table.appendChild(tr);
        });

        document.getElementById("system-status").innerHTML = "<h3>Uploaded Data</h3>";
        document.getElementById("system-status").appendChild(table);
    } else {
        document.getElementById("system-status").innerText = "No data uploaded yet.";
    }
});
