var url1 = "https://VCio3KwNlDSBTVWkCKDi4Ojt-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/sk1bx/element@1dd0b99d2004b84795f2745a5eb3468deb1c38a4/ts2.xml&container=ig";
var url2 = "https://AeAjHAHiVpRkwZeZZbsZn9Fv-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/sk1bx/version@0d8fb9c7430567ed0900902593eee6ba2ba8d297/ts3.xml&container=ig";
var url3 = "https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/RobiFet/workflow@60b41ef8c9123ae41b86bf04c9b39e1a5713aaa9/bin/gs.xml&container=ig";

// Declare window variables for each game
var win1, win2, win3;

// Function to open the first game
function openGame1() {
    if (win1) {
        win1.focus();
    } else {
        win1 = window.open();
        win1.document.body.style.margin = '0';
        win1.document.body.style.height = '100vh';

        var iframe1 = win1.document.createElement('iframe');
        iframe1.style.border = 'none';
        iframe1.style.width = '100%';
        iframe1.style.height = '100%';
        iframe1.style.margin = '0';
        iframe1.src = url1;

        win1.document.body.appendChild(iframe1);

        var interval = setInterval(function() {
            if (win1.closed) {
                clearInterval(interval);
                win1 = undefined;
            }
        }, 500);
    }
}

// Function to open the second game
function openGame2() {
    if (win2) {
        win2.focus();
    } else {
        win2 = window.open();
        win2.document.body.style.margin = '0';
        win2.document.body.style.height = '100vh';

        var iframe2 = win2.document.createElement('iframe');
        iframe2.style.border = 'none';
        iframe2.style.width = '100%';
        iframe2.style.height = '100%';
        iframe2.style.margin = '0';
        iframe2.src = url2;

        win2.document.body.appendChild(iframe2);

        var interval = setInterval(function() {
            if (win2.closed) {
                clearInterval(interval);
                win2 = undefined;
            }
        }, 500);
    }
}

// Function to open the third game
function openGame3() {
    if (win3) {
        win3.focus();
    } else {
        win3 = window.open();
        win3.document.body.style.margin = '0';
        win3.document.body.style.height = '100vh';

        var iframe3 = win3.document.createElement('iframe');
        iframe3.style.border = 'none';
        iframe3.style.width = '100%';
        iframe3.style.height = '100%';
        iframe3.style.margin = '0';
        iframe3.src = url3;

        win3.document.body.appendChild(iframe3);

        var interval = setInterval(function() {
            if (win3.closed) {
                clearInterval(interval);
                win3 = undefined;
            }
        }, 500);
    }
}

// Event listeners for buttons
document.getElementById('button1').onclick = openGame1;
document.getElementById('button2').onclick = openGame2;
document.getElementById('button3').onclick = openGame3;