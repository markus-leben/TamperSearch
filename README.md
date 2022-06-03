# TamperSearch
A generic JavaScript template to extend Google Chrome's custom search engines functionality with Tampermonkey. 

# What's this for?
Google Chrome has pretty good methods of customizing your search in the address bar, to do customized search. However, this only works with searches that take the url as imput and have a single plaintext payload. This is a template for making a Tampermonkey script that runs with a payload in the url, that can be combined with Chrome's custom search to do custom searches on a non-url based site search, by filling the text box. 

You could also theorhetically use stuff like this to fill a form or perform complex actions from your address bar, but that's neither here nor there.

# Howto
1. Install Chrome & the Tampermonkey plugin.
2. Visit the site you'd like to do search on, preferably on a page where the search bar is clear and obvious.
3. Copy that site's url. 
4. Click the three dots in the top right corner of chrome, then click 'Settings'.
5. Find the setting labeled 'Manage search engines and site search'
6. In the section labeled 'site search', click 'add'.
7. Fill in the form, 'Search engine' is the name of the site whose search you'll be using, and 'shortcut' is what you want to type in the address bar to search on that site.
8. For url, paste the url you copied and then add '?tmpayload=*'
9. Return to the tab where you had the website to search.
10. Right click on the Extensions icon (the puzzle piece)
11. Click on Tampermonkey, then click 'create a new script...'
12. Replace the text in the text editor with template.js
13. Replace YourURL.here with the url of the site you'd like to search.
14. Go back to the tab of your site and inspect element on the search bar. Find the id attribute. (Note: if it doesn't have an id attribute you're going to have to find it through another method)
