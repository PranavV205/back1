require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT

const githubData = {
    "login": "PranavV205",
    "id": 86526406,
    "node_id": "MDQ6VXNlcjg2NTI2NDA2",
    "avatar_url": "https://avatars.githubusercontent.com/u/86526406?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/PranavV205",
    "html_url": "https://github.com/PranavV205",
    "followers_url": "https://api.github.com/users/PranavV205/followers",
    "following_url": "https://api.github.com/users/PranavV205/following{/other_user}",
    "gists_url": "https://api.github.com/users/PranavV205/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/PranavV205/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/PranavV205/subscriptions",
    "organizations_url": "https://api.github.com/users/PranavV205/orgs",
    "repos_url": "https://api.github.com/users/PranavV205/repos",
    "events_url": "https://api.github.com/users/PranavV205/events{/privacy}",
    "received_events_url": "https://api.github.com/users/PranavV205/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Pranav Vaswani",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 10,
    "public_gists": 0,
    "followers": 9,
    "following": 9,
    "created_at": "2021-06-26T15:06:20Z",
    "updated_at": "2024-09-05T14:31:01Z"
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('twitter')
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})