# prostractorBMVpublic

- To automate in protractor, my own framework, enjoy!

# Setup

- First, to make run tests you must have next programs downloaded and installed:
- [Node.js](https://nodejs.org/es/) download and install it, accept all during the installation there is no special steps. 
- You will need Java [JDK](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) and [JRE](https://www.java.com/download/)
- [Git](https://git-scm.com/) also you will need a ssh key if need more info check this [LINK](https://confluence.atlassian.com/bitbucketserver/creating-ssh-keys-776639788.html) or check in google how handle this ;D

# Windows

- Once installed Node js and JAVA review if is all ok, check with cmd: `node --version` and `java -version` versions installed must be shown.

- Open cmd (pref as admin) and do: 
```
npm install protractor -g
```
if something goes wrong with the above line, try adding `'--force'`:
```
npm install protractor -g --force
```

- Check if protractor has been correctly installed witch cmd: `protractor --version`

- Update and run webdriver-manager, use the next lines in cmd:
```
webdriver-manager update
webdriver-manager start
```
If webdriver-manager starts running, then we are ok!


# MAC OS

- Once installed Node js and JAVA review if is all ok, check with terminal: `node -v` and `java -version` versions installed must be shown.

- Open terminal and do: 
```
npm install protractor -g
```
if there is an acces permission error try with:
```
sudo npm install protractor -g
```
if something goes wrong try adding `'--force'`:
```
npm install protractor -g --force
```

- Check if protractor has been correctly installed witch cmd: `protractor --v`

- Update and run webdriver-manager, use the next lines in cmd:
```
webdriver-manager update
webdriver-manager start
```
If webdriver-manager starts running, then we are ok!
