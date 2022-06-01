let timecol = 240 ;
let timer;


function getLoad(){

    timer = setInterval(countdown, 1000);
    let myName = sessionStorage.getItem('myName');
    let wel = document.getElementById('ti');
    wel.innerHTML= 'Welcome To Jail Break‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‎‎‎‎‎'  + '&#9876; '+ myName +' &#9876;';

    let imm = document.getElementById('im') ;
    imm.innerHTML = '<img  src="Images and Audio/dark.jpg" alt="Image Not Found" width="500" height="400"> ';

}



function countdown() {
    let t = document.getElementById('time');
        timecol--;
        t.innerHTML = 'Time Left For Escape‏‏‎ :‎‏‏‎ ‎‏‏‎  ' + timecol + "‎‏‏‎ Seconds.";
    if(timecol==0){
      endgame2();
    }
}

function actionn() {
    let com = document.getElementById('commd').value;
    let disp = document.getElementById('statements');  
    let imm = document.getElementById('im') ;

    switch(com){
    case 'open eye' :
    disp.innerHTML = '[Inner Self]: ‎‏‏‎ ‎  You are in a jail.';
    imm.innerHTML = '<img  src="Images and Audio/you.jpg" alt="Image Not Found" width="500" height="400"> ';
    break;
    case 'look around' :
    disp.innerHTML = '[Inner Self]: ‎‏‏‎ ‎  Nothing In Here.  <br>   [Inner Self]: ‎‏‏‎ ‎  Look For The Key To Get Out. ';
    imm.innerHTML = '<img  src="Images and Audio/jail.jpg" alt="Image Not Found" width="500" height="400"> ';
    break;
    case 'look at the door' :
    imm.innerHTML = '<img  src="Images and Audio/key.jpg" alt="Image Not Found" width="500" height="400"> ';
    disp.innerHTML = '[Inner Self]: ‎‏‏‎ ‎  Guard have forgotten to take the keys with them.  <br>   [Inner Self]: ‎‏‏‎ ‎  Try Openning The Door. ';
    break;
    case 'try key 1' :
    imm.innerHTML = '<img  src="Images and Audio/keytry.png" alt="Image Not Found" width="500" height="400"> ';
    disp.innerHTML = '[Inner Self]: ‎‏‏‎ ‎  Try Different Key.';
    break;
    case 'try key 2' :
    imm.innerHTML = '<img  src="Images and Audio/open-jail.jpg" alt="Image Not Found" width="500" height="400"> ';
    disp.innerHTML = '[Inner Self]: ‎‏‏‎ ‎  Woo! Now Run.';
    break;
    case 'run' :
    imm.innerHTML = '<img  src="Images and Audio/doors.png" alt="Image Not Found" width="500" height="400"> ';
    disp.innerHTML = '[Inner Self]: ‎‏‏‎ ‎  YO YO Found The Exit.  <br>  [Inner Self]: ‎‏‏‎ ‎  Wait. What is In there In the secret Door.  <br>  [Inner Self]: ‎‏‏‎ ‎  Lets See.';
    break;
    case 'open secret door' :
    imm.innerHTML = '<img  src="Images and Audio/safe.png" alt="Image Not Found" width="500" height="400"> ';
    disp.innerHTML = '[Inner Self]: ‎‏‏‎ ‎  Enter The Code To Open Safe.';
    break;
    case 'look at wall' :
    imm.innerHTML = '<img src="Images and Audio/wall.jpeg" alt="Image Not Found"  usemap="#workmaap" width="500" height="400"> ';
    disp.innerHTML = '[Inner Self]: ‎‏‏‎ ‎  Click on the Note.';
    break;
    case 'look at safe' :
    imm.innerHTML = '<img  src="Images and Audio/safe.png" alt="Image Not Found" width="500" height="400"> ';
    disp.innerHTML = '[Inner Self]: ‎‏‏‎ ‎  Enter The Code To Open Safe.';
    break;
    case 'csc1030' :
    imm.innerHTML = '<img  src="Images and Audio/diamond.jpg" alt="Image Not Found" width="500" height="400"> ';
    disp.innerHTML = '[Inner Self]: ‎‏‏‎ ‎  Looks Like It is Your Lucky Day.';
    break;
    case 'go back' :
    imm.innerHTML = '<img  src="Images and Audio/doors.png" alt="Image Not Found" width="500" height="400"> ';
    disp.innerHTML = '[Inner Self]: ‎‏‏‎ ‎  Now Exit. <br>  [Inner Self]: ‎‏‏‎ ‎  Do Not Think IF There Is Money In Police Office.';
    break;    
    case 'go to police office' :
    imm.innerHTML = '<img  src="Images and Audio/caught.jpg" alt="Image Not Found" width="500" height="400"> ';
    disp.innerHTML = '[Inner Self]: ‎‏‏‎ ‎  Told you not to be Gready.';
    setTimeout('endgame2()', 5000);
    break;  
    case 'exit' :
    imm.innerHTML = '<img  src="Images and Audio/freedom.jpg" alt="Image Not Found" width="500" height="400"> ';
    disp.innerHTML = '[Inner Self]: ‎‏‏‎ ‎  You are Now Free.';
    setTimeout('endgame()', 5000);
    break;  
    case 'full screen' :
        openFullscreen();
    break;
    case 'exit full screen' :
        closeFullscreen()
    break;
    case 'dark theme' :
       document.getElementById('ti').style.background = 'linear-gradient( 135deg, #64385b, #000000 ,#5b792c)';
       document.getElementById('statements').style.backgroundColor = 'rgb(92, 74, 66)';
       document.getElementById('act').style.backgroundColor = 'rgb(80, 68, 68)';
       document.getElementById('commd').style.backgroundColor = 'rgb(49, 50, 68)';
       document.getElementById('input-box').style.background = 'linear-gradient( 135deg, #66355b, #5a2c2c ,#495831)';
       var x = document.getElementsByTagName("BODY")[0];
       x.style.background = 'linear-gradient( 135deg, #5a2d50, #020202 ,#6a883a)';
    break;
    case 'light theme' :
      document.getElementById('ti').style.background = 'linear-gradient( 135deg, #f880de, #eb7272 ,#cffa8a )';
      document.getElementById('statements').style.backgroundColor = 'rgb(255, 207, 185)';
      document.getElementById('act').style.backgroundColor = 'rgb(250, 210, 210)';
      document.getElementById('commd').style.backgroundColor = 'rgb(177, 182, 251)';
      document.getElementById('input-box').style.background = 'linear-gradient( 135deg, #f880de, #eb7272 ,#cffa8a)';
      var x = document.getElementsByTagName("BODY")[0];
      x.style.background = 'linear-gradient( 135deg, #f880de, #ffffff ,#cffa8a)';
    break;
    }
    
}

function endgame(){
  let rsult="You Are Free! YOU WON.";
  sessionStorage.setItem('rsult' , rsult);
  sessionStorage.setItem('mytimecol' , timecol);
  window.location.assign('endpage.html');
}

function endgame2(){
  let rsult="You Have been Caught. You are in Jail.";
  sessionStorage.setItem('rsult' , rsult);
  sessionStorage.setItem('mytimecol' , timecol);
  window.location.assign('endpage.html');
}

var elem = document.documentElement;
function openFullscreen() {

  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }

}

function closeFullscreen() {

  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}