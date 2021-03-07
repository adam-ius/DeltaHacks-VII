  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
     var activeTab = tabs[0];
     var activeTabId = activeTab.url; 

  });

  var mySeconds;
  var intervalHandle;

  function resetPage(){
    document.getElementById("Timer").style.display="none";  
    
    
  }
  function tick(){
    var timeDisplay=document.getElementById("Timer");
    
    var min=Math.floor(mySeconds/60);
    var sec=mySeconds-(min*60);
    
    if (sec < 10) {
      sec="0"+sec;
    }
    
    var message=min.toString()+":"+sec;
    
    timeDisplay.innerHTML=message;
    
    if(mySeconds===0){
      alert("Done");
      clearInterval(intervalHandle);
      resetPage();
    }
    mySeconds--;
    
    
  }
  function startCounter(){
    var myInput=document.getElementById("Timer").value;
    if (isNaN(myInput)){
      alert("Type a valid number please");
      return;
    }
    mySeconds=myInput*60;
    
    intervalHandle=setInterval(tick, 1000);
    
    document.getElementById("Timer").style.display="none";
    
    
  }


  window.onload=function(){
    var myInput=document.createElement("Time");
    myInput.setAttribute("type","text");
    myInput.setAttribute("id","minutes");
    
    var myButton=document.createElement("submit");
    myButton.setAttribute("type","button");
    myButton.setAttribute("value","submit");
    
    myButton.onclick=function(){
      startCounter(); 
      
    }
    document.getElementById("Timer").appendChild(myInput);
    document.getElementById("submit").appendChild(myButton);
    
    
  }

