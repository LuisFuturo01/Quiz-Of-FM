document.getElementById('submit-button').addEventListener('click', function() {
  const form = document.getElementById('quiz-form');
  const formData = new FormData(form);
  let score = {
      "Albert Einstein": 0,
      "Isaac Newton": 0,
      "Marie Curie": 0,
      "Galileo Galilei": 0,
      "Stephen Hawking": 0,
      "Nikola Tesla": 0,
      "Carl Sagan": 0,
      "Richard Feynman": 0,
      "Pitágoras": 0,
      "Arquímedes": 0,
      "Euclides": 0,
      "Hipatia": 0,
      "Emmy Noether": 0
  };

  for (const entry of formData.entries()) {
      const [question, answer] = entry;
      if (question === "¿Qué te apasiona más?") {
          if (answer === "La astronomía y el universo") {
              score["Albert Einstein"]++;
              score["Carl Sagan"]++;
          } else if (answer === "La física y sus leyes") {
              score["Isaac Newton"]++;
              score["Richard Feynman"]++;
              score["Arquímedes"]++;
              score["Euclides"]++;
          } else if (answer === "La química y sus misterios") {
              score["Marie Curie"]++;
              score["Galileo Galilei"]++;
              score["Stephen Hawking"]++;
              score["Hipatia"]++;
              score["Emmy Noether"]++;
          } else if (answer === "La biología y la vida") {
              score["Galileo Galilei"]++;
              score["Stephen Hawking"]++;
              score["Hipatia"]++;
              score["Emmy Noether"]++;
          } else if (answer === "La geología y la Tierra") {
              score["Pitágoras"]++;
          } else if (answer === "Las matemáticas y la lógica") {
              score["Nikola Tesla"]++;
          }
      } else if (question === "¿Qué método de investigación te atrae más?") {
          if (answer === "Observación y análisis") {
              score["Albert Einstein"]++;
              score["Galileo Galilei"]++;
              score["Hipatia"]++;
          } else if (answer === "Experimentación y medición") {
              score["Isaac Newton"]++;
              score["Marie Curie"]++;
              score["Stephen Hawking"]++;
              score["Emmy Noether"]++;
          } else if (answer === "Simulación y modelado") {
              score["Nikola Tesla"]++;
          } else if (answer === "Recopilación de datos y análisis estadístico") {
              score["Carl Sagan"]++;
          } else if (answer === "Trabajo de campo y estudio de casos") {
              score["Galileo Galilei"]++;
              score["Pitágoras"]++;
              score["Arquímedes"]++;
              score["Euclides"]++;
          } else if (answer === "Formulación de hipótesis y resolución de problemas") {
              score["Richard Feynman"]++;
          }
      } else if (question === "¿Qué tipo de problemas te gustaría resolver?") {
          if (answer === "Los misterios del universo") {
              score["Albert Einstein"]++;
              score["Carl Sagan"]++;
              score["Galileo Galilei"]++;
              score["Stephen Hawking"]++;
              score["Nikola Tesla"]++;
          } else if (answer === "Las fuerzas de la naturaleza") {
              score["Isaac Newton"]++;
              score["Galileo Galilei"]++;
              score["Stephen Hawking"]++;
              score["Pitágoras"]++;
              score["Arquímedes"]++;
              score["Euclides"]++;
          } else if (answer === "La composición de la materia") {
              score["Marie Curie"]++;
              score["Galileo Galilei"]++;
              score["Nikola Tesla"]++;
          } else if (answer === "Los secretos de la vida") {
              score["Marie Curie"]++;
              score["Galileo Galilei"]++;
              score["Stephen Hawking"]++;
              score["Hipatia"]++;
              score["Emmy Noether"]++;
          } else if (answer === "La historia de la Tierra") {
              score["Galileo Galilei"]++;
              score["Pitágoras"]++;
              score["Arquímedes"]++;
              score["Euclides"]++;
          } else if (answer === "Los enigmas del pensamiento") {
              score["Albert Einstein"]++;
              score["Carl Sagan"]++;
              score["Stephen Hawking"]++;
              score["Nikola Tesla"]++;
              score["Emmy Noether"]++;
          }
      } else if (question === "¿Qué te motiva en tu búsqueda del conocimiento?") {
          if (answer === "La curiosidad y el deseo de comprender") {
              score["Albert Einstein"]++;
              score["Isaac Newton"]++;
              score["Marie Curie"]++;
              score["Galileo Galilei"]++;
              score["Stephen Hawking"]++;
              score["Nikola Tesla"]++;
              score["Carl Sagan"]++;
              score["Richard Feynman"]++;
              score["Arquímedes"]++;
              score["Euclides"]++;
              score["Hipatia"]++;
              score["Emmy Noether"]++;
          } else if (answer === "La búsqueda de soluciones a problemas") {
              score["Isaac Newton"]++;
              score["Marie Curie"]++;
              score["Stephen Hawking"]++;
              score["Emmy Noether"]++;
              score["Richard Feynman"]++;
              score["Arquímedes"]++;
              score["Euclides"]++;
              score["Hipatia"]++;
          } else if (answer === "El deseo de contribuir al avance científico") {
              score["Albert Einstein"]++;
              score["Isaac Newton"]++;
              score["Marie Curie"]++;
              score["Galileo Galilei"]++;
              score["Stephen Hawking"]++;
              score["Nikola Tesla"]++;
              score["Carl Sagan"]++;
              score["Richard Feynman"]++;
              score["Hipatia"]++;
              score["Emmy Noether"]++;
          } else if (answer === "La fascinación por la belleza del mundo natural") {
              score["Albert Einstein"]++;
              score["Marie Curie"]++;
              score["Galileo Galilei"]++;
              score["Stephen Hawking"]++;
              score["Nikola Tesla"]++;
              score["Carl Sagan"]++;
              score["Arquímedes"]++;
              score["Euclides"]++;
          } else if (answer === "La búsqueda de la verdad y el conocimiento objetivo") {
              score["Albert Einstein"]++;
              score["Isaac Newton"]++;
              score["Galileo Galilei"]++;
              score["Stephen Hawking"]++;
              score["Carl Sagan"]++;
              score["Richard Feynman"]++;
              score["Pitágoras"]++;
              score["Arquímedes"]++;
              score["Euclides"]++;
              score["Hipatia"]++;
          } else if (answer === "El deseo de dejar un legado en la historia") {
              score["Albert Einstein"]++;
              score["Isaac Newton"]++;
              score["Marie Curie"]++;
              score["Galileo Galilei"]++;
              score["Stephen Hawking"]++;
              score["Nikola Tesla"]++;
              score["Carl Sagan"]++;
              score["Richard Feynman"]++;
              score["Hipatia"]++;
              score["Emmy Noether"]++;
          }
      } else if (question === "¿Qué tipo de entorno de trabajo te gustaría tener?") {
          if (answer === "Un laboratorio con equipo especializado") {
              score["Marie Curie"]++;
              score["Galileo Galilei"]++;
              score["Stephen Hawking"]++;
              score["Nikola Tesla"]++;
              score["Richard Feynman"]++;
          } else if (answer === "Un campo de investigación al aire libre") {
              score["Galileo Galilei"]++;
              score["Pitágoras"]++;
              score["Arquímedes"]++;
              score["Euclides"]++;
          } else if (answer === "Un laboratorio de computación con software avanzado") {
              score["Nikola Tesla"]++;
              score["Carl Sagan"]++;
              score["Richard Feynman"]++;
          } else if (answer === "Un entorno académico con acceso a bibliotecas y recursos") {
              score["Albert Einstein"]++;
              score["Isaac Newton"]++;
              score["Stephen Hawking"]++;
              score["Carl Sagan"]++;
              score["Richard Feynman"]++;
              score["Hipatia"]++;
              score["Emmy Noether"]++;
          } else if (answer === "Un equipo de trabajo colaborativo") {
              score["Albert Einstein"]++;
              score["Marie Curie"]++;
              score["Galileo Galilei"]++;
              score["Stephen Hawking"]++;
              score["Carl Sagan"]++;
              score["Richard Feynman"]++;
              score["Hipatia"]++;
              score["Emmy Noether"]++;
          } else if (answer === "Un trabajo independiente con poca supervisión") {
              score["Isaac Newton"]++;
              score["Nikola Tesla"]++;
              score["Pitágoras"]++;
              score["Arquímedes"]++;
              score["Euclides"]++;
          }
      } else if (question === "¿Cuál de las siguientes habilidades consideras más importante para un científico?") {
          if (answer === "La capacidad de observación y análisis minucioso") {
              score["Albert Einstein"]++;
              score["Marie Curie"]++;
              score["Galileo Galilei"]++;
              score["Nikola Tesla"]++;
              score["Hipatia"]++;
          } else if (answer === "La capacidad de diseñar y realizar experimentos con precisión") {
              score["Isaac Newton"]++;
              score["Marie Curie"]++;
              score["Richard Feynman"]++;
              score["Pitágoras"]++;
              score["Arquímedes"]++;
              score["Euclides"]++;
          } else if (answer === "La habilidad para modelar y simular fenómenos complejos") {
              score["Stephen Hawking"]++;
              score["Nikola Tesla"]++;
              score["Carl Sagan"]++;
          } else if (answer === "La capacidad de recopilar, analizar e interpretar grandes conjuntos de datos") {
              score["Stephen Hawking"]++;
              score["Carl Sagan"]++;
              score["Emmy Noether"]++;
          } else if (answer === "La habilidad para trabajar en equipo y comunicarse efectivamente") {
              score["Galileo Galilei"]++;
              score["Stephen Hawking"]++;
              score["Carl Sagan"]++;
              score["Hipatia"]++;
              score["Emmy Noether"]++;
          } else if (answer === "La capacidad de pensar creativamente y resolver problemas de forma innovadora") {
              score["Albert Einstein"]++;
              score["Isaac Newton"]++;
              score["Nikola Tesla"]++;
              score["Richard Feynman"]++;
              score["Pitágoras"]++;
              score["Arquímedes"]++;
              score["Euclides"]++;
              score["Hipatia"]++;
              score["Emmy Noether"]++;
          }
      } else if (question === "¿Qué te intriga más del proceso científico?") {
          if (answer === "La formulación de hipótesis y la predicción de resultados") {
              score["Albert Einstein"]++;
              score["Carl Sagan"]++;
              score["Richard Feynman"]++;
              score["Pitágoras"]++;
              score["Arquímedes"]++;
              score["Euclides"]++;
          } else if (answer === "La realización de experimentos y la recolección de datos") {
              score["Isaac Newton"]++;
              score["Marie Curie"]++;
              score["Galileo Galilei"]++;
              score["Stephen Hawking"]++;
              score["Nikola Tesla"]++;
              score["Emmy Noether"]++;
          } else if (answer === "El análisis de datos y la búsqueda de patrones") {
              score["Stephen Hawking"]++;
              score["Carl Sagan"]++;
              score["Emmy Noether"]++;
          } else if (answer === "La comunicación de los hallazgos y la construcción de teorías") {
              score["Albert Einstein"]++;
              score["Isaac Newton"]++;
              score["Marie Curie"]++;
              score["Galileo Galilei"]++;
              score["Stephen Hawking"]++;
              score["Carl Sagan"]++;
              score["Richard Feynman"]++;
              score["Hipatia"]++;
              score["Emmy Noether"]++;
          } else if (answer === "La aplicación del conocimiento científico para resolver problemas reales") {
              score["Marie Curie"]++;
              score["Galileo Galilei"]++;
              score["Stephen Hawking"]++;
              score["Nikola Tesla"]++;
              score["Carl Sagan"]++;
              score["Richard Feynman"]++;
              score["Hipatia"]++;
          } else if (answer === "El debate y la discusión de las ideas científicas") {
              score["Albert Einstein"]++;
              score["Isaac Newton"]++;
              score["Stephen Hawking"]++;
              score["Nikola Tesla"]++;
              score["Carl Sagan"]++;
              score["Richard Feynman"]++;
              score["Pitágoras"]++;
              score["Arquímedes"]++;
              score["Euclides"]++;
          }
      } else if (question === "¿Qué te inspira de los grandes científicos?") {
          if (answer === "Su curiosidad insaciable y su búsqueda constante de conocimiento") {
              score["Albert Einstein"]++;
              score["Isaac Newton"]++;
              score["Marie Curie"]++;
              score["Galileo Galilei"]++;
              score["Stephen Hawking"]++;
              score["Nikola Tesla"]++;
              score["Carl Sagan"]++;
              score["Richard Feynman"]++;
              score["Pitágoras"]++;
              score["Arquímedes"]++;
              score["Euclides"]++;
              score["Hipatia"]++;
              score["Emmy Noether"]++;
          } else if (answer === "Su dedicación y perseverancia en la resolución de problemas complejos") {
              score["Isaac Newton"]++;
              score["Marie Curie"]++;
              score["Stephen Hawking"]++;
              score["Emmy Noether"]++;
              score["Richard Feynman"]++;
              score["Arquímedes"]++;
              score["Euclides"]++;
              score["Hipatia"]++;
          } else if (answer === "Su creatividad e ingenio para desarrollar nuevas teorías y métodos") {
              score["Albert Einstein"]++;
              score["Nikola Tesla"]++;
              score["Carl Sagan"]++;
              score["Richard Feynman"]++;
              score["Pitágoras"]++;
              score["Arquímedes"]++;
              score["Euclides"]++;
              score["Hipatia"]++;
              score["Emmy Noether"]++;
          } else if (answer === "Su capacidad de pensar de forma crítica y cuestionar lo establecido") {
              score["Albert Einstein"]++;
              score["Isaac Newton"]++;
              score["Galileo Galilei"]++;
              score["Nikola Tesla"]++;
              score["Richard Feynman"]++;
              score["Pitágoras"]++;
              score["Arquímedes"]++;
              score["Euclides"]++;
              score["Hipatia"]++;
          } else if (answer === "Su pasión por la ciencia y su deseo de contribuir al bien común") {
              score["Albert Einstein"]++;
              score["Isaac Newton"]++;
              score["Marie Curie"]++;
              score["Galileo Galilei"]++;
              score["Stephen Hawking"]++;
              score["Nikola Tesla"]++;
              score["Carl Sagan"]++;
              score["Richard Feynman"]++;
              score["Pitágoras"]++;
              score["Arquímedes"]++;
              score["Euclides"]++;
              score["Hipatia"]++;
              score["Emmy Noether"]++;
          } else if (answer === "Su capacidad de comunicar ideas complejas de manera clara y accesible") {
              score["Carl Sagan"]++;
              score["Richard Feynman"]++;
              score["Euclides"]++;
              score["Hipatia"]++;
              score["Emmy Noether"]++;
          }
      } else if (question === "¿Qué contribución te gustaría hacer al mundo a través de la ciencia?") {
          if (answer === "Ampliar nuestro conocimiento del universo y sus misterios") {
              score["Albert Einstein"]++;
              score["Carl Sagan"]++;
              score["Galileo Galilei"]++;
              score["Stephen Hawking"]++;
              score["Nikola Tesla"]++;
          } else if (answer === "Mejorar la vida de las personas y resolver problemas de salud") {
              score["Marie Curie"]++;
              score["Stephen Hawking"]++;
              score["Emmy Noether"]++;
          } else if (answer === "Desarrollar nuevas tecnologías y promover el progreso") {
              score["Nikola Tesla"]++;
              score["Carl Sagan"]++;
          } else if (answer === "Proteger el medio ambiente y luchar contra el cambio climático") {
              score["Carl Sagan"]++;
              score["Emmy Noether"]++;
          } else if (answer === "Fomentar la educación científica y la cultura STEM") {
              score["Albert Einstein"]++;
              score["Isaac Newton"]++;
              score["Marie Curie"]++;
              score["Galileo Galilei"]++;
              score["Stephen Hawking"]++;
              score["Nikola Tesla"]++;
              score["Carl Sagan"]++;
              score["Richard Feynman"]++;
              score["Hipatia"]++;
              score["Emmy Noether"]++;
          } else if (answer === "Inspirar a la próxima generación de científicos e innovadores") {
              score["Albert Einstein"]++;
              score["Isaac Newton"]++;
              score["Marie Curie"]++;
              score["Galileo Galilei"]++;
              score["Stephen Hawking"]++;
              score["Nikola Tesla"]++;
              score["Carl Sagan"]++;
              score["Richard Feynman"]++;
              score["Pitágoras"]++;
              score["Arquímedes"]++;
              score["Euclides"]++;
              score["Hipatia"]++;
              score["Emmy Noether"]++;
          }
      } else if (question === "¿Qué te parece más emocionante del futuro de la ciencia?") {
          if (answer === "La exploración espacial y la búsqueda de vida extraterrestre") {
              score["Albert Einstein"]++;
              score["Carl Sagan"]++;
              score["Galileo Galilei"]++;
              score["Stephen Hawking"]++;
          } else if (answer === "Los avances en medicina y la cura de enfermedades") {
              score["Marie Curie"]++;
              score["Stephen Hawking"]++;
          } else if (answer === "El desarrollo de la inteligencia artificial y la robótica") {
              score["Nikola Tesla"]++;
              score["Carl Sagan"]++;
          } else if (answer === "La comprensión del cerebro humano y la mente") {
              score["Stephen Hawking"]++;
          } else if (answer === "La búsqueda de nuevas fuentes de energía y la sostenibilidad") {
              score["Nikola Tesla"]++;
              score["Carl Sagan"]++;
          } else if (answer === "La integración de la ciencia con la ética y la responsabilidad social") {
              score["Albert Einstein"]++;
              score["Isaac Newton"]++;
              score["Marie Curie"]++;
              score["Galileo Galilei"]++;
              score["Stephen Hawking"]++;
              score["Nikola Tesla"]++;
              score["Carl Sagan"]++;
              score["Richard Feynman"]++;
              score["Pitágoras"]++;
              score["Arquímedes"]++;
              score["Euclides"]++;
              score["Hipatia"]++;
              score["Emmy Noether"]++;
          }
      }
  }

  let maxScore = 0;
  let scientistMatch = '';

  for (const [scientist, points] of Object.entries(score)) {
      if (points > maxScore) {
          maxScore = points;
          scientistMatch = "scientist";
      }
  }

  document.querySelector(".result").innerText = scientistMatch;
});