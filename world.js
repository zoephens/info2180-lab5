window.onload = function(){
    var lookupBtn = document.querySelector("#lookup")
    var httpRequest
    var link = "http://localhost/info2180-lab5/world.php"

    var textField = document.querySelector("input") 
    var resultBox = document.querySelector("#result")

    lookupBtn.addEventListener("click", function(e){
        e.preventDefault()

        httpRequest = new XMLHttpRequest()

        httpRequest.onreadystatechange = function(){
            if (httpRequest.readyState == 4){
                if (httpRequest.status === 200){
                    
                    var response = httpRequest.responseText

                    resultBox.innerHTML = response
                } else{
                    resultBox.innerHTML = "Something went wrong :("
                }
            }

            
        }
        //GET REQUEST
        httpRequest.open("GET", link + "?query=" + textField.value)
            httpRequest.send()
    })
}

