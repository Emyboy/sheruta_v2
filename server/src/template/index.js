const host = process.env.ENVIRONMENT
    === 'development'
    ? 'http://localhost:5000/'
    : 'https://sheruta.herokuapp.com/';

export default host;
