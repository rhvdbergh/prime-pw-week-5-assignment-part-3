console.log('***** Music Collection *****')

const collection = [];


function addToCollection(title, artist, yearPublished) {
  const newRecord = {
    title,
    artist,
    yearPublished
  }
  collection.push(newRecord);
  return newRecord;
}

let record = addToCollection("The Clouds Are Abrightening", "The Fuzzy Smokes", 2021);
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
  console.log('-----------------');
  console.log('These items are:');
  console.log('-----------------');
  for (const item of collectionArray) {
    console.log(`"${item.title}" by ${item.artist}, published in ${item.yearPublished}`);
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