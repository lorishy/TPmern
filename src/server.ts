import express, { Express, Request, Response } from 'express'
import directorRoutes from './routes/directorRoutes'
import filmRoutes from './routes/filmRoutes'
import seanceRoutes from './routes/seanceRoutes'

const app: Express = express()

const PORT = 3002

app.use(express.json())
app.use('/api/directors', directorRoutes)
app.use('/api/films', filmRoutes)
app.use('/api/seances', seanceRoutes)



app.listen(PORT, () => {
    console.log(`Le serveur écoute sur le port ${PORT}`)
})




