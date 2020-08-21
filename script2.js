
// Click songs to get id

$(".album-poster").on('click', function(e){
    var dataSwitchedId = $(this).attr('data-switch');

    ap.list.switch(dataSwitchedId); //Change songs
    ap.play()
    $('#aplayer').addClass('showPlayer')
});



const ap = new APlayer({
    container: document.getElementById('aplayer'),
    listFolded: true,

    audio: [
        {
        name: 'OK',
        artist: 'BINZ',
        url: '01 Ok.m4a',
        cover: 'https://i.ytimg.com/vi/SNES5Y-tYxM/hqdefault.jpg'
    },
        {
        name: 'HAI CHU DA TUNG',
        artist: 'NHU VIET',
        url: 'Hai Chu Da Tung - Nhu Viet_ ACV.flac',
        cover: 'https://data.chiasenhac.com/data/cover/126/125532.jpg'
    },
        {
        name: 'CON TRAI CUNG',
        artist: 'BRAY, K-ICM',
        url: 'Con Trai Cung - K-ICM_ B Ray.m4a',
        cover: 'https://data.chiasenhac.com/data/cover/98/97679.jpg'
    },

    ]
});

// console.log(ap);

