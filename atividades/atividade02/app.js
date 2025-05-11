import express from 'express'

const app = express()
const port = 3000

const aboutMiddleware = (req, res, next) => {
    console.log('Entrando na página About')
    next()
}

const dataMiddleware = (req, res, next) => {
    console.log('Entrando na página Data')
    next()
}

const usersMiddleware = (req, res, next) => {
    console.log('Entrando na página Users')
    next()
}

const userIdMiddleware = (req, res, next) => {
    console.log('Entrando na página UserId')
    next()
}

const signinMiddleware = (req, res, next) => {
    console.log('Entrando na página signin')
    next()
}

const signupMiddleware = (req, res, next) => {
    console.log('Entrando na página signup')
    next()
}

app.get('/', (req, res) => {
    res.send('hello, world')
})

app.get('/about', aboutMiddleware, (req, res) => {
    res.send('about')
})

app.post('/data', dataMiddleware, (req, res) => {
    res.send('data')
})

app.get('/users', usersMiddleware, (req, res) => {
    res.redirect('/users/signup')
})

app.get('/users/signin', signinMiddleware, (req, res) => {
    res.send('signin')
})

app.get('/users/signup', signupMiddleware, (req, res) => {
    res.send('signup')
})

app.get('/users/:userId', userIdMiddleware, (req, res) => {
    let userId = req.params.userId
    res.send(`Bem vindo, ${userId}`)
})

app.use((req, res, next) => {
    res.status(404).send('<h1>Essa rota não existe</h1><a href="/">Voltar para o index</a>')
})

app.listen(port, () => {
    console.log(`aplicativo no port ${port}`)
})