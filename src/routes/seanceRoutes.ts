import { Router, Request, Response } from 'express'
import Session from '../models/Seance';

const router = Router();


let sessions: Session[] = [

]

router.get('/', (req: Request, res: Response) => {

    res.status(200).json(sessions)
})


router.get('/:id', (req: Request, res: Response) => {
    const session = sessions.find(l => l.id === parseInt(req.params.id))
    if (!session) return res.status(404).json({ message: 'Séance non trouvé' })
    res.status(200).json(session)
})


router.post('/', (req: Request, res: Response) => {
    const session = req.body
    sessions.push(session)
    res.status(201).json(session)
})


router.put('/:id', (req: Request, res: Response) => {
    const index = sessions.findIndex(l => l.id === parseInt(req.params.id))
    if (index === -1) return res.status(404).json({ message: 'Séance non trouvé' })
    sessions.splice(index, 1, req.body)
})


router.delete('/:id', (req: Request, res: Response) => {
    const index = sessions.findIndex(l => l.id === parseInt(req.params.id))
    if (index === -1) return res.status(404).json({ message: 'Séance non trouvé' })
    sessions.splice(index, 1)
})

export default router