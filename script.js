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
		//alert("Code OK");
		div_hide("ClosetCode");
		div_show("truiOpen");
		
	}
	else {
		alert("הקוד שהוכנס שגוי");
	}
	}
	}
	
	function open_comp(){
		if(document.getElementById('uname').value == ""){
			alert("יש להכניס שם משתמש");
		}else{
			if(document.getElementById('uname').value == "taliv"){
				alert("From: Liat Ben Ari\nSent: Tuesday, February 28, 2017 08:00 AM\nTo: Tali Vaknin\nSubject: אירוע חטיבה\n\nהיי טלי,\nהאירוע שנבחר הוא אופציה מספר X\n\nבברכה,\nליאת בן ארי\n\n\n");
				div_hide("abc");
			}
			else{
				alert("שם המשתמש שהוכנס שגוי");
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
	
	function hallTrashAlert(){
		alert("הקוד לפתיחת הארונית הוא:\nשנת הקמת אלטל");
	}
	
	function hallCabinetClick(){
		if (document.getElementById('cabCode').value == ""){
			alert("יש להזין קוד לפתיחת הארון");
		}
		else{
			if (document.getElementById('cabCode').value =="1979"){
				div_show("cabPaper");
				div_hide("hallCabinet");
			}
			else{
				alert("קוד שגוי");
			}
		}
	}