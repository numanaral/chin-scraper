const getDefaultHanziWriterOptions = theme => ({
	width: 150,
	height: 150,
	padding: 5,
	strokeColor: theme.palette.primary.main,
	radicalColor: theme.palette.success.main,
	// strokeAnimationSpeed: 1,
	delayBetweenStrokes: 200,
	delayBetweenLoops: 500,
	drawingColor: theme.palette.text.primary,
	// drawingWidth: 25,
});

const START_MODES = {
	LOOP: 'loop',
	DRAW_ONCE: 'drawOnce',
	QUIZ: 'quiz',
	QUIZ_CHALLENGE: 'quizChallenge',
	QUIZ_CHALLENGE_HIGHLIGHT_ONCE: 'quizChallengeHighlightOnce',
};

const DEFAULT_OPTIONS = {
	size: 150,
	hanziWriterOptions: {},
	riceGrid: true,
	startMode: START_MODES.LOOP,
};

export { getDefaultHanziWriterOptions, START_MODES, DEFAULT_OPTIONS };
