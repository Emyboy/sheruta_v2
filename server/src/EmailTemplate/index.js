const host = process.env.ENVIRONMENT
    === 'development'
    ? 'http://localhost:5000/'
    : 'http://www.sheruta.ng';

module.exports = host;