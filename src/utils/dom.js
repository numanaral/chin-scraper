const parseHtmlFromResponse = response => {
	const parser = new DOMParser();
	const doc = parser.parseFromString(response, 'text/html');

	return doc;
};

const matchElementByText = (html, elementQuery, text, exact = true) => {
	// https://stackoverflow.com/a/29289196/13161405 (xpath algorithm)
	const xpath =
		(exact && `//${elementQuery}[text()='${text}']`) ||
		`//${elementQuery}[contains(text(),'${text}')]`;

	const matchedElement = html.evaluate(
		xpath,
		html,
		null,
		XPathResult.FIRST_ORDERED_NODE_TYPE,
		null
	).singleNodeValue;

	return matchedElement;
};

export { parseHtmlFromResponse, matchElementByText };
