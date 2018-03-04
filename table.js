function HashTable() {
	let table = [];
	let loseloseHashCode = function ( key ) {
		let hash = 0;
		for( let i =0;i<key.length;i++ ){
			hash+=key.charCodeAt(i);
		}
		return hash %37;
	}
	this.put = function (key,value) {
		let position = loseloseHashCode( key );
		console.log( position + '-' + key);
		table[position] = value;
	}
	this.get = function ( key ) {
		return table[ loseloseHashCode(key)];
	}
	this.remove = function ( key ) {
		table[ loseloseHashCode(key)] = undefined;
	}
}

let hash = new HashTable();
hash.put('Gandalf',"asdfsd@email.com");