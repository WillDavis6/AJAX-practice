// console.log("Let's get this party started!");


// $(document).ready(function () {
//     $(".btn").click(function (){
//         let userSearch = $('form').find('input[type=text]').val();
//     console.log(userSearch)
// });
   
// })

$('.button-input').on('click', function (e) {
    e.preventDefault();
    let title = $('.form-input').eq(0).val();
    $('div').html('<div class="PEW"> <img src:"' + getGifs(title) + '"> </div>').append(
        '<button type="button" class="will_blow_up">dEsTRoy aLL</button>'
    )

    $('.will_blow_up').on('click', deleteGif)
})



function deleteGif(e) {
    e.target.parentElement.remove();
}

async function getGifs(entry) {
    const res = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${entry}&api_key=UVxzPKg9NgURWRmrHukaUysgMURwwQni`);
    console.log(res.data[0].images.original.url);
    return res.data[0].images.original.url;
    // $("div").append()
};
