<?php

// Include the calculateResult function from its file
require_once('calculateResult.php');

// Process form data
$answers = $_POST;

// Calculate results using the function
$scientist = calculateResult($answers);

// Display results
?>

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Resultados del Test de Personalidad Científica</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="results-container">
    <h1>Resultados del Test</h1>
    <p>¡Felicidades por completar el test!</p>
    <?php if ($scientist !== null) : ?>
      <p>Basándonos en tus respuestas, el científico con el que mejor te identificas es:</p>
      <h2><?php echo $scientist; ?></h2>
      <p>**Especialidad:** <?php echo $scientists[$scientist][1]; ?></p>
      <p>**Interés principal:** <?php echo $scientists[$scientist][2]; ?></p>
      <p>**Descripción:**</p>
      <p>Aquí puedes leer más sobre <?php echo $scientist; ?> y su legado.</p>
      <p><a href="https://es.wikipedia.org/wiki/<?php echo $scientist; ?>">Wikipedia - <?php echo $scientist; ?></a></p>
    <?php else : ?>
      <p><b>¡Eres único y diferente!</b> Tus respuestas no se ajustan perfectamente a ningún científico en particular, lo que significa que posees una combinación singular de intereses y habilidades.</p>
      <p>Explora las diferentes áreas de la ciencia y descubre tu propia pasión. ¡El mundo necesita mentes curiosas como la tuya!</p>
    <?php endif; ?>
  </div>
</body>
</html>

