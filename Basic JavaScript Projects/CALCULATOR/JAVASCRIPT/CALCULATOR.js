//creates object to track values//
const Calculator = {
    Display_Value: '0',
    //holds first operand for expressions//
    First_Operand: null,
    //checks if seconf operand has been inputted//
    Wait_Second_Operand: false,
    //holds operator//
    operator: null,
};

//modified values each time button is clicked//
function Input_Digit(digit) {
    const {Display_Value, Wait_Second_Operand } = Calculator;
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else { 
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}

//decimal points//
function Input_Decimal(dot) {
    //ensure accidental decimal point click doesn't cause bugs//
    if (Calculator.Wait_Second_Operand === true) return;
    if(!Calculator.Display_Value.includes(dot)) {
        //if display_value doesn't have decimal point, this adds one//
        Calculator.Display_Value += dot;
    }
}

//operators//
function Handle_Operator(Next_Operator) {
    const {First_Operand, Display_Value, operator} = Calculator;
    const Value_of_Input = parseFloat(Display_Value);
    //checks is operator already exists and if Wait_Second_Operand is true, then updates operator and exists function//
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) {
        const Value_Now = First_Operand || 0;
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);
        result = Number(result).toFixed (9);
        result = (result *1).toString();
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation = {
    '/' : (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*' : (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+' : (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-' : (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=' : (First_Operand, Second_Operand) => Second_Operand
};

//resets calculator//
function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

//updates calculator screen with contents of Display_Value//
function Update_Display() {
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display();
//monitors button clicks//
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    const { target } = event;
    if (!target.matches('button')) {
        return;
    }
    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }
    //makes sure AC clears all input//
    if (target.classList.contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
        return;
    }
    Input_Digit(target.value);
    Update_Display();
})

