### example of node app

It is  a simple node app. On a base url it returns a json:
{"message":"hello message test"}

A github url of the repo: 
https://github.com/werbower/nodeExampleApp


In this repo:
- created Dockerfile for the app;
- implemented a github actions flow that starts tests in the app;

This app is also deployed on render.com. Bild configured from Dockerfile. The address:
https://nodeexampleapp-y9iw.onrender.com

#### how implemented the autodeploy to render.com
After caused by 'push', 'pr' or 'manual' a github actions flow starts.
This flow runs tests and after succeed on a branch main runs a deploy hook (https://render.com/docs/deploy-hooks#example-workflow)
