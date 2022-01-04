// import the data from data.js
const tableData = data; 

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// building the function and clear out any existing data
function buildTable(data) {
    tbody.html("");

    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {

        // append a row to the table body
        let row = tbody.append("tr");

        // Loop through each field in the dataRow and add
        // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}

// Create the handleclick table for filtering 
function handleClick() {

    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filterData = tableData;

    // Check to see if a data was entered and filter the data using that date
    if (date) {
        // Apply filter to the table data to only keep the
        // rows where the datetime value matches the filter value
        filterData = filterData.filter(row => row.datetime === date);
    };

    // Rebuild the table using the filtered data
    // @Note: If no date was entered, then filteredData will just be the original tableData
    buildTable(filterData);
};

// Attach an event to listn for the form button
// the code to tie to the filter button on the webpage
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);