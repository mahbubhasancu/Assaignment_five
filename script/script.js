// আইডি থেকে ইলিমেন্ট বের করার জন্য ফাংশন
function getElement(id) {
  const element = document.getElementById(id)
  return element;
}
//ক্লাস থেকে ইলিমেন্ট বের করার ফাংশন
function getElementClass(classes) {
  const elements = document.getElementsByClassName(classes)
  return elements;
}


// হার্ট কাউন্টিনিং সেকশন শুরু*****************************************************
const heartbtns = getElementClass("heartbutton")
for(let heartbtn of heartbtns){
  heartbtn.addEventListener("click", function(){
    const heartNumber = Number(getElement("available-heart").innerText);
    const currentHeartNumber = heartNumber + 1
    getElement("available-heart").innerText = currentHeartNumber;
  })
}
// হার্ট কাউন্টিনিং সেকশন শেষ**************************************************


// হিস্টোরি এড এবং ক্লিয়ার এবং কয়েন কাউন্ট সেকশন শুরু****************************
const calls = getElementClass("call")
for(const call of calls){
    call.addEventListener("click", function(e){
    const card = e.currentTarget.closest(".card")
    const serviceName = card.querySelector(".servicename").innerText
    const serviceNumber = card.querySelector(".servicenumber").innerText
    const serviceTime = new Date().toLocaleString()
    const coinNumber = Number(getElement("coin").innerText)
    if(coinNumber < 20){
    alert(`⚠️Not have enough coin, need minimum 20 coin to make a call.`)
    }
    // পর্যাপ্ত কয়েন না থাকলে উপরের সেকশন কাজ করবে
    else{
        alert(`📞Calling ${serviceName} Service ${serviceNumber}...`)
        const currentCoinNumber = coinNumber - 20;
        getElement("coin").innerText = currentCoinNumber


        const historyContainer = getElement("history")
        const newHistory = document.createElement("div")
        newHistory.innerHTML = ` 
        <div id="removeingHistory" class="flex justify-between items-center bg-[#ecf8ec] m-2 p-2 rounded-[10px]">
            <div>
              <h1>${serviceName}</h1>
              <p>${serviceNumber}</p>
            </div>
            <h1>${serviceTime}</h1> 
        </div>
          `
        historyContainer.append(newHistory);    
        }
        //পর্যাপ্ত কয়েন সাপেক্ষে হিস্টোরিতে এড এবং কয়েন কমে যাবে 
  
  })
    // হিস্টোরি ক্লিয়ার হয়ে যাবে 
  const divToRemove = getElement("history");
  document.getElementById("clearHistory").addEventListener("click", function(){
  divToRemove.remove();
      })
}
 
// হিস্টোরি এড এবং ক্লিয়ার এবং কয়েন কাউন্ট সেকশন শেষ******************************



// কোড কাউন্ট হবে এবং কপি হবে এলার্ট সহ
const copybtns = getElementClass("copybtn")
for(const copybtn of copybtns){
    copybtn.addEventListener("click", function(e){
      const card = e.currentTarget.closest(".card")
      const serviceNumber = card.querySelector(".servicenumber").innerText
    const copyNumber = Number(getElement("copy-count").innerText);
    const currentCopyNumber = copyNumber + 1
getElement("copy-count").innerText = currentCopyNumber;

navigator.clipboard.writeText(`${serviceNumber}`).then(() => {
  alert(`Number is Copied🆗 ${serviceNumber}`);
  /* text copied to clipboard successfully */
},() => {
  console.error('Failed to copy');
  /* text failed to copy to the clipboard */
});
  })
}

