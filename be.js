function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("pwd").value;
    if(username=="abcetc"&&password=="user")
    {
        alert("Logged in Succesfully");
        return false;
    }
    else
    {
        alert("Login failed :(")
    }



}