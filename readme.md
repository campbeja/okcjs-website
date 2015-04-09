#OKC.js
---

![OKCjs](http://i.imgur.com/4z9STLh.png)


This is the basis for the Oklahoma City Javascript user group's website. This is asimply blog-type site powered by hexo, using the okcjs-hexo-theme. This currently supports multiple languages, and also has the ability to add plugins, as necessary.



##Updating The Site

### Getting Started

####Short Version

```sh
 git clone git@github.com:techlahoma/okcjs-website.git
 cd okcjs-website
 git clone https://github.com/techlahoma/hexo-theme-okcjs.git themes/okcjs
 npm install
 hexo server
```

####Longer Version:
1. Make sure you have [node](http://nodejs.org/download/) installed.
2. Install hexo if you haven't already. ```npm install hexo -g```
3. Clone the repository.
  * If you already have cloned the repo, please check that your clone is up to date.
4. Clone the okcjs theme into ```themes/okcjs/```
  * hexo-theme-okcjs repo: [https://github.com/techlahoma/hexo-theme-okcjs](https://github.com/techlahoma/hexo-theme-okcjs)
5. Run ```npm install``` from the root folder of your cloned repo.
  * Even though you've installed hexo, you must do this after the initial cloning.
6. You can start the server with ```hexo server``` on the command line.
7. Always submit news posts as a pull request. **Do not push directly to master.**
8. Full hexo documentation located at [http://hexo.io/docs/](http://hexo.io/docs/).



### Posting Events

Posts are located in _posts. The easiest way to write a new one is simply to type ```hexo new "Your Post Name"``` It will scaffold one for you. Nice.

Go ahead and Make the post you want to make. If you dont like it we can delete it later, no big deal. Now, type ```hexo server```. Hexo starts on port (in this case 4000);

When you have it like you like, do ```hexo generate``` this spits out all the static content.

### Menu
You can add a page with ```hexo new page "pagename"``` . You can add it to the menu by editing the _config.yml located in the metro-light folder

### Deploy

Easy mode. When on the master branch, after you have merged a pull request to Techlahoma's repo: ```hexo deploy --generate``` 

Boom. Its on gh pages here [http://techlahoma.github.io/okcjs-website/](http://techlahoma.github.io/okcjs-website/)



### If something goes wrong.

The magic words: ```hexo clean``` then ```hexo generate``` This will recreate everything.

*Did you forget to run* ```npm install```*?*

---
Readme By : Jesse Harlin [ harlinjesse@gmail.com ]
