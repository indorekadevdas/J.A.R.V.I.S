let btn = document.getElementById("btn");
let content=document.getElementById("content");
let logo = document.getElementById("gif");

function speak(text){
  let text_speak = new SpeechSynthesisUtterance(text)
  text_speak.rate=1
  text_speak.pitch=1
  text_speak.volume=1
  text_speak.lang="en-US"
  window.speechSynthesis.speak(text_speak)
}

function wishMe(){
 let day = new Date()
 let hours = day.getHours()
  if(hours>=0 && hours<12){
  speak("Good Morning Sir")
  } 
  else if(hours>=12 && hours<16){
    speak("Good Afternoon Sir")
  }
  else{
    speak("Good Evening Sir")
  }
}
window.addEventListener('load',()=>{
    wishMe()
});

let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
if (!SpeechRecognition) {
  alert('Speech Recognition is not supported in your browser.');
} 
else {
  let recognition = new SpeechRecognition();
  let content = document.getElementById('content');
  let btn = document.getElementById('btn');

  recognition.onresult = (event) => {
    let currentIndex = event.resultIndex;
    let transcript = event.results[currentIndex][0].transcript;
    content.innerText = transcript;
    takecommand(transcript.toLowerCase());
    recognition.stop();
  };

  btn.addEventListener('click', () => {
    recognition.start();
    btn.style.display = "none"
    logo.style.display = "block"

  });
}
function takecommand(Message){
    btn.style.display = "flex"
    logo.style.display = "none"
      
  if(Message.includes("hello") || Message.includes("Hi")){
    speak("Hello sir , How can i help you ? ");
  }
  else if(Message.includes("who is your creator") || Message.includes("Who are you")){
    speak("I am jarvis created by vishal sir ");
  }
  else if(Message.includes("open youtube") || Message.includes("can you open youtube for me")){
    speak("opening youtube for you sir ")
    window.open("https://www.youtube.com/","_blank")
  }
  else if(Message.includes("open intagram") || Message.includes("can you open instagram for me")){
    speak("opening instagram for you sir ")
    window.open("https://www.instagram.com/","_blank")
  }
  else if(Message.includes("open facebook") || Message.includes("can you open facebook for me")){
    speak("opening facebook for you sir ")
    window.open("https://www.facebook.com/","_blank")
  }
  else if(Message.includes("open perplexity") || Message.includes("can you open perplexity for me")){
    speak("opening perplexity for you sir ")
    window.open("https://www.perplexity.ai/","_blank")
  }
  else if(Message.includes("open x") || Message.includes("can you open x for me")){
    speak("opening x for you sir ")
    window.open("https://x.com/","_blank")
  }
  else if(Message.includes("open google") || Message.includes("can you open google for me")){
    speak("opening google for you sir ")
    window.open("https://www.google.com/","_blank")
  }
  else if(Message.includes("open github") || Message.includes("can you open github for me")){
    speak("opening github for you sir ")
    window.open("https://github.com/","_blank")
  }
  else if(Message.includes("open calculator ") || Message.includes("can you open calcultor for me")){
    speak("opening calculator for you sir ")
    window.open("calculator://")
  }
  else if(Message.includes("open whatsapp ") || Message.includes("can you open whatsapp for me")){
    speak("opening whatsapp for you ")
    window.open("whatsapp://")
  }
  else if(Message.includes("open playstore ") || Message.includes("can you open playstore for me")){
    speak("opening playstore for you ")
    window.open("playstore://")
  }
  else if(Message.includes("open youtube ") || Message.includes("can you open youtube for me")){
    speak("opening youtube for you ")
    window.open("youtube://")
  }
  else if(Message.includes("open gallery ") || Message.includes("can you open gallery for me")){
    speak("opening gallery for you ")
    window.open("gallery://")
  }
  else if(Message.includes("open google ") || Message.includes("can you open google for me")){
    speak("opening google for you ")
    window.open("google://")
  }
  else if(Message.includes("open clock ") || Message.includes("can you open clock for me")){
    speak("opening  for you ")
    window.open("clock://")
  }
   else{
       speak(`Here's what i found on internet regrading the ${Message.replace("jarvis","")|| Message.replace("Jarvis","")}`)
      window.open(`https://www.google.com/search?q=${Message.replace("jarvis","")|| Message.replace("Jarvis","")}`)
   }
}