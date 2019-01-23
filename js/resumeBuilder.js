/*
This is empty on purpose! Your code to build the resume will go here.
 */

 $("#main").append("ISHARA\n\r");

var awe = "i am Ishara and i am awesome\n\r";
console.log(awe);
 $("#main").append(awe);

 var funny = awe.replace("awesome","popipo");
 $("#main").append(funny);
 var email = "ishara.chan-tung@telecomnancy.eu\n\r";

 var trueName = HTMLheaderName.replace("%data%","Ishara");

var trueRole = HTMLheaderRole.replace("%data%","Eleve ingenieure");
$("#header").prepend(trueRole);
 $("#header").prepend(trueName);

 var truemail = HTMLemail.replace("%data%","ishara.chan-tung@telecomnancy.eu");
 $("#main").append(truemail);

 var bio = {
 	"name" : "Ishara",
 	"role" : "Eleve ingenieure TN",
 	"age" : 21,
 	"hair" : "black",
 	"wm" : "BONJOUR!",
 	"obj" : {
 		"a" : 1,
 		"b" : 2
 	},
 	"skills" : ["bien","sympa","cool"]

 };

 var work = {};
 	work.Position= "Student";
 	work.years = 2;
 	work.city= "Nancy";
 

 var education= {};
 	education["name"] = "TN";
 	education["years"] = 2;
 	education["city"] = "Nancy";


  $("#main").append(work["Position"]);
  $("#main").append(education.name);

var education = {
	"schools": [{
		"school" : "TN",
		"city" : "Nancy",
		"major" : "IT",
		"minor" : "management",
		"gradyear" : 2020
	},
	{
		"schools" : "Janson",
		"city" : "Paris",
		"major" : "Maths",
		"minor" : "Physics",
		"gradyear" : 2017

	}
	
	]
}