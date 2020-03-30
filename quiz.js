let quiz = {
   q1: 0,
   q2: 0,
   q3: 0,
   q4: 0,
   q5: 0,
   q6: 0,
   q7: 0,
   q8: 0,
   q9: 0,
   q10: 0,
   finalresult: 0
};

let animate = quiz.finalresult * 1 / 5;
let ch_animate = "";
let checkurl = new URL (window.location);
let ch_name = atob(checkurl.searchParams.get("n"));
let ch_score = atob(checkurl.searchParams.get("s"));
let user_name = "";
let compareScoreSupportingText = "";
// var getlocal = localStorage.getItem('mode');

// states
let isCompare = false;

var qcount = 1;

(function checkchallenge(){
   if(checkurl.searchParams.get("n") !== null){
      $("#welcometextspan").html(ch_name + " just scored " + (ch_score*100/5).toFixed(0) + "%" );
      isCompare = true;
   }
}());

$("#storename").keyup(function () {
   console.log("store name");
   if ($("#storename").val().length > 2){
      $(this).find("input").prop("checked", true);
      $('.NEXT').removeAttr("disabled")
      // return false;
   } else{
     $(".NEXT").attr("disabled", "disabled");
   }
   user_name = $("#storename").val();
});

// (function checkMode() {
//    if(getlocal === "active"){
//       changemode();
//       console.log("mode read")
//    }
// }());


function changemode(){
  
   // localStorage.setItem('mode','active');

   // welcomescrceen
   $("#sun").toggle();
   $("#moon").toggle();
   $("#sun1").toggle();
   $("#moon1").toggle();
   $("#sun2").toggle();
   $("#moon2").toggle();
   $("#logow").toggle();
   $("#logod").toggle();
   $("#logow4").toggle();
   $("#logod4").toggle();
   $("#scored").toggle();
   $("#scorel").toggle();
   $("body").toggleClass("light");
   $("#welcometext").toggleClass("welcometext--l");
   $("#welcometext3").toggleClass("welcometext--l");
   // welcomescrceen

   // common
   $("#logow1").toggle();
   $("#logod1").toggle();
   $("#progressbar").toggleClass("progressbar--l");
   $("#fitnesscalc").toggleClass("fitnesscalc--l");
   $(".question").toggleClass("question--l");
   $(".radio-content").toggleClass("radio-content--l");
   $(".radio-content label").toggleClass("label--l");
   $(".progressbarwrapper").toggleClass("progressbarwrapper--l");
   // common

   //results
   $("#logow3").toggle();
   $("#logod3").toggle();
   $(".resulttitle").toggleClass("resulttitle--l");
   $(".resultcontent").toggleClass("resultcontent--l");
   $("#ch_vs").toggleClass("ch_vs--l");
   $("#shareresultswithch").toggleClass("shareresultswithch--l");
   //results

   //form
   $("#logow2").toggle();
   $("#logod2").toggle();
   $("#welcometext2").toggleClass("welcometext--l");
   $("#overviewtext").toggleClass("overviewtext--l");
   $(".forminput").toggleClass("input--l");
   //form
   
}

updateq1 = () => {
   quiz.q1 = parseFloat($('input[name="q1"]:checked').val());
   event.preventDefault();
   $(".NEXT").attr("disabled", "disabled");
   document.getElementById("one").style.display = "none";
   document.getElementById("two").style.display = "block";
   qcount++;
   document.getElementById("qcount").innerHTML = qcount;
   document.getElementById("progressbar").style.backgroundSize = '10%';
   console.log("q1 submitted!");
   $('#logo').css('margin-left', '')
}

updateq2 = () => {
   quiz.q2 = parseFloat($('input[name="q2"]:checked').val());
   event.preventDefault();
   $(".NEXT").attr("disabled", "disabled");
   document.getElementById("two").style.display = "none";
   document.getElementById("three").style.display = "block";
   qcount++;
   document.getElementById("qcount").innerHTML = qcount;
   document.getElementById("progressbar").style.backgroundSize = '20%';
   console.log("q2 submitted!");
}

updateq3 = () => {
   quiz.q3 = parseFloat($('input[name="q3"]:checked').val());
   event.preventDefault();
   $(".NEXT").attr("disabled", "disabled");
   document.getElementById("three").style.display = "none";
   document.getElementById("four").style.display = "block";
   qcount++;
   document.getElementById("qcount").innerHTML = qcount;
   document.getElementById("progressbar").style.backgroundSize = '30%';
   console.log("q3 submitted!");
}

