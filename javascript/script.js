var createGumb = document.getElementById("create");
var closesignup1x = document.getElementById("close_signup1");
var closesignup2x = document.getElementById("close_signup2");
var tosignup2 = document.getElementById("tosign2");
var tofini = document.getElementById("tofin");
var signup_div = document.getElementById("signup_overlay1");
var signup_div2 = document.getElementById("signup_overlay2");
var black_overlay_div = document.getElementById("black_overlay");

closesignup1x.addEventListener("click", closesignup1);
closesignup2x.addEventListener("click", closesignup2);
createGumb.addEventListener("click", CreateAccount);
tosignup2.addEventListener("click", tosignup2f);
tofini.addEventListener("click", tofinish);

function CreateAccount(){
	signup_div.style.display = "block";
	black_overlay_div.style.display = "block";
}

function closesignup1(){
	signup_div.style.display = "none";
	black_overlay_div.style.display = "none";
}

function closesignup2(){
	signup_div2.style.display = "none";
	black_overlay_div.style.display = "none";
}

function tosignup2f(){
	var naprej="gre";
	if(document.forms["signup"]["name"].value=="" || document.forms["signup"]["name"].value==null){
		Swal.fire({
		icon: "error",
		title: "Oh no",
		text: "You forgot to enter your name",
		theme: 'auto'
		});
		naprej="nop";
	}
	if(document.forms["signup"]["email"].value=="" || document.forms["signup"]["email"].value==null){
		Swal.fire({
		icon: "error",
		title: "Oh no",
		text: "You forgot to enter your email",
		theme: 'auto'
		});
		naprej="nop";
	}
	if(document.forms["signup"]["date"].value=="" || document.forms["signup"]["date"].value==null){
		Swal.fire({
		icon: "error",
		title: "Oh no",
		text: "You forgot to enter your date of birth",
		theme: 'auto'
		});
		naprej="nop";
	}
	if(!valid(document.forms["signup"]["email"].value)){
		Swal.fire({
		icon: "error",
		title: "Oh no",
		text: "Your email doesn't look right...",
		theme: 'auto'
		});
		naprej="nop";
		
	}
	if(naprej=="gre"){
		/*Swal.fire({
		icon: "success",
		title: "Bravooo",
		theme: 'auto'
		});*/
		signup_div.style.display = "none";
		signup_div2.style.display = "block";
	}
}

function tofinish(){
	var naprej="gre";
	if(document.forms["signup"]["username"].value=="" || document.forms["signup"]["username"].value==null){
		Swal.fire({
		icon: "error",
		title: "Oh no",
		text: "You forgot to enter your username",
		theme: 'auto'
		});
		naprej="nop";
	}
	if(document.forms["signup"]["password1"].value=="" || document.forms["signup"]["password1"].value==null){
		Swal.fire({
		icon: "error",
		title: "Oh no",
		text: "You forgot to enter your password",
		theme: 'auto'
		});
		naprej="nop";
	}
	if(!validatePassword(document.forms["signup"]["password1"].value)){
		Swal.fire({
		icon: "error",
		title: "Oh no",
		text: "Your password isn't complex enough",
		theme: 'auto'
		});
		naprej="nop";
	}
	if(document.forms["signup"]["password2"].value=="" || document.forms["signup"]["password2"].value==null){
		Swal.fire({
		icon: "error",
		title: "Oh no",
		text: "You forgot to re-enter your password",
		theme: 'auto'
		});
		naprej="nop";
	}
	if(document.forms["signup"]["password1"].value!=document.forms["signup"]["password2"].value){
		Swal.fire({
		icon: "error",
		title: "Oh no",
		text: "Hmm.. the passwords don't match",
		theme: 'auto'
		});
		naprej="nop";
		
	}
	if(naprej=="gre"){
		Swal.fire({
		icon: "success",
		title: "Bravooo",
		theme: 'auto'
		});
		signup_div2.style.display = "none";
		black_overlay_div.style.display = "none";
	}
}

function valid(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

function validatePassword(pw) {
    return /[A-Z]/       .test(pw) &&
           /[a-z]/       .test(pw) &&
           /[0-9]/       .test(pw) &&
           pw.length > 8;

}