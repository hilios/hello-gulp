[Hello Gulp](https://speakerdeck.com/hilios/hello-gulp)
============

This is a brief introduction to [Gulp](http://gulpjs.com/), a front-end build system in NodeJS, that is fast, easy and fun to use.

The objective of this **hands-on** is to *build* the Bootstrap files to distribution and download, with aid of Gulp.

In the end, we will generate the final Boostrap structure, similar to the original:

```
dist/
├── js/bootstrap.js
├── js/bootstrap.min.js
│
├── css/bootstrap.css
├── css/bootstrap.less
│
└── fonts/**

build/
└── bootstrap.zip
```

Step-by-step
------------

This tutorial is splitted into small steps that can be followed by the git tags:

```sh
$ git tag
0-init
1-install
2-simple-build
3-async-tasks
4-prod-build
5-copy-assets
6-zip
7-watcher
8-gruntfile
```

To get started checkout to the `0-init` tag:

```sh
git checkout 0-init
git clean -dfx
```

Follow the changes to the files using `git diff` output:

```diff
$ git diff 0-init 1-install
diff --git a/gulpfile.js b/gulpfile.js
index e69de29..f42a67a 100644
--- a/gulpfile.js
+++ b/gulpfile.js
@@ -0,0 +1 @@
+var gulp = require('gulp');
diff --git a/package.json b/package.json
index aa6678e..daeb8b1 100644
--- a/package.json
+++ b/package.json
@@ -2,5 +2,6 @@
   "name": "hello-gulp",
   "version": "0.0.1",
   "devDependencies": {
+    "gulp": "~3.7"
   }
 }
```

The only files that change are `gulpfile.js` and `package.json`, so keep an eye on them.

Please notice that every time the `package.json` changes you will need to execute to fetch the dependecies with `npm`:

```sh
# Run every time package.json changes
npm install
```

#### Hint

To make easier to spot the diffs add some color to your `git` config:

```
git config --global color.diff "auto"
```
