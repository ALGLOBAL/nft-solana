import express from 'express';

const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.send('Everything gettin\' harder to find\n' +
        'Everybody jumpin\' out of they mind\n' +
        'Everybody going out of they skins\n' +
        'See we get to the end, but that\'s where we begin, you feel it\n' +
        'Mannequins say "We breakin\' the mold"\n' +
        'Breakin\' out and we breakin\' the codes\n' +
        'Similar to the Jacques Cousteau\n' +
        'To the depths and you\'re wet, so your tank explodes, so get it out\n' +
        'Send your body to flight\n' +
        'Everybody got a target tonight\n' +
        'Everybody come along for the ride\n' +
        'All you studs and you duds and you ladies, let\'s fly\n' +
        'Grip the moment like you grippin\' the earth\n' +
        'Feel the weight and you feelin\' the girth\n' +
        'Now you get it, now you feelin\' your worth\n' +
        'Feel the sound you used to make when everything thing used to hurt, it goes');
});
app.listen(port, () => {
    console.log(`server is listening on ${port}`);
});