const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors({ origin: '*' }))

const users = [
  {
    id: 0,
    name: 'Luke',
    age: '23',
    email: 'luke@hoth.planet',
    website: 'https://lightsaber-repair.id',
    createdOn: new Date(),
  },
  {
    id: 1,
    name: 'Palpatine',
    age: '52',
    email: 'daddy-p@exegol.planet',
    website: 'https://sith-bizzness.id',
    createdOn: new Date(),
  },
]

app.get('/', (req, res) => {
  const data = users
  res.json({ ok: true, data })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
