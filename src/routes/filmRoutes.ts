import { Router, Request, Response } from 'express'
import Film from '../models/Film';

const router = Router();


let films: Film[] = [

]

router.get('/', (req: Request, res: Response) => {

    res.status(200).json(films)
})


router.get('/:id', (req: Request, res: Response) => {
    const film = films.find(l => l.id === parseInt(req.params.id))
    if (!film) return res.status(404).json({ message: 'Film non trouvé' })
    res.status(200).json(film)
})


router.post('/', (req: Request, res: Response) => {
    const film = req.body
    films.push(film)
    res.status(201).json(film)
})


router.put('/:id', (req: Request, res: Response) => {
    const index = films.findIndex(l => l.id === parseInt(req.params.id))
    if (index === -1) return res.status(404).json({ message: 'Film non trouvé' })
    films.splice(index, 1, req.body)
})


router.delete('/:id', (req: Request, res: Response) => {
    const index = films.findIndex(l => l.id === parseInt(req.params.id))
    if (index === -1) return res.status(404).json({ message: 'Réalisateur non trouvé' })
    films.splice(index, 1)
})

export default router