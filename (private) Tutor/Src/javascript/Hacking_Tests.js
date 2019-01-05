var ircIsConnected = false
	,ircHasJoinned = false
	,secureLine = false
	,dayElliotIsOnline = 20
	,currentDay = 0
	,IRC_log = ""
	,my_alias = "";

//Hacking Test #1
function Connect_IRC(alias){

	var ircConnectedMessage = ' has connected to irc.colo-solutions.net';
	my_alias = alias;

	if(alias.length > 0){
		document.getElementById('lblResult2').innerHTML = "<strong>" + my_alias + "</strong>" + ircConnectedMessage;
		ircIsConnected = true;
	}else{
		console.log("Please enter your alias...");
	}	
}
//Hacking Test #2
function Join_IRC(password) {

	if(ircIsConnected == false) {	
		console.log("Dammit.... $@%$@, you're not connected yet!");
		return;
	}

	var ircChannelJoinedMessage = "You joined <strong>#th3g3ntl3man</strong>."
		,taskTwoDuration = 10
		,elliotSentenceTime = 100
		,minimumPasswordSizeForASecureLine = 10
		,display_message = '';

	display_message += ircChannelJoinedMessage;
	display_message += '<br><br>';	

	secureLine = (password.length >= minimumPasswordSizeForASecureLine) ? true : secureLine;
	
	if(secureLine){
		display_message += 'You\'re now in a secure line.';
	}else{
		display_message += 'You\'re not in a secure line. FBI might get a hold of you...';
	}

	ircHasJoinned = true;	
	document.getElementById('lblResult3').innerHTML = display_message;
	isOnline();

}
//Hacking Test #3
function isOnline() {

	if (ircIsConnected && ircHasJoinned) {
		return_val = true;
		document.getElementById("btnCheckOnline").disabled = false;
	}
}
function Eliot_CheckOnline(){

	var elliotOnline = false
	currentDay += 1;

	if(currentDay == dayElliotIsOnline){
		elliotOnline = true;
		IRC_log = "Yay!! Eliot is online!<br><br>"
		document.getElementById("btnCheckOnline").disabled = true;
		document.getElementById("txtProblem4").hidden = false;
		document.getElementById("txtProblem4").value = "Finally... Can you tell me what the duck is Stage 2?";
		document.getElementById("btnHandshake").hidden = false;
		document.getElementById("lblResult4").innerHTML = IRC_log;
		document.getElementById("btnDecodePwd").disabled = false;
		console.log("Eliot is finally online!! He's been arrested " + dayElliotIsOnline + " days. Pigs!");
	}else{
		document.getElementById("lblResult4").innerHTML = "Eliot is offline :("
		console.log("Current day is " + currentDay + ".");
		console.log("Eliot is not online.. Try again tomorrow $u%3r!!");
		console.log("But don't get too much hopefull.... based on our intel, he's not expected to be online at least for another " + (dayElliotIsOnline - currentDay) + " days.");
	}
}
function Eliot_Handshake(){
	
	IRC_log += "(" + my_alias + ") " + document.getElementById("txtProblem4").value + "<br><br>";
	document.getElementById("lblResult4").innerHTML = IRC_log;

	if(!secureLine){
		IRC_log += "upsss ..... you've screwed up son. You're connection was caught by FBI<br><br>";
		IRC_log += "Eliot was disconneted and sent to jail :(";
		dayElliotIsOnline += 30;
		elliotOnline = false;

		document.getElementById("lblResult4").innerHTML = IRC_log;
		document.getElementById("btnCheckOnline").disabled = false;
		document.getElementById("txtProblem4").hidden = true;
		document.getElementById("btnHandshake").hidden = true;
	}
}
//Hacking Test #4
function Password_Decoding() {

	var taskFourDuration = 15
		,possibleRaysPasswords = 
		[
			'mobleyAndTrentonAreDead'
			,'tyrellIsElliot'
			,'dreadPirateRoberts'
		]
		,smallest_pos = -1
		,last_size = 0
		,value_split = ""
		,decrypted_value = "";

	for (var i = 0; i <= possibleRaysPasswords.length - 1; i++) {
		if(smallest_pos == -1 
			|| possibleRaysPasswords[i].length < last_size){
			smallest_pos = i;
			last_size = possibleRaysPasswords[i].length;
		}
	}

	value_split = possibleRaysPasswords[smallest_pos].split("");

	for (var i = value_split.length - 1; i >= 0; i--) {
		decrypted_value += value_split[i] + "<br>";
	}

	document.getElementById("lblResult5").innerHTML = decrypted_value;
}
