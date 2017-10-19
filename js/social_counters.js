document.addEventListener('DOMContentLoaded', function() {
    console.log('social_counters.js loaded');

    var socialCounters = document.querySelectorAll('.social-counter span');
    console.log(socialCounters);


    // for(var i = 1; i < 20000; i++){
    //     setTimeout(function(){
    //         socialCounters[1].textContent = i;
    //     }, 1000)
    // }


    //  var setIntervalId = setInterval(function(){
    //      counter++;
    //      socialCounters[1].textContent = counter;
    //      if(counter === 20000){
    //          clearInterval(setIntervalId);
    //      }
    //  }, 1);


});
