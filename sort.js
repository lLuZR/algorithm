let array =[8,7,6,5,4,3,2,1];

//插入排序
const insertionSort =function () {
	let length = array.length,
		j,temp;
	for( let i=1;i<length;i++){
		j =i;
		temp = array[i];
		while ( j>0 && array[j-1] > temp ){
			array[j] = array[j-1];
			j--;
		}
		array[j] = temp;
	}
}
// insertionSort( array) ;
// console.log( array )

//归并
const mergeSort = function () {
	array = mergeSortRec( array );
}
function mergeSortRec( array ) {
	let length = array.length;
	if( length ===1){
		return array;
	}
	let mid =Math.floor( length/2),
		left = array.slice(0,mid),
		right = array.slice( mid,length );
	return merge( mergeSortRec(left), mergeSortRec(right));
}
function merge( left, right ) {
	let result = [],
		il = 0,
		ir =0;
	while ( il < left.length && ir <right.length ){
		if( left[il] < right[ir]){
			result.push( left[il++]);
		}else{
			result.push( right[ir++]);
		}
	}
	while (il < left.length ){
		result.push( left[il++])
	}
	while ( ir < right.length ){
		result.push( right[ir++])
	}
	return result;
}
// mergeSort();
// console.log( array );

//快速排序
const quickSort = function () {
	quick( array, 0, array.length-1);
};

function quick( array, left, right) {
	let index;
	if( array.length >1 ){
		index = partition( array, left, right );
		if( left < index-1){
			quick( array, left ,index-1)
		}
		if( index < right ){
			quick( array,index,right);
		}
	}
}
function partition(array, left, right ) {
	let pivot = array[ Math.floor( (left+right)/2 )],
		i=left,
		j=right;
	while ( i<j){
		while ( array[i] < pivot ){
			i++;
		}
		while ( array[j] > pivot ){
			j--;
		}
		if( i<=j ){
			swapQuickStort( array, i, j );
			i++;
			j--;
		}
	}
	return i;
}

function swapQuickStort( array, index1, index2 ) {
	let aux = array[index1];
	array[index1] = array[index2];
	array[index2] = aux;
}
quickSort();
console.log( array )