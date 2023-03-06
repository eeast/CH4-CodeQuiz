var createQSet = function() {
    return [{
        question: "Which of the following is correct about features of JavaScript?",
        answers: [
            "JavaScript is is complementary to and integrated with HTML.",
            "JavaScript is open and cross-platform.",
            "Both of the above.",
            "None of the above."
        ],
        correct: "Both of the above."
    }, {
        question: "True or False: You can pass an anonymous function as an argument to another function.",
        answers: [
            "true",
            "false"
        ],
        correct: "true"
    }, {
        question: "Which built-in method returns the length of the string?",
        answers: [
            "length()",
            "size()",
            "index()",
            "None of the above."
        ],
        correct: "length()"
    }, {
        question: "Which built-in method returns the calling string value converted to lower case?",
        answers: [
            "toLowerCase()",
            "toLower()",
            "changeCase(case)",
            "None of the above"
        ],
        correct: "toLowerCase()"
    }, {
        question: "Which of the following methods of a String object combines the text of two strings and returns a new string?",
        answers: [
            "add()",
            "merge()",
            "concat()",
            "append()"
        ],
        correct: "concat()"
    }, {
        question: "Which of the following methods of a String object returns the index of the first occurrence of the specified value within the calling String object?",
        answers: [
            "substr()",
            "search()",
            "lastIndexOf()",
            "indexOf()"
        ],
        correct: "indexOf()"
    }, {
        question: "Which of the following methods of a String object causes a string to be displayed in the specified color as if it were in a <font color='color'> tag?",
        answers: [
            "fixed()",
            "fontcolor()",
            "blink()",
            "bold()"
        ],
        correct: "fontcolor()"
    }, {
        question: "Which of the following methods of an Array object joins all elements of an array into a string?",
        answers: [
            "concat()",
            "pop()",
            "join()",
            "map()"
        ],
        correct: "join()"
    }, {
        question: "Which of the following function of Array object sorts the elements of an array?",
        answers: [
            "toSource()",
            "toString()",
            "unshift()",
            "sort()"
        ],
        correct: "sort()"
    }, {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: [
            "<script>",
            "<js>",
            "<javascript>",
            "<scripting>"
        ],
        correct: "<script>"
    }, {
        question: "What is the correct JavaScript syntax to change the content of the HTML element below? <p id='demo'>This is a demonstration.</p>",
        answers: [
            "document.getElementById('demo').innerHTML = 'Hello World!';",
            "document.getElementByName('p').innerHTML = 'Hello World!';",
            "document.getElement('p').innerHTML = 'Hello World!';",
            "demo.innerHTML = 'Hello World!';",
        ],
        correct: "document.getElementById('demo').innerHTML = 'Hello World!';"
    }, {
        question: "Where is the correct place to insert a JavaScript?",
        answers: [
            "The <body> section",
            "Both the <head> section and the <body> section are correct",
            "The <head> section",
            "None of the above"
        ],
        correct: "Both the <head> section and the <body> section are correct"
    }, {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        answers: [
            "<script name = 'xxx.js'>",
            "<script href = 'xxx.js'>",
            "<script url = 'xxx.js'>",
            "<script src = 'xxx.js'>"
        ],
        correct: "<script src = 'xxx.js'>"
    }, {
        question: "The external JavaScript file must contain the <script> tag.",
        answers: [
            "true",
            "false"
        ],
        correct: "false"
    }, {
        question: "How do you write 'Hello World' in an alert box?",
        answers: [
            "msg('Hello World');",
            "msgBox('Hello World');",
            "alert('Hello World');",
            "alertBox('Hello World');"
        ],
        correct: "alert('Hello World');"
    }, {
        question: "How do you create a function in JavaScript?",
        answers: [
            "function:myFunction()",
            "function = myFunction()",
            "function myFunction()",
            "def myFunction()"
        ],
        correct: "function myFunction()"
    }, {
        question: "How do you call a function named 'myFunction'?",
        answers: [
            "call function myFunction()",
            "call myFunction()",
            "myFunction()",
            "call(myFunction)"
        ],
        correct: "myFunction()"
    }, {
        question: "How do you write an IF statement in JavaScript?",
        answers: [
            "if (i == 5)",
            "if i == 5 then",
            "if i = 5",
            "if i = 5 then"
        ],
        correct: "if (i == 5)"
    }, {
        question: "How do you write an IF statement for executing some code if 'i' is NOT equal to 5?",
        answers: [
            "if i <> 5",
            "if (i <> 5)",
            "if (i != 5)",
            "if i =! 5 then"
        ],
        correct: "if (i != 5)"
    }, {
        question: "How does a WHILE loop start?",
        answers: [
            "while (i <= 10)",
            "while i = 1 to 10",
            "while (i <= 10; i++)",
            "while i less than 10"
        ],
        correct: "while (i <= 10)"
    }, {
        question: "How does a FOR loop start?",
        answers: [
            "for (i = 0; i <= 5)",
            "for (i = 0; i <= 5; i++)",
            "for i = 1 to 5",
            "for (i <= 5; i++)"
        ],
        correct: "for (i = 0; i <= 5; i++)"
    }, {
        question: "How can you add a comment in JavaScript?",
        answers: [
            "-->This is a comment-->",
            "//This is a comment",
            "`This is a comment",
            "$This is a comment"
        ],
        correct: "//This is a comment"
    }, {
        question: "How can you add a comment in JavaScript that has more than one line?",
        answers: [
            "/*This comment has<br>more than one line*/",
            "--!>This comment has<br>more than one line-->",
            "//This comment has<br>more than one line//",
            "*** This comment has<br>more than one line ***"
        ],
        correct: "/*This comment has\nmore than one line*/"
    }, {
        question: "What is the correct way to write a JavaScript array?",
        answers: [
            "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
            "var colors = ['red', 'green', 'blue']",
            "var colors = 'red', 'green', 'blue'",
            "var colors = (1:'red', 2:'green', 3:'blue')"
        ],
        correct: "var colors = ['red', 'green', 'blue']"
    }, {
        question: "How do you round the number 7.25 to the nearest integer?",
        answers: [
            "rnd(7.25)",
            "Math.rnd(7.25)",
            "round(7.25)",
            "Math.round(7.25)"
        ],
        correct: "Math.round(7.25)"
    }, {
        question: "How do you find the number with the highest value of x and y?",
        answers: [
            "top(x,y)",
            "Math.ceil(x,y)",
            "ceil(x,y)",
            "Math.max(x,y)"
        ],
        correct: "Math.max(x,y)"
    }, {
        question: "What is the correct JavaScript syntax for opening a new window called 'w2'?",
        answers: [
            "w2 = window.open('http://www.github.com/eeast');",
            "w2 = window.new('http://www.github.com/eeast');"
        ],
        correct: "w2 = window.open('http://www.github.com/eeast');"
    }, {
        question: "JavaScript is the same as Java.",
        answers: [
            "true",
            "false"
        ],
        correct: "false"
    }, {
        question: "How can you detect the client's browser name?",
        answers: [
            "browser.name",
            "navigator.appName",
            "client.navName",
            "this.getName"
        ],
        correct: "navigator.appName"
    }, {
        question: "Which event occurs when the user clicks on an HTML element?",
        answers: [
            "onmouseclick",
            "onmouseover",
            "onclick",
            "onchange"
        ],
        correct: "onclick"
    }, {
        question: "How do you declare a JavaScript variable?",
        answers: [
            "variable carName;",
            "v carName;",
            "var carName;",
            "string carName;"
        ],
        correct: "var carName;"
    }, {
        question: "Which operator is used to assign a value to a variable?",
        answers: [
            "*",
            "-",
            "=",
            "x"
        ],
        correct: "="
    }, {
        question: "What will the following code return: Boolean(10 > 9) ?",
        answers: [
            "true",
            "NaN",
            "false",
            "undefined"
        ],
        correct: "true"
    }, {
        question: "Is JavaScript case-sensitive?",
        answers: [
            "No",
            "Yes"
        ],
        correct: "Yes"
    }];
}

/* Questions taken from:
    https://www.tutorialspoint.com/javascript/javascript_online_quiz.htm
    https://www.w3schools.com/quiztest/quiztest.asp?qtest=JS
*/
