/////////////////////////////////////////about me (tablinks)


var tablinks =  document.getElementsByClassName("tab-links")
var tabcontents =  document.getElementsByClassName("tab-contents")

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

/////////////////////////////////////////////////// for onclick function

var sidemeu = document.getElementById("sidemenu");
function openmenu(){
    sidemeu.style.right = "0";
}
function closemenu(){
    sidemeu.style.right = "-200px";
}
/////////////////////////////////////////////////// for the google-sheet

        const scriptURL = 'https://script.google.com/macros/s/AKfycbwvaXLfojnXolExp95IxLjpd3vHwpetHvcDqFdmKG62UA9EZMGFngSNat4CCiF-3iPKyw/exec'
        const form = document.forms['submit-to-google-sheet']
      const msg = document.getElementById('msg')
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                msg.innerHTML = "Message Sucessfully Sent.Thank You"
                setTimeout(function(){
                    msg.innerHTML = ""
                
            },5000)
            form.reset()
        })
            .catch(error => console.error('Error!', error.message))

        })
      