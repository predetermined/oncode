interface Languages {
	[key: string]: Language
}

interface Language {
	colors: object[],
	suggestions: string[],
	variableDeclarers?: string[]
}

interface Selection {
	[key: string]: any;
	modify: (action, direction, unit) => void;
}

const languages: Languages = {
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
			...Object.getOwnPropertyNames(Document.prototype).filter((property: string) => !property.includes("queryCommand")),
			...Object.getOwnPropertyNames(HTMLElement.prototype),
			...Object.getOwnPropertyNames(String.prototype),
			...Object.getOwnPropertyNames(Number.prototype),
			...Object.getOwnPropertyNames(Array.prototype),
			...Object.getOwnPropertyNames(Object.prototype)
		],
		variableDeclarers: ["const", "let", "var"]
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
		suggestions: ["a", "abbr", "acronym", "address", "applet", "area", "article", "aside", "audio", "b", "base", "basefont", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "font", "footer", "form", "frame", "frameset", "h1 to h6", "head", "header", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "link", "main", "map", "mark", "meta", "meter", "nav", "noframes", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strike", "strong", "style", "sub", "summary", "sup", "svg", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "tt", "u", "ul", "var", "video", "wbr", "accept", "accept-charset", "accesskey", "action", "align", "alt", "async", "autocomplete", "autofocus", "autoplay", "autosave", "bgcolor", "border", "buffered", "challenge", "charset", "checked", "cite", "class", "code", "codebase", "color", "cols", "colspan", "content", "contenteditable", "contextmenu", "controls", "coords", "crossorigin", "data", "data-*", "datetime", "default", "defer", "dir", "dirname", "disabled", "download", "draggable", "dropzone", "enctype", "for", "form", "formaction", "headers", "height", "hidden", "high", "href", "hreflang", "http-equiv", "icon", "id", "integrity", "ismap", "itemprop", "keytype", "kind", "label", "lang", "language", "list", "loop", "low", "manifest", "max", "maxlength", "media", "method", "min", "multiple", "muted", "name", "novalidate", "open", "optimum", "pattern", "ping", "placeholder", "poster", "preload", "radiogroup", "readonly", "rel", "required", "reversed", "rows", "rowspan", "sandbox", "scope", "scoped", "seamless", "selected", "shape", "size", "sizes", "slot", "span", "spellcheck", "src", "srcdoc", "srclang", "srcset", "start", "step", "style", "summary", "tabindex", "target", "title", "type", "value", "width", "wrap"]
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
	private readonly base: HTMLElement;
	private readonly editor: HTMLElement;
	private readonly highlights: HTMLElement;
	private readonly adviser: HTMLElement;
	private readonly initialHTML: string;
	private readonly tabCharacter: string = "\u00a0\u00a0\u00a0\u00a0";
	private readonly language: "js" | "html" | "css";
	private isAdviserOpen: boolean = false;
	private openedAdviserByInteraction: boolean;
	private currentTabOffset: number;

	constructor(base: HTMLElement, language: "js" | "html" | "css") {
		this.base = base;
		this.initialHTML = this.base.innerHTML;
		this.language = language;
		this.currentTabOffset = 0;
		this.openedAdviserByInteraction = true;

		this.editor = document.createElement("div");
		this.editor.setAttribute("contenteditable", "true");
		this.editor.setAttribute("spellchecking", "false");
		this.editor.dataset.language = language;
		this.editor.dataset.editor = "";
		this.editor.innerHTML = this.base.innerHTML;
		this.base.innerHTML = "";
		this.base.appendChild(this.editor);

		this.highlights = document.createElement("div");
		this.highlights.dataset.highlights = "";
		this.base.appendChild(this.highlights);

		this.adviser = document.createElement("div");
		this.adviser.dataset.adviser = "";
		this.base.appendChild(this.adviser);

		setInterval(() => { this.colorCode(); }, 50);
		setInterval(() => { this.setOffset(); }, 250);
		this.editor.addEventListener("keyup", this.handleAdviserBehavior.bind(this), true);
		this.base.addEventListener("keydown", this.handleKeys.bind(this), true);
	}

	private unCode(): void {
		this.base.innerHTML = this.initialHTML;
	}

	private getCode(): string {
		return this.editor.innerText;
	}

	private getSuggestions(focusWord: string, { object = null, showOnlyGoodMatching = false }: { object?: string, showOnlyGoodMatching?: boolean } = {}): string[] {
		const availableSuggestions: string[] = languages[this.language].suggestions.reduce((properties: string[], property: string): string[] => {
			if (properties.includes(property))
				return properties;

			return [
				...properties,
				property
			]
		}, []);

		if (object && window[object] && Object.getOwnPropertyNames(window[object]))
			availableSuggestions.unshift(...Object.getOwnPropertyNames(window[object]));

		const firstLevelSuggestions: string[] = availableSuggestions.filter((suggestion: string): boolean => suggestion === focusWord);
		const secondLevelSuggestions: string[] = availableSuggestions.filter((suggestion: string): boolean => suggestion.startsWith(focusWord) && firstLevelSuggestions.indexOf(suggestion) === -1);
		const thirdLevelSuggestions: string[] = !showOnlyGoodMatching ?
			availableSuggestions.filter((suggestion: string): boolean => suggestion.includes(focusWord) && secondLevelSuggestions.indexOf(suggestion) === -1)
			: [];
		const declaredVariables: string[] = languages[this.language].variableDeclarers
			?.map((declarer: string): string[] => {
				return this.editor.innerText
					.match(new RegExp(`${declarer} ([a-zA-Z0-9]*)`, "g"))
					?.map(declaredVariable => declaredVariable.replace(declarer, "").trim())
			})
			.flat()
			.filter((declaredVariable: string): boolean => declaredVariable && (declaredVariable === focusWord || declaredVariable.startsWith(focusWord)));

		return [...declaredVariables, ...firstLevelSuggestions, ...secondLevelSuggestions, ...thirdLevelSuggestions]
			.reduce((suggestions: string[], suggestion: string): string[] => suggestions.includes(suggestion) ? suggestions : [ ...suggestions, suggestion ], []);
	}

	private insertSuggestion(selectedElement: HTMLElement): void {
		this.editor.focus();
		this.adviser.innerHTML = "";

		const suggestion: string = selectedElement.innerText;
		const focusWord: string = selectedElement.dataset.focusword;

		if (suggestion.length === 0) return;

		const selection: Selection = window.getSelection();
		const range: Range = selection.getRangeAt(0);
		const suggestionText: Text = document.createTextNode(suggestion);

		range.insertNode(suggestionText);
		range.setStartAfter(suggestionText);
		range.setEndAfter(suggestionText);
		selection.removeAllRanges();
		selection.addRange(range);

		this.editor.innerHTML = this.editor.innerHTML.replace(focusWord + suggestion, `<span data-inserted>${suggestion}</span>`);
		range.setStartAfter(this.editor.querySelector("[data-inserted]"));
		range.setEndAfter(this.editor.querySelector("[data-inserted]"));
		selection.removeAllRanges();
		selection.addRange(range);

		const spaceOutsideInsertedSpan: Text = document.createTextNode("");
		range.insertNode(spaceOutsideInsertedSpan);
		range.setStartAfter(spaceOutsideInsertedSpan);
		range.setEndAfter(spaceOutsideInsertedSpan);
		selection.removeAllRanges();
		selection.addRange(range);

		this.editor.querySelector("[data-inserted]").outerHTML = this.editor.querySelector("[data-inserted]").innerHTML;
		setTimeout(() => { this.isAdviserOpen = false; }, 10);
	}

	private showSuggestions({ askedForSuggestions = true } = {}): void {
		this.isAdviserOpen = false;
		this.openedAdviserByInteraction = askedForSuggestions;

		const position: DOMRect = document.getSelection().getRangeAt(0).getBoundingClientRect();
		const enteredCode: string = window.getSelection().getRangeAt(0).startContainer.textContent.substring(0, window.getSelection().getRangeAt(0).startOffset);
		const object: string = enteredCode.match(/([a-zA-Z]*)\.(\w+)$/) && enteredCode.match(/([a-zA-Z]*)\.(\w+)$/)[0] && enteredCode.match(/([a-zA-Z]*)\.(\w+)$/)[0].split(".") ? enteredCode.match(/([a-zA-Z]*)\.(\w+)$/)[0].split(".")[0] : null;
		const focusWord: string = enteredCode.match(/([a-zA-Z-]*)$/g) ? enteredCode.match(/([a-zA-Z-]*)$/g)[0] : "";
		const suggestions: string[] = this.getSuggestions(focusWord, { object, showOnlyGoodMatching: !askedForSuggestions });

		if (position.left === 0 || position.top === 0) return;
		if ((suggestions.length > 7) && !askedForSuggestions || !askedForSuggestions && suggestions[0] === "No results") {
			this.adviser.innerHTML = "";
			this.isAdviserOpen = false;
			return;
		}

		this.isAdviserOpen = true;
		this.adviser.style.left = `${position.left}px`;
		this.adviser.style.top = `${position.top}px`;
		this.adviser.innerHTML = "";
		suggestions.map((suggestion: string): string => this.adviser.innerHTML += `<a data-focusword="${focusWord}">${suggestion}</a>`);
		this.adviser.querySelector("a")?.setAttribute("data-active", "");
	}

	private getCharactersBeforeCursor({ escapeElementTags = false }: { escapeElementTags?: boolean } = {}): string | undefined {
		try {
			return escapeElementTags
				? window.getSelection().getRangeAt(0).startContainer.textContent.substring(0, window.getSelection().getRangeAt(0).startOffset + 1).replace(/</g, "&lt;").replace(/>/g, "&gt;")
				: window.getSelection().getRangeAt(0).startContainer.textContent.substring(0, window.getSelection().getRangeAt(0).startOffset + 1);
		}catch(e) {}
	}

	private getCharactersBehindCursor(): string {
		const selection: Selection = window.getSelection();
		const range: Range = selection.getRangeAt(0);

		const cursorPosition = document.createElement("span");
		cursorPosition.setAttribute("data-cursorposition", "");
		range.insertNode(cursorPosition);
		range.setStartAfter(cursorPosition);
		range.setEndAfter(cursorPosition);
		selection.removeAllRanges();
		selection.addRange(range);

		const charactersBehind: string = this.editor.innerHTML.split("</span>")[1].split("\n")
			? this.editor.innerHTML.split("</span>")[1].split("\n")[0]
			: this.editor.innerHTML.split("</span>")[1];

		const spaceOutsideInsertedSpan: Text = document.createTextNode("");
		range.insertNode(spaceOutsideInsertedSpan);
		range.setStartAfter(spaceOutsideInsertedSpan);
		range.setEndAfter(spaceOutsideInsertedSpan);
		selection.removeAllRanges();
		selection.addRange(range);

		this.editor.querySelector("[data-cursorposition]").outerHTML = this.editor.querySelector("[data-cursorposition]").innerHTML;
		return charactersBehind;
	}

	private colorCode(): void {
		let editorHTML = this.editor.innerText.replace(/</g, "&lt;").replace(/>/g, "&gt;");

		languages[this.language].colors.map((colorInformation: { regex, class }): void => {
			const replacement: string = colorInformation.regex.replacement || "$1";

			editorHTML = editorHTML.replace(new RegExp(colorInformation.regex.string, colorInformation.regex.flags), `<span class="${colorInformation.class}">${replacement}</span>`);
		});

		this.highlights.innerHTML = `${editorHTML}`;
	}

	private handleAdviserBehavior(e: KeyboardEvent): void {
		if (e.code.includes("Key") && !e.ctrlKey) {
			this.showSuggestions({ askedForSuggestions: false });
		}else if (!this.openedAdviserByInteraction && e.code !== "ArrowDown" && e.code !== "ArrowUp") {
			this.adviser.innerHTML = "";
			this.isAdviserOpen = false;
		}
	}

	private handleEditorSpecificKeys(e: KeyboardEvent): void {
		switch (e.key) {
			case "{": {
				const selection: Selection = window.getSelection();
				const range: Range = selection.getRangeAt(0);

				range.insertNode(document.createTextNode("}"));
				(document.getSelection() as Selection & { modify(action, direction, unit) }).modify("move", "backward", "character");
				break;
			}
			case "[": {
				const selection: Selection = window.getSelection();
				const range: Range = selection.getRangeAt(0);

				range.insertNode(document.createTextNode("]"));
				document.getSelection().modify("move", "backward", "character");
				break;
			}
			case "(": {
				document.execCommand("insertHTML", false, ")");
				document.getSelection().modify("move", "backward", "character");
				break;
			}
			case ")": {
				if (!this.getCharactersBeforeCursor().endsWith(")")) break;

				e.preventDefault();
				document.getSelection().modify("move", "forward", "character");
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
				if (!e.shiftKey || this.language !== "html") return;

				const selection: Selection = window.getSelection();
				const range: Range = selection.getRangeAt(0);
				const tag: string = this.getCharactersBeforeCursor().match("\n") && !this.getCharactersBeforeCursor().endsWith("\n")
					? this.getCharactersBeforeCursor().split("\n")[this.getCharactersBeforeCursor().split("\n").length - 1].match(/<([a-zA-Z0-9]*)/)[0].replace(/[  <>]/g, "")
					: this.getCharactersBeforeCursor().match("\n")
						? this.getCharactersBeforeCursor().split("\n")[this.getCharactersBeforeCursor().split("\n").length - 2].match(/<([a-zA-Z0-9]*)/)[0].replace(/[  <>]/g, "")
						: this.getCharactersBeforeCursor().match(/<([a-zA-Z0-9]*)/)[0].replace(/[  <>]/g, "");
				const closingTag: Text = document.createTextNode(`</${tag}>`);

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

				const selection: Selection = document.getSelection();
				const range: Range = selection.getRangeAt(0);

				if (e.shiftKey) {
					const cursorPosition: HTMLSpanElement = document.createElement("span");
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

					const spaceOutsideInsertedSpan: Text = document.createTextNode("");
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

				const selection: Selection = document.getSelection();
				const range: Range = selection.getRangeAt(0);
				let offset: string = this.tabCharacter.repeat(this.currentTabOffset);

				if (this.getCharactersBeforeCursor().match(/(\(([a-zA-Z]*)|\(\((.*)) => {$/)) {
					const charactersBehind: string = this.getCharactersBehindCursor();
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
					const charactersBehind: string = this.getCharactersBehindCursor();
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

				document.execCommand("insertHTML", false, `\n${offset + "&#8203;"}`);
				document.getSelection().modify("move", "backward", "character");
			}
		}
	}

	private handleKeys(e: KeyboardEvent): void {
		let suggestionKeyPressed: boolean = false;

		switch(e.code) {
			case "Enter": {
				if (!this.isAdviserOpen) break;
				e.preventDefault();

				this.insertSuggestion(this.adviser.querySelector("[data-active]"));
				suggestionKeyPressed = true;
				return;
			}
			case "Tab": {
				if (!this.isAdviserOpen) break;
				e.preventDefault();

				this.insertSuggestion(this.adviser.querySelector("[data-active]"));
				suggestionKeyPressed = true;
				return;
			}
			case "ArrowUp": {
				if (!this.isAdviserOpen) break;
				e.preventDefault();

				const currentActiveItem: number = Array.from(this.adviser.children).indexOf(this.adviser.querySelector("a[data-active]"));

				if (!this.adviser.children[currentActiveItem - 1]) return;

				this.adviser.querySelectorAll("a").forEach(element => element.removeAttribute("data-active"));
				this.adviser.children[currentActiveItem - 1].setAttribute("data-active", "");
				suggestionKeyPressed = true;
				return;
			}
			case "ArrowDown": {
				if (!this.isAdviserOpen) break;
				e.preventDefault();

				const currentActiveItem: number = Array.from(this.adviser.children).indexOf(this.adviser.querySelector("a[data-active]"));

				if (!this.adviser.children[currentActiveItem + 1]) return;

				this.adviser.querySelectorAll("a").forEach(element => element.removeAttribute("data-active"));
				this.adviser.children[currentActiveItem + 1].setAttribute("data-active", "");
				suggestionKeyPressed = true;
				return;
			}
		}

		if (!suggestionKeyPressed && this.openedAdviserByInteraction) {
			this.adviser.innerHTML = "";
			this.isAdviserOpen = false;
		}

		if ((!suggestionKeyPressed && (e.target as HTMLElement).dataset.adviser) || (e.target as HTMLElement).hasAttribute("data-editor"))
			this.handleEditorSpecificKeys(e);
	}

	private setOffset(): void {
		if (!this.getCharactersBeforeCursor()) return;

		const escapedCharactersBeforeCursor: string = this.getCharactersBeforeCursor({ escapeElementTags: true }).replace(/([()\[\]"'`])/g, "\\$1");
		const offset: string = !this.getCharactersBeforeCursor().startsWith("\n") && !this.getCharactersBeforeCursor().match("&nbsp;") && this.editor.innerHTML.match(new RegExp(`\n(.*)${escapedCharactersBeforeCursor}`))
			? this.editor.innerHTML.match(new RegExp(`\n(.*)${escapedCharactersBeforeCursor}`))[0].replace(/&nbsp;/g, " ")
			: this.getCharactersBeforeCursor().match("\n") && !this.getCharactersBeforeCursor().endsWith("\n")
				? this.getCharactersBeforeCursor().split("\n")[this.getCharactersBeforeCursor().split("\n").length - 1].replace(/[a-zA-Z{}\[\]()](.*)/g, "")
				: this.getCharactersBeforeCursor().match("\n")
					? this.getCharactersBeforeCursor().split("\n")[this.getCharactersBeforeCursor().split("\n").length - 2].replace(/[a-zA-Z{}\[\]()](.*)/g, "")
					: this.getCharactersBeforeCursor().replace(/[a-zA-Z{}\[\]()](.*)/g, "");

		this.currentTabOffset = offset.match(/\s{4}/g) ? offset.match(/\s{4}/g).length : 0;
	}
}c
