// Implement Linear Search Algorithms that search a provided Array for the provided value.
// The Linear Search Algorithms will either return a boolean, index, or value back.

// const foods = ["pizza", "orange", "yogurt"];
 //--> 0
// linearSearchIncludes(foods, "pizza") --> true
// linearSearchFind(foods, food => food === "pizza") --> "pizza"

function linearSearchIndexOf(arr, val) {
  let cb
  for(var i=0;i<arr.length;i++){
    if(val===arr[i]){
      cb=i
      return i
    }
    // linearSearchFind(arr, cb)
  }
return -1
}

// linearSearchIndexOf(foods, "pizza")
// document.getElementById("mocha").innerHTML  += "<h1>opopopop</h1>"
// linearSearchIndexOf(arr,val)


// function linearSearchFind(arr, cb) {
//   for(var i=0;i<arr.length;i++){
//     if(cb!==arr[i]){
//       return "undefined"
      
//     }
//     else{
//       return cb
//     }

// }
// return "undefined"

// }

















mocha.setup("bdd");
const { assert } = chai;

const foods = ["pizza", "orange", "yogurt"];
const people = [{ name: "Kevin", last: "Nguyen", born: 1995 }];

describe("linearSearchIndexOf()", () => {
  it("returns index of found item", () => {
    assert.equal(linearSearchIndexOf(foods, "pizza"), 0);
    assert.equal(linearSearchIndexOf(foods, "yogurt"), 2);
  });
  it("returns -1 if item not found", () => {
    assert.equal(linearSearchIndexOf(foods, "laptop"), -1);
  });
});


describe.skip("linearSearchFind()", () => {
  it("returns item back if found", () => {
    const kevin = people[0];
    assert.equal(
      linearSearchFind(people, person => person.name === "Kevin"),
      kevin
    );
  });
  it("returns undefined if item NOT found", () => {
    assert.equal(
      linearSearchFind(people, person => person.name === "Kevinn"),
      undefined
    );
  });
});

mocha.run();
