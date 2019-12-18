const languages = {
    js: {
        colors: [
            { regex: { string: "(var|const|let|if|else|document|window|do|forEach|for|return|switch|try|catch|function|continue|debugger|break|while|true|null|undefined|false|new|await|async)(?=( |;|\\.|{|}|\\=|\\(|\\)))(?!(| )<\\/(.*)>)", flags: "gi", },
                class: "__general" },
            { regex: { string: "('([a-zA-Z\\.,!\"§$%&/()-=?\\[\\]#` ]*?)')", flags: "gi", },
                class: "__strings" },
            { regex: { string: "(`([a-zA-Z\\.,!\"§$%&/()-=?\\[\\]#` ]*?)`)", flags: "gi", },
                class: "__strings" },
            { regex: { string: "(\"([a-zA-Z\\.,!\"§$%&/()-=?\\[\\]#` ]*?)\")", flags: "gi", },
                class: "__strings" },
            { regex: { string: "((\\.([a-zA-Z0-9]*))\\()", flags: "gi", },
                class: "__functions" },
            { regex: { string: "([\\(\\)])", flags: "gi", },
                class: "__functions" },
            { regex: { string: "([{}\\[\\]])", flags: "g", },
                class: "__brackets" },
            { regex: { string: "(\\/\\*((.|\\n|\\r)*)\\*\\/|\\/\\/(.*))", flags: "g", },
                class: "__comments" }],
        suggestions: ["const", "let", "location", "querySelector", "querySelectorAll", "getElementById", "getElementsByClassName", "getElementsByTagName", "map", "innerHTML",
            "forEach", "for", "replace", "toLowerCase", "toUpperCase", "indexOf", "length", "includes", "trim", "split", "valueOf", "filter", "find", "innerText", "body",
            "join", "value", ...Object.getOwnPropertyNames(window)]
    },
    html: {
        colors: [{ regex: { string: "([a-z]*=(.*?)(?=&gt;))", flags: "g", },
            class: "__attributes" },
            { regex: { string: "(&lt;(\/|)[a-zA-Z0-9]*)", flags: "g" },
                class: "__innerBrackets" },
            { regex: { string: "(&gt;)", flags: "g", },
                class: "__lesserOrGreaterBrackets" },
            { regex: { string: "(&lt;)", flags: "g", },
                class: "__lesserOrGreaterBrackets" }],
        suggestions: ["html", "body", "p", "span"]
    },
    css: {
        colors: [{ regex: { string: "([{}])", flags: "g", },
            class: "__brackets" },
            { regex: { string: "([a-zA-Z0-9-]*:)", flags: "g", },
                class: "__selectors" },
            { regex: { string: "(#[a-zA-Z0-9]*)(?=(;| |\\r|\\n))", flags: "g", },
                class: "__numbers" }],
        suggestions: ["align-content", "align-items", "align-self", "all", "animation", "animation-delay", "animation-direction", "animation-duration",
            "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "backface-visibility",
            "background", "background-attachment", "background-blend-mode", "background-clip", "background-color", "background-image", "background-origin",
            "background-position", "background-repeat", "background-size", "border", "border-bottom", "border-bottom-color", "border-bottom-left-radius",
            "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-image", "border-image-outset",
            "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-left", "border-left-color", "border-left-style",
            "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-style",
            "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-width", "bottom",
            "box-decoration-break", "box-shadow", "box-sizing", "caption-side", "caret-color", "@charset", "clear", "clip", "color", "column-count", "column-fill",
            "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "column-span", "column-width", "columns", "content", "counter-increment",
            "counter-reset", "cursor", "direction", "display", "empty-cells", "filter", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap",
            "float", "font", "@font-face", "font-family", "font-kerning", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "grid",
            "grid-area", "grid-auto-columns", "grid-auto-flow", "grid-auto-rows", "grid-column", "grid-column-end", "grid-column-gap", "grid-column-start", "grid-gap", "grid-row",
            "grid-row-end", "grid-row-gap", "grid-row-start", "grid-template", "grid-template-areas", "grid-template-columns", "grid-template-rows", "hanging-punctuation", "height", "hyphens", "@import", "isolation", "justify-content", "@keyframes", "left", "letter-spacing", "line-height", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-bottom", "margin-left", "margin-right", "margin-top", "max-height", "max-width", "@media", "min-height", "min-width", "mix-blend-mode", "object-fit", "object-position", "opacity", "order", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-x", "overflow-y", "padding", "padding-bottom", "padding-left", "padding-right", "padding-top", "page-break-after", "page-break-before", "page-break-inside", "perspective", "perspective-origin", "pointer-events", "position", "quotes", "resize", "right", "scroll-behavior", "tab-size", "table-layout", "text-align", "text-align-last", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-style", "text-indent", "text-justify", "text-overflow", "text-shadow", "text-transform", "top", "transform", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "unicode-bidi", "direction", "user-select", "vertical-align", "visibility", "white-space", "width", "word-break", "word-spacing", "word-wrap", "writing-mode", "z-index"]
    }
};

const TAB_CHARACTER = "\u00a0\u00a0\u00a0\u00a0";

const highlights = document.querySelector("[data-highlights]");
const editor = document.querySelector("[data-editor]");
const adviser = { element: document.querySelector("[data-adviser]"), opened: false };
let currentTabOffset = 0;
let openedAdviserByInteraction = true;

function getSuggestions(focusWord, { object = null, showOnlyGoodMatching = false } = {}) {
    let availableSuggestions = languages[editor.getAttribute("data-language")].suggestions;

    if (object && window[object] && Object.getOwnPropertyNames(window[object])) {
        availableSuggestions = [
            ...Object.getOwnPropertyNames(window[object]),
            ...languages[editor.getAttribute("data-language")].suggestions
        ];
    }

    const firstLevelSuggestions = availableSuggestions.filter(suggestion => suggestion === focusWord);
    const secondLevelSuggestions = availableSuggestions.filter(suggestion => suggestion.startsWith(focusWord) && firstLevelSuggestions.indexOf(suggestion) === -1);
    const thirdLevelSuggestions = !showOnlyGoodMatching ?
        availableSuggestions.filter(suggestion => suggestion.includes(focusWord) && secondLevelSuggestions.indexOf(suggestion) === -1)
        : [];

    return [...firstLevelSuggestions, ...secondLevelSuggestions, ...thirdLevelSuggestions].length > 0 ? [...firstLevelSuggestions, ...secondLevelSuggestions, ...thirdLevelSuggestions] : ["No results"];
}

function insertSuggestion(selectedElement) {
    document.querySelector("[data-editor]").focus();
    adviser.element.innerHTML = "";

    const suggestion = selectedElement.innerText;
    const focusWord = selectedElement.dataset.focusword;

    if (suggestion === "No results") return;

    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const node = document.createTextNode(suggestion);

    range.insertNode(node);
    range.setStartAfter(node);
    range.setEndAfter(node);
    selection.removeAllRanges();
    selection.addRange(range);

    editor.innerHTML = editor.innerHTML.replace(focusWord + suggestion, `<span data-inserted>${suggestion}</span>`);
    range.setStartAfter(editor.querySelector("[data-inserted]"));
    range.setEndAfter(editor.querySelector("[data-inserted]"));
    selection.removeAllRanges();
    selection.addRange(range);

    /*
        The whitespace is needed because the cursor would otherwise be in the data-inserted span
        whose outerHTML is getting replace so the cursor would have no location.
        I will use this technique multiple times in this script, if there's a better way (of course there is), please feel free to commit :)
     */
    const spaceOutsideInsertedSpan = document.createTextNode("");
    range.insertNode(spaceOutsideInsertedSpan);
    range.setStartAfter(spaceOutsideInsertedSpan);
    range.setEndAfter(spaceOutsideInsertedSpan);
    selection.removeAllRanges();
    selection.addRange(range);

    editor.querySelector("[data-inserted]").outerHTML = editor.querySelector("[data-inserted]").innerHTML;
    setTimeout(() => { adviser.opened = false; }, 10);
}

function showSuggestions({ askedForSuggestions = true } = {}) {
    adviser.opened = false;
    openedAdviserByInteraction = askedForSuggestions;

    const position = document.getSelection().getRangeAt(0).getBoundingClientRect();
    const enteredCode = window.getSelection().getRangeAt(0).startContainer.textContent.substring(0, window.getSelection().getRangeAt(0).startOffset); // was startOffset + 1
    const object = enteredCode.match(/([a-zA-Z]*)\.(\w+)$/) && enteredCode.match(/([a-zA-Z]*)\.(\w+)$/)[0] && enteredCode.match(/([a-zA-Z]*)\.(\w+)$/)[0].split(".") ? enteredCode.match(/([a-zA-Z]*)\.(\w+)$/)[0].split(".")[0] : null;
    const focusWord = enteredCode.match(/([a-zA-Z-]*)$/g) ? enteredCode.match(/([a-zA-Z-]*)$/g)[0] : ""; // \b(\w+)$
    const suggestions = getSuggestions(focusWord, { object, showOnlyGoodMatching: !askedForSuggestions });

    if (position.left === 0 || position.top === 0) return;
    if ((suggestions.length > 7) && !askedForSuggestions || !askedForSuggestions && suggestions[0] === "No results") {
        adviser.element.innerHTML = "";
        adviser.opened = false;
        return;
    }

    adviser.opened = true;
    adviser.element.style.left = `${position.left}px`;
    adviser.element.style.top = `${position.top}px`;
    adviser.element.innerHTML = "";
    suggestions.map(suggestion => adviser.element.innerHTML += `<a data-focusword="${focusWord}">${suggestion}</a>`);
    adviser.element.querySelector("a").setAttribute("data-active", "");
}

function getCharactersBeforeCursor({ escapeElementTags = false } = {}) {
    try {
        return escapeElementTags
            ? window.getSelection().getRangeAt(0).startContainer.textContent.substring(0, window.getSelection().getRangeAt(0).startOffset + 1).replace(/</g, "&lt;").replace(/>/g, "&gt;")
            : window.getSelection().getRangeAt(0).startContainer.textContent.substring(0, window.getSelection().getRangeAt(0).startOffset + 1);
    }catch(e) {}
}

function getCharactersBehindCursor() {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);

    const cursorPosition = document.createElement("span");
    cursorPosition.setAttribute("data-cursorposition", "");
    range.insertNode(cursorPosition);
    range.setStartAfter(cursorPosition);
    range.setEndAfter(cursorPosition);
    selection.removeAllRanges();
    selection.addRange(range);

    const charactersBehind = editor.innerHTML.split("</span>")[1].split("\n")
        ? editor.innerHTML.split("</span>")[1].split("\n")[0]
        : editor.innerHTML.split("</span>")[1];

    const spaceOutsideInsertedSpan = document.createTextNode("");
    range.insertNode(spaceOutsideInsertedSpan);
    range.setStartAfter(spaceOutsideInsertedSpan);
    range.setEndAfter(spaceOutsideInsertedSpan);
    selection.removeAllRanges();
    selection.addRange(range);

    editor.querySelector("[data-cursorposition]").outerHTML = editor.querySelector("[data-cursorposition]").innerHTML;
    return charactersBehind;
}

