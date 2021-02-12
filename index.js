//Calling and creating the function for pulling data from the COVID API
$(document).ready(initialize);

function initialize() { 
    
    $("#shamwow").click(function(){
        getData();
    });
//Making the data update every 10,000 milliseconds (10 seconds)
// setInterval(getData, 10000);
 }

// const button = document.getElementsByClassName("btn btn-primary");
// button.onClick = refreshPage()
    
// // function refreshPage (){
// //     window.location.reload();
// // }


async function getData(){
    const api_url = 'https://corona-api.com/countries/US';
    let response =  await fetch(api_url);
    let dataset = await response.json();
    let confirmed = dataset.data.today.confirmed;
    let deaths = dataset.data.today.deaths;
    let myTimeline = dataset.data.updated_at;
    $('#conf').html(confirmed);
    $('#deth').html(deaths);
    $('#dataUpdated').html(new Date(myTimeline));
    $('#userUpdated').html(new Date());
}