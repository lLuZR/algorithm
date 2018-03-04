 function Node( element ) {
	this.element = element;
	this.next = null;
}

function LinkedList(){
	let length = 0;
	let head = null;
	this.append = function( element ){
		let node  = new Node( element ),
			current;
		if( head === null ){
			head = node;
		}else{
			current = head;
			while ( current.next ){
				current = current.next;
			}
			current.next = node;
		}
		length++;
	};
	this.insert = function( position,element ){
		if( position > -1 && position <length ){
			let node = new Node( element ),
				current = head,
				previous,
				index = 0;
			if( position ===0 ){
				node.next = head;
				head =node;
			}else{
				while ( index++ < position ){
					previous = current;
					current = current.next;
				}
				previous.next = node;
				node.next = current;
			}
			length++;
			return true;
		}else{
			return false;
		}
	};
	this.removeAt = ( position )=>{
		if( position > -1 && position < length ){
			let current = head,
				previous,
				index = 0;
			if( position === 0 ){
				head = current.next;
			}else{
				while ( index++ < position ){
					previous = current;
					current = current.next;
				}
				previous.next = current.next;
			}
			length--;
			return current.element;
		}else{
			return null;
		}
	};
	this.charAt = function( position ){
		if( position <-1 || position>=length ){
			return undefined;
		}
		let current = head,
			index = 0;
		while ( index++ < position ){
			current = current.next;
		}
		return current;
	};
	this.indexOf = function( element ){
		let current = head,
			index =0;
		while ( current ){
			if( element === current.element ){
				return index;
			}
			index++;
			current = current.next;
		}
		return -1;
	};
	this.remove = function ( element ){
		let index = this.indexOf( element);
		return this.removeAt(index);
	};
	this.toString = function(){
		let current = head,
			string ='';
		while ( current ){
			string+=','+current.element;
			current = current.next;
		}
		return string.slice(1);
	}
	this.isEmpty = function(){
		return length === 0;
	};
	this.size = function () {
		return length;
	};
	this.getHead = function () {
		return head;
	};
}

let list = new LinkedList();
list.append( 15 );
list.append( 10 );
list.append( 1123 );
list.append( "ahaha");
//console.log( list.indexOf( "ahaha") )
//console.log( list.getHead() )
 //console.log( list.toString() );
//console.log( list.removeAt(2));
console.log( list.insert(2,"dier") )
 console.log( list.charAt(2));
