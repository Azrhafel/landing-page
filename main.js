(function () {
  var queryString = window.location.search;
  var href = window.location.href
  var parameters = new URLSearchParams(queryString);
  var email = parameters.get("email")
  var name= parameters.get("name")
  console.log("email",email,"name",name)

  var domEm = document.querySelector('[data-email]')
  var domName = document.querySelector('[data-name]')

  if (name && email){
  domName.textContent = "Thank you " + name + "!"
  domEm.textContent = "Your email address "+ email + " will now be receiving updates and offers about our clothing!"
  }
}
)();
