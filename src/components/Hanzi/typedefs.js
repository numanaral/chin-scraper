// TYPES/PROPS/OTHER DEFS

/**
 * @typedef {import('react').Dispatch<import('react').SetStateAction<S>>} SetStateAction
 * @template S
 */

/**
 * @typedef {Object} OptionsBase Object containing additional configuration options.
 * @property {Function} [onComplete = null] Called when the hiding animation is complete.
 */

/**
 * @typedef {Object} OptionsDuration Object containing additional configuration options.
 * @property {Number} [duration = null] How long the animation should take to complete.
 * - If not provided then strokeFadeDuration is used.
 * - Passing 0 will make the operation instant.
 */

/**
 * @typedef {OptionsBase|OptionsDuration} OptionBaseWithDuration - Object containing additional configuration options.
 */

// FUNCTIONS

/**
 * @callback showCharacter
 * @param {OptionBaseWithDuration} options
 */

/**
 * @callback hideCharacter
 * @param {OptionBaseWithDuration} options
 */

/**
 * @callback showOutline
 * @param {OptionBaseWithDuration} options
 */

/**
 * @callback hideOutline
 * @param {OptionBaseWithDuration} options
 */

/**
 * @callback updateColor
 * @param {String} colorName One of 'strokeColor', 'radicalColor', 'outlineColor', 'highlightColor', or 'drawingColor'.
 * @param {String} colorVal A CSS color string like '#AA9913' or 'rgba(255, 255, 10, 0.7)'
 * @param {OptionBaseWithDuration} options
 */

/**
 * @callback animateCharacter
 * @param {OptionsBase} options
 */

/**
 * @callback animateStroke
 * @param {Number} strokeNum The stroke number to animate, starting at 0.
 * @param {OptionsBase} options
 */

/**
 * @callback highlightStroke
 * @param {Number} strokeNum The stroke number to highlight, starting at 0.
 * @param {OptionsBase} options
 */

/**
 * @callback loopCharacterAnimation Animate the strokes of the character in order, and then restart the animation after it finishes forever.
 */

/**
 * @callback pauseAnimation Pause any currently running animations.
 */

/**
 * @callback resumeAnimation Resume any animations that were previously paused with pauseAnimation().
 */

/**
 * @callback setCharacter Replace the currently drawn character with a new one. This will reset any quizzes or animations in progress.
 * @param {String} character The character to draw, ex '你'.
 */

// Won't go any further at this point
/**
 * @typedef {Object} UserStroke
 * @property {Number} id = id;
 * @property {Array} points = [startingPoint];
 * @property {Array} externalPoints = [startingExternalPoint];
 */

/**
 * @typedef {Object} DrawnPath
 * @property {String} pathString The total mistakes made during the quiz so far.
 * @property {Array} points The total mistakes made during the quiz so far.
 */

/**
 * @typedef {Object} QuizTotalMistakes
 * @property {Number} totalMistakes The total mistakes made during the quiz so far.
 */

/**
 * @typedef {QuizTotalMistakes|Object} QuizData
 * @property {Number} strokeNum The current stroke number.
 * @property {Number} mistakesOnStroke The number of mistakes the user made drawing this stroke so far.
 * @property {Number} strokesRemaining The number of strokes left until the quiz is complete.
 * @property {DrawnPath} drawnPath An object containing the pathString drawn by the user and the points used for grading.
 */

/**
 * @callback quiz
 * @param {(data:QuizTotalMistakes) => void} onComplete Called when the quiz is complete.
 * @param {(data:QuizData) => void} onCorrectStroke Called when the user draws a stroke correctly.
 * @param {(data:QuizData) => void} onMistake Called when the user makes a mistake drawing a stroke.
 * @param {Number} [showHintAfterMisses=3] The number of misses before a stroke highlight hint is given to the user.
 * - Set to false to disable.
 * @param {Number} [leniency=1.0] This can be set to make stroke grading more or less lenient.
 * - The closer this is to 0 the more strictly the quiz is graded.
 * @param {Boolean} [highlightOnComplete=true] Controls whether a quiz briefly highlights the character when the user finishes drawing the whole character.
 * - This can also be set when creating the writer instance.
 */

/**
 * @callback cancelQuiz Cancel the quiz currently in progress
 */

// CLASS

/**
 * @typedef {Object} Writer HanziWriter
 * @property {showCharacter} showCharacter Show the character if it's currently hidden.
 * @property {hideCharacter} hideCharacter Hide the character if it's currently shown.
 * @property {showOutline} showOutline Show the outline if it's currently hidden.
 * @property {hideOutline} hideOutline Hide the outline if it's currently shown.
 * @property {updateColor} updateColor Update a color setting.
 * @property {animateCharacter} animateCharacter Animate the strokes of the character in order
 * @property {animateStroke} animateStroke Animate a single stroke
 * @property {highlightStroke} highlightStroke Highlight a single stroke
 * @property {loopCharacterAnimation} loopCharacterAnimation Animate the strokes of the character in order, and then restart the animation after it finishes forever.
 * @property {pauseAnimation} pauseAnimation Pause any currently running animations.
 * @property {resumeAnimation} resumeAnimation Resume any animations that were previously paused with pauseAnimation().
 * @property {setCharacter} setCharacter Replace the currently drawn character with a new one. This will reset any quizzes or animations in progress.
 * @property {quiz} quiz Start a quiz.
 * @property {cancelQuiz} cancelQuiz Cancel the quiz currently in progress
 */
