
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-92768473-1', 'auto');
  ga('send', 'pageview');



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
	
	function garageLockerClick(){
		if (document.getElementById('cabCode').value == ""){
			alert("יש להזין קוד לפתיחת הארון");
		}
		else{
			
			if (document.getElementById('cabCode').value =="674895"){
				div_show("cabPaper");
				div_hide("garageCabinet");
			}
			else{
				alert("קוד שגוי");
			}
		}
	}
	
	function garageCabinetClick(){
		if(document.getElementById('f1').value == "#00b050" & document.getElementById('f2').value == "#c00000" & document.getElementById('f3').value == "#7030a0" & document.getElementById('f4').value == "#ffff00" & document.getElementById('f5').value == "#00b0f0" & document.getElementById('f6').value == "#000000" & document.getElementById('f7').value == "#ed7d31")
		{
			alert("ok");
		}
		else {
			alert(document.getElementById('f1').value+" "+document.getElementById('f2').value+" "+document.getElementById('f3').value+" "+document.getElementById('f4').value+" "+document.getElementById('f5').value+" "+document.getElementById('f6').value+" "+document.getElementById('f7').value+" ");
		}		
	}
	
	function makrenClick(){
		if (document.getElementById('makrenCode').value == ""){alert("יש להכניס קוד להפעלת המקרן");}
		else{if(document.getElementById('makrenCode').value== "1701"){
				div_hide('abc');
				document.getElementById('hadan').style.display = "none";
				document.getElementById('hadanOn').style.display="block";
			}else{alert("הקוד שהוכנס שגוי");}
		}
	}
	
	function liatPlantClick(){alert("למה לחטט בצמחים?");}
	
	function carHorn() {
		var carAudio = new Audio('sound/car.mp3');
             carAudio.play();
     }
	 
	 function emptyC(){alert("הארון ריק");}
	 
	 function garbage(){alert("נא לא לחטט בזבל");}
	 
	 function garageBox(){alert("תעודת משלוח:\n - שביר - \n\nכמות: 500\nפריט: מצות\n\n-סופק ע''י מו צימה צות בע''מ-");}
	 
	 function factMidClick()
	 {
		 if (document.getElementById('factMid').value == ""){
			 alert("");
			 } else{
				 if(document.getElementById('factMid').value == "6562765"){
					 div_hide("factMidClose");
					 div_show("factOpen");}
		 else{alert("bad code");}
	 }}
	 
	 function gilComp(){
		 if (document.getElementById('gilPass').value == "" ){alert("יש להכניס סיסמא");}
		 else{
			 if(document.getElementById('gilPass').value == "iLoveWine"){
				 div_hide("compPass");
				 div_show("openComp");
			 }else {
				 alert("סיסמא שגויה");
			 }
		 }
	 }
	 
	 function gilCabinetClick(){
		 if (document.getElementById('cabinetPassCode').value == "" )
		 {
			 alert("יש להכניס קוד");
		} else{
			if(document.getElementById('cabinetPassCode').value == "111111"){
				div_hide("cabinetPass");
				div_show("openCabinet");
			}else {
				 alert("קוד שגוי");
			 }
		 }
	 }
	 
	 function gilPrinterClick(){
		 var err = false;
		 if (document.getElementById('printerPassCode').value == "forTechOnly" ){
			 alert("לא ניתן להדפיס עם קוד טכנאי");
			 err=true;
		}
		 if (document.getElementById('printerPassCode').value == "forResetOnly" ){
			 alert("המדפסת אופסה, נא לנסות להדפיס מחדש");
			 err=true;
		}
		 if (document.getElementById('printerPassCode').value == "" ){alert("יש להכניס קוד");}
		 else{
			 if(document.getElementById('printerPassCode').value == "forPrintOnly"){
				 div_hide("printerPass");
				 div_show("pagePrint");
			 }else { if(!err){
				 alert("קוד שגוי");
			 }}
		 }
	 }
	 
	 