"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
let films = [];
router.get('/', (req, res) => {
    res.status(200).json(films);
});
router.get('/:id', (req, res) => {
    const film = films.find(l => l.id === parseInt(req.params.id));
    if (!film)
        return res.status(404).json({ message: 'Film non trouvé' });
    res.status(200).json(film);
});
router.post('/', (req, res) => {
    const film = req.body;
    films.push(film);
    res.status(201).json(film);
});
router.put('/:id', (req, res) => {
    const index = films.findIndex(l => l.id === parseInt(req.params.id));
    if (index === -1)
        return res.status(404).json({ message: 'Film non trouvé' });
    films.splice(index, 1, req.body);
});
router.delete('/:id', (req, res) => {
    const index = films.findIndex(l => l.id === parseInt(req.params.id));
    if (index === -1)
        return res.status(404).json({ message: 'Réalisateur non trouvé' });
    films.splice(index, 1);
});
exports.default = router;
