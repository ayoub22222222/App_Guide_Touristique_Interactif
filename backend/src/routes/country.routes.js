const express = require("express");
const router = express.Router();
const countryRepo = require("../repositories/country.repository"); // ✅ Correct import


router.get("/countries", async (req, res) => {
  try {
    console.log('🌐 Request: GET /api/countries');
    const countries = await countryRepo.getAllCountries();
    
    res.json({ 
      success: true, 
      count: countries.length, 
      countries 
    });
  } catch (err) {
    console.error('❌ Route error:', err.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
});


router.get("/countries/:id", async (req, res) => {
  try {
    console.log(`🌐 Request: GET /api/countries/${req.params.id}`);
    const country = await countryRepo.getCountryById(req.params.id);
    
    if (!country) {
      return res.status(404).json({ 
        success: false, 
        message: "Country not found",
        id: req.params.id 
      });
    }
    
    res.json({ 
      success: true, 
      country 
    });
  } catch (err) {
    console.error('❌ Route error:', err.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
});


// router.get('/hotels', async (req, res) => {
//   try {
//     const result = await Data.findOne().lean();
//     const allHotels = [];
    
//     result?.countries?.forEach(country => {
//       country.cities?.forEach(city => {
//         city.hotels?.forEach(hotel => {
//           allHotels.push({
//             ...hotel,
//             city: city.name,
//             cityId: city.id,
//             country: country.name,
//             countryId: country.id
//           });
//         });
//       });
//     });
    
//     res.json({ success: true, count: allHotels.length, hotels: allHotels });
//   } catch (err) {
//     res.status(500).json({ success: false, message: 'Server error' });
//   }
// });

module.exports = router;