let stringEmail = "daniel.abrams@gmail.com"

let twoParts = stringEmail.split("@")

let domain_edit = twoParts.splice(1, 1, "changed.com")

let changedEmail = twoParts.join("@")

console.log(changedEmail)