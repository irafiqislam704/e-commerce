window.addEventListener("scroll",function(){
  
    var navbar = document.getElementById("navbar");
  
  if(window.pageYOffset >= 300 ){
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
  })


  // mobile menu
  var myNav=document.getElementById("myNav")
  var openNav=document.getElementById("openNav")
  var closeNav=document.getElementById("closeNav")
  
  
  openNav.addEventListener("click", function(){
      myNav.style.width="100%";
  })
  closeNav.addEventListener("click", function(){
      myNav.style.width="0%";
  })

  function closeN(){
    myNav.style.width="0%";
  }
  
  