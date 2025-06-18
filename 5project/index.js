let currentInput = ''; // Store the current input for calculation

        // Function to append numbers to the display
        function appendNumber(number) {
            currentInput += number;
            document.getElementById('display').value = currentInput;
        }

        // Function to append an operator (+, -, *, /) to the display
        function appendOperator(operator) {
            currentInput += ' ' + operator + ' ';
            document.getElementById('display').value = currentInput;
        }

        // Function to append a dot (.) for decimals
        function appendDot() {
            if (!currentInput.includes('.')) {
                currentInput += '.';
                document.getElementById('display').value = currentInput;
            }
        }
                                                                                                                   
        // Function to clear the display
        function clearDisplay() {
            currentInput = '';
            document.getElementById('display').value = '';
        }
        
        // Function to calculate the result
        function calculateResult() {
            try {
                currentInput = eval(currentInput).toString();
                document.getElementById('display').value = currentInput;
            } catch (error) {
                document.getElementById('display').value = 'Error';
                currentInput = '';
            }
        }