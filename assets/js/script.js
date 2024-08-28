 const closeBtn = document.getElementById("close-btn");
 const menuBtn = document.getElementById("menu-btn");
 const headerSection = document.getElementById("header-section")
 const bodySection = document.getElementById("body-section")
 const menu = document.getElementById("menu")
 const menuIcon = document.getElementById("menu-icon")
 
 closeBtn.addEventListener("click", ()=>{
    headerSection.classList.add("update-header-section")
    bodySection.classList.add("update-body-section")
    menu.style.display="none"
    menuIcon.style.display="block"
    console.log(headerSection.classList.contains("update-header-section"))
    if(headerSection.classList.contains("update-header-section")){
        menuBtn.style.visibility = "visible";
        closeBtn.style.visibility = "hidden";
    }
 })
 menuBtn.addEventListener("click", ()=>{
    headerSection.classList.remove("update-header-section")
    bodySection.classList.remove("update-body-section")
    menu.style.display="block"
    menuIcon.style.display="none"
    console.log(headerSection.classList.contains("update-header-section"))
    if(!headerSection.classList.contains("update-header-section")){
        menuBtn.style.visibility = "hidden";
        closeBtn.style.visibility = "visible";
    }
 })
