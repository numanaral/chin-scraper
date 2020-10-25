# chin-scraper
Scrapes the character strokes (gif, image) &amp; pinyin from hanzi5, and translation from google translate via puppeteer

---
## Live Website:
- [Github Pages](https://numanaral.github.io/chin-scraper/)
## Code Playground:
- [Sandbox - Play w/ the code](https://codesandbox.io/s/chin-scraper-4qw4v)
---
## My Quizlet lists (Vocab from the TextBook - Up to L3):
- [Chinese (pinyin) <=> meaning (word classification)](https://quizlet.com/537832006/%E4%B8%AD%E6%96%87-chinese-%E4%B8%AD%E6%96%87-pinyin-meaning-word-classification-flash-cards/)
- [Chinese <=> Pinyin](https://quizlet.com/537833049/%E4%B8%AD%E6%96%87-chinese-%E4%B8%AD%E6%96%87-pinyin-flash-cards/)
---
## Things you can do:
- Search for chinese character(s)
- View the stroke order in gifs (scraped by hanzi5), unlike hanzi5
		- You don't need to switch pages
		- You can search multiple characters as you type
- View pinyin
- View translation (NOTE: limited API requests, more details to be added later)
- Hear the pronounciation of the character
---
## To Do: 
- [x] Display stroke gif, pinyin
- [x] Display translation
- [x] Speak out the word
- [ ] Cleanup the scraper utils
	- [ ] Remove iframes
- [ ] Add full word translation
- [ ] Add full word pronounciation
- [ ] Add config options to hide/show what to display
- [ ] Work on UI
- [ ] Work on favourites option
	- [ ] Keep it in the local storage in the beginning
- [ ] Add download option
- [ ] Setup service worker along with PWA settings
---
## Notes:
- Cannot fetch the google-translate page and scrape as the page requires scripts to be loaded and ran to fully display the result. Thus we are using puppeteer. The trick here is that until we run a separate servers for CORS-anywhere and puppeteer, we will take advantage of [CORS-Anywhere](https://cors-anywhere.herokuapp.com/) and [Puppeteer Playground](https://backend-dot-try-puppeteer.appspot.com) to scrape data from hanzi5 and google-translate.
---
## Sources:
- [Hanzi5](http://hanzi5.com/)
- [Google Translate](https://translate.google.com/)
- [CORS-Anywhere](https://cors-anywhere.herokuapp.com/)
- [Puppeteer Playground](https://backend-dot-try-puppeteer.appspot.com)
---
