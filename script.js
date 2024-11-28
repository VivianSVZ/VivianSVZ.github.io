// Rätsel und Lösungen

document.addEventListener("DOMContentLoaded", () => {
    const riddles = {
        1: {question: "Teile 13 durch 10. Was erhältst du?",
            answer: "1,3",
            successMessage: "Ich bin wie ein Baum, der Wurzeln hat. Mein Stand ist fest, auch wenn Stürme toben. - Psalm 1,3"},
        2: {question: "Addiere 8 und 4. Teile das Ergebnis durch 1,5. Was erhältst du?",
            answer: "8,12",
            successMessage: "Ich bin das Licht, das dich in der Dunkelheit führt. - Johannes 8,12"},
        3: {question: "Eine Brücke ist 23 Meter lang. Eine Person geht in gleichmäßigen Schritten von 0,2 Metern. Wie viele Schritte benötigt sie, um die Brücke zu überqueren, wenn sie am Ende 46 Meter in beide Richtungen gelaufen ist?",
            answer: "46,2",
            successMessage: "Eine Festung, die niemals wankt – das bin ich für dich in schweren Zeiten. - Psalm 46,22"},
        4: {question: "Multipliziere 25 mit 4, dann subtrahiere 20. Addiere schließlich 10/100.",
            answer: "103,11",
            successMessage: "Meine Liebe hört niemals auf – sie bleibt, so wie der Himmel hoch ist. - Psalm 103,11"},
        5: {question: "Eine Zahl ist dreimal so groß wie 9,7. Addiere 0,23, runde auf zwei Dezimalstellen.",
            answer: "29,13",
            successMessage: "Wenn du mich suchst, wirst du mich finden, denn ich bin nicht fern. - Jeremia 29,13"},
        6: {question: "Ein LKW fährt 100 Kilometer mit 2,5 Litern Diesel. Berechne, wie viel Diesel für 124 Kilometer benötigt wird, wenn der Verbrauch konstant bleibt. Runde auf zwei Dezimalstellen.",
            answer: "40,31",
            successMessage: "Ich schenke dir Flügel wie einem Adler, damit du wieder fliegen kannst. - Jesaja 40,31"},
        7: {question: "Subtrahiere die Summe von 55/5 und 8,2 von 50. Teile das Ergebnis durch 1,1.",
            answer: "29,11",
            successMessage: "Ich habe Gedanken des Friedens und der Hoffnung für dich, nicht des Unheils. - Jeremia 29,11"},
        8: {question: "Addiere 41,7 und 8,9. Teile die Summe durch 5/4, runde auf zwei Dezimalstellen.",
            answer: "41,10",
            successMessage: "Selbst wenn alle um dich wanken, ich halte dich mit meiner starken Hand. - Jesaja 41,10"},
        9: {question: "Eine Figur hat 9 gleiche Seiten mit jeweils 1,8/2 Metern Länge. Berechne den Umfang der Figur.",
            answer: "1,9",
            successMessage: "Ich bin bei dir, egal wohin du gehst – ich lasse dich nicht allein. - Josua 1,9"},
        10: {question: "Addiere 11 und 27,8, dann teile durch 2,5.",
            answer: "11,28",
            successMessage: "Ich gebe dir Ruhe, wenn deine Seele schwer beladen ist. - Matthäus 11,28"},
        11: {question: "Subtrahiere 112,28/10 von 120. Teile das Ergebnis durch 10,9 und runde auf zwei Dezimalstellen.",
            answer: "4,14",
            successMessage: "Ich bin die Quelle des Lebens – trinke und du wirst nie wieder dürsten. - Johannes 4,14"},
        12: {question: "Addiere 4 und 10. Teile die Summe durch 1,25.",
            answer: "8,10",
            successMessage: "Die Freude am Herrn ist deine Stärke. - Nehemia 8,10"},
        13: {question: "Multipliziere 2,3 mit 10. Addiere 1/10.",
            answer: "23,1",
            successMessage: "Ich bin dein Hirte, dir wird nichts fehlen. - Psalm 23,1"},
        14: {question: "Berechne 100/33, subtrahiere 0,18 und runde auf zwei Dezimalstellen.",
            answer: "3,22",
            successMessage: "Meine Barmherzigkeit ist jeden Morgen neu – wie die Sonne, die aufgeht. - Klagelieder 3,22-23"},
        15: {question: "Addiere 4 und 2,7. Teile durch 1,35.",
            answer: "4,7",
            successMessage: "Mein Friede ist größer als all deine Sorgen – er bewahrt dein Herz. - Philipper 4,7"},
        16: {question: "Addiere 30,8 und 0,5, dann multipliziere das Ergebnis mit 1. Runde auf zwei Dezimalstellen.",
            answer: "31,3",
            successMessage: "Ich habe dich je und je geliebt, meine Treue währt ewig. - Jeremia 31,3"},
        17: {question: "Addiere 8 und 38. Teile das Ergebnis durch 1,02.",
            answer: "8,38",
            successMessage: "Nichts kann dich von meiner Liebe trennen – nicht einmal die dunkelste Nacht. - Römer 8,38-39"},
        18: {question: "Ein Auto fährt 23 Kilometer in 30 Minuten. Berechne die Distanz, die es in 60 Minuten zurücklegt, und addiere 0,11.",
            answer: "46,11",
            successMessage: "Sei still und wisse, dass ich Gott bin. - Psalm 46,11"},
        19: {question: "Addiere die ersten 5 ungeraden Zahlen, dann subtrahiere 0,89.",
            answer: "40,11",
            successMessage: "Auch wenn du Angst hast: Fürchte dich nicht, ich halte dich fest. - Jesaja 41,10"},
        20: {question: "Ein Rechteck hat die Seitenlängen 15,8 und 7. Berechne den Umfang des Rechtecks, runde auf zwei Dezimalstellen.",
            answer: "55,23",
            successMessage: "Ich trage deine Last und gebe dir neue Kraft. - Psalm 55, 23"},
        21: {question: "Addiere 118,95 und 0,155. Was ergibt das?",
            answer: "119,105",
            successMessage: "Meine Worte sind wie eine Lampe für deinen Weg – sie zeigen dir, wo es langgeht. - Psalm 119, 105"},
        22: {question: "Subtrahiere 0,45 und 41,58, dann runde auf zwei Dezimalstellen.",
            answer: "41,13",
            successMessage: "Sorge dich nicht, ich bin dein Helfer und stärke dich. - Jesaja 41,13"},
        23: {question: "Teile 317 durch 100. Runde das Ergebnis auf zwei Dezimalstellen.",
            answer: "3,17",
            successMessage: "Du bist mein geliebtes Kind, und ich habe Wohlgefallen an dir. - Matthäus 3,17"},
        24: {question: "Addiere 1,8 und 1,31. Subtrahiere 1.",
            answer: "2,11",
            successMessage: "Euch ist heute der Retter geboren – er bringt Licht und Frieden in die Welt.“ - Lukas 2,11"}
    };

// Elemente
    const doors = document.querySelectorAll(".door");
    const popup = document.getElementById("popup");
    const riddleTitle = document.getElementById("riddle-title");
    const riddleText = document.getElementById("riddle-text");
    const answerInput = document.getElementById("answer");
    const feedback = document.getElementById("feedback");
    const closePopupButton = document.getElementById("close-popup");
    const submitAnswer = document.getElementById("submit-answer");
    // Element für den Button zum Zurücksetzen des Fortschritts
    const resetButton = document.getElementById("reset-progress");

// Event-Listener für den Button
    resetButton.addEventListener("click", () => {
        // Lösche die gespeicherten Daten im localStorage
        localStorage.removeItem("openedDoors");

        // Entferne die "opened"-Klasse von allen Türen
        doors.forEach(door => {
            door.classList.remove("opened");
        });

        // Optional: Gebe eine Rückmeldung an den Benutzer
        alert("Der Fortschritt wurde zurückgesetzt.");
    });

// Fortschritt speichern
    let openedDoors = JSON.parse(localStorage.getItem("openedDoors")) || [];

// Türchen öffnen
    doors.forEach(door => {
        const day = door.dataset.day;

        // Bereits geöffnete Türchen markieren
        if (openedDoors.includes(day)) {
            door.classList.add("opened");
        }

        door.addEventListener("click", () => {
            if (!openedDoors.includes(day)) {
                openRiddle(day);
            }
        });
    });

// Popup mit Rätsel anzeigen
    function openRiddle(day) {
        console.log("openPopup wurde aufgerufen");
        const riddle = riddles[day];
        if (!riddle) return;

        riddleTitle.textContent = `Türchen ${day}`;
        riddleText.textContent = riddle.question;
        popup.classList.remove("hidden");

        // Antwort prüfen
        submitAnswer.onclick = () => checkAnswer(day, riddle.answer);
    }

// Antwort prüfen
    function checkAnswer(day, correctAnswer) {
        const userAnswer = answerInput.value.trim().toLowerCase();
        const riddle = riddles[day]; // Hole das entsprechende Rätsel

        if (userAnswer === correctAnswer.toLowerCase()) {
            feedback.textContent = riddle.successMessage;  // Zeige die individuelle Erfolgsmeldung
            feedback.style.color = "green";

            // Fortschritt speichern
            openedDoors.push(day);
            localStorage.setItem("openedDoors", JSON.stringify(openedDoors));

            // Türchen als geöffnet markieren
            document.querySelector(`.door[data-day="${day}"]`).classList.add("opened");
        } else {
            feedback.textContent = "Falsch. Versuch es nochmal!";
            feedback.style.color = "red";
        }
    }


// Popup schließen
    closePopupButton.addEventListener("click", closePopup);

    function closePopup() {
        console.log("closePopup wurde aufgerufen");
        popup.classList.add("hidden");
        answerInput.value = "";
        feedback.textContent = "";
    }

    if ("serviceWorker" in navigator) {
        navigator.serviceWorker
            .register("/service-worker.js")
            .then(() => console.log("Service Worker registriert"))
            .catch(error => console.error("Service Worker Fehler:", error));
    }

});