document.addEventListener('DOMContentLoaded', function () {
    var words = [
        "I am passionate about web development",
        "My major is software engineering",
        "I am a Software Engineer",
        "I am a Full-Stack Developer",
        "I am a Problem Solver",
        "I am a Team Leader",
        "I am a Creative Thinker",
        "I Speak Spanish",
        "I code in 5 coding languages",
        ""
    ];
    var keyWordsElement = document.querySelector('.KeyWords');
    if (!keyWordsElement)
        return; // Make sure the element exists
    var currentIndex = 0; // Start with the first word
    var periodCount = 0; // Keep track of how many periods to display
    var periodInterval;
    // Function to change the word
    function changeWord() {
        // Update the content of the KeyWords element with the current word and reset periods
        keyWordsElement.textContent = words[currentIndex];
        // Move to the next word, and loop back to the start if at the end
        currentIndex = (currentIndex + 1) % words.length;
        if (currentIndex === 0) {
            currentIndex = 1;
        }
        // Reset the period count and start showing periods
        periodCount = 0;
        startPeriodEffect();
    }
    // Function to start showing periods
    function startPeriodEffect() {
        clearInterval(periodInterval); // Clear any previous period intervals
        periodInterval = window.setInterval(function () {
            if (periodCount < 3) {
                periodCount++; // Add periods
                function repeatString(str, count) {
                    return new Array(count + 1).join(str);
                }
                keyWordsElement.textContent = words[currentIndex - 1] + repeatString('.', periodCount);
            }
            else {
                clearInterval(periodInterval); // Stop when reaching 3 periods
            }
        }, 1000);
    }
    changeWord();
    setInterval(changeWord, 4000);
});
