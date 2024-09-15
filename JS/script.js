function sendmail(e){
    e.preventDefault()
    var params = {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        messeage : document.getElementById("message").value
    }
    emailjs.send("service_jd4q7x8", "template_usl2w0g", params).then(function (res){
        alert("Success!" + res.status);
    })   
}

document.querySelector("#submit-btn").addEventListener("click", sendmail)