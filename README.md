# Grunt/KnockoutJs Base Template.
This is a basic template to get people started on making a Grunt and KnockoutJs based web app.

It includes the three main things that I use within most of my projects which are Bootstrap, MomentJs and jQuery. Though you can add your own as well or remove any un-needed ones.

This is free to use so just clone it and then copy it to your own setup. Though suggesting this to other developers and linking them to it would be nice :D.

##How to use.
Before you start firstly make sure you have the latest version of NPM installed, then it might be an idea to run `sudo npm install -s` to make sure you have all the packages.

There are three commands that I predominantly use in this and they are;
- `grunt build` - This will clean the dist folder, run jshint and uglify, then copy all the required files to the dist folder.
- `grunt serve` - This will run the `grunt build` command followed by opening up a local port (in this case its 7011 but it can be changed in gruntfile.js) and then watching the files for any changes. So you can edit and get a live updating page every time you save. (To terminate the serve command just press CTRL+C in the terminal you ran the command from.)
- `grunt release` - This will run the `grunt build` command followed by zipping the dist folder into a zip file ready to be distributed.

Note: I also use `grunt clean` before making a commit though it might be worth adding a line to the .gitignore of your repo.
