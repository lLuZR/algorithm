function Set(){
	let items = {};
	this.has = function ( value ) {
		return items.hasOwnProperty( value );
	}
	this.add = function ( value ) {
		if( !this.has( value ) ){
			items[value] = value;
			return true;
		}
		return false;
	}
	this.remove = function ( value ) {
		if( !this.has( value ) ) return false;
		delete items[value];
		return true;
	}
	this.clear = function(){
		items = {};
	}
	this.size = function () {
		return Object.keys(items).length;
	}
	this.values = function () {
		return Object.keys(items);
	}
	this.valueLegacy = function () {
		let keys = [];
		for( let key in items ){
			if( items.hasOwnProperty(key) ){
				keys.push( key);
			}
		}
		return keys;
	}
	this.union = function ( otherSet ) {
		let unionSet = new Set();
		let values = this.values();
		for( let i=0,l=values.length;i<l;i++ ){
			unionSet.add( values[i] );
		}
		values = otherSet.values();
		for( let j = 0,l=values.length;j<l;j++){
			unionSet.add( values[j] );
		}
		return unionSet;
	}
	this.intersection = function ( otherSet ) {
		let interSectionSet = new Set();
		let values = this.values();
		for( let i=0,l=values.length;i<l;i++){
			if( otherSet.has( values[i] )){
				interSectionSet.add( values[i] );
			}
		}
		return interSectionSet;
	}
}

let setA = new Set();
setA.add(1);
setA.add(1);
setA.add(2);
setA.add(3);

let setB = new Set();
setB.add(3);
setB.add(3);
setB.add(5);
setB.add(6);
setB.add(7);

let unionAB = setA.intersection( setB );
console.log( unionAB.values() )