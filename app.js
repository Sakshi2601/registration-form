let user=[];
let check;
function adduser()
{
    let tempName=document.getElementById("name").value;
    let tempEmail=document.getElementById("email").value;

    user.filter((x)=>
    {
        if(x.email==tempEmail)
        {
            check=1;
        }
    }
    )
    if(check==1)
    {
        alert("User already exist!!!")
    }
    else
    {
        tempuser={
            name:tempName,
            email:tempEmail,
        }
        user.push(tempuser);
        alert("Congratulations!!! You Are Successfully Registered")
        let parent=document.getElementById('container');
        let divTag=document.createElement('div');
        parent.appendChild(divTag);
        let name=document.createElement('h3');
        let email=document.createElement('h3');
        name.innerHTML=tempName;
        email.innerHTML=tempEmail;
        divTag.appendChild(name);
        divTag.appendChild(email);
        divTag.classList.add('users');
        document.getElementById('name').value="";
        document.getElementById('email').value="";
        console.log(user);
    }
}