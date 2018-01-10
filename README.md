# WhalePH

## Steemit Bot for Auto-Upvoting posts of Supporters for SteemPH
Supporters are those who:
- delegate SP to any of the various Bots that support the community
- Host Events
- Participate regularly in community Events
- Donate funds to the community and charities

<hr>

index.js is the main file.  It includes all the commands that the bot can perform.

You will need to download and install Steem.js in order to run this bot

You will also need to install Steem-Bot

<hr>

### Installation
NPM package is available. You should be fine to use it with any supported node-js version but feel free to report any issues:

<code>npm install steem-bot --save</code>

Then include the package on top of your file:

<code>const SteemBot = require('steem-bot').default</code>
