function getElement(id) {
  const element = document.getElementById(id)
  return element;
}
// console.log(getElement("number"))
//  const type = typeof heartNumber;
//  console.log(type);
// console.log(getInnerText("available-heart"));

// for counting heart code
document.getElementById("heart-in-card").addEventListener("click", function(){
const heartNumber = Number(getElement("available-heart").innerText);
const currentHeartNumber = heartNumber + 1
getElement("available-heart").innerText = currentHeartNumber;
})

// for history code
const titleEmergency = getElement("title").innerText
const numberEmergency = getElement("number").innerText
const nowTime = new Date().toLocaleString()
document.getElementById("call-id").addEventListener("click", function(){
    const coinNumber = Number(getElement("coin").innerText)
    if(coinNumber < 20){
    alert(`Not have enough coin for make a call to ${numberEmergency} of ${titleEmergency}`)
    }
    else{
        alert("20 coin will debited")
        const currentCoinNumber = coinNumber - 20;
        getElement("coin").innerText = currentCoinNumber
        const historyContainer = getElement("history")
        const newHistory = document.createElement("div")
        newHistory.innerHTML = ` 
        <div id="removeingHistory" class="flex justify-between items-center bg-[#ecf8ec] m-2 p-2 rounded-[10px]">
            <div>
              <h1>${titleEmergency}</h1>
              <p>${numberEmergency}</p>
            </div>
            <h1>${nowTime}</h1> 
        </div>
          `
        historyContainer.append(newHistory);    
        }
  
})

// for copy code
document.getElementById("copy-id").addEventListener("click", function(){
const copyNumber = Number(getElement("copy-count").innerText);
const currentCopyNumber = copyNumber + 1
getElement("copy-count").innerText = currentCopyNumber;
})

// for clear history code
const divToRemove = getElement("removeingHistory");
document.getElementById("clearHistory").addEventListener("click", function(){
document.getElementById("removeingHistory").outerHTML = "";
})

