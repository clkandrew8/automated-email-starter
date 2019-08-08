README AUTOMATED EMAIL WORKFLOW

***********************
        START
1. Install NPM and Node.js
2. Type "npm install" to download the required dependencies.
3. Run "npm run generate" - this will setup the file structure for the project.
4. Run "npm run build" - this will build everything and start the watch script for live editing.

**********************
        NOTES
1. Do not work directly in the CSS or HTML files. The script
is not set to watch those, and will ignore any changes made. 
Update only in .pug files or .scss files.

2. The "pug-includes" file is made to hold any pug partials you'd like 
to create. These could be as simple as a partial for single space heights,
or footers.

3. If you create any pug partials, and intend to use them
into your main "index.pug" file, please be sure to include them
directly in the file. Pug has documentation in their include syntax.

4. You'll need to include the meta data into the pug file directly.

5. You can create more than the initial files that are setup by the generate script.
-> You can name them whatever you'd like.
-> You should only be creating and working in .scss and .pug files.
-> The compiling scripts will output the compiled versions with the same name and corresponding 
new extensions (i.e. .scss --> .css).
-> The only thing you'll need to do, is to make sure you are still including the correct paths
in the correct .scss and .pug files for partials.

6. When building the final product, there should only ever be ONE html file in the email folder.
The minify script will build off of that folder and output a compressed version for production.

7. For large scale production, the program can be optimized.
-> Currently setup for local production. 
-> You could have a master directory with a variety of .scss and .pug partials.
-> Inside of the master directory you could create new templates,
 and include/link to those partials for all the templates.
-> This way, when you save to the master partials, the templates (which will have that directory path)
can be very easily updated by just running the build command and then minifying for production.
***** Let me know if you need help setting this up for a project, it mainly involved changing filepath .src 
in the gulpfile to however your directory is setup. ******