updateq4 = () => {
   quiz.q4 = parseFloat($('input[name="q4"]:checked').val());
   event.preventDefault();
   $(".NEXT").attr("disabled", "disabled");
   document.getElementById("four").style.display = "none";
   document.getElementById("five").style.display = "block";
   qcount++;
   document.getElementById("qcount").innerHTML = qcount;
   document.getElementById("progressbar").style.backgroundSize = '40%';
   console.log("q4 submitted!");
}

updateq5 = () => {
   quiz.q5 = parseFloat($('input[name="q5"]:checked').val());
   event.preventDefault();
   $(".NEXT").attr("disabled", "disabled");
   document.getElementById("five").style.display = "none";
   document.getElementById("six").style.display = "block";
   qcount++;
   document.getElementById("qcount").innerHTML = qcount;
   document.getElementById("progressbar").style.backgroundSize = '50%';
   console.log("q5 submitted!");
}

updateq6 = () => {
   quiz.q6 = parseFloat($('input[name="q6"]:checked').val());
   event.preventDefault();
   $(".NEXT").attr("disabled", "disabled");
   document.getElementById("six").style.display = "none";
   document.getElementById("seven").style.display = "block";
   qcount++;
   document.getElementById("qcount").innerHTML = qcount;
   document.getElementById("progressbar").style.backgroundSize = '60%';
   console.log("q6 submitted!");
}

updateq7 = () => {
   quiz.q7 = parseFloat($('input[name="q7"]:checked').val());
   event.preventDefault();
   $(".NEXT").attr("disabled", "disabled");
   document.getElementById("seven").style.display = "none";
   document.getElementById("eight").style.display = "block";
   qcount++;
   document.getElementById("qcount").innerHTML = qcount;
   document.getElementById("progressbar").style.backgroundSize = '70%';
   console.log("q7 submitted!");
}

updateq8 = () => {
   quiz.q8 = parseFloat($('input[name="q8"]:checked').val());
   event.preventDefault();
   $(".NEXT").attr("disabled", "disabled");
   document.getElementById("eight").style.display = "none";
   document.getElementById("nine").style.display = "block";
   qcount++;
   document.getElementById("qcount").innerHTML = qcount;
   document.getElementById("progressbar").style.backgroundSize = '80%';
   console.log("q8 submitted!");
}

updateq9 = () => {
   quiz.q9 = parseFloat($('input[name="q9"]:checked').val());
   event.preventDefault();
   $(".NEXT").attr("disabled", "disabled");
   document.getElementById("nine").style.display = "none";
   document.getElementById("ten").style.display = "block";
   qcount++;
   document.getElementById("qcount").innerHTML = qcount;
   document.getElementById("progressbar").style.backgroundSize = '90%';
   console.log("q9 submitted!");
}

updateq10 = () => {
   quiz.q10 = parseFloat($('input[name="q10"]:checked').val());
   event.preventDefault();
   quiz.finalresult = (quiz.q1 + quiz.q2 + quiz.q3 + quiz.q4 + quiz.q5 + quiz.q6 + quiz.q7 + quiz.q8 + quiz.q9 + quiz.q10) * 10 / 100;
   animatefn();
   bar.animate(animate);
   // document.getElementById("result").innerHTML = finalresult;
   document.getElementById("re").style.display = "block";
   document.getElementById("head").style.display = "none";
   document.getElementById("nine").style.display = "none";
   document.getElementById("form").style.display = "none";
   document.getElementById("ten").style.display = "none";
   qcount = 1;
   document.getElementById("qcount").innerHTML = qcount;
   document.getElementById("progressbar").style.backgroundSize = '100%';
   console.log("q10 submitted!");

   (function compareScoreSupportingTextfn(){
      console.log("I exist!")
      if(quiz.finalresult > ch_score) {
         compareScoreSupportingText = "higher";
      } else {
         compareScoreSupportingText = "lower";
      }
   }());
   
   // let compareScore = 100 * Math.abs( (finalresult - ch_score) / ( (finalresult+ch_score)/2 ) );

   if(isCompare === true){
      $("#ch_result_title").html(`You scored ${compareScoreSupportingText} than ${ch_name}!`);
      $("#container2main").toggle();
      ch_animate = ch_score * 1 / 5;
      sar.animate(parseFloat(ch_animate));
      $("#ch_name").html(`${ch_name}'s score`);
      $("#shareresultswithch").html(`Share results with ${ch_name}`);
   }

   bar.animate(parseFloat(animate)); // Number from 0.0 to 1.0

};

