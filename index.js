const timerEl = document.getElementById("timer"); 
const qouteValue = document.getElementById("quoteDisplay"); 
const typeTest = document.getElementById("quoteInput") 
const submitBtn = document.getElementById("submitBtn")
let timeValue =0;
const returnValue = setInterval(()=>{
      timerEl.textContent=`${timeValue} seconds` 
      timeValue+=1;
},1000) 
const apiCall = async function(){ 
    const options ={
         method:"GET"
    }
   const API = 'https://apis.ccbp.in/random-quote' 
   const response = await fetch(API,options)  
   const data = await response.json() 
   qouteValue.textContent = data?.content
} 
apiCall()   


submitBtn.addEventListener("click",function(){
       const userValue = typeTest.value ;   
       clearInterval(returnValue)
       if(userValue){
             if(userValue ===  qouteValue.textContent ){
                   document.getElementById("result").textContent = `you typed in  ${timerEl.textContent}`
             } 
             else{
                    document.getElementById("result").textContent='you typed incorrect sentence'
             }
       }
       else{
             alert("PLEASE ENTER THE TEXT")
       }
})

function resetThePage(){
      location.reload();
}