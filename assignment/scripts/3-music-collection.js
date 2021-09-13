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
record = addToCollection("Snacks For Godzilla", "Deaff Platinum", 1987);
console.log(`A new record has been added, and it's a classic: ${record.title}, ${record.artist}, ${record.yearPublished}`);
console.log('The complete music collection: ', collection);