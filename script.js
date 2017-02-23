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
		div_hide("ClosetCode");
		div_show("truiOpen");
		
	}
	else {
		alert("code BAD");
	}
	}
	}
	//Function To Display Popup
	function div_show(ObjId) {
		document.getElementById(ObjId).style.display = "block";
	}
	//Function to Hide Popup
	function div_hide(ObjId){
	document.getElementById(ObjId).style.display = "none";
	}
	
	function thrug_options()
	{
		alert("האופציות לאירוע חטיבה הן:\n1. יום ספורט\n2. שייט אגמים\n3. ערב חטיבה\n4. טיסה לחול\n5. טיול חד יומי בארץ\n6. רכיבה אתגרית\n7. נופש בארץ\n8. פעילות אתגרית\n");
		div_hide("abc");
	}