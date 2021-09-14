console.log('***** Music Collection *****')

const collection = [];

function addToCollection(title, artist, yearPublished, tracks) {
  // define the new record as an object
  const newRecord = {
    title,
    artist,
    yearPublished,
    tracks // defined as: [{name , duration}] --> array of track objects; track objects have name and duration properties
    // tracks is not a required property for other functions to work
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
// add records to test function
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
          console.log(`  ${counter}. ${track.name}: ${track.duration}`);
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
    if (obj.artist && obj.year && !(obj.trackName)) { // only given artist and year
      if ((item.artist === obj.artist && item.yearPublished === obj.year)) {
        result.push(item);
      }
    } else if (obj.trackName && !(obj.artist) && !(obj.year)) { // end if only given artist and year
      if (item.tracks) { // will only search if the record has tracks listed
        for (const track of item.tracks) {
          if (track.name === obj.trackName) {
            result.push(item);
          }
        } // end for tracks loop
      } // end if item.tracks
    } else if (obj.trackName && obj.artist && obj.year) { // end else if only track
      if (item.tracks) { // will only search if the record has tracks listed
        for (const track of item.tracks) {
          if (track.name === obj.trackName && item.artist === obj.artist && item.yearPublished === obj.year) {
            result.push(item);
          }
        } // end for tracks loop
      } // end if item.tracks
    } else if (obj.artist && !(obj.year) && !(obj.trackName)) { // end else if all three criteria given
      if (obj.artist === item.artist) {
        result.push(item);
      }
    } else if (obj.year && !(obj.artist) && !(obj.trackName)) {
      if (obj.year === item.yearPublished) {
        result.push(item);
      }
    } else if (obj.artist && obj.trackName && !(obj.year)) {
      if (item.tracks) { // will only search if the record has tracks listed
        for (const track of item.tracks) {
          if (track.name === obj.trackName && item.artist === obj.artist) {
            result.push(item);
          }
        } // end for tracks loop
      } // end if item.tracks
    } else if (obj.year && obj.trackName && !(obj.artist)) {
      if (item.tracks) { // will only search if the record has tracks listed

        for (const track of item.tracks) {
          if (track.name === obj.trackName && item.yearPublished === obj.year) {
            result.push(item);
          }
        }
      } // end for tracks loop
    } // end if item.tracks

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

console.log('TEST 5');
console.log('Should return 1 album - based on track name');
console.log(showCollection(search({
  trackName: 'Grey'
})));
console.log('TEST 6');
console.log('Should return 1 album - based on year and trackName');
console.log(showCollection(search({
  year: 2021,
  trackName: 'Grey'
})));
console.log('TEST 6');
console.log('Should return 1 album - based on artist and trackName');
console.log(showCollection(search({
  artist: 'The Fuzzy Smokes',
  trackName: 'Grey'
})));
console.log('TEST 7');
console.log('Should return 3 albums - based on artist alone');
console.log(showCollection(search({
  artist: 'The Office Workers'
})));
console.log('TEST 8');
console.log('Should return 2 albums - based on year alone');
console.log(showCollection(search({
  year: 2021
})));
console.log('TEST 9');
console.log('Should return 0 albums - year correct, but track not');
console.log(showCollection(search({
  year: 2021,
  trackName: 'Hide! Hide!'
})));
console.log('TEST 10');
console.log('Should return 0 albums - artist correct, but track not');
console.log(showCollection(search({
  artist: 'The Office Workers',
  trackName: 'Hide! Hide!'
})));




//end of file