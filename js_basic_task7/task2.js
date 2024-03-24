const film = new Object();
film.name = 'The Matrix';
film.yearOfRelease = 1999;
film.genre = 'sci-fi'
film.score = 8.5;
film.synopsis = function() {
    maxScore= 10;
  return `"${this.name}" is a ${this.genre} film that was released in ${film.yearOfRelease} and received general score of ${this.score} stars out of ${maxScore} from critics.`
};

const building = new Object();
building.name = 'Empire State Building';
building.location = 'Manhattan';
building.type = 'skyscraper'
building.year = 1931;
building.workersCount = 21000 
building.generalInfo = function() {
  return `The ${this.type} called "${this.name}" is located in ${this.location} and has at least ${this.workersCount} employees. It was built in ${this.year}.`;
};

console.log(film.synopsis());
console.log("---------------------------");
console.log(building.generalInfo());