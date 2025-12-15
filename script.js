function generateData() {

  const firstNames = [
    "Dipak","Rahul","Amit","Rohit","Arjun",
    "Sachin","Vikas","Ankit","Manish","Sumit"
  ];

  const lastNames = [
    "Kumar","Sharma","Singh","Verma","Gupta",
    "Yadav","Patel","Mishra","Joshi","Agarwal"
  ];

  // Address + Pincode (FIXED PAIRS)
  const locations = [
    { address: "House No 21, MG Road, Indore, MP", pin: "452001" },
    { address: "Flat 12B, Laxmi Nagar, Delhi", pin: "110092" },
    { address: "Shivaji Nagar, Pune, Maharashtra", pin: "411028" },
    { address: "Civil Lines, Prayagraj, UP", pin: "211001" },
    { address: "Sector 10, Awas Vikas, Lucknow", pin: "226010" }
  ];

  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  const fourDigits = Math.floor(1000 + Math.random() * 9000);

  // Mail (NO DOMAIN)
  const mail = firstName.toLowerCase() + lastName.toLowerCase() + fourDigits;

  // DOB (1996–2002)
  const start = new Date(1996, 0, 1);
  const end = new Date(2002, 11, 31);
  const d = new Date(start.getTime() + Math.random() * (end - start));

  const dob =
    String(d.getDate()).padStart(2, '0') + "/" +
    String(d.getMonth() + 1).padStart(2, '0') + "/" +
    d.getFullYear();

  // Fake Govt ID
  const govtId = "ID" + Math.floor(1000000000 + Math.random() * 9000000000);

  // Same Address & Pincode
  const loc = locations[Math.floor(Math.random() * locations.length)];

  document.getElementById("mail").innerText = mail;
  document.getElementById("dob").innerText = dob;
  document.getElementById("fname").innerText = firstName;
  document.getElementById("lname").innerText = lastName;
  document.getElementById("gid").innerText = govtId;
  document.getElementById("addr").innerText = loc.address;
  document.getElementById("pin").innerText = loc.pin;
}

function copyOne(id) {
  const text = document.getElementById(id).innerText;
  navigator.clipboard.writeText(text);
}

function copyAll() {
  const text =
`Mail: ${document.getElementById("mail").innerText}
Password: ${document.getElementById("pass").innerText}
DOB: ${document.getElementById("dob").innerText}
First Name: ${document.getElementById("fname").innerText}
Last Name: ${document.getElementById("lname").innerText}
Govt ID: ${document.getElementById("gid").innerText}
Address: ${document.getElementById("addr").innerText}
Pincode: ${document.getElementById("pin").innerText}`;

  navigator.clipboard.writeText(text);
}
