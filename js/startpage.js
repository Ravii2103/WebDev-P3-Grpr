
function gamepage() {   

    let myName = document.getElementById('Name').value;
    sessionStorage.setItem('myName' , myName);
    let myage = document.getElementById('Age').value;
    sessionStorage.setItem('myage' , myage);
    let mygender = document.getElementById('gender').value;
    sessionStorage.setItem('mygender' , mygender);
    window.location.assign('gamepage.html');
    
}


function loade() {
    let buttone = document.getElementById('screen')
    buttone.innerHTML='<button class="sb" onclick=" openFullscreen(); playAudio();"> Full Screen.</button>';
}



var elem = document.documentElement;
function openFullscreen() {

    let buttone = document.getElementById('screen')
    buttone.innerHTML='<button class="sb" onclick=" playAudio(); closeFullscreen();">Exit Full Screen.</button>';

  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }

}

function closeFullscreen() {

    let buttone = document.getElementById('screen')
    buttone.innerHTML='<button class="sb" onclick="openFullscreen();"> Full Screen.</button>';

  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}