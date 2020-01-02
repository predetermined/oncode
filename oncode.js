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
		].reduce((properties, property) => {
			if (properties.includes(property)) return properties;

			return [
				...properties,
				property
			]
		}, [])
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
		this._base = base;
		this._language = language;
		this._currentTabOffset = 0;
		this._openedAdviserByInteraction = true;
		this._tabCharacter = "\u00a0\u00a0\u00a0\u00a0";

		this._editor = document.createElement("div");
		this._editor.setAttribute("contenteditable", "true");
		this._editor.dataset.language = this._language;
		this._editor.dataset.editor = "";
		this._editor.innerHTML = this._base.innerHTML;
		this._base.innerHTML = "";
		this._base.appendChild(this._editor);

		this._highlights = document.createElement("div");
		this._highlights.dataset.highlights = "";
		this._base.appendChild(this._highlights);

		this._adviser = { element: document.createElement("div"), opened: false };
		this._adviser.element.dataset.adviser = "";
		this._base.appendChild(this._adviser.element);

		setInterval(() => { this._colorCode(); }, 50);
		setInterval(() => { this._setOffset(); }, 250);
		this._editor.addEventListener("keyup", this._handleAdviserBehavior.bind(this), true);
		this._base.addEventListener("keydown", this._handleKeys.bind(this), true);
	}

	_getSuggestions(focusWord, { object = null, showOnlyGoodMatching = false } = {}) {
		let availableSuggestions = languages[this._editor.getAttribute("data-language")].suggestions;

		if (object && window[object] && Object.getOwnPropertyNames(window[object])) {
			availableSuggestions = [
				...Object.getOwnPropertyNames(window[object]),
				...languages[this._editor.getAttribute("data-language")].suggestions
			];
		}

		const firstLevelSuggestions = availableSuggestions.filter(suggestion => suggestion === focusWord);
		const secondLevelSuggestions = availableSuggestions.filter(suggestion => suggestion.startsWith(focusWord) && firstLevelSuggestions.indexOf(suggestion) === -1);
		const thirdLevelSuggestions = !showOnlyGoodMatching ?
			availableSuggestions.filter(suggestion => suggestion.includes(focusWord) && secondLevelSuggestions.indexOf(suggestion) === -1)
			: [];

		return [...firstLevelSuggestions, ...secondLevelSuggestions, ...thirdLevelSuggestions].length > 0 ? [...firstLevelSuggestions, ...secondLevelSuggestions, ...thirdLevelSuggestions] : ["No results"];
	}

	_insertSuggestion(selectedElement) {
		this._editor.focus();
		this._adviser.element.innerHTML = "";

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

		this._editor.innerHTML = this._editor.innerHTML.replace(focusWord + suggestion, `<span data-inserted>${suggestion}</span>`);
		range.setStartAfter(this._editor.querySelector("[data-inserted]"));
		range.setEndAfter(this._editor.querySelector("[data-inserted]"));
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

		this._editor.querySelector("[data-inserted]").outerHTML = this._editor.querySelector("[data-inserted]").innerHTML;
		setTimeout(() => { this._adviser.opened = false; }, 10);
	}

	_showSuggestions({ askedForSuggestions = true } = {}) {
		this._adviser.opened = false;
		this._openedAdviserByInteraction = askedForSuggestions;

		const position = document.getSelection().getRangeAt(0).getBoundingClientRect();
		const enteredCode = window.getSelection().getRangeAt(0).startContainer.textContent.substring(0, window.getSelection().getRangeAt(0).startOffset); // was startOffset + 1
		const object = enteredCode.match(/([a-zA-Z]*)\.(\w+)$/) && enteredCode.match(/([a-zA-Z]*)\.(\w+)$/)[0] && enteredCode.match(/([a-zA-Z]*)\.(\w+)$/)[0].split(".") ? enteredCode.match(/([a-zA-Z]*)\.(\w+)$/)[0].split(".")[0] : null;
		const focusWord = enteredCode.match(/([a-zA-Z-]*)$/g) ? enteredCode.match(/([a-zA-Z-]*)$/g)[0] : ""; // \b(\w+)$
		const suggestions = this._getSuggestions(focusWord, { object, showOnlyGoodMatching: !askedForSuggestions });

		if (position.left === 0 || position.top === 0) return;
		if ((suggestions.length > 7) && !askedForSuggestions || !askedForSuggestions && suggestions[0] === "No results") {
			this._adviser.element.innerHTML = "";
			this._adviser.opened = false;
			return;
		}

		this._adviser.opened = true;
		this._adviser.element.style.left = `${position.left}px`;
		this._adviser.element.style.top = `${position.top}px`;
		this._adviser.element.innerHTML = "";
		suggestions.map(suggestion => this._adviser.element.innerHTML += `<a data-focusword="${focusWord}">${suggestion}</a>`);
		this._adviser.element.querySelector("a").setAttribute("data-active", "");
	}

	_getCharactersBeforeCursor({ escapeElementTags = false } = {}) {
		try {
			return escapeElementTags
				? window.getSelection().getRangeAt(0).startContainer.textContent.substring(0, window.getSelection().getRangeAt(0).startOffset + 1).replace(/</g, "&lt;").replace(/>/g, "&gt;")
				: window.getSelection().getRangeAt(0).startContainer.textContent.substring(0, window.getSelection().getRangeAt(0).startOffset + 1);
		}catch(e) {}
	}

	_getCharactersBehindCursor() {
		const selection = window.getSelection();
		const range = selection.getRangeAt(0);

		const cursorPosition = document.createElement("span");
		cursorPosition.setAttribute("data-cursorposition", "");
		range.insertNode(cursorPosition);
		range.setStartAfter(cursorPosition);
		range.setEndAfter(cursorPosition);
		selection.removeAllRanges();
		selection.addRange(range);

		const charactersBehind = this._editor.innerHTML.split("</span>")[1].split("\n")
			? this._editor.innerHTML.split("</span>")[1].split("\n")[0]
			: this._editor.innerHTML.split("</span>")[1];

		const spaceOutsideInsertedSpan = document.createTextNode("");
		range.insertNode(spaceOutsideInsertedSpan);
		range.setStartAfter(spaceOutsideInsertedSpan);
		range.setEndAfter(spaceOutsideInsertedSpan);
		selection.removeAllRanges();
		selection.addRange(range);

		this._editor.querySelector("[data-cursorposition]").outerHTML = this._editor.querySelector("[data-cursorposition]").innerHTML;
		return charactersBehind;
	}

	_colorCode() {
		let editorHTML = this._editor.innerText.replace(/</g, "&lt;").replace(/>/g, "&gt;");

		languages[this._editor.getAttribute("data-language")].colors.map(colorInformation => {
			const replacement = colorInformation.regex.replacement || "$1";

			editorHTML = editorHTML.replace(new RegExp(colorInformation.regex.string, colorInformation.regex.flags), `<span class="${colorInformation.class}">${replacement}</span>`)
		});

		this._highlights.innerHTML = `${editorHTML}`;
	}

	_handleAdviserBehavior(e) {
		if (e.code.includes("Key") && !e.ctrlKey) {
			this._showSuggestions({ askedForSuggestions: false });
		}else if (!this._openedAdviserByInteraction && e.code !== "ArrowDown" && e.code !== "ArrowUp") {
			this._adviser.element.innerHTML = "";
			this._adviser.opened = false;
		}
	}

	_handleEditorSpecificKeys(e) {
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
				if (!e.shiftKey || this._editor.getAttribute("data-language") !== "html") return;

				const selection = window.getSelection();
				const range = selection.getRangeAt(0);
				const tag = this._getCharactersBeforeCursor().match("\n") && !this._getCharactersBeforeCursor().endsWith("\n")
					? this._getCharactersBeforeCursor().split("\n")[this._getCharactersBeforeCursor().split("\n").length - 1].match(/<([a-zA-Z0-9]*)/)[0].replace(/[  <>]/g, "")
					: this._getCharactersBeforeCursor().match("\n")
						? this._getCharactersBeforeCursor().split("\n")[this._getCharactersBeforeCursor().split("\n").length - 2].match(/<([a-zA-Z0-9]*)/)[0].replace(/[  <>]/g, "")
						: this._getCharactersBeforeCursor().match(/<([a-zA-Z0-9]*)/)[0].replace(/[  <>]/g, "");
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

					this._editor.innerHTML = this._editor.innerHTML.replace("&nbsp;&nbsp;&nbsp;&nbsp;<span data-cursorposition", "<span data-cursorposition");
					range.setStartBefore(this._editor.querySelector("[data-cursorposition]"));
					range.setEndBefore(this._editor.querySelector("[data-cursorposition]"));
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

					this._editor.querySelector("[data-cursorposition]").outerHTML = this._editor.querySelector("[data-cursorposition]").innerHTML;
					return;
				}

				document.execCommand("insertHTML", false, this._tabCharacter);
				break;
			}
			case " ": {
				if (!e.ctrlKey || e.code !== "Space") return;

				this._showSuggestions();
				break;
			}
			case "ArrowDown": {
				this._currentTabOffset = 0;
				break;
			}
			case "ArrowUp": {
				this._currentTabOffset = 0;
				break;
			}
			case "Enter": {
				e.preventDefault();

				const selection = document.getSelection();
				const range = selection.getRangeAt(0);
				let offset = this._tabCharacter.repeat(this._currentTabOffset);

				if (this._getCharactersBeforeCursor().match(/(\(([a-zA-Z]*)|\(\((.*)) => {$/)) {
					const charactersBehind = this._getCharactersBehindCursor();
					document.execCommand("insertHTML", false, `\n<span data-spacebetween></span>\n${offset}});REPLACE-`);

					this._editor.innerHTML = this._editor.innerHTML.replace(`REPLACE-${charactersBehind}`, "");
					range.setStartAfter(this._editor.querySelector("[data-spacebetween]"));
					range.setEndAfter(this._editor.querySelector("[data-spacebetween]"));

					const spaceOutsideInsertedSpan = document.createTextNode(this._tabCharacter + offset);
					this._editor.insertBefore(spaceOutsideInsertedSpan, this._editor.querySelector("[data-spacebetween]"));
					range.setStartAfter(spaceOutsideInsertedSpan);
					range.setEndAfter(spaceOutsideInsertedSpan);
					selection.removeAllRanges();
					selection.addRange(range);
					document.getSelection().modify("move", "backward", "character");
					document.getSelection().modify("move", "forward", "character");

					this._editor.querySelector("[data-spacebetween]").outerHTML = this._editor.querySelector("[data-spacebetween]").innerHTML;
					return;
				}

				if (
					this._getCharactersBeforeCursor().endsWith("{")
					|| this._getCharactersBeforeCursor().endsWith("[")
					|| this._getCharactersBeforeCursor().match(/<([a-zA-Z]*?)>$/)
				) {
					const charactersBehind = this._getCharactersBehindCursor();
					document.execCommand("insertHTML", false, `\n<span data-spacebetween></span>\n${offset}${charactersBehind}REPLACE-`);

					this._editor.innerHTML = this._editor.innerHTML.replace(`REPLACE-${charactersBehind}`, "");
					range.setStartAfter(this._editor.querySelector("[data-spacebetween]"));
					range.setEndAfter(this._editor.querySelector("[data-spacebetween]"));

					const spaceOutsideInsertedSpan = document.createTextNode(this._tabCharacter + offset);
					this._editor.insertBefore(spaceOutsideInsertedSpan, this._editor.querySelector("[data-spacebetween]"));
					range.setStartAfter(spaceOutsideInsertedSpan);
					range.setEndAfter(spaceOutsideInsertedSpan);
					selection.removeAllRanges();
					selection.addRange(range);
					document.getSelection().modify("move", "backward", "character");
					document.getSelection().modify("move", "forward", "character");

					this._editor.querySelector("[data-spacebetween]").outerHTML = this._editor.querySelector("[data-spacebetween]").innerHTML;
					return;
				}

				document.execCommand("insertHTML", false, `\n${offset}`);
			}
		}
	}

	_handleKeys(e) {
		let suggestionKeyPressed = false;

		switch(e.code) {
			case "Enter": {
				if (!this._adviser.opened) break;
				e.preventDefault();

				this._insertSuggestion(this._adviser.element.querySelector("[data-active]"));
				suggestionKeyPressed = true;
				return;
			}
			case "Tab": {
				if (!this._adviser.opened) break;
				e.preventDefault();

				this._insertSuggestion(this._adviser.element.querySelector("[data-active]"));
				suggestionKeyPressed = true;
				return;
			}
			case "ArrowUp": {
				if (!this._adviser.opened) break;
				e.preventDefault();

				const currentActiveItem = Array.from(this._adviser.element.children).indexOf(this._adviser.element.querySelector("a[data-active]"));

				if (!this._adviser.element.children[currentActiveItem - 1]) return;

				this._adviser.element.querySelectorAll("a").forEach(element => element.removeAttribute("data-active"));
				this._adviser.element.children[currentActiveItem - 1].setAttribute("data-active", "");
				suggestionKeyPressed = true;
				return;
			}
			case "ArrowDown": {
				if (!this._adviser.opened) break;
				e.preventDefault();

				const currentActiveItem = Array.from(this._adviser.element.children).indexOf(this._adviser.element.querySelector("a[data-active]"));

				if (!this._adviser.element.children[currentActiveItem + 1]) return;

				this._adviser.element.querySelectorAll("a").forEach(element => element.removeAttribute("data-active"));
				this._adviser.element.children[currentActiveItem + 1].setAttribute("data-active", "");
				suggestionKeyPressed = true;
				return;
			}
		}

		if (!suggestionKeyPressed && this._openedAdviserByInteraction) {
			this._adviser.element.innerHTML = "";
			this._adviser.opened = false;
		}

		if ((!suggestionKeyPressed && e.target.dataset.adviser) || e.target.hasAttribute("data-editor"))
			this._handleEditorSpecificKeys(e);
	}

	_setOffset() {
		if (!this._getCharactersBeforeCursor()) return;

		const escapedCharactersBeforeCursor = this._getCharactersBeforeCursor({ escapeElementTags: true }).replace(/([()\[\]"'`])/g, "\\$1");
		const offset = !this._getCharactersBeforeCursor().startsWith("\n") && !this._getCharactersBeforeCursor().match("&nbsp;") && this._editor.innerHTML.match(new RegExp(`\n(.*)${escapedCharactersBeforeCursor}`))
			? this._editor.innerHTML.match(new RegExp(`\n(.*)${escapedCharactersBeforeCursor}`))[0].replace(/&nbsp;/g, " ")
			: this._getCharactersBeforeCursor().match("\n") && !this._getCharactersBeforeCursor().endsWith("\n")
				? this._getCharactersBeforeCursor().split("\n")[this._getCharactersBeforeCursor().split("\n").length - 1].replace(/[a-zA-Z{}\[\]()](.*)/g, "")
				: this._getCharactersBeforeCursor().match("\n")
					? this._getCharactersBeforeCursor().split("\n")[this._getCharactersBeforeCursor().split("\n").length - 2].replace(/[a-zA-Z{}\[\]()](.*)/g, "")
					: this._getCharactersBeforeCursor().replace(/[a-zA-Z{}\[\]()](.*)/g, "");

		this._currentTabOffset = offset.match(/\s{4}/g) ? offset.match(/\s{4}/g).length : 0;
	}
}
