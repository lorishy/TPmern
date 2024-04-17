"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
let directors = [];
router.get('/', (req, res) => {
    res.status(200).json(directors);
});
router.get('/:id', (req, res) => {
    const director = directors.find(l => l.id === parseInt(req.params.id));
    if (!director)
        return res.status(404).json({ message: 'Réalisateur non trouvé' });
    res.status(200).json(director);
});
router.post('/', (req, res) => {
    const director = req.body;
    directors.push(director);
    res.status(201).json(director);
});
router.put('/:id', (req, res) => {
    const index = directors.findIndex(l => l.id === parseInt(req.params.id));
    if (index === -1)
        return res.status(404).json({ message: 'Réalisateur non trouvé' });
    directors.splice(index, 1, req.body);
});
router.delete('/:id', (req, res) => {
    const index = directors.findIndex(l => l.id === parseInt(req.params.id));
    if (index === -1)
        return res.status(404).json({ message: 'Réalisateur non trouvé' });
    directors.splice(index, 1);
});
exports.default = router;
