import { Router, Request, Response } from 'express'
import Director from '../models/Director';

const router = Router();


let directors: Director[] = [

]

router.get('/', (req: Request, res: Response) => {

    res.status(200).json(directors)
})


router.get('/:id', (req: Request, res: Response) => {
    const director = directors.find(l => l.id === parseInt(req.params.id))
    if (!director) return res.status(404).json({ message: 'Réalisateur non trouvé' })
    res.status(200).json(director)
})


router.post('/', (req: Request, res: Response) => {
    const director = req.body
    directors.push(director)
    res.status(201).json(director)
})


router.put('/:id', (req: Request, res: Response) => {
    const index = directors.findIndex(l => l.id === parseInt(req.params.id))
    if (index === -1) return res.status(404).json({ message: 'Réalisateur non trouvé' })
    directors.splice(index, 1, req.body)
})


router.delete('/:id', (req: Request, res: Response) => {
    const index = directors.findIndex(l => l.id === parseInt(req.params.id))
    if (index === -1) return res.status(404).json({ message: 'Réalisateur non trouvé' })
    directors.splice(index, 1)
})

export default router