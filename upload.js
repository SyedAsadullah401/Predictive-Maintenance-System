document.getElementById("data-upload-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const fileInput = document.getElementById("data-file");
    const file = fileInput.files[0];

    if (!file || !file.name.endsWith(".csv")) {
        alert("Please upload a valid CSV file.");
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        const csvText = e.target.result;
        localStorage.setItem("uploadedCSV", csvText); // Save for dashboard
        displayPreview(csvText); // Show on current page
    };
    reader.readAsText(file);
});

function displayPreview(csvText) {
    const rows = csvText.trim().split("\n").filter(row => row);
    const preview = rows.slice(0, 5).map(row => {
        const cols = row.split(",");
        return `<tr>${cols.map(cell => `<td>${cell}</td>`).join("")}</tr>`;
    }).join("");

    const tableHTML = `<h3>Preview (first 5 rows):</h3><table border="1"><tbody>${preview}</tbody></table>`;

    document.getElementById("upload-status").innerHTML = `
        <p><strong>Upload successful!</strong></p>
        <p><strong>File:</strong> ${document.getElementById("data-file").files[0].name}</p>
        <p><strong>Total Rows:</strong> ${rows.length}</p>
        ${tableHTML}
    `;
}
