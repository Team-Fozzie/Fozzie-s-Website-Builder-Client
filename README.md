# Fozzie

**Author**: Maxwell Rediker, Madeline Peters, Alex Stone, Justin Morris, Amanda Moen
**Version**: 1.0.0

## Overview

are app will allow the user to build a website based off basic template following a cards and decks format
the user can create an account allowign them to continue or start a new project


## Getting Started

set up 2 repos (CLIENT-side, SERVER-side) in organization / add collaborators
fork each repo / work on branches from these forked repos

CLIENT-side
create MVC file/folder architecture
put master on gh-pages


SERVER-side
create MVC file/folder architecture
create PSQL DB with two Tables users and projects
put SERVER-side on Heroku
connect with CLIENT-side gh-pages


## Architecture

HTML,CSS,JS
jQuery
HandleBars
Node.js
Page.js


## Change Log

04-30-2018 4:15pm - README.md / UI interface research and planning
04-30-2018 3:15pm - added SQL database tables users and projects
04-30-2018 2:15pm - discussing more specifically page layout and functionality
04-30-2018 1:15pm - got client side and server side up to gh-pages and heroku and linked together
04-30-2018 11:15am - pitched final project and got feedback
04-30-2018 10:30am - finished discussing project pitch and white board UI mockup


## Credits and Collaborations

Maxwell Rediker
Madeline Peters
Alex Stone
Justin Morris
Amanda Moen


## Wireframes
- Justin has PS mockups


## UX Workflow

- HOME page

- click on sign up OR login /  modal pop up response with form entry
-- upon correct log in 
--- navigate user to PROJECT page
-- upon incorrect log in
--- input box border red and message below saying that the credentials are invalid
-- upon correct sign up
--- navigate user to PROJECT page

- PROJECT page

- new buttons (plus sign)
-- modal pop up and write name of project in
--- upon submit add project name to DB and navigate user to CREATE page
- click project from menu
-- returns you to last state of project progress in CREATE page

-CREATE page

- user presses add box to add row
-- menu on left slides in and offers templated rows


## Links to any 3rd party apis' your client side will use
-find any google api DRIVE adn SIGN IN