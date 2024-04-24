function search(){
    let searchBar=document.querySelector("#search-input").value.toUpperCase();
    let counterror=0;
    let searchResult =document.querySelector("#searchResults");
    let Museum =document.querySelectorAll(".Museum");
    let MuseumName =document.getElementsByTagName("h5");
    for(let i=0 ; i<MuseumName.length;i++){
        if(MuseumName[i].innerHTML.toUpperCase().indexOf(searchBar) >= 0) {
            if(Museum[i]) 
            { 
                Museum[i].style.display = "block";
            }
        } else {
            if(Museum[i]) 
            { 
                Museum[i].style.display = "none";
            }
            counterror++;   
        }
    }   
    if(counterror == MuseumName.length) {
        searchResult.style.display = "block";
    } else {
        searchResult.style.display = "none";
    }
}
function search2(){
    let searchBar2=document.querySelector("#search-input2").value.toUpperCase();
    let counterror2=0;
    let searchResults2 =document.querySelector("#searchResults2");
    let Museum2 =document.querySelectorAll(".Museum2");
    let MuseumName2 =document.getElementsByTagName("h5");
    for(let i=0 ; i<MuseumName2.length;i++){
        if(MuseumName2[i].innerHTML.toUpperCase().indexOf(searchBar2) >= 0) {
            if(Museum2[i]) 
            { 
                Museum2[i].style.display = "block";
            }
        } else {
            if(Museum2[i]) 
            { 
                Museum2[i].style.display = "none";
            }
            counterror2++;   
        }
        if(counterror2==MuseumName2.length){
            searchResults2.style.display="block";
        }
        else{
            searchResults2.style.display="none";
        }
    }   
}
function search3(){
    let searchBar3=document.querySelector("#search-input3").value.toUpperCase();
    let counterror3=0;
    let searchResults3 =document.querySelector("#searchResults3");
    let Museum3 =document.querySelectorAll(".Museum3");
    let MuseumName3 =document.getElementsByTagName("h5");
    for(let i=0 ; i<MuseumName3.length;i++){
        if(MuseumName3[i].innerHTML.toUpperCase().indexOf(searchBar3) >= 0) {
            if(Museum3[i]) 
            { 
                Museum3[i].style.display = "block";
            }
        } else {
            if(Museum3[i]) 
            { 
                Museum3[i].style.display = "none";
            }
            counterror3++;   
        }
        if(counterror3==MuseumName3.length){
            searchResults3.style.display="block";
        
        }
        else{
            searchResults3.style.display="none";
        }
    }   
}
function search4(){
    let searchBar4=document.querySelector("#search-input4").value.toUpperCase();
    let counterror4=0;
    let searchResults4 =document.querySelector("#searchResults4");
    let Museum4 =document.querySelectorAll(".Museum4");
    let MuseumName4 =document.getElementsByTagName("h5");
    for(let i=0 ; i<MuseumName4.length;i++){
        if(MuseumName4[i].innerHTML.toUpperCase().indexOf(searchBar4) >= 0) {
            if(Museum4[i]) 
            { 
                Museum4[i].style.display = "block";
            }
        } else {
            if(Museum4[i]) 
            { 
                Museum4[i].style.display = "none";
            }
            counterror4++;   
        }
        if(counterror4==MuseumName4.length){
            searchResults4.style.display="block";
        
        }
        else{
            searchResults4.style.display="none";
        }
    }   
}
if (!window.location.href.includes("person.html")) {
    document.getElementById("generalButton").addEventListener("click", function() {
    goToPage('person.html');
    });
    } else {
    document.getElementById("generalButton").addEventListener("click", function() {
    console.log("Staying on the current page");
    })
}
    function goToPage(page) {
    window.location.href = page;
    }
    function toggleMenu() {
    var submenu = document.getElementById("submenu");
    submenu.classList.toggle("open-menu");
    }
    fetch("https://test-api1-1.onrender.com/api/gove/661511e0844b55891b305b7e").then(res=>{
        // console.log(res);
        return res.json();
    })
    .then(data=>
    {
        data.forEach(gove => {
            const mark=`<li>${gove.data}</li>`;
            document.querySelector('div').insertAdjacentHTML('beforeend',mark)
        });
        console.log(data);
    })
    .catch(error=> console.log(error));