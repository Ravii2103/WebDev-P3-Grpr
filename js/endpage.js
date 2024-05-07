function loadstats(){

    let mytime = sessionStorage.getItem('mytimecol');
    document.getElementById('timtaken').innerHTML = 240- mytime +' seconds';
    let myage = sessionStorage.getItem('myage');
    document.getElementById('age').innerHTML = myage;
    let mygender = sessionStorage.getItem('mygender');
    document.getElementById('gender').innerHTML = mygender;
    let myName = sessionStorage.getItem('myName');
    document.getElementById('name').innerHTML = myName;
    document.getElementById('pscore').innerHTML = 100 * mytime;
    let rsult = sessionStorage.getItem('rsult');
    document.getElementById('rsult').innerHTML=rsult;
}

function playagain(){
    window.open('index.html', "_self");
}
