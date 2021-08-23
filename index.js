$.ajax({
    type: 'get',
    url: 'https://api.covid19api.com/summary',
    success: function success(params) {
        console.log(params.Countries);
        for(var i=0;i<params.Countries.length;i++){
            var updatedDate = params.Countries[i].Date;
            var str = JSON.stringify(updatedDate);

            var tablerow = `<tr><td>${params.Countries[i].Country}</td>
            <td>${params.Countries[i].TotalConfirmed}</td>
            <td>${params.Countries[i].NewConfirmed}</td>
            <td>${params.Countries[i].NewDeaths}</td>
            <td>${str.slice(1,11)}</td>
            </tr>`; 
            $(`#tbody`).append(tablerow);
        }
        $(`#covidTable`).DataTable();
    },
    error: function error(params) {
        console.log(params);
    } 
})