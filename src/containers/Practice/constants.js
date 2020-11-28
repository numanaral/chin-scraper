const PRACTICE_CONFIG = {
	riceGrid: {
		label: 'Rice Grid (米)',
		value: true,
	},
	shuffle: {
		label: 'Shuffle',
		value: true,
	},
	continuous: {
		label: 'Continuous',
		value: true,
	},
	challenge: {
		label: 'Challenge Mode',
		value: false,
	},
	autoPlay: {
		label: 'Autoplay sound',
		value: true,
	},
	highlightOnceOnChallengeMode: {
		label: 'Highlight once in Challenge Mode',
		value: true,
	},
};
const MAX_SIZE = 350;
const PRACTICE_CONFIG_LOCAL_STORAGE_KEY = 'practiceConfig';

const ICON_SIZE = 'large';

export {
	PRACTICE_CONFIG,
	MAX_SIZE,
	PRACTICE_CONFIG_LOCAL_STORAGE_KEY,
	ICON_SIZE,
};