shareResults = () => {
   let shareresultlink = new URL('https://wa.me/');
   shareresultlink.searchParams.set('text', `Hey ${ch_name}! I scored ${(quiz.finalresult*100/5).toFixed(0)}% to your ${(ch_score*100/5).toFixed(0)}% on the Kaarva Financial Fitness Test at https://partner.kaarva.com/financialfitnesscalculator`);
   window.open(shareresultlink);
}

animatefn = () => {
   animate = quiz.finalresult * 1 / 5;

   if (quiz.finalresult > 4) {
      $("#overviewtext").html("Awesome, " + user_name + "!");
      console.log("above 4");
   } else if (quiz.finalresult > 3) {
      $("#overviewtext").html("Great, " + user_name + "!");
      console.log("above 3");
   } else if (quiz.finalresult > 2) {
      $("#overviewtext").html("Not bad, " + user_name + "!");
      console.log("above 2");
   } else {
      $("#overviewtext").html("Poor, " + user_name );
      console.log("above 1");
   }

}

start = () => {
   document.getElementById("splash").style.display = "none";
   document.getElementById("entername").style.display = "block";
}

startquiz = () => {
   document.getElementById("entername").style.display = "none";
   document.getElementById("one").style.display = "block";
   document.getElementById("head").style.display = "block";
}


restart = () => {
   document.getElementById("qcount").innerHTML = qcount;
   document.getElementById("re").style.display = "none";
   document.getElementById("one").style.display = "block";
   document.getElementById("head").style.display = "block";
   quiz.finalresult = 0;
   document.getElementById("progressbar").style.backgroundSize = '0%';
   $('input[name=q1]').attr('checked', false);
   $('input[name=q2]').attr('checked', false);
   $('input[name=q3]').attr('checked', false);
   $('input[name=q4]').attr('checked', false);
   $('input[name=q5]').attr('checked', false);
   $('input[name=q6]').attr('checked', false);
   $('input[name=q7]').attr('checked', false);
   $('input[name=q8]').attr('checked', false);
   $('input[name=q9]').attr('checked', false);
   $('input[name=q10]').attr('checked', false);

}

fillForm = () => {
   document.getElementById("re").style.display = "none";
   document.getElementById("form").style.display = "block";
}

// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

var bar = new ProgressBar.SemiCircle(container, {
   strokeWidth: 6,
   color: '#FFEA82',
   trailColor: '#eee',
   trailWidth: 1,
   easing: 'easeInOut',
   duration: 1400,
   svgStyle: null,
   text: {
      value: '0',
      alignToBottom: true
   },
   from: {
      color: '#0069ff'
   },
   to: {
      color: '#e81d61'
   },
   // Set default step function for all animate calls
   step: (state, bar) => {
      bar.path.setAttribute('stroke', state.color);
      var value = bar.value() * 5;
      if (value === 0) {
         bar.setText('');
      } else {
         bar.setText(value.toFixed(2));
      }

      bar.text.style.color = state.color;
   }
});

var sar = new ProgressBar.SemiCircle(container2, {
   strokeWidth: 4,
   color: '#d2d2d2',
   trailColor: '#eee',
   trailWidth: 1,
   easing: 'easeInOut',
   duration: 1400,
   svgStyle: null,
   text: {
      value: '0',
      alignToBottom: true
   },
   from: {
      color: '#d2d2d2'
   },
   to: {
      color: '#d2d2d2'
   },
   // Set default step function for all animate calls
   step: (state, bar) => {
      bar.path.setAttribute('stroke', state.color);
      var value = bar.value() * 5;
      if (value === 0) {
         bar.setText('');
      } else {
         bar.setText(value.toFixed(2));
      }

      bar.text.style.color = state.color;
   }
});

bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = '3rem';
bar.text.style.fontWeight = '600';

sar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
sar.text.style.fontSize = '3rem';
sar.text.style.fontWeight = '600';


$(".radio-content").click(function () {
   console.log("button clicked");
   $(this).find("input").prop("checked", true);
   $('.NEXT').removeAttr("disabled")
   return false;
});

function challengeFriend() {
   //createurl 
   let originurl = new URL("https://partner.kaarva.com/financialfitnesscalculator");
   originurl.searchParams.set('n', btoa(user_name));
   originurl.searchParams.set('s', btoa(quiz.finalresult));
   // let originnameandresult = "?name=" + "Rohan" + "&?score=" + finalresult;

   //appendurl
   let append = new URL('https://wa.me/')
   append.searchParams.set('text', `${user_name} just took Kaarva's Financial Fitness Test and got ${(quiz.finalresult*100/5).toFixed(0)}%. Take the free test to see how you compare with ${user_name}! ${originurl}`);
   window.open(append);
}