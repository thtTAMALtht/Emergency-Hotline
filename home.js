//function for getElementById
function getId(id) {
    const elementId = document.getElementById(id);
    return elementId;
}

//function for getElementsByClassName
function getClass(className) {
    const elementClass = document.getElementsByClassName(className);
    return elementClass;
}

//function for getInnerText
function getText(id) {
    const textId = document.getElementById(id);
    const getInnerText = Number(textId.innerText);
    return getInnerText;
}

//HEART ICON clicked part
const heartIcons = getClass("heart-icon");
for (const icon of heartIcons) {
    icon.addEventListener("click", function() {
        let heartCountValue = getText("heart-count");
        heartCountValue++;
        getId("heart-count").innerText = heartCountValue;
    });
}

//COPY part
const copyElement = getClass("copy");
for (const copy of copyElement) {
    copy.addEventListener("click", function() {
        let copyValue = getText("copy-count");
        copyValue++;
        getId("copy-count").innerText = copyValue;
    });
}
function copyToClipboard(text) {
  if (!navigator.clipboard) {
    alert("দুঃখিত, এই ব্রাউজারে ক্লিপবোর্ড সাপোর্ট নেই। নম্বর: " + text);
    return;
  }
  navigator.clipboard.writeText(text)
    .then(() => alert("নাম্বারটি কপি হয়েছে: " + text))
    .catch(() => alert("কপি করা যায়নি। নম্বর: " + text));
}


//copy part-Delegation start............................

/* one-way
function copyToClipboard(text) {
    if (!navigator.clipboard) {
      alert("দুঃখিত, এই ব্রাউজারে ক্লিপবোর্ড সাপোর্ট নেই। নম্বর: " + text);
      return;
    }
    navigator.clipboard.writeText(text)
      .then(() => alert("নাম্বারটি কপি হয়েছে: " + text))
      .catch(() => alert("কপি করা যায়নি। নম্বর: " + text));
  }

document.getElementById('card-box').addEventListener('click', function(e) {
    if(e.target.className.includes('copy')){
        const cardCopy =e.target;
        let copyValue = getText("copy-count");
        copyValue++;
        getId("copy-count").innerText = copyValue;

    }
    
});

className.includes('copy') দিয়ে লিখলে শুধু বাটনে কাজ করবে । Icon  ও copy লেখার উপর ক্লিক করলে কাজ করবেনা কারণ copy class দেওয়া নাই । i,span tag এর ভেতর copy class add করলে কাজ করবে ।

e.target.closest('.copy') use করলে i,span tag এর ভেতর copy class add করা লাগবেনা কারণ,

»ধরো ইউজার <button class="copy"> বা এর ভিতরের <i> বা <span> এর উপর ক্লিক করল।

»ক্লিক ইভেন্টে e.target হবে সেই স্পেসিফিক এলিমেন্ট, যেমন <i> বা <span> (যেখানে ইউজার ক্লিক করেছে)।

»কিন্তু <i> বা <span> এর class="copy" নেই, তাই সরাসরি e.target.className.includes('copy') হবে false।

»কিন্তু e.target.closest('.copy') বলবে, “তোমার বাবা, দাদা, বা অন্য কোনো উপরের এলিমেন্টের মধ্যে কি .copy ক্লাস আছে?”

»যেহেতু <button class="copy"> আছে, closest সেটাকে রিটার্ন করবে, ফলে কোড বুঝবে — ইউজার আসলে সেই বাটনে ক্লিক করেছে, তাই কাজ করবে।

*/



/* using closest

function copyToClipboard(text) {
    if (!navigator.clipboard) {
      alert("দুঃখিত, এই ব্রাউজারে ক্লিপবোর্ড সাপোর্ট নেই। নম্বর: " + text);
      return;
    }
    navigator.clipboard.writeText(text)
      .then(() => alert("নাম্বারটি কপি হয়েছে: " + text))
      .catch(() => alert("কপি করা যায়নি। নম্বর: " + text));
  }

document.getElementById('card-box').addEventListener('click', function(e) {
    if(e.target.closest('.copy')){
        const cardCopy =e.target;
        let copyValue = getText("copy-count");
        copyValue++;
        getId("copy-count").innerText = copyValue;
    }
    
});

*/

//copy part-delegation end............................




//CALL part
let coinCount = 100;
const callButtons = document.getElementsByClassName("call-btn");
for (const call of callButtons) {
    call.addEventListener("click", function() {
        if (coinCount < 20) {
            alert("❌ দুঃখিত আপনার কলটি যাচ্ছেনা । কল করার জন্যে সর্বনিম্ন ২০ কয়েন থাকতে হবে ।");
            return;
        }
        const card = call.parentNode.parentNode;
        const serviceName = card.children[0].querySelector("h5").innerText;
        const phoneNumber = card.children[0].querySelector("h2").innerText;
        coinCount -= 20;
        getId('coin-id').innerText = coinCount;
        alert(`📞 কলটি যাচ্ছে : ${serviceName} ${phoneNumber}`);

        const time = new Date().toLocaleTimeString();
        const callHistoryContainer = getId('callHistory-container')
        const div = document.createElement('div');
        div.className = 'flex justify-between bg-[#FAFAFA] p-4 rounded-xl my-4';
        div.innerHTML = `
          <div>
            <h3>${serviceName}</h3>
            <p>${phoneNumber}</p>
          </div>
          <div>
            <h2>${time}</h2>
          </div>
        `;
        callHistoryContainer.appendChild(div);
    });
}
//CALL HISTORY clear
document.getElementById('clear-history').addEventListener('click', function() {
    getId('callHistory-container').innerHTML = '';
    alert('✔️ আপনার কল হিস্ট্রি মুছে দেওয়া হয়েছে ।');
});



//another way CALL part
// const callButtons = document.getElementsByClassName('call-btn');
// for(const call of callButtons){
//     call.addEventListener('click',function() {
//         let card = call.closest('div.bg-white'); 
//         let serviceName = card.querySelector('h5').innerText;  
//         let number = card.querySelector('h2').innerText;       
//         alert(`📞 Calling : ${serviceName} ${number}`);
//     });
// }