# Orchard FED test
If you are reading this, hello! I would like to say thank you on behalf of the group and myself and I hope I've passed the audition.

## Rationale

### Bootstrap
Bootstrap 5 was chosen as this is fairly ubiquitous and a good base to work from in terms of achieving a grid-based layout, especially in an instance where there are 12 columns (Bootstrap's default). Very little needed to be customised in order to make the layout work – everything was achieved with simple control classes to manipulate the way the Flexbox model works. Only colour customisations were applied, with a simple 1200px maximum width to match the design.

### CSS Animations
While a lot of complicated interactions can be achieved with Javascript, I opted to utilise native CSS animations to control hover effects (using animations ported from https://animate.style/). Everything else has been kept simple, using only Bootstrap's native icon set, and Open Sans from Google Fonts.

### AngularJS
I opted to use AngularJS because it is a tool I can rapidly prototype in. While I'm pretty well versed in tools like React, I have found for quick projects it is more heavy-weight than I prefer to use. I was going to attempt to implement Vue.js, but given time constraints I felt delivery was more important than learning a new tool.

## Functionality 

### Links From Articles
I wasn't 100% sure how these were intended to be implemented, whether they were supposed to actually bring up new pages or something similar. Right now they capture the click's content UUID (as do the other anchor clicks) and log it to the console – however amending this to redirect to an actual page would take literally seconds to do.

### Image Modals
Images are implemented using standard Bootstrap modals, however using a standard Lightbox component (of which there is an overabundance of open-source and effective options) would be a trivial task. In this circumstance, I didn't feel that a dedicated Lightbox component offered functionality which deviated sufficiently from what was already accomplished by Bootstrap to include one. 

### Responsiveness 
The layout was built around a responsive box model using Bootstrap's internal flexbox and required some counterintuitive ordering of elements in markup (vs. what is displayed on the page) to work. This was largely done in concern to graceful degradation, as content where a title comes after content on a degraded experience does not make coherent sense. 

The maximum width that the layout achieves is 1200px, as this is the width that the design is drawn at. Below that size, the boxes shrink and gradually reflow as I felt it made sense.

### Testing
I've tested successfully on Chrome/Firefox on my Mac, but I unfortunately don't have a functional Windows box at my disposal at present. With that being said, knowing that Edge is based on Chromium, and that my code is largely 'vanilla' as far as Bootstrap and AngularJS go, I have no issues with suggesting that it is almost certainly functional in this instance.

Testing is obviously a huge part of any release cycle, as is QA. I must stress that this is not something that I'd be willing to do in a production environment.

### UUIDs
All items have been given randomly generated V4 UUIDs. These are the tokens which are used to identify which elements are clicked, and in a 'live fire' exercise would be used for everything meaningful for a given piece of data. 