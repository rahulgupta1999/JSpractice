let user = {
    name: "Rahul",
    hi() { alert(this.name); }
  }
  
  // split getting and calling the method in two lines
  let hi = user.hi;
  hi(); // Error, because this is undefined


  let person = {
    name: 'Aman',
    age: 25,
  };
  
  let member = person;
  
  member.age = 26;
  
  console.log(person);
  console.log(member);

  const d = new Date(2018, 15, 24, 10, 33, 30);
  const d = new Date("October 13, 2014 11:13:00");