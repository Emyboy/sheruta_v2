const db = require('../../Knex');

module.exports = class ViewController {
    static async getAllAreas(req, res){
        const areas = [];
        try {
            const apartmentList = await db.select('*').from('apartment').returning('*');
            apartmentList.forEach((val, i) => {
                areas.push(val.area.toLocaleLowerCase());
            });
            const sharedList = await db.select('*').from('shared').returning('*');
            sharedList.forEach((val, i) => {
                areas.push(val.area.toLocaleLowerCase());
            });
            const unique = [...new Set(areas)];
            res.send(unique);
        } catch (error) {
            res.json({
                status: 500,
                message: 'Error Loading Areas',
                error
            })
        }
    }

    static Search(req, res) {
        console.log(req.params)
        const { area, bedrooms, sittingrooms, price, type } = req.params;
        db.select('*').from(type === "Apartment" ? "apartment" : "shared").where({
            bedrooms, sittingrooms, area
        }).returning('*')
            .then(results => {
                if(results.length === 0){
                    res.json({
                        status: 200,
                        message: type === "Apartment" ? "apartment" : "shared",
                        results
                    })
                }else { 
                    res.json({
                        status: 404,
                        message: 'No Result Found',
                        results
                    })
                }
            })
            .catch(err => {
                res.json({
                    status: 500,
                    message: 'Error Loading Results',
                    error: err
                })
            })
    }
}