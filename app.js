
var resume = new Resume()

document.getElementById("name").innerHTML = resume.name

// List Contact info
function contactInfo() {
  for (var key in resume.contact) {
    if (resume.contact.hasOwnProperty(key)) {
      document.getElementById("contact").appendChild(`<li>${resume.contact[key]}</li>`) 
    }
  }
}

contactInfo()