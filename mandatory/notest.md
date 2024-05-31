##Just finding test within files::
So in order for jest to find the test files, you have two options:
1.you can create duplicates files for every file you create with extension of .test.js, e.g: add.js and add.test.js and export the funtion in test files to write your test. In this way you don't have to have to worry about jest finding the tests to run. 2. you can have your funtions and your test case in the same file. However, if you do so, you have to tell jest to locate the files that have tests and your code. To do that you can copy and paste this underneath script in your package.json file.
"jest": {
"projects": [
{
"displayName": "mandatory",
"testMatch": [
"<rootDir>/mandatory/*.js"
]
},
{
"displayName": "extra",
"testMatch": [
"<rootDir>/extra/*.js"
]
}
]
},

############### If you want to open powerShell profile run this script:
"
if (!(Test-Path -Path $PROFILE)) { New-Item -Type File -Path $PROFILE -Force }
code $PROFILE "

name: Run mandatory tests
on: [push, pull_request]
jobs:
test:
build:
runs-on: ubuntu-latest
steps: - uses: actions/checkout@v2 - name: Install modules
run: npm install - name: Run mandatory tests
run: npm test -- --selectProjects mandatory
deploy:
needs: test
runs-on: ubuntu-latest
steps: - name: Checkout code
uses: actions/checkout@v3 - name: Deploy
run: npm deploy
