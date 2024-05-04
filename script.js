// Typing effect script
const text = "Welcome to The Hacker Lounge";
let index = 0;

function type() {
    document.getElementById("typing-effect").textContent = text.slice(0, index++);
    if (index <= text.length) {
        setTimeout(type, 50); // Faster typing speed (lower delay)
    } else {
        runTerminalCommand();
    }
}

type();

// Terminal animation
function runTerminalCommand() {
    const terminalOutput = document.getElementById("terminal-output");
    const ctrlAltText = "Welcome to The Hacker Lounge, where tech enthusiasts and hackers unite to explore the depths of cyberspace, unravel mysteries of code, and push the boundaries of innovation.";

    typeCommand(ctrlAltText, "ctrl-alt-text", () => {
        typeAspects(aspects, "aspects-text");
        typeNewText();
    });

    function typeCommand(command, elementId, onComplete) {
        let i = 0;
        const intervalId = setInterval(() => {
            if (i < command.length) {
                document.getElementById(elementId).textContent += command.charAt(i);
                i++;
            } else {
                clearInterval(intervalId);
                onComplete();
            }
        }, 100); // Faster typing speed (lower delay)
    }

    function typeAspects(aspects, elementId) {
        let aspectIndex = 0;
        const aspectInterval = setInterval(() => {
            if (aspectIndex < aspects.length) {
                document.getElementById(elementId).innerHTML +=
                    "<br>&nbsp;&nbsp;&bull; " + aspects[aspectIndex];
                aspectIndex++;
            } else {
                clearInterval(aspectInterval);
            }
        }, 1000); // Slower typing speed
    }

    function typeNewText() {
        const newText = "";
        let index = 0;
        const terminalText = document.getElementById("terminal-text");
        const typingInterval = setInterval(() => {
            if (index < newText.length) {
                terminalText.textContent += newText.charAt(index);
                index++;
            } else {
                clearInterval(typingInterval);
            }
        }, 50); // Faster typing speed (lower delay)
    }
}
