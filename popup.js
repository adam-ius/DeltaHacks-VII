window.addEventListener('load', function() {
  console.log('All assets are loaded');
  document.getElementById('HomeButton').addEventListener('click', function() {
    console.log('HomeButton event called');
    openPopUp('Home');
  });
  document.getElementById('TimerButton').addEventListener('click', function() {
    console.log('TimerButton event called');
    openPopUp('Timer');
  });
  document.getElementById('CreateEventButton').addEventListener('click', function() {
    console.log('CreateEventButton event called');
    openPopUp('Create Event');
  });
  document.getElementById('RemindersButton').addEventListener('click', function() {
    console.log('RemindersButton event called');
    openPopUp('Reminders');
  });
});


function openPopUp(tabName) {
  console.log('openPopUp running.');
  var i, tabcontent, tablinks;
  // remove all tab content
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  };
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  };
  document.getElementById(tabName).style.display = "block";
};


function tick(){
  var timeDisplay=document.getElementById("TimerButton");
  var min=Math.floor(mySeconds/60);
  var sec=mySeconds-(min*60);
  if (sec < 10) {
    sec="0"+sec;
  };
  var message=min.toString()+":"+sec;
  timeDisplay.innerHTML=message;
  if(mySeconds===0){
    alert("Done");
    clearInterval(intervalHandle);
    resetPage();
  };
  mySeconds--;
};