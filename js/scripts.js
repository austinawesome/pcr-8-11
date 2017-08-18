$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    if (!name) {
      alert("You Forgot your name, we will call you NoGo Schwaggins!");
      name = "NoGo Schwaggins";
    }
    var aCount = 0;
    var bCount = 0;
    var cCount = 0;
    var title = $("#title").val();
    var q1 = $("input:radio[name=q1]:checked").val();
    var q2 = $("input:radio[name=q2]:checked").val();
    var q3 = $("input:radio[name=q3]:checked").val();
    var q4 = $("input:radio[name=q4]:checked").val();
    var q5 = $("input:radio[name=q5]:checked").val();
    var q6 = $("input:radio[name=q6]:checked").val();
    var q7 = $("input:radio[name=q7]:checked").val();
    var q8 = $("input:radio[name=q8]:checked").val();


    $("#userAnswers input:radio:checked").each(function() {
      var pass = $(this).val();
      if (pass === 'a') {
        aCount++;
      } else if(pass === 'b') {
        bCount++;
      } else if (pass === 'c') {
        cCount++;
      }
    });
    if (aCount > bCount && aCount > cCount) {
      $(".a-answers").removeClass("hidden");
      $(".initialpage").addClass("hidden");
      var resultPath = "Java";
    } else if (bCount > cCount && aCount > cCount) {
      $(".b-answers").removeClass("hidden");
      $(".initialpage").addClass("hidden");
      var resultPath = "Ruby";
    } else {
      $(".c-answers").removeClass("hidden");
      $(".initialpage").addClass("hidden");
      var resultPath = "Css design";
      var dob = $("#born").val();
    }
    var result = "Thank you " + title + " " + name + ", your zodiac for " + dob + " along with your choice's have revealed you're best suited for " + resultPath + ". Judging by the fact you're reading the source code, perhaps you're already a teacher?";
     console.log(result);
  });
});
