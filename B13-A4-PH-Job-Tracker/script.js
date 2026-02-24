let interviewCountList =[];
let totalRejectedCountList = [];
let total = document.getElementById('total-count');
let interviewCount = document.getElementById('total-interview-count');
let totalRejectedCount = document.getElementById('total-rejected-count');

const allCardSection = document.getElementById('all-card-parent');
const mainContainer = document.querySelector('main');
const filterSec = document.getElementById('filter-sec')
// console.log(mainContainer)
const allBtn = document.getElementById('all-btn');
 const interviewBtn = document.getElementById('interview-btn');
 const rejectedBtn = document.getElementById('rejected-btn');

function calculateTotal(){
    total.innerText = allCardSection.children.length;
    interviewCount.innerText = interviewCountList.length;
    totalRejectedCount.innerText = totalRejectedCountList.length;
} 
calculateTotal()

function toggleStyle(id){
 
//  allBtn.classList.add('bg-blue-400');
//  interviewBtn.classList.add('bg-blue-400');
//  rejectedBtn.classList.add('bg-blue-400');


 allBtn.classList.remove('bg-blue-400');
 interviewBtn.classList.remove('bg-blue-400');
 rejectedBtn.classList.remove('bg-blue-400');


 const selected = document.getElementById(id);
 selected.classList.add('bg-blue-400');
 if(id == 'interview-btn'){
    allCardSection.classList.add('hidden')
    filterSec.classList.remove('hidden')
    
 }
 else if(id == 'all-btn'){
  allCardSection.classList.remove('hidden');
  filterSec.classList.add('hidden')
 }
 else if(id == 'rejected-btn'){
   allCardSection.classList.add('hidden')
    filterSec.classList.remove('hidden')

 } 


}

mainContainer.addEventListener('click',function(event){
  if(event.target.classList.contains('interview-btn')){
      const parentNode = event.target.parentNode.parentNode.parentNode;
    const interviewW = parentNode.querySelector('.interview-btn').innerText;
    const rejectedD = parentNode.querySelector('.rejected-btn').innerText;
    const reactNative = parentNode.querySelector('.react-native').innerText;
    const mobileCrop = parentNode.querySelector('.mobile-crop').innerText;
    const remoteE = parentNode.querySelector('.remote').innerText;
    const build = parentNode.querySelector('.build').innerText;
    const notApp = parentNode.querySelector('.not').innerText;

    
    
    
const cardInfo = {
    interviewW,
    rejectedD,
    reactNative,
    mobileCrop,
    remoteE,
    build,
    notApp
}
    
const interviewCountListExist = interviewCountList.find(item => item.interviewBtn = cardInfo.interviewW)

parentNode.querySelector('.not').innerText = 'Interview'
if(!interviewCountListExist){
    interviewCountList.push(cardInfo)
}
calculateTotal()
interviewOngoing()
  }
  else if(event.target.classList.contains('rejected-btn')){
      const parentNode = event.target.parentNode.parentNode.parentNode;
    const interviewW = parentNode.querySelector('.interview-btn').innerText;
    const rejectedD = parentNode.querySelector('.rejected-btn').innerText;
    const reactNative = parentNode.querySelector('.react-native').innerText;
    const mobileCrop = parentNode.querySelector('.mobile-crop').innerText;
    const remoteE = parentNode.querySelector('.remote').innerText;
    const build = parentNode.querySelector('.build').innerText;
    const notApp = parentNode.querySelector('.not').innerText;

    
    
    
const cardInfo = {
    interviewW,
    rejectedD,
    reactNative,
    mobileCrop,
    remoteE,
    build,
    notApp
}
    
const interviewCountListExist = totalRejectedCountList.find(item => item.interviewBtn = cardInfo.interviewW)

parentNode.querySelector('.not').innerText = 'rejected'
if(!interviewCountListExist){
    totalRejectedCountList.push(cardInfo)
}
calculateTotal()
rejectionOngoing()
  }

})

function rejectionOngoing (){
filterSec.innerHTML = ''
for ( let interv of totalRejectedCountList){
    
    let div = document.createElement('div');
    div.className ='card-parent1 bg-base-100 shadow-sm max-w-11/12 mx-auto bg-[#FFFFFF] mt-3 flex justify-between'
    div.innerHTML = ` <div class="card-01-left  space-y-3 p-3">
                <h1 class="font-bold mobile-crop text-xl text-[#002C5C]">Mobile First Corp</h1>
                <p class="text-[#64748B] react-native text-[15px]">React Native Developer</p>
                <span class="text-[#64748B] remote text-[14px]"> Remote • Full-time • $130,000 - $175,000</span><br>
                <button class="btn bg-primary-content">Not Applied </button>
                <p class="text-[#64748B] build text-[13px]">Build cross-platform mobile applications using React Native. Work       on products used by millions of users worldwide.</p>
              <div>
                <button class="btn interview-btn border border-accent text-accent">interview</button>
                <button class="btn rejected-btn border border-red-300 text-red-400">Rejected</button>

              </div>
              
           </div>
         
             <div class="card-01-right">
               <i class="fa fa-trash pt-8 pr-8" aria-hidden="true"></i>

            </div>
        `
        filterSec.appendChild(div)
}
}
function interviewOngoing (){
filterSec.innerHTML = ''
for ( let interv of interviewCountList){
    
    let div = document.createElement('div');
    div.className ='card-parent1 bg-base-100 shadow-sm max-w-11/12 mx-auto bg-[#FFFFFF] mt-3 flex justify-between'
    div.innerHTML = ` <div class="card-01-left  space-y-3 p-3">
                <h1 class="font-bold mobile-crop text-xl text-[#002C5C]">Mobile First Corp</h1>
                <p class="text-[#64748B] react-native text-[15px]">React Native Developer</p>
                <span class="text-[#64748B] remote text-[14px]"> Remote • Full-time • $130,000 - $175,000</span><br>
                <button class="btn bg-primary-content">Not Applied </button>
                <p class="text-[#64748B] build text-[13px]">Build cross-platform mobile applications using React Native. Work       on products used by millions of users worldwide.</p>
              <div>
                <button class="btn interview-btn border border-accent text-accent">interview</button>
                <button class="btn rejected-btn border border-red-300 text-red-400">Rejected</button>

              </div>
              
           </div>
         
             <div class="card-01-right">
               <i class="fa fa-trash pt-8 pr-8" aria-hidden="true"></i>

            </div>
        `
        filterSec.appendChild(div)
}
}