const t=document.getElementById("recetario"),n=document.getElementById("registro"),o=window.location.pathname;o==="/"?t.style.display="none":t.style.display="block";console.log(t.nodeType);console.log(n);document.getElementById("audio");const d=document.getElementById("play"),l=document.getElementById("pause"),c=document.getElementById("mute"),e=new Audio("/site/country.mp3");document.getElementById("volume");e.play();d.addEventListener("click",function(){e.play()});l.addEventListener("click",function(){e.pause()});c.addEventListener("click",function(){e.muted=!0});
