# W05D05 - Mid-term Project Kickoff

### why of midterms
* practice team work
* practice for finals
* to apply/practice everything learned
* how to collaborate on github
* putting the pieces together

* something to add to portfolio

### Pick a project

### User Stories
* As a ______, I can _______, because _________

* As a logged-in user, I can add a contribution to an existing story, because I want to contribute

* As a user, I can see a list of maps in my area, because I'm interested in what's going on around me

* As a user, I can favourite a post, because I want to view it later AND the heart icon turns red

### Nouns === resources
* every noun needs a table
* ERD

### Planning directory
* user-stories.md
* ERDv3.png

### Routes
* client a way to update/delete things in the db

### REST REpresentational State Transfer

GET /login
POST /logout

B GET   /stories/
R GET   /stories/:id
E POST  /stories/:id/edit
A POST  /stories
D POST  /stories/:id/delete

B GET         /stories
R GET         /stories/:id
E PUT/PATCH   /stories/:id
A POST        /stories
D DELETE      /stories/:id

routes.md

### MVP
* Minimum Viable Product
* minimum amount of features that a user will find useful
* @KV Minimum Viable Demo (MVD)
* minimum feature set that we can demo in 5 minutes
* if you're not going to show it, DON'T BUILD IT
* Project Killer: wouldn't it be cool if...

### Wireframes
* mockups
* lowest fidelity possible

### User Login
* don't do it

```js
app.get('/login/:id', (req, res) => {
  // session cookies
  req.session.user_id = req.params.id

  // cookie parser
  res.cookie('user_id', req.params.id);

  // send the user somewhere
  res.redirect('/');
});
```

http://localhost:8000/login/2
http://localhost:8000/login/5

### Tech Choices
* Front End: HTML, CSS, JS, jQuery, Bootstrap
* Back End: Node, Express, Postgres

### SPA vs Multi-page
* not mutually exclusive
* React SPA
* Rails multi-page app

### I WILL NOT CODE ON MASTER/MAIN
* use branches

* merge locally and then push
* merge in the cloud and then pull

git push origin my-branch

git checkout master
git merge my-branch


>>>>>>>>>>>Keep Both, Keep One, Keep the Other

>>>>>>>>>>>

### Splitting up the work
* vertically -> each member of the team is working on a diff piece of the stack
* horizontally => all members working on the same layer
* pair programming

3 x 30 = 90
1 x 60 = 60






