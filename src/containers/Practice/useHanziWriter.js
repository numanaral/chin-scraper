import { useEffect } from 'react';

import useHanzi from 'components/Hanzi/useHanzi';
import { START_MODES } from 'components/Hanzi/constants';
import useEffectOnUpdate from 'hooks/useEffectOnUpdate';

const useHanziWriter = ({ size, characters, index, switches }) => {
	const { riceGrid, challenge, highlightOnceOnChallengeMode } = switches;

	const writeConfig = {
		size,
		riceGrid,
		startMode:
			(highlightOnceOnChallengeMode &&
				START_MODES.QUIZ_CHALLENGE_HIGHLIGHT_ONCE) ||
			(challenge && START_MODES.QUIZ_CHALLENGE) ||
			START_MODES.QUIZ,
	};

	const { hanzi, rewrite, writer } = useHanzi(characters[index], writeConfig);

	const rewriteHanzi = () => {
		rewrite(characters[index], writeConfig);
	};

	useEffectOnUpdate(() => {
		rewriteHanzi();
	}, [riceGrid, size, index, characters]);

	useEffect(() => {
		writer?.[`${(challenge && 'hide') || 'show'}Outline`]();
	}, [writer, challenge]);

	return {
		hanzi,
	};
};

export default useHanziWriter;
