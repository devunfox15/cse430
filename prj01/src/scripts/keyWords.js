document.addEventListener("DOMContentLoaded", function () {
    var words = [
        "I am passionate about web development",
        "My major is software engineering",
        "I am a Software Engineer",
        "I am a Full-Stack Developer",
        "I am a Problem Solver",
        "I am a Team Leader",
        "I am a Creative Thinker",
        "I Speak Spanish",
        "I code in 5 coding languages"
    ];
    var keyWordsElement = document.querySelector(".KeyWords");
    if (!keyWordsElement) return;
    var currentIndex = 0; // Track the current word in the array
    var periodCount = 0; // Number of periods to display after the word
    var periodInterval = undefined;
    // Function to change the word
    function changeWord() {
        // Update the content of the KeyWords element with the current word
        keyWordsElement.textContent = words[currentIndex];
        // Move to the next word and loop back to the start if needed
        currentIndex = (currentIndex + 1) % words.length;
        // Reset the period count and start showing periods
        periodCount = 0;
        startPeriodEffect();
    }
    // Function to start showing periods after each word
    function startPeriodEffect() {
        if (periodInterval !== undefined) {
            clearInterval(periodInterval); // Only clear if an interval exists
        }
        periodInterval = window.setInterval(function () {
            if (periodCount < 3) {
                periodCount++;
                var periods = ""; // Manually construct the period string
                for (var i = 0; i < periodCount; i++) {
                    periods += ".";
                }
                keyWordsElement.textContent = words[currentIndex] + periods;
            } else {
                clearInterval(periodInterval); // Stop when reaching 3 periods
                periodInterval = undefined; // Reset to undefined
            }
        }, 1000);
    }
    // Start the initial word change and period effect
    changeWord();
    // Continue changing the word every 4 seconds
    setInterval(changeWord, 4000);
});
