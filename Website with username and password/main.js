function getInfo(){
	var user = document.getElementById('username');
	var pass = document.getElementById('password');
 
    var note = "Priyanka";
    var note2 = "Mund";

    if(user.value == note && pass.value == note2){
    		alert("You are logged in as" + user.value);
	    } else {
	   	  alert("incorrect username or password");
	    }
	} 