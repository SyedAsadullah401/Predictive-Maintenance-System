document.addEventListener("DOMContentLoaded", () => {
    const sampleData = [
        { id: "EQ001", type: "Motor", location: "Zone A", status: "Running", last: "2025-04-01" },
        { id: "EQ002", type: "Pump", location: "Zone B", status: "Under Maintenance", last: "2025-03-29" },
        { id: "EQ003", type: "Fan", location: "Zone C", status: "Idle", last: "2025-04-02" },
    ];

    const tbody = document.querySelector("#equipment-table tbody");
    tbody.innerHTML = sampleData.map(eq => `
        <tr>
            <td>${eq.id}</td>
            <td>${eq.type}</td>
            <td>${eq.location}</td>
            <td>${eq.status}</td>
            <td>${eq.last}</td>
            <td><button onclick="viewDetails('${eq.id}')">View</button></td>
        </tr>
    `).join("");
});

function viewDetails(id) {
    document.getElementById("detailed-info").innerHTML = `
        <p><strong>ID:</strong> ${id}</p>
        <p><strong>More equipment details can be shown here dynamically.</strong></p>
    `;
}
