<?php

function calculateResult($answers) {
  // Array containing information about each scientist
  $scientists = [
    "a" => ["Albert Einstein", "astronomía", "universo"],
    "b" => ["Isaac Newton", "física", "leyes"],
    "c" => ["Marie Curie", "química", "misterios"],
    "d" => ["Charles Darwin", "biología", "vida"],
    "e" => ["James Hutton", "geología", "Tierra"],
    "f" => ["Pitágoras", "matemáticas", "lógica"],
  ];

  // Array containing keywords for each question
  $questions = [
    "question1" => ["astronomía", "física", "química", "biología", "geología", "matemáticas"],
    "question2" => ["observación", "experimentación", "simulación", "análisis de datos", "trabajo de campo", "formulación de hipótesis"],
    // ... (code for remaining questions)
  ];

  // Ensure $answers is an array
  if (!is_array($answers)) {
    $answers = [];
  }

  // Calculate score for each scientist
  $scores = [];
  foreach ($scientists as $key => $scientist) {
    $score = 0;

    // Validate $scientist[2] is an array before iterating
    if (is_array($scientist[2])) {
      foreach ($scientist[2] as $keyword) {
        if (in_array($keyword, $answers)) {
          $score++;
        }
      }
    }

    $scores[$key] = $score;
  }

  // Find scientist with highest score
  $best_match = "";
  $max_score = 0;
  foreach ($scores as $key => $score) {
    if ($score > $max_score) {
      $max_score = $score;
      $best_match = $key;
    }
  }

  // Check if scientist exists and return "unique" if no match
  return isset($scientists[$best_match]) && $max_score > 0 ? $scientists[$best_match][0] : null;
}

?>
