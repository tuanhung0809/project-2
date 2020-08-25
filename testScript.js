

// console.log(ap);

let listMusic =[
    {
    name: 'ok',
    artist: 'binz',
    url: 'music/01 Ok.m4a',
    cover: 'https://i.ytimg.com/vi/SNES5Y-tYxM/hqdefault.jpg'
},
    {
    name: 'hai chu da tung',
    artist: 'nhu viet',
    url: 'music/Hai Chu Da Tung - Nhu Viet_ ACV.flac',
    cover: 'https://data.chiasenhac.com/data/cover/126/125532.jpg'
},
    {
    name: 'con trai cưng',
    artist: 'bray, k-cim',
    url: 'music/Con Trai Cung - K-ICM_ B Ray.m4a',
    cover: 'https://data.chiasenhac.com/data/cover/98/97679.jpg'
},
    {
    name: 'trời hôm nay nhiều mây cực!',
    artist: 'den',
    url: 'music/Troi Hom Nay Nhieu May Cuc_ - Den.mp3',
    cover: 'https://data.chiasenhac.com/data/cover/126/125234.jpg'
},
    {
    name: 'bài này chill phết',
    artist: 'đen',
    url: 'music/Bai Nay Chill Phet - Den.mp3',
    cover: 'https://data.chiasenhac.com/data/cover/105/104834.jpg'
},
    {
    name: 'anh dếch cần gì nhiều ngoài em',
    artist: 'đen, vũ, thành đồng',
    url: 'music/Anh Dech Can Gi Nhieu Ngoai Em - Den_ Vu.mp3',
    cover: 'https://data.chiasenhac.com/data/cover/98/97369.jpg'
},
        {
    name: 'vài lần đón đưa',
    artist: 'soobin hoàng sơn, touliver',
    url: 'music/Vai Lan Don Dua - Soobin Hoang Son_ Toul.mp3',
    cover: 'https://data.chiasenhac.com/data/cover/75/74828.jpg'
},
{
    name: 'phía sau một cô gái',
    artist: 'soobin hoàng sơn',
    url: 'music/Phia Sau Mot Co Gai - Soobin Hoang Son.mp3',
    cover: 'https://data.chiasenhac.com/data/cover/65/64657.jpg'
},
{
    name: 'xin đừng lặng im',
    artist: 'soobin hoàng sơn',
    url: 'music/Xin Dung Lang Im - Soobin Hoang Son.mp3',
    cover: 'https://data.chiasenhac.com/data/cover/75/74260.jpg'
},      
    {
    name: 'chuyến đi của năm (đi để trở về 2) beat',
    artist: 'soobin hoàng sơn',
    url: 'music/Chuyen Di Cua Nam Di De Tro Ve 2_ - Soob.mp3',
    cover: 'https://data.chiasenhac.com/data/cover/82/81161.jpg'
},
    {
    name: 'sóng gió',
    artist: 'k-icm; jack',
    url: 'music/Song Gio - Jack_ K-ICM.mp3',
    cover: 'https://data.chiasenhac.com/data/cover/120/119856.jpg'
},
    {
    name: 'hồng nhan',
    artist: 'jack',
    url: 'music/Hong Nhan - Jack.mp3',
    cover: 'https://data.chiasenhac.com/data/cover/105/104211.jpg'
},
{
    name: 'bạc phận',
    artist: 'jack; k-icm',
    url: 'music/Bac Phan - Jack_ K-ICM.mp3',
    cover: 'https://data.chiasenhac.com/data/cover/103/102994.jpg'
},
        {
    name: 'có chắc yêu là đây',
    artist: 'sơn tùng m-tp',
    url: 'music/Co Chac Yeu La Day - M-TP.mp3',
    cover: 'https://data.chiasenhac.com/data/cover/124/123411.jpg'
},
    {
    name: 'nơi này có anh',
    artist: 'sơn tùng m-tp',
    url: 'Noi Nay Co Anh - Son Tung M-TP.mp3',
    cover: 'https://data.chiasenhac.com/data/cover/87/86272.jpg'
    },
{
    name: 'em không sai chúng ta sai',
    artist: 'erik',
    url: 'music/Em Khong Sai Chung Ta Sai - Erik.mp3',
    cover: 'https://data.chiasenhac.com/data/cover/121/120248.jpg'
},
{
    name: 'sau tất cả',
    artist: 'erik',
    url: 'music/Sau Tat Ca - Erik.mp3',
    cover: 'https://data.chiasenhac.com/data/artist_avatar/3/2116.jpg'
},
{
    name: 'ghen',
    artist: 'erik; Mmn',
    url: 'music/Ghen - Erik_ Min.mp3',
    cover: 'https://data.chiasenhac.com/data/cover/72/71762.jpg'
},
{
    name: 'big city boi',
    artist: 'binz; touliver',
    url: 'music/Big City Boi - Binz_ Touliver.mp3',
    cover: 'https://data.chiasenhac.com/data/cover/124/123404.jpg'
},
{
    name: 'ánh nắng của anh',
    artist: 'đức phúc',
    url: 'music/Anh Nang Cua Anh - Duc Phuc.mp3',
    cover: 'https://data.chiasenhac.com/data/cover/69/68690.jpg'
},
{
    name: 'hơn cả yêu',
    artist: 'đức phúc',
    url: 'music/Hon Ca Yeu - Duc Phuc.mp3',
    cover: 'https://data.chiasenhac.com/data/cover/116/115822.jpg'
},

]


function displayMusic(listMusic,genre) {
    let domMusics = document.getElementById('main-body');
    domMusics.innerHTML = '';
    let totalHTML = `
    <div class="row">
        <div class="col-md-12">
            <h2>${genre}</h2>
        </div>
    </div>
    <div class="row">
    `
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





displayMusic(listMusic,'New Release')

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


function searchSongs() {
    let result = listMusic.filter(function(listMusic){
        return listMusic.name.includes(document.getElementById('searchBar').value);
    })
    // console.dir(result);
    displayMusic(result,'Search Result');
    ap.list.clear();
    ap.list.add(result);
}

function searchSongsEnter(event) {
    
    if (event.key === 'Enter') {
        event.preventDefault();
        searchSongs();
    }
}