// Tabela Usuários
export function createTableUsers(array, columns) {
    const headColumn = columns.map(head => `<th>${head}</th>`).join("");
    const bodyTable = array.map(item => {const bodyData = columns.map(obj => `<td>${item[obj]}</td>`).join("");
    return `<tr>${bodyData}</tr>`;
});

    const table = `
    <p class="paragraph">↓ Usuários ↓</p>
    <table id="tableIdentOne">
        <thead id="tableHead">${headColumn}</thead>
        <tbody id="tableBody">${bodyTable.join("\n")}</tbody>
    </table>
    `;

    return table;
}

// Tabela Cervejas
export function createTableBeers(array, columns) {
    const headColumn = columns.map(head => `<th>${head}</th>`).join("");
    const bodyTable = array.map(item => {const bodyData = columns.map(obj => `<td>${item[obj]}</td>`).join("");
    return `<tr>${bodyData}</tr>`;
});

    const table = `
    <p class="paragraph">↓ Cervejas ↓</p>
    <table id="tableIdentOne">
        <thead id="tableHead">${headColumn}</thead>
        <tbody id="tableBody">${bodyTable.join("\n")}</tbody>
    </table>
    `;

    return table;
}