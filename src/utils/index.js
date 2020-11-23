const firstCapital = s => (s && s[0].toUpperCase() + s.slice(1)) || '';

// https://stackoverflow.com/a/26188910/13161405
const pascalToSentence = str =>
	str
		// Look for long acronyms and filter out the last letter
		.replace(/([A-Z]+)([A-Z][a-z])/g, ' $1 $2')
		// Look for lower-case letters followed by upper-case letters
		.replace(/([a-z\d])([A-Z])/g, '$1 $2')
		// Look for lower-case letters followed by numbers
		.replace(/([a-zA-Z])(\d)/g, '$1 $2')
		.replace(/^./, s => s.toUpperCase())
		// Remove any white space left around the word
		.trim();

const noop = () => null;

export { firstCapital, pascalToSentence, noop };
