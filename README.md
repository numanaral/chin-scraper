# chin-scraper
Studying Chinese made easy!

&nbsp;
## Live on:
- [numanaral.github.io/chin-scraper/](https://numanaral.github.io/chin-scraper/)
- [old version](https://4qw4v.csb.app/)

&nbsp;
## Pages / Modules:
- **Learn** - *Learn new characters with many details*
	- Search for hanzi / Chinese character(s)
		- You can search full sentences or single word
			- Allowed punctuation: `, . ? ! ， 、 。 ？ ！`
	- View the sentence result
		- Translation
		- Pinyin
		- Hear the pronounciation (default browser SpeechSynthesisUtterance)
	- View single character results from the given sentence(s)
		- Translation
		- Pinyin
		- Animated stroke order
		- Hear the pronounciation
			- Native pronounciation with a fallback to browser SpeechSynthesisUtterance
		- More Info
			- Other translations
			- Example sentence
			- Other words containing this character
	- Practice drawing using your mouse/finger
	- Add character into your favorites *(Coming soon)*
- **Practice** - *Focus on writing / learning the strokes without any distraction*
	- Search for hanzi / Chinese character(s) without any punctuation
	- Practice writing
	- Configurable options are:
		- Rice Grid (米)
			- Use star pattern on the background
		- Shuffle
			- Suggest random characters from the given list
				- **Prevents location-type memorization**
		- Continuous
			- Continuously suggest characters from the given list
		- Challenge Mode
			- Don't show the strokes (draw on a blank background)
		- Autoplay sound
			- Auto play sound when you go to a new suggestion
		- Highlight once in Challenge Mode
			- Highlight the strokes once on challange mode
- **Analytics** - *View how many times words/characters are searched in a wordcloud*
- **Preferences** - *Manage user preferences*
	- Toggle theme
		- Dark mode & Light Mode
	- Changes colors *(Coming soon)*
	- Disable/Configure animations *(Coming soon)*
- **Report** - *Bug Report / Feature Requests / Questions*
- **About** - *Resources, links and more info regarding the app*
- **Account** - *Account* *(Coming soon)*

&nbsp;
## Why create this?	
- Unlike hanzi5 and other similar sites:
	- You don't need to refresh a whole page!
	- You can search multiple characters / sentences at once!
	- Practice writing
	- Hear pronounciation
	- Learn extra details

&nbsp;
## To Do: 
- [x] Display stroke gif, pinyin
- [x] Display translation
- [x] Speak out the word
- [x] Create proxy router to scrape from other sites
- [x] Do single translate request and get translation result for the whole sentence and each character along with their pinyin
- [x] Add full word translation
- [x] Add full word pronunciation
- [x] Collect analytics for the searched words
- [x] Work on UI
	- [x] favicon
	- [x] responsiveness
	- [x] layout
	- [x] Full upgrade including theme and animations
- [x] Setup PWA
- [x] Save user settings in the local storage
- [ ] Add config options to hide/show what to display
- [ ] Build Account
	- [ ] Integrate auth
	- [ ] Allow users to:
		- [ ] Save preferences in their account
		- [ ] Create study groups / list of words that can automatically be:
			- [ ] Learned
			- [ ] Practiced
		- [ ] Add characters into their favourites list
- [ ] Add more examples to **More Info** option for each character in **Learn**

&nbsp;
---
## Sources:
- Translated by [Google Translate](https://translate.google.com/)
- Stroke animations & Drawing Mode by [Hanzi Writer](https://github.com/chanind/hanzi-writer/)
- More Info on characters & Native pronunciation from [Han trainer](https://dictionary.hantrainerpro.com/)
- Logo created by [Freepik](https://www.flaticon.com/authors/freepik/) from [FlatIcon](https://www.flaticon.com/)
