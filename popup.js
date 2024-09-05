// popup.js

// Function to analyze the code and determine complexity
function analyzeCode() {
    const code = document.getElementById('codeInput').value;
    
    // Initialize complexity to O(1)
    let complexity = "O(1)";
    
    // Check for single loops
    if (/for\s*\(.*;.*;.*\)/.test(code) || /while\s*\(.*\)/.test(code)) {
        complexity = "O(n)";
        
        // Check for nested loops
        if (/for\s*\(.*;.*;.*\)\s*{[\s\S]*?for\s*\(.*;.*;.*\)/.test(code) ||
            /while\s*\(.*\)\s*{[\s\S]*?for\s*\(.*;.*;.*\)/.test(code) ||
            /for\s*\(.*;.*;.*\)\s*{[\s\S]*?while\s*\(.*\)/.test(code) ||
            /while\s*\(.*\)\s*{[\s\S]*?while\s*\(.*\)/.test(code)) {
            complexity = "O(n^2)";
        }
    }
    
    // Display the result in the popup
    document.getElementById('result').innerText = "Time Complexity: " + complexity;
}

// Add an event listener to the button
document.getElementById('analyzeButton').addEventListener('click', function() {
    // Optionally show "Analyzing..." message before starting the analysis
    document.getElementById('result').innerText = 'Analyzing...';
    
    // Call the analyzeCode function to perform the analysis
    analyzeCode();
});
