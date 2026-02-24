const Country = require("../models/Country");
const Data = require("../models/Country"); 

const getAllCountries = async () => {
  try {
    console.log('📦 Fetching all countries from DB...');
    
    
    const result = await Country.findOne().lean();
    const countries = result?.countries || [];
    
    console.log(`✅ Fetched ${countries.length} countries`);
    return countries;
  } catch (err) {
    console.error('Error in getAllCountries:', err.message);
    throw err;
  }
};

const getCountryById = async (id) => {
  try {
    console.log(`Searching for country id: "${id}"`);
    
  
    const result = await Country.findOne().lean();
    const countries = result?.countries || [];
    
    
    const country = countries.find(c => c.id === id);
    
    if (country) {
      console.log(`Found: ${country.name}`);
    } else {
      console.warn(`Country "${id}" not found`);
    }
    
    return country || null;
  } catch (err) {
    console.error(`❌ Error in getCountryById:`, err.message);
    throw err;
  }
};

module.exports = {
  getAllCountries,
  getCountryById
};