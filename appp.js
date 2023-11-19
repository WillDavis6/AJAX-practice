// console.log("Let's get this party started!");

async function getGifs() {
    const res = await axios.get('http://api.giphy.com/v1/gifs/search?');
    console.log(res)
};