function colorCode() {
    let editorHTML = editor.innerText.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    languages[editor.getAttribute("data-language")].colors.map(colorInformation => {
        const replacement = colorInformation.regex.replacement || "$1";

        editorHTML = editorHTML.replace(new RegExp(colorInformation.regex.string, colorInformation.regex.flags), `<span class="${colorInformation.class}">${replacement}</span>`)
    });

    highlights.innerHTML = `${editorHTML}`;
}

function checkKeyActions(e) {
    if (e.code.includes("Key") && !e.ctrlKey) {
        showSuggestions({ askedForSuggestions: false });
    }else if (!openedAdviserByInteraction && e.code !== "ArrowDown" && e.code !== "ArrowUp") {
        adviser.element.innerHTML = "";
        adviser.opened = false;
    }
}

async function handleKeys(e) {
    if (adviser.opened && openedAdviserByInteraction) return;

    switch(e.key) {
        case "{": {
            const selection = window.getSelection();
            const range = selection.getRangeAt(0);

            range.insertNode(document.createTextNode("}"));
            document.getSelection().modify("move", "backward", "character");
            break;
        }
        case "[": {
            const selection = window.getSelection();
            const range = selection.getRangeAt(0);

            range.insertNode(document.createTextNode("]"));
            document.getSelection().modify("move", "backward", "character");
            break;
        }
        case "(":
            document.execCommand("insertHTML", false, ")");
            document.getSelection().modify("move", "backward", "character");
            break;
        case "`":
            document.execCommand("insertHTML", false, "`");
            document.getSelection().modify("move", "backward", "character");
            break;
        case "'":
            document.execCommand("insertHTML", false, "'");
            document.getSelection().modify("move", "backward", "character");
            break;
        case `"`:
            document.execCommand("insertHTML", false, `"`);
            document.getSelection().modify("move", "backward", "character");
            break;
        case `>`:
            if (!e.shiftKey || editor.getAttribute("data-language") !== "html") return;

            const selection = window.getSelection();
            const range = selection.getRangeAt(0);
            const tag = getCharactersBeforeCursor().match("\n") && !getCharactersBeforeCursor().endsWith("\n")
                ? getCharactersBeforeCursor().split("\n")[getCharactersBeforeCursor().split("\n").length - 1].match(/<([a-zA-Z0-9]*)/)[0].replace(/[  <>]/g, "")
                : getCharactersBeforeCursor().match("\n")
                    ? getCharactersBeforeCursor().split("\n")[getCharactersBeforeCursor().split("\n").length - 2].match(/<([a-zA-Z0-9]*)/)[0].replace(/[  <>]/g, "")
                    : getCharactersBeforeCursor().match(/<([a-zA-Z0-9]*)/)[0].replace(/[  <>]/g, "");
            const closingTag = document.createTextNode(`</${tag}>`);

            range.insertNode(closingTag);
            range.setStartBefore(closingTag);
            range.setEndBefore(closingTag);
            selection.removeAllRanges();
            selection.addRange(range);
            document.getSelection().modify("move", "backward", "character");
            document.getSelection().modify("move", "forward", "character");
            break;
    }

    if (adviser.opened) return;

    switch(e.code) {
        case "Space":
            if (!e.ctrlKey) return;

            showSuggestions();
            break;
        case "Tab":
            e.preventDefault();

            const selection = document.getSelection();
            const range = selection.getRangeAt(0);

            if (e.shiftKey) {
                const cursorPosition = document.createElement("span");
                cursorPosition.setAttribute("data-cursorposition", "");
                range.insertNode(cursorPosition);
                range.setStartAfter(cursorPosition);
                range.setEndAfter(cursorPosition);
                selection.removeAllRanges();
                selection.addRange(range);

                editor.innerHTML = editor.innerHTML.replace("&nbsp;&nbsp;&nbsp;&nbsp;<span data-cursorposition", "<span data-cursorposition");
                range.setStartBefore(editor.querySelector("[data-cursorposition]"));
                range.setEndBefore(editor.querySelector("[data-cursorposition]"));
                selection.removeAllRanges();
                selection.addRange(range);

                const spaceOutsideInsertedSpan = document.createTextNode("");
                range.insertNode(spaceOutsideInsertedSpan);
                range.setStartAfter(spaceOutsideInsertedSpan);
                range.setEndAfter(spaceOutsideInsertedSpan);
                selection.removeAllRanges();
                selection.addRange(range);

                document.getSelection().modify("move", "backward", "character");
                document.getSelection().modify("move", "forward", "character");

                editor.querySelector("[data-cursorposition]").outerHTML = editor.querySelector("[data-cursorposition]").innerHTML;
                return;
            }

            document.execCommand("insertHTML", false, TAB_CHARACTER);
            break;
        case "ArrowDown": {
            currentTabOffset = 0;
            break;
        }
        case "ArrowUp":
            currentTabOffset = 0;
            break;
        case "Enter": {
            e.preventDefault();

            const selection = document.getSelection();
            const range = selection.getRangeAt(0);
            let offset = TAB_CHARACTER.repeat(currentTabOffset);

            if (getCharactersBeforeCursor().match(/(\(([a-zA-Z]*)|\(\((.*)) => {$/)) {
                const charactersBehind = getCharactersBehindCursor();
                document.execCommand("insertHTML", false, `\n<span data-spacebetween></span>\n${offset}});REPLACE-`);

                editor.innerHTML = editor.innerHTML.replace(`REPLACE-${charactersBehind}`, "");
                range.setStartAfter(editor.querySelector("[data-spacebetween]"));
                range.setEndAfter(editor.querySelector("[data-spacebetween]"));

                const spaceOutsideInsertedSpan = document.createTextNode(TAB_CHARACTER + offset);
                editor.insertBefore(spaceOutsideInsertedSpan, editor.querySelector("[data-spacebetween]"));
                range.setStartAfter(spaceOutsideInsertedSpan);
                range.setEndAfter(spaceOutsideInsertedSpan);
                selection.removeAllRanges();
                selection.addRange(range);
                document.getSelection().modify("move", "backward", "character");
                document.getSelection().modify("move", "forward", "character");

                editor.querySelector("[data-spacebetween]").outerHTML = editor.querySelector("[data-spacebetween]").innerHTML;
                return;
            }

            if (
                getCharactersBeforeCursor().endsWith("{")
                || getCharactersBeforeCursor().endsWith("[")
                || getCharactersBeforeCursor().match(/<([a-zA-Z]*?)>$/)
            ) {
                const charactersBehind = getCharactersBehindCursor();
                document.execCommand("insertHTML", false, `\n<span data-spacebetween></span>\n${offset}${charactersBehind}REPLACE-`);

                editor.innerHTML = editor.innerHTML.replace(`REPLACE-${charactersBehind}`, "");
                range.setStartAfter(editor.querySelector("[data-spacebetween]"));
                range.setEndAfter(editor.querySelector("[data-spacebetween]"));

                const spaceOutsideInsertedSpan = document.createTextNode(TAB_CHARACTER + offset);
                editor.insertBefore(spaceOutsideInsertedSpan, editor.querySelector("[data-spacebetween]"));
                range.setStartAfter(spaceOutsideInsertedSpan);
                range.setEndAfter(spaceOutsideInsertedSpan);
                selection.removeAllRanges();
                selection.addRange(range);
                document.getSelection().modify("move", "backward", "character");
                document.getSelection().modify("move", "forward", "character");

                editor.querySelector("[data-spacebetween]").outerHTML = editor.querySelector("[data-spacebetween]").innerHTML;
                return;
            }

            document.execCommand("insertHTML", false, `\n${offset}`);
        }
    }
}

function handleGlobalKeys(e) {
    let suggestionKeyPressed = false;

    switch(e.code) {
        case "Enter": {
            if (!adviser.opened) return;
            e.preventDefault();

            insertSuggestion(adviser.element.querySelector("[data-active]"));
            suggestionKeyPressed = true;
            break;
        }
        case "Tab": {
            if (!adviser.opened) return;
            e.preventDefault();

            insertSuggestion(adviser.element.querySelector("[data-active]"));
            suggestionKeyPressed = true;
            break;
        }
        case "ArrowUp": {
            if (!adviser.opened) return;
            e.preventDefault();

            const currentActiveItem = Array.from(adviser.element.children).indexOf(adviser.element.querySelector("a[data-active]"));

            if (!adviser.element.children[currentActiveItem - 1]) return;

            adviser.element.querySelectorAll("a").forEach(element => element.removeAttribute("data-active"));
            adviser.element.children[currentActiveItem - 1].setAttribute("data-active", "");
            suggestionKeyPressed = true;
            break;
        }
        case "ArrowDown": {
            if (!adviser.opened) return;
            e.preventDefault();

            const currentActiveItem = Array.from(adviser.element.children).indexOf(adviser.element.querySelector("a[data-active]"));

            if (!adviser.element.children[currentActiveItem + 1]) return;

            adviser.element.querySelectorAll("a").forEach(element => element.removeAttribute("data-active"));
            adviser.element.children[currentActiveItem + 1].setAttribute("data-active", "");
            suggestionKeyPressed = true;
            break;
        }
    }

    if (!suggestionKeyPressed && openedAdviserByInteraction) {
        adviser.element.innerHTML = "";
        adviser.opened = false;
    }
}

function setOffset() {
    if (!getCharactersBeforeCursor()) return;

    const escapedCharactersBeforeCursor = getCharactersBeforeCursor({ escapeElementTags: true }).replace(/([()\[\]"'`])/g, "\\$1");
    const offset = !getCharactersBeforeCursor().startsWith("\n") && !getCharactersBeforeCursor().match("&nbsp;") && editor.innerHTML.match(new RegExp(`\n(.*)${escapedCharactersBeforeCursor}`))
        ? editor.innerHTML.match(new RegExp(`\n(.*)${escapedCharactersBeforeCursor}`))[0].replace(/&nbsp;/g, " ")
        : getCharactersBeforeCursor().match("\n") && !getCharactersBeforeCursor().endsWith("\n")
            ? getCharactersBeforeCursor().split("\n")[getCharactersBeforeCursor().split("\n").length - 1].replace(/[a-zA-Z{}\[\]()](.*)/g, "")
            : getCharactersBeforeCursor().match("\n")
                ? getCharactersBeforeCursor().split("\n")[getCharactersBeforeCursor().split("\n").length - 2].replace(/[a-zA-Z{}\[\]()](.*)/g, "")
                : getCharactersBeforeCursor().replace(/[a-zA-Z{}\[\]()](.*)/g, "");

    currentTabOffset = offset.match(/\s{4}/g) ? offset.match(/\s{4}/g).length : 0;
}

setInterval(() => { colorCode(); }, 50);
setInterval(() => { setOffset(); }, 250);
editor.addEventListener("keyup", checkKeyActions, true);
editor.addEventListener("keydown", handleKeys, true);
document.addEventListener("keydown", handleGlobalKeys, true);
