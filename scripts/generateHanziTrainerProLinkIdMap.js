const path = require('path');
const fs = require('fs');
const axios = require('axios');
const { JSDOM } = require('jsdom');

const HANZI_TRAINER_DICT_URL =
	'https://dictionary.hantrainerpro.com/chinese-english/index.htm';
const URL_PREFIX = 'translation-';
const URL_POSTFIX = '.htm';
const JSON_PATH = path.join(__dirname, '../src/api/hanziTrainerCharLinks.json');

const fetchContent = async url => {
	const response = await axios.get(url);
	return response.data;
};

const generateHanziToLinkIdMap = async content => {
	const dom = new JSDOM(content);
	const document = dom.window.document;

	const indexTableElement = document.querySelector(
		"table[class='indextable']"
	);
	const characterLinks = [
		...indexTableElement.querySelectorAll('tr > td:nth-child(3)'),
	];
	const characterToLinkIdMap = characterLinks.reduce((acc, td) => {
		const anchor = td.firstChild;
		const hanzi = anchor.textContent;
		if (hanzi.length === 1) {
			acc[hanzi] = anchor.href
				.replace(URL_PREFIX, '')
				.replace(URL_POSTFIX, '');
		}
		return acc;
	}, {});

	return characterToLinkIdMap;
};

const writeToFile = (data, filename) => {
	fs.writeFileSync(filename, JSON.stringify(data, null, 2));
};

const main = async () => {
	try {
		console.log('🌐 Fetching content from Hanzi Trainer Pro...');
		const content = await fetchContent(HANZI_TRAINER_DICT_URL);

		console.log('🔗 Generating character to link ID mapping...');
		const characterToLinkIdMap = await generateHanziToLinkIdMap(content);

		console.log(
			`📝 Writing ${
				Object.keys(characterToLinkIdMap).length
			} character mappings to file...`
		);
		writeToFile(characterToLinkIdMap, JSON_PATH);

		console.log('✅ Successfully generated hanziTrainerCharLinks.json');
	} catch (error) {
		console.error('❌ Error generating Hanzi Trainer Pro link map:', error);
		process.exit(1);
	}
};

main();
