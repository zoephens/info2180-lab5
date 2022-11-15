//Got assistance from Gabrielle Scott

window.onload=function(){

    var lookupBtn = document.querySelector("#lookup")
    var cityBtn = document.querySelector("#city")
   
   //Event Listeners
    lookupBtn.addEventListener("click", lookupFunc)
    cityBtn.addEventListener("click", cityFunc)

    
    //Event Functions
    function lookupFunc(e){

        e.preventDefault()

        const httpRequest = new XMLHttpRequest()

        textCountry = document.getElementById("country").value

        httpRequest.onreadystatechange = function(){
            if(httpRequest.readyState == 4 && httpRequest.status === 200){
                document.getElementById("result").innerHTML = httpRequest.responseText
            }
        }

        //Get Request
        httpRequest.open("GET", "http://localhost/info2180-lab5/world.php?country="+ textCountry)
        httpRequest.send()
    }

    function cityFunc(e){
        
        e.preventDefault()

        const httpRequest = new XMLHttpRequest()

        textCountry = document.getElementById("country").value


        httpRequest.onreadystatechange=function(){
            if(httpRequest.readyState == 4 && httpRequest.status === 200){
                document.getElementById("result").innerHTML = httpRequest.responseText
            }
        }

        //Get Request
        httpRequest.open("GET", "http://localhost/info2180-lab5/world.php?country="+ textCountry + "&context=cities")
        httpRequest.send() 
        
    }
}
