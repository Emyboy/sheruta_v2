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
        const { area, bedrooms, sittingrooms, price, type } = req.params;
        db.select('*').from(type === "apartment" ? "apartment" : "shared").where({
            bedrooms, toilets: sittingrooms, area
        }).returning('*')
            .then(list => {
                res.json({
                    status: 200,
                    message: type === "apartment" ? "apartment": "shared",
                    list
                })
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