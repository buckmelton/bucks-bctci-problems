// # Multimap

// A multimap is a map that allows multiple key-value pairs with the same key. Implement a multimap data structure with the following API:

// - `add(k, v)`: adds key `k` with value `v` to the multimap, even if key `k` is already found
// - `remove(k)`: removes all key-value pairs with `k` as the key
// - `contains(k)`: returns whether the multimap contains any key-value pair with `k` as the key
// - `get(k)`: returns all values associated to key `k` in a list. If there is none, returns an empty list
// - `size()`: returns the number of key-value pairs in the multimap

class Multimap {
  constructor() {
    this.map = {};
    this.theSize = 0;
  }

  add(k, v) {
    if (!this.map[k]) {
      this.map[k] = [];
    }
    this.map[k].push(v);
    this.theSize++;
  }

  remove(k) {
    if (this.map[k]) {
      let numValues = this.map[k].length;
      delete this.map[k];
      this.theSize -= numValues;
    }
  }

  contains(k) {
    return this.map[k] ? true : false;
  }

  get(k) {
    if (this.map[k]) {
      return [...this.map[k]];
    } else {
      return [];
    }
  }

  size() {
    return this.theSize;
  }
}

/*
Complexity:
Time: All methods are O(1).
Space: All methods except get() are O(N).  get() returns a new array that's the size of the number of values 'v', so O(v).
*/

let mm = new Multimap();
console.log(mm.size());
mm.add('a', 1);
mm.add('a', 2);
mm.add('a', 3);
mm.add('b', 10);
mm.add('b', 11);
console.log("'mm.get('b'): ", mm.get('b'));
console.log("'mm.get('c'): ", mm.get('c'));
console.log("'mm.contains('a'): ", mm.contains('a'));
console.log("'mm.contains('d'): ", mm.contains('d'));
console.log(mm.size());
mm.remove('b');
console.log("mm after removing b: ", mm.size());

console.log(mm);