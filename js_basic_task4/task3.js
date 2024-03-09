const emails = ["example1@yahoo.com", "myemail@mail.com", "trueemail@gmail.com"]

const onlyGmail = emails.filter((email) => email.includes("gmail.com"))

console.log(onlyGmail)