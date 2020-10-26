# chin-scraper
Scrapes the character strokes (gif, image) &amp; pinyin from hanzi5, and translation from google translate via puppeteer

---
## Live Website:
- [numanaral.github.io/chin-scraper/](https://numanaral.github.io/chin-scraper/)
## Code Playground:
- [CodeSandbox - Play w/ the code](https://codesandbox.io/s/chin-scraper-4qw4v)
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
- View translation
- Hear the pronounciation of the character
---
## To Do: 
- [x] Display stroke gif, pinyin
- [x] Display translation
- [x] Speak out the word
- [x] Create my own cors-anywhere server
- [ ] Create my own puppeteer server
- [ ] Cleanup the scraper utils
	- [ ] Optimize fetches - Do 2 total fetches instead of fetch/char
    	- [ ] hanzi5: fetch fetch the page and extract all, remove iframes
    	- [ ] google-translate: search entire word + chars separated by `\n`  in one go
    	- [ ] Split and use these 2 fetch results
- [ ] Add full word translation
- [ ] Add full word pronounciation
- [x] Collect analytics for the searched words
  - [ ] Display top 10 searched words
  - [ ] Make this an interactive list
- [ ] Add config options to hide/show what to display
- [ ] Work on UI
  - [ ] favicon
  - [ ] responsiveness
  - [ ] layout
- [ ] Work on favourites option
	- [ ] Keep it in the local storage in the beginning
- [ ] Add download option
- [ ] Setup PWA
- [ ] Update service worker
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
