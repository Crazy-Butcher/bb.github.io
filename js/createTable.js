let tableName = document.getElementById('tableName');
let numberRows = document.getElementById('numberRows').value;
let numberColumns = document.getElementById('numberColumns').value;

let tableBorderWidth = document.getElementById('tableBorderWidth').value + 'px';
let tableBorderType = document.querySelector('.table-border-type').value;
let tableBorderColor = document.getElementById('tableBorderColor').value;

let tableDataPadding = document.getElementById('tableDataPadding').value;

let tableDataColor = document.getElementById('tableDataColor').value;
let tableFontSize = document.querySelector('.table-font-size').value;
let tableFontColor = document.getElementById('tableFontColor').value;

let tableDataWidth = document.getElementById('tableDataWidth').value;
let dataBorderType = document.querySelector('.data-border-type').value;
let dataBorderColor = document.getElementById('dataBorderColor').value;

let btnCreate = document.querySelector('.btn-create');
let btnRemove = document.querySelector('.btn-remove');

function createTable() {
    let table = createElem('table', 'table');
    document.body.appendChild(table);

    let caption = createElem('caption', 'table-name', tableName.value);
    table.appendChild(caption);

    let thead = createElem('thead', 'table-header');
    table.appendChild(thead);
    createTheadContent(thead, 1, numberColumns);

    let tbody = createElem('tbody', 'table-body');    
    table.appendChild(tbody);

    createTableContent(tbody, numberRows, numberColumns);

    let tfoot = createElem('tfoot', 'table-footer');
    table.appendChild(tfoot);
    createTfootContent(tfoot, 1, numberColumns);

    return table;
}

function createElem(tag, className, text) {
    let elem = document.createElement(tag);
    elem.classList.add(className);
    elem.textContent = text;

    return elem;
}

function createTheadContent(thead, rows, cols) {
    for (let i = 0; i < rows; i++) {
        row = createElem('tr', 'table-row');
        thead.appendChild(row);

        for (let j = 0; j < cols; j++) {
            data = createElem('td', 'table-data', 'Lorem ipsum dolor sit amet.');
            row.appendChild(data);
        }
    }
    return thead;
}

function createTableContent(tbody, rows, cols) {
    let row, data;
    
    for(let i = 0; i < rows; i++) {
        row = createElem('tr', 'table-row');
        tbody.appendChild(row);

        for(let j = 0; j < cols; j++) {
            data = createElem('td', 'table-data', 'Lorem ipsum dolor sit amet.');
            row.appendChild(data);
        }
    }
}

function createTfootContent(tfoot, rows, cols) {
    for (let i = 0; i < rows; i++) {
        row = createElem('tr', 'table-row');
        tfoot.appendChild(row);

        for (let j = 0; j < cols; j++) {
            data = createElem('td', 'table-data', 'Lorem ipsum dolor sit amet.');
            row.appendChild(data);
        }
    }
    return tfoot;
}

btnCreate.addEventListener('click', function() {
    let table = createTable();
});