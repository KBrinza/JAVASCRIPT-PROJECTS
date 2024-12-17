function getMsg(){
    //STEP 1: Sets up XML HTTP Request Object//

    let ajaxRequest = new XMLHttpRequest();
    
    //gets input value of users name to display after request has been made//
    let inputVal = document.getElementById("FullName").value;

// function to display user input value once request has been received//
    ajaxRequest.onload = function(){
        document.getElementById("tkuMsg").innerHTML = "Thank you " + inputVal + " for signing up!";
    }

    //STEP 2: prepares type of request and what to request from server//
    ajaxRequest.open('GET', 'response.html', true);

    //STEP 3: Defines AJAX response callback method that establishes whether//
    // the response was successful and where the data is displayed//
    ajaxRequest.onreadystatechange = function() {
        if(this.readyState === 4 && this.status === 200){
            document.getElementById('content').innerHTML = ajaxRequest.responseText;
        }
    }
    //STEP 4: Send request//
    ajaxRequest.send();
}