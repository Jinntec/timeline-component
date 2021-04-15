# This repo is the base for the integration of the timeline component into [tei-publisher-components](https://github.com/eeditiones/tei-publisher-components)
# Timeline Component for KBA / TEIPublisher

Component to display a timeline (barchart) of search results. Build with lit-element. [Check out the interactive demo](https://dcts-timeline.web.app/).

**Preview**<br>
<a href="https://dcts-timeline.web.app/"><img src="https://user-images.githubusercontent.com/44790691/81136032-a79af380-8f5a-11ea-8191-03a0e739c45d.png"></a>

# Requirements
- **`nodeJS`**
- **`npm`**
- [**`lit-element`**](https://lit-element.polymer-project.org/) [npm-link](https://www.npmjs.com/package/lit-element)
- [**`firebase`**](https://firebase.google.com/docs/cli) (only for hosting)

### Install
```bash
npm install
```

### Development
```bash
npm run dev # runs webpack dev server on port 8080
```

### Production
App is live: https://dcts-timeline.web.app/ (hosted by firebase hosting)
```bash
# deploy in 2 steps
npm run prod    # bundle and build production files with webpack
firebase deploy # deploys content of /dist folder to firebase

# script (runs both steps)
npm run deploy
```

### Testing with AVA
```
npm run test
```
to test the `ParseDateService` and `SearchResultService`. [AVA testing framework](https://github.com/avajs/ava) was used + the npm package `esm` to enable modern module imports in AVA (as described on [StackOverflow](https://stackoverflow.com/a/55803624/6272061)).


# To Dos
- [x] Support for date stringformat "2012-W01" to "2012-W53" (weeks)
- [x] updating range in the rangepicker should update the selection in the timeline
- [x] reset range button (in the datepicker)
- [x] tooltip on hover
- [x] tooltip during selection
- [ ] move selection around by dragging
- [ ] distinct behavior for both inputs
- [x] custom validations for inputs
- [x] custom views for all 6 scopes
  - [x] decades(10Y)
  - [x] decades(5Y)
  - [x] years
  - [x] months
  - [x] weeks
  - [x] day
- [ ] cleanup code and repo
- [ ] API documentation / storybook 
- [ ] publish on NPM
