// console.log(ap);

let listMusic = [
    {
    name: 'ok',
    artist: 'BINZ',
    url: '01 Ok.m4a',
    cover: 'https://i.ytimg.com/vi/SNES5Y-tYxM/hqdefault.jpg'
},
    {
    name: 'hai chu da tung',
    artist: 'NHU VIET',
    url: 'Hai Chu Da Tung - Nhu Viet_ ACV.flac',
    cover: 'https://data.chiasenhac.com/data/cover/126/125532.jpg'
},
    {
    name: 'con trai cung',
    artist: 'BRAY, K-ICM',
    url: 'Con Trai Cung - K-ICM_ B Ray.m4a',
    cover: 'https://data.chiasenhac.com/data/cover/98/97679.jpg'
},
{
    name: 'con trai cung',
    artist: 'BRAY, K-ICM',
    url: 'Con Trai Cung - K-ICM_ B Ray.m4a',
    cover: 'https://data.chiasenhac.com/data/cover/98/97679.jpg'
},
]

function displayMusic(listMusic) {
    let domMusics = document.getElementById('musicNewRelease');
    domMusics.innerHTML = '';
    let totalHTML = '<div class="row">'
    for (let i = 0; i < listMusic.length; i++) {
        const music = listMusic[i]
        let html = `
        <div class="col-md-3">
            <a href="javascript:void();" class="album-poster" data-switch="${i}">
                <img src="${music['cover']}" alt="">
            </a>
            <h4>${music['name']}</h4>
            <p>${music['artist']}</p>
        </div>`;
        totalHTML += html;
        if (i%4 === 3) {
            totalHTML += `</div><div class="row">`;
        }
    }
    totalHTML += `</div>`;
    domMusics.innerHTML = totalHTML;
}

displayMusic(listMusic)

// Click songs to get id
$(document).on('click','.album-poster', function(e){
    var dataSwitchedId = $(this).attr('data-switch');
    // console.log(dataSwitchedId);
    ap.list.switch(dataSwitchedId); //Change songs
    ap.play()
    $('#aplayer').addClass('showPlayer')
});



const ap = new APlayer({
    container: document.getElementById('aplayer'),
    listFolded: true,

    audio: listMusic,
});


// console.log(document.getElementById('searchBar').value);
console.log(ap.audio);



function searchSongs() {
    let result = listMusic.filter(function(listMusic){
        return listMusic.name.includes(document.getElementById('searchBar').value);
    })
    // console.dir(result);
    displayMusic(result);
    ap.list.clear();
    ap.list.add(result);
}

function searchSongsEnter(event) {
    
    if (event.key === 'Enter') {
        event.preventDefault();
        searchSongs();
    }
}