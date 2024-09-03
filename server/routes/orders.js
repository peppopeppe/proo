const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// Get all orders
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new order
router.post('/', async (req, res) => {
  const { items, totalAmount } = req.body;  // Destruttura items e totalAmount dal corpo della richiesta

  const order = new Order({
    items: items,  // items dovrebbe essere un array di oggetti con menuItem e quantity
    totalAmount: totalAmount
  });

  try {
    const newOrder = await order.save();  // Salva il nuovo ordine nel database
    res.status(201).json(newOrder);  // Invia una risposta con lo stato 201 (Creato) e l'ordine creato
  } catch (err) {
    res.status(400).json({ message: err.message });  // In caso di errore, invia una risposta con lo stato 400 (Richiesta non valida)
  }
});

module.exports = router;
