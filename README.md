# Storie

http://storie.press

Storie is a minimalist site to write, read, and comment on stories. It is somewhere between Medium, LiveJournal, and Facebook. Storie is a single page web app built with React.js and Redux on the frontend, a PostgreSQL database, and Ruby on Rails in the backend.

## Features
* Secure sign up and login. Passwords are encrypted using BCrypt. The site keeps track of returning users logins with the help of session tokens stored in the users browser.
* Stories are the heart of Storie: Users create, edit and share stories.
* Users can follow other
* Profile pictures are generated using [tinygraphs](https://github.com/taironas/tinygraphs). The images use tinygraph’s space invaders option with the output is based on username string and a randomly generated color. They're fun and it gives the site a colorful but unified look.

### Stories
Storie is text focused. It is foregoing post header images as they often only marginally related to the writing. No images for the sake of having an image. The same goes for likes. They say more about marketing than quality, and popular does not equal good.

* Story and Comment forms auto expand and contract with text size, so users always have a full view of what they’ve typed. SCREENGIF HERE!
* The background color of the Story Writer is a light yellow green, which people tend to find to be more eye friendly than white. Think legal pads and the beautiful National Brand notebooks.
* In an effort to focus on text over formatting, no text formatting is provided at this point. However, web links are parsed and rendered with the help of Linkify, a simple match and parse library. Story posts also honor paragraphs and line breaks, with the help of modern CSS.
* Instead of implementing more features, the idea of the site was to be simple and working, smooth and bug free.

## Future Features
* At least three privacy settings: Users should be able to post publicly, friends only, privately.
* A full wysiwyg text editor for the “write story” form. I’d like to keep it simple, but anticipate a user desire for adding inline images to illustrate concepts, or convey moods, or simply share personal photos or art.
* Profile customization, if desired by users.
