document.getElementById('next').onclick = function(){
  //developed by kavya trivedi
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
//developed by kavya trivedi 
document.getElementById('prev').onclick = function(){
  //developed by kavya trivedi 
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
  //developed by kavya trivedi 
}
  
// Function to play the sound
function playSound() {
    const audio = new Audio('kavyatrivediaudio.mp3');
    audio.play();
}

// Attach the event listeners to the buttons which play it 
document.getElementById('prev').addEventListener('click', playSound);
document.getElementById('next').addEventListener('click', playSound);
