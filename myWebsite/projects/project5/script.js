const clientServername = document.querySelector('#client-servername');
const clientUsername = document.querySelector('#client-username');
const clientSubmitBtn = document.querySelector('#client-submit-btn');
//Enable Submit Button When localhost And username Input Is Not Empty (index.php)
function clientKeyPress(){
	(clientServername.value && clientUsername.value) ? clientSubmitBtn.disabled = false : clientSubmitBtn.disabled = true ;	 
};

//ISSUE: Add Active Class on Navgation Bar

	

