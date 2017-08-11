$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    if (!name) {
      alert("Look's Like you forgot your name");
    };
    var title = $("#title").val();
       q1 = $("input:radio[name=q1]:checked").val();
       q2 = $("input:radio[name=q2]:checked").val();
       q3 = $("input:radio[name=q3]:checked").val();
       q4 = $("input:radio[name=q4]:checked").val();
       q5 = $("input:radio[name=q5]:checked").val();
       q6 = $("input:radio[name=q6]:checked").val();
       q7 = $("input:radio[name=q7]:checked").val();
       q8 = $("input:radio[name=q8]:checked").val();



    var dob = $("#born").val();

    var result = "thank you "+title+" "+name+", your zodiac for "+dob+" along with your choice's have revealed you're best suited for "+pathname+"." ;
    $("#output").text(result);
  });
});
