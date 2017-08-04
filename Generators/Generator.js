// Generator is a function that can be entered and exit multiple time.

function* shopping() {
    // inside the sidlewalk


    // walking down the sidewalk

    // go into the store with cash
    const stuffFromStore = yield 'cash';
    // walking to Laundry place
    const cleanClothes = yield 'laundry'

    // walking back home 

    return [stuffFromStore, cleanClothes];
}


// in the store.
const gen = shopping();
gen.next(); // leaving house
// walked into the store
// walking up and down the aisles..
// purchase our stuff
gen.next('groceries'); // leaving the store with grocerices
gen.next('clean clothes');