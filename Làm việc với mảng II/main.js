const sports = [
    {
        id: 1,
        name: 'Bóng rổ',
        like: 6
    },
    {
        id: 2,
        name: 'Bơi lội',
        like: 5
    },
    {   id: 3,
        name: 'Bóng đá',
        like: 10
    },
    {
        id: 4,
        name: 'Cầu lông',
        like: 3
    },
    {
        id: 5,
        name: 'Điền kinh',
        like: 12
    },
    {
        id: 6,
        name: 'Golf',
        like: 10
    },
    
]

function getMostFavoriteSport(array) {
    var results;
    results = array.filter(function (e){
        return e.like > 5;
    })
    return results;
}


// Expected results:
// console.log(getMostFavoriteSport(sports)) 
// Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]

function sportHandler(sport, index, originArray){
    return {
        id: sport.id,
        name: `ITMO ${sport.name}`,
        like: sport.like,
        likeText: `${sport.name} has ${sport.like} like(s)`
    }
}

var newSports = sports.map(sportHandler);

// var i = 0;

function likeCount(accumulator, currentValue) {
    i++;

    var totalLike = accumulator + currentValue.like;

    console.table({
        'Luot chay:' : i,
        'Bien tich tru: ': accumulator,
        'Gia tri can xu ly: ': currentValue.like,
        'Tong tich tru': totalLike
    });
    return totalLike;
}

// var totalLike = sports.reduce(likeCount,0)

// Làm phẳng mảng
/**
    - Mảng lớn có nhiều lớp, cần trả về 1 mảng nên giá trị khởi tạo là một mảng
    rỗng, tương tự như khởi tạo giá trị ban đầu là 0
    - resultArray ban đầu là một mảng rỗng sau đó được nối với từng phần tử của
    array ban đầu depthArray bằng concat -> Hết bước 1 resultArray = [1]
    - Hết bước 2 là [1,2]
    - Hết bước 3 là [1,2,3,4]
    - ...
 */
var depthArray = [1,2,[3,4],5,6,7,[8,9,10]];

var flatArray = depthArray.reduce(function(resultArray, items){
    return resultArray.concat(items); 
}, [])

// console.log(flatArray)

var watchList = [
    {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
    },
    {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
    },
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
    },
    {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
    }
  ];
    

function calculateRating(filmList) {

    var getFilm = filmList.filter(function(films){
        return films.Director === 'Christopher Nolan';
    })
    console.log(getFilm);
    var imdbTotal = getFilm.reduce(function(imdb, film){
        return imdb + Number(film.imdbRating);
    },0)
    return imdbTotal/getFilm.length
}
  
// Expected results
// console.log(calculateRating(watchList)); // Output: 8.675

const numbers = [1,2,3,4,7]

const result1 = numbers.reduce(function(ele, number){
    return ele+number;
})

// Xây dựng lại reduce
Array.prototype.reduce2 = function(callback, result) {
    let i=0;
    if (arguments.length < 2) {
        i = 1;
        result = this[0];
    }
    
    for (; i < this.length; i++) {
        result = callback(result, this[i], i, this);
    }
    return result;
}

const result2 = numbers.reduce2(function(ele, number){
    return ele+number;
})


var arr = [['name', 'Sơn Đặng'], ['age', 18], ['address', 'Hanoi']]

var myInfo = {  
    name: 'Manh Trung',  
    age: 24,  
    address: 'Hanoi',  
    'my-email': 'trungnm.14498@gmail.com',  
    getName: function() {  
        return this.name;
    }  
};

myInfo.university = 'ITMO'

// console.log(myInfo);

function arrToObj(array) {
    var firstArray = array.reduce(function(arr1, currentArray){
        return arr1.concat(currentArray)
    })
    console.log(firstArray);
    var r = {};
    for(let i = 0; i < firstArray.length; i += 2) {
        let key = firstArray[i], value = firstArray[i + 1];
        r[key] = value;
    }
    return r;

}

// Expected results:
console.log(arrToObj(arr)) // Output: { name: 'Sơn Đặng', age: 18 }
