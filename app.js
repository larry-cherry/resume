
var resume = new Resume()
var p = document.createElement("p");

document.getElementById("name").innerHTML = resume.name;

document.getElementById("summary").appendChild(p);
document.getElementById("summary").lastChild.innerHTML = resume.summary;
// List Contact info
function contactInfo() {
  for (var key in resume.contact) {
    if (resume.contact.hasOwnProperty(key)) {
      document.getElementById("contact").appendChild(document.createElement("LI"));
      document.getElementById("contact").lastChild.classList.add("col-sm-1");
      document.getElementById('contact').lastChild.innerHTML = resume.contact[key]; 
    }
  }
}

function skills() {
  //this function will output my skills on the webpage. 
}

contactInfo()