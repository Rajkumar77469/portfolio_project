
function test()
{
    var name=getElementById("clintname").value;
    var email=getElementById("clintemail").value;
    var phone=getElementById("clientphone").value;
     var enquiory=getElementById("clintenquiry").value
    //  alert(name + email + phone + enquiory);
    //string
    var na=localStorage.setItem("name",name);
    var em=localStorage.setItem("email",email);
    var ph=localStorage.setItem("phone",phone);
    var en=localStorage.setItem("enquiory",enquiory);

}
document.writeln("Your info: "+ ""+ name);
document.writeln("Your Phone: "+ "" + phone);
