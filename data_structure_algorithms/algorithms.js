function MinCoinChange( coins ) {
	let cache = {};
	this.makeChange = function ( amount ) {
		let me = this;
		if( !amount ){
			return [];
		}
		if( cache[amount] ){
			return cache[amount];
		}
		let min =[], newMin,newAmount;
		for( let i=0; i<coins.length; i++ ){
			let coin =  coins[i];
			newAmount = amount -coin;
			if( newAmount >= 0){
				newMin = me.makeChange( newAmount );
			}
			if( newAmount >0 && ( newMin.length < min.length -1 || !min.length ) && ( newMin.length || ! newAmount) ){
				min = [coin].concat(newMin );
				console.log('new Min ' +min + 'for'+ amount );
			}
		}
		return (cache[amount]= min );
	}
}

let compute = new MinCoinChange( [1,3,4] );
console.log( compute.makeChange(6))