const languages = {
	js: {
		colors: [
			{ regex: { string: "(var|const|let|if|else|document|window|do|forEach|for|return|switch|try|catch|function|continue|debugger|break|while|true|null|undefined|false|new|await|async|of)(?=( |;|\\.|{|}|\\=|\\(|\\)))(?!(| )<\\/(.*)>)", flags: "gi", },
				class: "||general" },
			{ regex: { string: "('(([a-zA-Z\\.,!\"§$%&/()-=?\\[\\]#`_ ])*?)')", flags: "gi", },
				class: "||strings" },
			{ regex: { string: "(`([a-zA-Z\\.,!\"§$%&/()-=?\\[\\]#`_ ]*?)`)", flags: "gi", },
				class: "||strings" },
			{ regex: { string: "(\"([a-zA-Z\\.,!\"§$%&/()-=?\\[\\]#`_ ]*?)\")", flags: "gi", },
				class: "||strings" },
			{ regex: { string: "((\\.([a-zA-Z0-9]*))\\()", flags: "gi", },
				class: "||functions" },
			{ regex: { string: "([\\(\\)])", flags: "gi", },
				class: "||functions" },
			{ regex: { string: "([{}\\[\\]])", flags: "g", },
				class: "||brackets" },
			{ regex: { string: "(\\/\\*((.|\\n|\\r)*)\\*\\/|\\/\\/(.*))", flags: "g", },
				class: "||comments" }],
		suggestions: [
			"const", "let", "for", "white", "of", "new",
			"document", "Document", "String", "Number", "Array", "Object",
			...Object.getOwnPropertyNames(Document.prototype).filter(property => !property.includes("queryCommand")),
			...Object.getOwnPropertyNames(HTMLElement.prototype),
			...Object.getOwnPropertyNames(String.prototype),
			...Object.getOwnPropertyNames(Number.prototype),
			...Object.getOwnPropertyNames(Array.prototype),
			...Object.getOwnPropertyNames(Object.prototype)
		]
	},
	html: {
		colors: [{ regex: { string: "([a-z]*=(.*?)(?=&gt;))", flags: "g", },
			class: "||attributes" },
			{ regex: { string: "(&lt;(\/|)[a-zA-Z0-9]*)", flags: "g" },
				class: "||innerBrackets" },
			{ regex: { string: "(&gt;)", flags: "g", },
				class: "||lesserOrGreaterBrackets" },
			{ regex: { string: "(&lt;)", flags: "g", },
				class: "||lesserOrGreaterBrackets" }],
		suggestions: ["html", "body", "p", "span"]
	},
	css: {
		colors: [{ regex: { string: "([{}])", flags: "g", },
			class: "||brackets" },
			{ regex: { string: "([a-zA-Z0-9-]*:)", flags: "g", },
				class: "||selectors" },
			{ regex: { string: "(#[a-zA-Z0-9]*)(?=(;| |\\r|\\n))", flags: "g", },
				class: "||numbers" }],
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

class OnCode {
	constructor(base, language) {
		this.base = base;
		this.language = language;
		this.currentTabOffset = 0;
		this.openedAdviserByInteraction = true;
		this.tabCharacter = "\u00a0\u00a0\u00a0\u00a0";

		this.editor = document.createElement("div");
		this.editor.setAttribute("contenteditable", "true");
		this.editor.dataset.language = this.language;
		this.editor.dataset.editor = "";
		this.editor.innerHTML = this.base.innerHTML;
		this.base.innerHTML = "";
		this.base.appendChild(this.editor);

		this.highlights = document.createElement("div");
		this.highlights.dataset.highlights = "";
		this.base.appendChild(this.highlights);

		this.adviser = { element: document.createElement("div"), opened: false };
		this.adviser.element.dataset.adviser = "";
		this.base.appendChild(this.adviser.element);

		setInterval(() => { this.colorCode(); }, 50);
		setInterval(() => { this.setOffset(); }, 250);
		this.editor.addEventListener("keyup", this.handleAdviserBehavior.bind(this), true);
		this.base.addEventListener("keydown", this.handleKeys.bind(this), true);
	}

	getSuggestions(focusWord, { object = null, showOnlyGoodMatching = false } = {}) {
		let availableSuggestions = languages[this.editor.getAttribute("data-language")].suggestions;

		if (object && window[object] && Object.getOwnPropertyNames(window[object])) {
			availableSuggestions = [
				...Object.getOwnPropertyNames(window[object]),
				...languages[this.editor.getAttribute("data-language")].suggestions
			];
		}

		const firstLevelSuggestions = availableSuggestions.filter(suggestion => suggestion === focusWord);
		const secondLevelSuggestions = availableSuggestions.filter(suggestion => suggestion.startsWith(focusWord) && firstLevelSuggestions.indexOf(suggestion) === -1);
		const thirdLevelSuggestions = !showOnlyGoodMatching ?
			availableSuggestions.filter(suggestion => suggestion.includes(focusWord) && secondLevelSuggestions.indexOf(suggestion) === -1)
			: [];

		return [...firstLevelSuggestions, ...secondLevelSuggestions, ...thirdLevelSuggestions].length > 0 ? [...firstLevelSuggestions, ...secondLevelSuggestions, ...thirdLevelSuggestions] : ["No results"];
	}

	insertSuggestion(selectedElement) {
		this.editor.focus();
		this.adviser.element.innerHTML = "";

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

		this.editor.innerHTML = this.editor.innerHTML.replace(focusWord + suggestion, `<span data-inserted>${suggestion}</span>`);
		range.setStartAfter(this.editor.querySelector("[data-inserted]"));
		range.setEndAfter(this.editor.querySelector("[data-inserted]"));
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

		this.editor.querySelector("[data-inserted]").outerHTML = this.editor.querySelector("[data-inserted]").innerHTML;
		setTimeout(() => { this.adviser.opened = false; }, 10);
	}

	showSuggestions({ askedForSuggestions = true } = {}) {
		this.adviser.opened = false;
		this.openedAdviserByInteraction = askedForSuggestions;

		const position = document.getSelection().getRangeAt(0).getBoundingClientRect();
		const enteredCode = window.getSelection().getRangeAt(0).startContainer.textContent.substring(0, window.getSelection().getRangeAt(0).startOffset); // was startOffset + 1
		const object = enteredCode.match(/([a-zA-Z]*)\.(\w+)$/) && enteredCode.match(/([a-zA-Z]*)\.(\w+)$/)[0] && enteredCode.match(/([a-zA-Z]*)\.(\w+)$/)[0].split(".") ? enteredCode.match(/([a-zA-Z]*)\.(\w+)$/)[0].split(".")[0] : null;
		const focusWord = enteredCode.match(/([a-zA-Z-]*)$/g) ? enteredCode.match(/([a-zA-Z-]*)$/g)[0] : ""; // \b(\w+)$
		const suggestions = this.getSuggestions(focusWord, { object, showOnlyGoodMatching: !askedForSuggestions });

		if (position.left === 0 || position.top === 0) return;
		if ((suggestions.length > 7) && !askedForSuggestions || !askedForSuggestions && suggestions[0] === "No results") {
			this.adviser.element.innerHTML = "";
			this.adviser.opened = false;
			return;
		}

		this.adviser.opened = true;
		this.adviser.element.style.left = `${position.left}px`;
		this.adviser.element.style.top = `${position.top}px`;
		this.adviser.element.innerHTML = "";
		suggestions.map(suggestion => this.adviser.element.innerHTML += `<a data-focusword="${focusWord}">${suggestion}</a>`);
		this.adviser.element.querySelector("a").setAttribute("data-active", "");
	}

	getCharactersBeforeCursor({ escapeElementTags = false } = {}) {
		try {
			return escapeElementTags
				? window.getSelection().getRangeAt(0).startContainer.textContent.substring(0, window.getSelection().getRangeAt(0).startOffset + 1).replace(/</g, "&lt;").replace(/>/g, "&gt;")
				: window.getSelection().getRangeAt(0).startContainer.textContent.substring(0, window.getSelection().getRangeAt(0).startOffset + 1);
		}catch(e) {}
	}

	getCharactersBehindCursor() {
		const selection = window.getSelection();
		const range = selection.getRangeAt(0);

		const cursorPosition = document.createElement("span");
		cursorPosition.setAttribute("data-cursorposition", "");
		range.insertNode(cursorPosition);
		range.setStartAfter(cursorPosition);
		range.setEndAfter(cursorPosition);
		selection.removeAllRanges();
		selection.addRange(range);

		const charactersBehind = this.editor.innerHTML.split("</span>")[1].split("\n")
			? this.editor.innerHTML.split("</span>")[1].split("\n")[0]
			: this.editor.innerHTML.split("</span>")[1];

		const spaceOutsideInsertedSpan = document.createTextNode("");
		range.insertNode(spaceOutsideInsertedSpan);
		range.setStartAfter(spaceOutsideInsertedSpan);
		range.setEndAfter(spaceOutsideInsertedSpan);
		selection.removeAllRanges();
		selection.addRange(range);

		this.editor.querySelector("[data-cursorposition]").outerHTML = this.editor.querySelector("[data-cursorposition]").innerHTML;
		return charactersBehind;
	}

	colorCode() {
		let editorHTML = this.editor.innerText.replace(/</g, "&lt;").replace(/>/g, "&gt;");

		languages[this.editor.getAttribute("data-language")].colors.map(colorInformation => {
			const replacement = colorInformation.regex.replacement || "$1";

			editorHTML = editorHTML.replace(new RegExp(colorInformation.regex.string, colorInformation.regex.flags), `<span class="${colorInformation.class}">${replacement}</span>`)
		});

		this.highlights.innerHTML = `${editorHTML}`;
	}

	handleAdviserBehavior(e) {
		if (e.code.includes("Key") && !e.ctrlKey) {
			this.showSuggestions({ askedForSuggestions: false });
		}else if (!this.openedAdviserByInteraction && e.code !== "ArrowDown" && e.code !== "ArrowUp") {
			this.adviser.element.innerHTML = "";
			this.adviser.opened = false;
		}
	}

	handleEditorSpecificKeys(e) {
		switch (e.key) {
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
			case "(": {
				document.execCommand("insertHTML", false, ")");
				document.getSelection().modify("move", "backward", "character");
				break;
			}
			case "`": {
				document.execCommand("insertHTML", false, "`");
				document.getSelection().modify("move", "backward", "character");
				break;
			}
			case "'": {
				document.execCommand("insertHTML", false, "'");
				document.getSelection().modify("move", "backward", "character");
				break;
			}
			case `"`: {
				document.execCommand("insertHTML", false, `"`);
				document.getSelection().modify("move", "backward", "character");
				break;
			}
			case ">": {
				if (!e.shiftKey || this.editor.getAttribute("data-language") !== "html") return;

				const selection = window.getSelection();
				const range = selection.getRangeAt(0);
				const tag = this.getCharactersBeforeCursor().match("\n") && !this.getCharactersBeforeCursor().endsWith("\n")
					? this.getCharactersBeforeCursor().split("\n")[this.getCharactersBeforeCursor().split("\n").length - 1].match(/<([a-zA-Z0-9]*)/)[0].replace(/[  <>]/g, "")
					: this.getCharactersBeforeCursor().match("\n")
						? this.getCharactersBeforeCursor().split("\n")[this.getCharactersBeforeCursor().split("\n").length - 2].match(/<([a-zA-Z0-9]*)/)[0].replace(/[  <>]/g, "")
						: this.getCharactersBeforeCursor().match(/<([a-zA-Z0-9]*)/)[0].replace(/[  <>]/g, "");
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
			case "Tab": {
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

					this.editor.innerHTML = this.editor.innerHTML.replace("&nbsp;&nbsp;&nbsp;&nbsp;<span data-cursorposition", "<span data-cursorposition");
					range.setStartBefore(this.editor.querySelector("[data-cursorposition]"));
					range.setEndBefore(this.editor.querySelector("[data-cursorposition]"));
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

					this.editor.querySelector("[data-cursorposition]").outerHTML = this.editor.querySelector("[data-cursorposition]").innerHTML;
					return;
				}

				document.execCommand("insertHTML", false, this.tabCharacter);
				break;
			}
			case " ": {
				if (!e.ctrlKey || e.code !== "Space") return;

				this.showSuggestions();
				break;
			}
			case "ArrowDown": {
				this.currentTabOffset = 0;
				break;
			}
			case "ArrowUp": {
				this.currentTabOffset = 0;
				break;
			}
			case "Enter": {
				e.preventDefault();

				const selection = document.getSelection();
				const range = selection.getRangeAt(0);
				let offset = this.tabCharacter.repeat(this.currentTabOffset);

				if (this.getCharactersBeforeCursor().match(/(\(([a-zA-Z]*)|\(\((.*)) => {$/)) {
					const charactersBehind = this.getCharactersBehindCursor();
					document.execCommand("insertHTML", false, `\n<span data-spacebetween></span>\n${offset}});REPLACE-`);

					this.editor.innerHTML = this.editor.innerHTML.replace(`REPLACE-${charactersBehind}`, "");
					range.setStartAfter(this.editor.querySelector("[data-spacebetween]"));
					range.setEndAfter(this.editor.querySelector("[data-spacebetween]"));

					const spaceOutsideInsertedSpan = document.createTextNode(this.tabCharacter + offset);
					this.editor.insertBefore(spaceOutsideInsertedSpan, this.editor.querySelector("[data-spacebetween]"));
					range.setStartAfter(spaceOutsideInsertedSpan);
					range.setEndAfter(spaceOutsideInsertedSpan);
					selection.removeAllRanges();
					selection.addRange(range);
					document.getSelection().modify("move", "backward", "character");
					document.getSelection().modify("move", "forward", "character");

					this.editor.querySelector("[data-spacebetween]").outerHTML = this.editor.querySelector("[data-spacebetween]").innerHTML;
					return;
				}

				if (
					this.getCharactersBeforeCursor().endsWith("{")
					|| this.getCharactersBeforeCursor().endsWith("[")
					|| this.getCharactersBeforeCursor().match(/<([a-zA-Z]*?)>$/)
				) {
					const charactersBehind = this.getCharactersBehindCursor();
					document.execCommand("insertHTML", false, `\n<span data-spacebetween></span>\n${offset}${charactersBehind}REPLACE-`);

					this.editor.innerHTML = this.editor.innerHTML.replace(`REPLACE-${charactersBehind}`, "");
					range.setStartAfter(this.editor.querySelector("[data-spacebetween]"));
					range.setEndAfter(this.editor.querySelector("[data-spacebetween]"));

					const spaceOutsideInsertedSpan = document.createTextNode(this.tabCharacter + offset);
					this.editor.insertBefore(spaceOutsideInsertedSpan, this.editor.querySelector("[data-spacebetween]"));
					range.setStartAfter(spaceOutsideInsertedSpan);
					range.setEndAfter(spaceOutsideInsertedSpan);
					selection.removeAllRanges();
					selection.addRange(range);
					document.getSelection().modify("move", "backward", "character");
					document.getSelection().modify("move", "forward", "character");

					this.editor.querySelector("[data-spacebetween]").outerHTML = this.editor.querySelector("[data-spacebetween]").innerHTML;
					return;
				}

				document.execCommand("insertHTML", false, `\n${offset}`);
			}
		}
	}

	handleKeys(e) {
		let suggestionKeyPressed = false;

		switch(e.code) {
			case "Enter": {
				if (!this.adviser.opened) break;
				e.preventDefault();

				this.insertSuggestion(this.adviser.element.querySelector("[data-active]"));
				suggestionKeyPressed = true;
				return;
			}
			case "Tab": {
				if (!this.adviser.opened) break;
				e.preventDefault();

				this.insertSuggestion(this.adviser.element.querySelector("[data-active]"));
				suggestionKeyPressed = true;
				return;
			}
			case "ArrowUp": {
				if (!this.adviser.opened) break;
				e.preventDefault();

				const currentActiveItem = Array.from(this.adviser.element.children).indexOf(this.adviser.element.querySelector("a[data-active]"));

				if (!this.adviser.element.children[currentActiveItem - 1]) return;

				this.adviser.element.querySelectorAll("a").forEach(element => element.removeAttribute("data-active"));
				this.adviser.element.children[currentActiveItem - 1].setAttribute("data-active", "");
				suggestionKeyPressed = true;
				return;
			}
			case "ArrowDown": {
				if (!this.adviser.opened) break;
				e.preventDefault();

				const currentActiveItem = Array.from(this.adviser.element.children).indexOf(this.adviser.element.querySelector("a[data-active]"));

				if (!this.adviser.element.children[currentActiveItem + 1]) return;

				this.adviser.element.querySelectorAll("a").forEach(element => element.removeAttribute("data-active"));
				this.adviser.element.children[currentActiveItem + 1].setAttribute("data-active", "");
				suggestionKeyPressed = true;
				return;
			}
		}

		if (!suggestionKeyPressed && this.openedAdviserByInteraction) {
			this.adviser.element.innerHTML = "";
			this.adviser.opened = false;
		}

		if ((!suggestionKeyPressed && e.target.dataset.adviser) || e.target.hasAttribute("data-editor"))
			this.handleEditorSpecificKeys(e);
	}

	setOffset() {
		if (!this.getCharactersBeforeCursor()) return;

		const escapedCharactersBeforeCursor = this.getCharactersBeforeCursor({ escapeElementTags: true }).replace(/([()\[\]"'`])/g, "\\$1");
		const offset = !this.getCharactersBeforeCursor().startsWith("\n") && !this.getCharactersBeforeCursor().match("&nbsp;") && this.editor.innerHTML.match(new RegExp(`\n(.*)${escapedCharactersBeforeCursor}`))
			? this.editor.innerHTML.match(new RegExp(`\n(.*)${escapedCharactersBeforeCursor}`))[0].replace(/&nbsp;/g, " ")
			: this.getCharactersBeforeCursor().match("\n") && !this.getCharactersBeforeCursor().endsWith("\n")
				? this.getCharactersBeforeCursor().split("\n")[this.getCharactersBeforeCursor().split("\n").length - 1].replace(/[a-zA-Z{}\[\]()](.*)/g, "")
				: this.getCharactersBeforeCursor().match("\n")
					? this.getCharactersBeforeCursor().split("\n")[this.getCharactersBeforeCursor().split("\n").length - 2].replace(/[a-zA-Z{}\[\]()](.*)/g, "")
					: this.getCharactersBeforeCursor().replace(/[a-zA-Z{}\[\]()](.*)/g, "");

		this.currentTabOffset = offset.match(/\s{4}/g) ? offset.match(/\s{4}/g).length : 0;
	}
}
