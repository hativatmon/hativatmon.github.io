
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-92768473-1', 'auto');
  ga('send', 'pageview');

	var flowerAudio = new Audio('sound/flower.mp3');
	var redAudio = new Audio('sound/redPhone.mp3');
	var alarmAudio = new Audio('sound/alarm.mp3');
	var carAudio = new Audio('sound/car.mp3');
	var sliderAudio = new Audio('sound/slider.mp3');
	var pingpongAudio = new Audio('sound/pingpong.mp3');
	var printerAudio = new Audio('sound/printer.mp3');
	var morseAudio = new Audio('sound/morse.mp3');
	var fuzeAudio = new Audio('sound/fuze.mp3');
	var backAudio = new Audio('sound/all.mp3');
	backAudio.loop = true;
	
	function startrange(){
		if (document.getElementById('tWhite').value=="2"&&document.getElementById('tBlack').value=="1"&&document.getElementById('tBlue').value=="2"&&document.getElementById('tRed').value=="5"&&document.getElementById('tYellow').value=="2")
		{
			div_hide('rangePass');
			div_show('picbox');
		}else{
			alert("הקוד שגוי");
		}
	}
	
	function openSafeRechesh(){
		
			/* alert(document.getElementById('sn1').value + "sn1" + document.getElementById('sc1').value + "c1 \n" +
				document.getElementById('sn2').value + "sn2" + document.getElementById('sc2').value + "c2 \n" +
				document.getElementById('sn3').value + "sn3" + document.getElementById('sc3').value + "c3 \n" +
				document.getElementById('sn4').value + "sn4" + document.getElementById('sc4').value + "c4 \n" +
				document.getElementById('sn5').value + "sn5" + document.getElementById('sc5').value + "c5 \n" +
				document.getElementById('sn6').value + "sn6" + document.getElementById('sc6').value + "c6 \n" ); */
			if(document.getElementById('sn1').value == "82" && document.getElementById('sc1').value == "#c7487b" && 
			document.getElementById('sn2').value == "79" && document.getElementById('sc2').value == "#e7e5e6" && 
			document.getElementById('sn3').value == "63" && document.getElementById('sc3').value == "#e5b4c7" && 
			document.getElementById('sn4').value == "54" && document.getElementById('sc4').value == "#68bebd" && 
			document.getElementById('sn5').value == "51" && document.getElementById('sc5').value == "#b92c37" && 
			document.getElementById('sn6').value == "46" && document.getElementById('sc6').value == "#6d8c45")
			{
				div_hide('safeCode');
				div_show('safeOpen');
			}
			else{
				alert("הקוד שגוי");
			}
	}
	
	function recheshPlant(){
		alert("n<n<n<n<n<n");
	}
	
	function hilaCompClick(){
		if(document.getElementById('hilaCompUname').value=="hhiillaarr" && document.getElementById('rYellow').value=="3" && 
		document.getElementById('rBlue').value=="5" && document.getElementById('rOrange').value=="3" )
		{
			div_hide('hilaCompLogin');
			div_show('hilaCompIn');
		}
		else{
			alert("הסיסמא ו/או קוד המשתמש שגויים");
		}
	}
	
	function rBin(){
		alert('From: צוות מחשוב\nSent: Thursday, March 2, 2017 8:45 PM\nTo: Hila Refael\nSubject: שם משתמש\n\nהילה שלום,\nשם המשתמש למחשב שלך הוא:\nhhiillaarr\n\nבברכה,\nצוות מחשוב\n');
	}

	function RcompClick(){
		if(document.getElementById("RcompUname").value == "rsimcomp" && document.getElementById("RcompPass").value == "141284"){
			div_show('rCompIn');
			div_hide('rCompLogin');
		}
		else{alert('הסיסמא שגויה');}
	}
	
	function LcompClick(){
		if(document.getElementById("LcompUname").value == "lsimcomp" && document.getElementById("p1").value == "#007f0e" && document.getElementById("p2").value == "#80006f" && document.getElementById("p3").value == "#20007f"){
			div_show('lCompIn');
			div_hide('lCompLogin');
		}
		else{alert('הסיסמא שגויה');}
	}
	
	function simBin(){
		alert("From: צוות מחשוב\nSent: Thursday, March 2, 2017 8:45 PM\nTo: צוות סימולטור\nSubject: שם משתמש\n\nצוות סימולטור,\nשם המשתמש למחשב ימין הוא:\nrsimcomp\nשם המשתמש למחשב שמאל הוא:\nlsimcomp\nבברכה,\nצוות מחשוב\n");
	}
	
	function opPlant(){
		redAudio.play();
		alert('v0lum3\nl1573n');
	}
	
	function opBin(){
		alert('צריך להקשיב כדי לפעול בתבונה\n~ סופוקלס ~');
	}
	
	function soundClick(ObjId, audio){
		//alert(document.getElementById('sound').alt);
		if (document.getElementById(ObjId).alt == "mute"){
			//alert("true");
			document.getElementById(ObjId).src = "imgs/playIcon.png";
			document.getElementById(ObjId).alt = "play";
			switch(audio){
				case "backAudio":
					backAudio.pause();
					break;
				case "fuzeAudio":
					fuzeAudio.pause();
					break;
				case "sliderAudio":
					sliderAudio.pause();
					break;
			}
		}
		else{
			document.getElementById(ObjId).src = "imgs/muteIcon.png";
			document.getElementById(ObjId).alt = "mute";
			switch(audio){
				case "backAudio":
					backAudio.play();
					break;
				case "fuzeAudio":
					fuzeAudio.play();
					break;
				case "sliderAudio":
					sliderAudio.play();
					break;
			}
		}
	}
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
	
	function safeOpen(){
		//alert("safe open");
		var sn1 = document.getElementById("safeN1").value;
		var sn2 = document.getElementById("safeN2").value;
		var sn3 = document.getElementById("safeN3").value;
		var sc1 = document.getElementById("safeC1").value;
		var sc2 = document.getElementById("safeC2").value;
		var sc3 = document.getElementById("safeC3").value;
		
		if (sn1=="8" & sn2=="8" & sn3=="15" & sc1=="#ff0000" & sc2=="#ffffff" & sc3=="#008000"){
			div_show("openSafe");
			div_hide("safeLock");
		}else{alert("הקוד שגוי");}
	}
	
	function ramonDoorCode(){
		var d1 = document.getElementById("d1").value;
		var d2 = document.getElementById("d2").value;
		var d3 = document.getElementById("d3").value;
		var d4 = document.getElementById("d4").value;
		var d5 = document.getElementById("d5").value;
		var d6 = document.getElementById("d6").value;
		var d7 = document.getElementById("d7").value;
		var d8 = document.getElementById("d8").value;
		
		if(d4=="S" & d5=="O" & d3=="S" & d6=="V" & d7=="E" & d8=="R" & d1=="P" & d2=="A" ){
			div_hide("doorCode");
			div_show("enterBtn");
			}else{if(d1=="p" & d3=="s"  & d7=="e"  & d4=="s" & d5=="o" & d6=="v" & d2=="a" & d8=="r"){alert("לא לשכוח לדבר עם הטייס לפני הכניסה!");
				}else{alert("הסיסמא אינה נכונה");}}
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
				alert("From: Liat Ben Ari\nSent: Tuesday, February 28, 2017 08:00 AM\nTo: Tali Vaknin\nSubject: אירוע חטיבה\n\nהיי טלי,\nהאירוע שנבחר הוא אופציה מספר 2\n\nבברכה,\nליאת בן ארי\n\n\n");
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
			div_show("gemp");
			div_hide("garageCabinet");
		}
		else {
			alert("!!!החיבור אינו נכון");
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
	
	function taliPlant() {flowerAudio.play(); alert("חג אביב שמח!!!");}
	
	function liatPlantClick(){alert("למה לחטט בצמחים?");}
	
	function carHorn() {
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
	 
	 