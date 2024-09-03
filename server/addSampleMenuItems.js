const mongoose = require('mongoose');
const MenuItem = require('./models/MenuItem');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const sampleMenuItems = [
  // Pizze
  {
    name: "Margherita",
    description: "Pomodoro, mozzarella, basilico",
    price: 7.50,
    category: "Pizze"
  },
  {
    name: "Diavola",
    description: "Pomodoro, mozzarella, salame piccante",
    price: 8.50,
    category: "Pizze"
  },
  {
    name: "Quattro Stagioni",
    description: "Pomodoro, mozzarella, funghi, prosciutto, carciofi",
    price: 9.00,
    category: "Pizze"
  },

  // Primi
  {
    name: "Spaghetti alla Carbonara",
    description: "Guanciale, uova, pecorino romano, pepe",
    price: 12.00,
    category: "Primi"
  },
  {
    name: "Lasagna",
    description: "Sfoglie di pasta all'uovo, ragù, besciamella",
    price: 11.00,
    category: "Primi"
  },
  
  // Secondi
  {
    name: "Bistecca alla Fiorentina",
    description: "Bistecca di manzo cotta alla griglia",
    price: 25.00,
    category: "Secondi"
  },
  {
    name: "Pollo alla Cacciatora",
    description: "Pollo cucinato con pomodori, olive e vino",
    price: 15.00,
    category: "Secondi"
  },
  
  // Antipasti
  {
    name: "Bruschetta al Pomodoro",
    description: "Pane tostato con pomodoro, basilico, aglio e olio d'oliva",
    price: 5.00,
    category: "Antipasti"
  },
  {
    name: "Prosciutto e Melone",
    description: "Fette di prosciutto crudo con melone fresco",
    price: 8.00,
    category: "Antipasti"
  },
  
  // Dolci
  {
    name: "Tiramisù",
    description: "Dolce con mascarpone, caffè e cacao",
    price: 6.00,
    category: "Dolci"
  },
  {
    name: "Panna Cotta",
    description: "Dolce a base di panna cotta, servito con frutti di bosco",
    price: 5.50,
    category: "Dolci"
  },
  
  // Bevande
  {
    name: "Acqua Minerale",
    description: "Acqua naturale o frizzante",
    price: 2.00,
    category: "Bevande"
  },
  {
    name: "Coca Cola",
    description: "Bevanda gassata classica",
    price: 3.00,
    category: "Bevande"
  },
  
  // Vini
  {
    name: "Chianti Classico",
    description: "Vino rosso toscano",
    price: 20.00,
    category: "Vini"
  },
  {
    name: "Prosecco",
    description: "Vino bianco frizzante",
    price: 18.00,
    category: "Vini"
  }
];

const addSampleMenuItems = async () => {
  try {
    await MenuItem.deleteMany({}); // Cancella gli elementi del menu esistenti
    const result = await MenuItem.insertMany(sampleMenuItems);
    console.log(`${result.length} menu items added successfully`);
  } catch (error) {
    console.error('Error adding menu items:', error);
  } finally {
    mongoose.disconnect();
  }
};

addSampleMenuItems();
