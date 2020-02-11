/* eslint-disable eol-last */
/* global QUESTIONS, html2canvas */

var questionNumber = 0;

$( document ).ready(function () {
  // Max score: 113, min score: 15
  var junkscore = 0, denialscore = 0, percentageResult = 0, junkmax = 113;

  function generateImageResult() {
    html2canvas(document.querySelector("#result-box")).then(canvas => {
      $("#result-image").append(canvas);
      $("#result-image").removeClass("hidden");
      $("#result-box").addClass("hidden");
      var resimg = new Image();

      resimg.src = canvas.toDataURL();
      $("#result-row").append(resimg);
      $("#result-image").addClass("hidden");
      $("#downloadImg").attr("href", canvas.toDataURL());
      $("#downloadImg").attr("download", "junkie-results.png");
    });
  }

  function updateQuestion(qid) {
    $("#test-2-question").text(QUESTIONS[qid].question);
    $(".btn-answer").addClass("hidden");
    for (var i = 0; i < QUESTIONS[qid].answers.length; i += 1) {
      $("#btn-2-" + QUESTIONS[qid].answers[i].id).removeClass("hidden");
      $("#btn-2-" + QUESTIONS[qid].answers[i].id).data("jp", QUESTIONS[qid].answers[i].junkiePoints);
      $("#btn-2-" + QUESTIONS[qid].answers[i].id).data("dp", QUESTIONS[qid].answers[i].denialPoints);
      $("#btn-2-" + QUESTIONS[qid].answers[i].id).text(QUESTIONS[qid].answers[i].answer);
    }
  }

  $(".content").addClass("hidden");
  $("#welcome").removeClass("hidden");

  $("#btn-start").click(function() {
    $("#welcome").addClass("hidden");
    $("#test-1").removeClass("hidden");
  });

  $("#btn-1-no").click(function() {
    $("#rb-perc").addClass("hidden");
    $("#rb-not").removeClass("hidden");
    $("#rb-score").addClass("hidden");
    $("#rb-text-2").text("I don't use drugs!");
    $("#result-icon").attr("src", "/img/level0.png");

    generateImageResult();

    $("#test-1").addClass("hidden");
    $("#test-end").removeClass("hidden");

    $("#result-title").text("Then I guess we're done...");
    $("#result-text").text("You scored " + junkscore + " Junkie Points. Apparently you don't use any drugs, so any other questions would be pointless. Why even take the test?");
  });

  $("#btn-1-yes").click(function() {
    $("#test-1").addClass("hidden");
    $("#test-2").removeClass("hidden");

    junkscore += 1;
    updateQuestion(questionNumber);
    $("#question-counter").text((questionNumber + 1) + " of " + QUESTIONS.length);
  });

  $(".btn-answer").click(function() {
    junkscore += $( this ).data("jp");
    denialscore += $( this ).data("dp");
    if (questionNumber >= QUESTIONS.length - 1) {
      percentageResult = (junkscore / junkmax) * 100;
      percentageResult = Math.round(percentageResult);

      if (percentageResult <= 18) {
        $("#result-icon").attr("src", "/img/level1.png");
      } else if (percentageResult > 18 && percentageResult <= 24) {
        $("#result-icon").attr("src", "/img/level2.png");
      } else if (percentageResult > 24 && percentageResult <= 32) {
        $("#result-icon").attr("src", "/img/level3.png");
      } else if (percentageResult > 32 && percentageResult <= 38) {
        $("#result-icon").attr("src", "/img/level4.png");
      } else if (percentageResult > 38 && percentageResult <= 45) {
        $("#result-icon").attr("src", "/img/level5.png");
      } else if (percentageResult > 45 && percentageResult <= 53) {
        $("#result-icon").attr("src", "/img/level6.png");
      } else if (percentageResult > 53 && percentageResult <= 61) {
        $("#result-icon").attr("src", "/img/level7.png");
      } else if (percentageResult > 61 && percentageResult <= 72) {
        $("#result-icon").attr("src", "/img/level8.png");
      } else if (percentageResult > 72 && percentageResult <= 86) {
        $("#result-icon").attr("src", "/img/level9.png");
      } else if (percentageResult > 86) {
        $("#result-icon").attr("src", "/img/level10.png");
      }

      $("#rb-not").addClass("hidden");
      $("#rb-perc").removeClass("hidden");

      $("#rb-perc").text(percentageResult + "%");
      $("#rb-score").text(junkscore);

      $("#result-title").text("The results are in!");
      $("#result-text").text("You are " + percentageResult + "% junkie.");

      generateImageResult();

      $("#test-2").addClass("hidden");
      $("#test-end").removeClass("hidden");
    } else {
      questionNumber += 1;
      $(".btn-answer").prop("disabled", true);
      $("#answers").fadeOut(150, function() {
        updateQuestion(questionNumber);
        $("#question-counter").text((questionNumber + 1) + " of " + QUESTIONS.length);
        $("#answers").fadeIn(150, function() {
          $(".btn-answer").prop("disabled", false);
        });
      });
    }
  });
});
