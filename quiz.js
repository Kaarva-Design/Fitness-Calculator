var q1 = 0;
var q2 = 0;
var q3 = 0;
var q4 = 0;
var q5 = 0;
var q6 = 0;
var q7 = 0;
var q8 = 0;
var q9 = 0;
var q10 = 0;
var finalresult = 0;
var animate = finalresult * 1 / 5;

var qcount = 1;

updateq1 = () => {
    q1 = parseFloat($('input[name="q1"]:checked').val());
    event.preventDefault();
    document.getElementById("one").style.display = "none";
    document.getElementById("two").style.display = "block";
    qcount++;   
    document.getElementById("qcount").innerHTML = qcount;
    document.getElementById("progressbar").style.backgroundSize = '10%';
    console.log("q1 submitted!");
    $('#logo').css('margin-left', '')
}

updateq2 = () => {
    q2 = parseFloat($('input[name="q2"]:checked').val());
    event.preventDefault();
    document.getElementById("two").style.display = "none";
    document.getElementById("three").style.display = "block";
    qcount++;
    document.getElementById("qcount").innerHTML = qcount;
    document.getElementById("progressbar").style.backgroundSize = '20%';
    console.log("q2 submitted!");
}

updateq3 = () => {
    q3 = parseFloat($('input[name="q3"]:checked').val());
    event.preventDefault();
    document.getElementById("three").style.display = "none";
    document.getElementById("four").style.display = "block";
    qcount++;
    document.getElementById("qcount").innerHTML = qcount;
    document.getElementById("progressbar").style.backgroundSize = '30%';
    console.log("q3 submitted!");
}

updateq4 = () => {
    q4 = parseFloat($('input[name="q4"]:checked').val());
    event.preventDefault();
    document.getElementById("four").style.display = "none";
    document.getElementById("five").style.display = "block";
    qcount++;
    document.getElementById("qcount").innerHTML = qcount;
    document.getElementById("progressbar").style.backgroundSize = '40%';
    console.log("q4 submitted!");
}

updateq5 = () => {
    q5 = parseFloat($('input[name="q5"]:checked').val());
    event.preventDefault();
    document.getElementById("five").style.display = "none";
    document.getElementById("six").style.display = "block";
    qcount++;
    document.getElementById("qcount").innerHTML = qcount;
    document.getElementById("progressbar").style.backgroundSize = '50%';
    console.log("q5 submitted!");
}

updateq6 = () => {
    q6 = parseFloat($('input[name="q6"]:checked').val());
    event.preventDefault();
    document.getElementById("six").style.display = "none";
    document.getElementById("seven").style.display = "block";
    qcount++;
    document.getElementById("qcount").innerHTML = qcount;
    document.getElementById("progressbar").style.backgroundSize = '60%';
    console.log("q6 submitted!");
}

updateq7 = () => {
    q7 = parseFloat($('input[name="q7"]:checked').val());
    event.preventDefault();
    document.getElementById("seven").style.display = "none";
    document.getElementById("eight").style.display = "block";
    qcount++;
    document.getElementById("qcount").innerHTML = qcount;
    document.getElementById("progressbar").style.backgroundSize = '70%';
    console.log("q7 submitted!");
}

updateq8 = () => {
    q8 = parseFloat($('input[name="q8"]:checked').val());
    event.preventDefault();
    document.getElementById("eight").style.display = "none";
    document.getElementById("nine").style.display = "block";
    qcount++;
    document.getElementById("qcount").innerHTML = qcount;
    document.getElementById("progressbar").style.backgroundSize = '80%';
    console.log("q8 submitted!");
}

updateq9 = () => {
    q9 = parseFloat($('input[name="q9"]:checked').val());
    event.preventDefault();
    document.getElementById("nine").style.display = "none";
    document.getElementById("ten").style.display = "block";
    qcount++;
    document.getElementById("qcount").innerHTML = qcount;
    document.getElementById("progressbar").style.backgroundSize = '90%';
    console.log("q9 submitted!");
}

animatefn = () => {
    animate = finalresult * 1 / 5

    if(finalresult > 4){
        $("#overviewtext").html("Awesome!");
        console.log("above 4");
    } else if(finalresult > 3){
        $("#overviewtext").html("Great!");
        console.log("above 3");
    } else if(finalresult > 2){
        $("#overviewtext").html("Not bad!");
        console.log("above 2");
    } else {
        $("#overviewtext").html("Poor");
        console.log("above 1");
    }

}

updateq10 = () => {
    q10 = parseFloat($('input[name="q10"]:checked').val());
    event.preventDefault();
    finalresult = (q1 + q2 + q3 + q4 + q5 + q6 + q7 + q8 + q9 + q10) * 10 / 100;
    animatefn();
    bar.animate(animate);
    // document.getElementById("result").innerHTML = finalresult;
    document.getElementById("re").style.display = "block";
    document.getElementById("head").style.display = "none";
    document.getElementById("nine").style.display = "none";
    document.getElementById("ten").style.display = "none";
    qcount = 1;
    document.getElementById("qcount").innerHTML = qcount;
    document.getElementById("progressbar").style.backgroundSize = '100%';
    console.log("q10 submitted!");
}


restart = () => {
    document.getElementById("qcount").innerHTML = qcount;
    document.getElementById("re").style.display = "none";
    document.getElementById("one").style.display = "block";
    document.getElementById("head").style.display = "block";
    finalresult = 0;
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
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = '2rem';

bar.animate(parseFloat(animate)); // Number from 0.0 to 1.0

