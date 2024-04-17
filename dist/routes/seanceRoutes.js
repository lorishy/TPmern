"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
let sessions = [];
router.get('/', (req, res) => {
    res.status(200).json(sessions);
});
router.get('/:id', (req, res) => {
    const session = sessions.find(l => l.id === parseInt(req.params.id));
    if (!session)
        return res.status(404).json({ message: 'Séance non trouvé' });
    res.status(200).json(session);
});
router.post('/', (req, res) => {
    const session = req.body;
    sessions.push(session);
    res.status(201).json(session);
});
router.put('/:id', (req, res) => {
    const index = sessions.findIndex(l => l.id === parseInt(req.params.id));
    if (index === -1)
        return res.status(404).json({ message: 'Séance non trouvé' });
    sessions.splice(index, 1, req.body);
});
router.delete('/:id', (req, res) => {
    const index = sessions.findIndex(l => l.id === parseInt(req.params.id));
    if (index === -1)
        return res.status(404).json({ message: 'Séance non trouvé' });
    sessions.splice(index, 1);
});
exports.default = router;
