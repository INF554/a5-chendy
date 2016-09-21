d3.csv("data.csv", function row(d) {
  return { 
    CountryName: d.CountryName,
    Year2013: (+d.Year2013).toFixed(1),
  };
}
,function (data) {
    //Table(data, ["CountryName", "Year2013"]);
    Table(data, ["CountryName", "Year2013"]);
    StemLeave(data, );
  		//StemLeave(data);
});

function Table(data, columns) {
    var table = d3.select("#container").append("table"),
        thead = table.append("thead"),
        tbody = table.append("tbody");
    thead.append("tr")
        .selectAll("th")
        .data(columns)
        .enter()
        .append("th")
        .text(function (column) { return column; });

    // create a row for each object in the data
    var rows = tbody.selectAll("tr")
        .data(data)
        .enter()
        .append("tr");

    // create a cell in each row for each column
    var cells = rows.selectAll("td")
        .data(function (row) {
            return columns.map(function (column) {
                return { column: column, value: row[column] };
            });
        })
        .enter()
        .append("td")
        .text(function (d) { return d.value; });
}
