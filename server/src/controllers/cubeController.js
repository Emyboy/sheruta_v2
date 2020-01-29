
const knex = require('../../Knex');




class CubeController {

    static async addToCube(req, res) {
        const { hostelid } = req.body;
        const { userid } = req.params;
        try {
            const type = String(req.body.type).toLowerCase();
            const cube = await knex.select('*').from(`${type}`).where({ id: hostelid });
            const addedCube = await knex(`cube`).insert({ ...cube[0], userid }).returning('*');
            return res.status(200).json(addedCube);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    static async removeCube(req, res) {
        const { userid, hostelid, type } = req.body;
        try {
            const cube = await knex('cube').where({ userid, id: hostelid, type }).del();
            return res.json(cube);
        } catch (error) {
            return res.json(error);
        }
    }

    static async checkIfUserCube(req, res) {
        const { userid, hostelid, type } = req.body;
        try {
            const cube = await knex('cube').where({ userid, id: hostelid, type }).returning('*');
            if (cube.length === 1) {
                res.send(true)
            } else {
                res.send(false);
            }
        } catch (error) {
            res.json(error);
        }
    }

    static async getAllCubes(req, res) {
        try {
            const cubes = await knex.select('*').from('cube').returning('*');
            return res.json(cubes);
        } catch (error) {
            return res.json(error);
        }
    }

    static async getUserCubes(req, res) {
        const { userid } = req.params;
        try {
            const cubes = await knex.select('*').from('cube').where({ userid }).returning('*');
            console.log('user cube', cubes[0].area);
            res.send(cubes);
        } catch (error) {
            res.json({ 'error': error })
        }
    }
}

module.exports = CubeController;