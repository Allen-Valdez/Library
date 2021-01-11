class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }
  set isCheckedOut(checkedOut) {
    this._isCheckedOut = checkedOut;
  }
  toggleCheckOutStatus() {
    this.isCheckedOut = !this.isCheckedOut;
  }
  getAverageRating() {
    const ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);
    const lengthOfRatings = this.ratings.length;
    if (lengthOfRatings === 0){
      return 'No rating has been left yet, be the first!'
    } else {
       const average = ratingsSum / lengthOfRatings
       return average
    }
    
  }
  addRating(rate) {
    if (rate >= 1 && rate <= 5){
      this.ratings.push(rate)
    } else {
      console.log('Invalid rating! Please input a rating between 1 - 5')
    }
  }
}

class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
}

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);

historyOfEverything.toggleCheckOutStatus();

console.log(historyOfEverything.isCheckedOut)

historyOfEverything.addRating(4)
historyOfEverything.addRating(5)
historyOfEverything.addRating(5)

console.log(`${historyOfEverything.title}'s Rating: ${historyOfEverything.getAverageRating()}`)

const speed = new Movie('Jan de Bont', 'Speed', 116);

speed.toggleCheckOutStatus();
console.log(`${speed.title} check out status: ${speed.isCheckedOut}`);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

console.log(`${speed.title}'s Rating: ${speed.getAverageRating()}'`);

class CD extends Media {
  constructor(artist, title, songs){
    super(title);
    this._artist = artist;
    this._songs = [];
  }
  get artist() {
    return this._artist;
  }
  get songs() {
    return this._songs;
  }
  addSong(song) {
    this.songs.push(song)
  }
}

const hunnitCent = new CD('Hunnit Cent', 'Get Coding or Die Trying', []);


hunnitCent.toggleCheckOutStatus();
console.log(`${hunnitCent.title} check out status: ${hunnitCent.isCheckedOut}`);

hunnitCent.addRating(5);
console.log(`${hunnitCent.title}'s Rating: ${hunnitCent.getAverageRating()}'`);

hunnitCent.addSong('What Up Coder');
hunnitCent.addSong('Patiently Coding');
hunnitCent.addSong('Many Coders');
hunnitCent.addSong('In Da Syntax');
hunnitCent.addSong('Coding All the Time');
hunnitCent.addSong('Code [Explicit]');
// 'What Up Coder', 'Patiently Coding', 'Many Coders', 'In Da Syntax', 'Coding All the Time', 'Code', 'If I Code'

console.log(hunnitCent.songs);