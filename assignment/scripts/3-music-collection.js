console.log('***** Music Collection *****')

const collection = [];

function addToCollection(title, artist, yearPublished, tracks) {
  // define the new record as an object
  const newRecord = {
    title,
    artist,
    yearPublished,
    tracks // defined as: [{name , duration}] --> array of track objects; track objects have name and duration properties
  }
  // add this record object to the collection
  collection.push(newRecord);
  return newRecord;
}

let record = addToCollection("The Clouds Are Abrightening", "The Fuzzy Smokes", 2021, [{
  name: "The Haze",
  duration: "5:31"
}, {
  name: "Grey",
  duration: "3:21"
}]);
console.log(`A new record has been added, check it out: ${record.title}, ${record.artist}, ${record.yearPublished}`);
record = addToCollection("Snacks for Godzilla", "Deaff Platinum", 1987);
console.log(`A new record has been added, and it's a classic: ${record.title}, ${record.artist}, ${record.yearPublished}`);
record = addToCollection("The Greatest Nursery Rhymes Set to Song", "The Happy Chappies", 2011);
console.log(`A new record has been added, great for kids: ${record.title}, ${record.artist}, ${record.yearPublished}`);
record = addToCollection("Great for Kids", "The Nursery Rhymers", 2012);
console.log(`A new record has been added, and it's riffing on the same old tune: ${record.title}, ${record.artist}, ${record.yearPublished}`);
record = addToCollection("The Highs and Lows", "F. Alse Etto", 1945);
console.log(`A new record has been added, let's party like it's '46: ${record.title}, ${record.artist}, ${record.yearPublished}`);
record = addToCollection("Fax. Scan. Copy.", "The Office Workers", 2003);
console.log(`A new record has been added, and it's great for stress relief: ${record.title}, ${record.artist}, ${record.yearPublished}`);
console.log('The complete music collection: ', collection);

function showCollection(collectionArray) {
  console.log(`There are ${collectionArray.length} items in this collection.`);
  // will only print the details of the collection if there are any items in collection
  if (collectionArray.length > 0) {
    console.log('-----------------');
    console.log('These items are:');
    console.log('-----------------');

    for (const item of collectionArray) { // loop through given collection
      console.log(`"${item.title}" by ${item.artist}, published in ${item.yearPublished}`);
      if (item.tracks) { // only display if tracks are listed
        let counter = 1; // counts number of track
        for (const track of item.tracks) {
          console.log(`${counter}. ${track.name}: ${track.duration}`);
          counter++;
        }
      }
    }
  }
}

// to test the showCollection function
showCollection(collection);

function findByArtist(artist) {
  const results = []; // empty array to hold results
  for (const item of collection) { // loop through collection
    if (item.artist === artist) { // if the current record in the collection is by the artist
      results.push(item); // add this record to results
    }
  } // end for
  return results;
}

console.log('Test: should return empty array:', findByArtist('Looneys')); // test for artist not found
console.log('Test: should return one record by F. Alse Etto:', findByArtist('F. Alse Etto')); // test for artist known to be in collection
// test for multiple records by the same artist - adding more records by same artist
addToCollection("Sit. Type. Meet.", "The Office Workers", 2007);
addToCollection("Thank Goodness It's Lunch", "The Office Workers", 2013);
console.log('Test: should return three records by The Office Workers', findByArtist('The Office Workers'));

// test for multiple records with search, add another album
addToCollection("Much", "The Fuzzy Smokes", 2021);
const searchTestObj = {
  artist: 'The Fuzzy Smokes',
  year: 2021
}

function search(obj) {
  const result = []; // array to store all found records
  for (const item of collection) { // loop through collection
    // test whether artist and year is the same
    if (item.artist === obj.artist && item.yearPublished === obj.year) {
      result.push(item);
    }
  }
  return result;
}

// tests for search()
console.log('TESTS FOR SEARCH');
console.log('TEST 1');
console.log('Should return 2 Fuzzy Smokes albums from 1987 and 2021:');
console.log(showCollection(search(searchTestObj)));
console.log('TEST 2');
console.log('Should return 1 Deaff Platinum album from 1987:');
console.log(showCollection(search({
  artist: 'Deaff Platinum',
  year: 1987
})));
console.log('TEST 3');
console.log('Should return 0 albums - both artist and year not in collection');
console.log(showCollection(search({
  artist: 'The Nowheres',
  year: 1903
})));
console.log('TEST 4');
console.log('Should return 0 albums - artist in collection, but not year');
console.log(showCollection(search({
  artist: 'Deaff Platinum',
  year: 2012
})));



//end of file