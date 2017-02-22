	function mirrorClick()
	{
		var x = document.getElementById("back");
		if (x.style.display == 'block')
		{
			x.style.display = 'none';
		}
		else
		{
			x.style.display='block';
		}
	}
	
	// Validating Empty Field
function check_empty() {
if (document.getElementById('y').value == "" || document.getElementById('r').value == "" 
|| document.getElementById('b').value == "" || document.getElementById('g').value == "") {
alert("יש למלא את כל השדות!");
} else {
	
	if (document.getElementById('y').value == "3" & document.getElementById('r').value == "2" 
& document.getElementById('b').value == "3" & document.getElementById('g').value == "1"){
	alert("Code OK");
	document.getElementById('form').submit();
}
else {
	alert("code BAD");
}
}
}
//Function To Display Popup
function div_show() {
document.getElementById('abc').style.display = "block";
}
//Function to Hide Popup
function div_hide(){
document.getElementById('abc').style.display = "none";
}