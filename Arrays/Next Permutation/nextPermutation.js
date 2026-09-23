// This solution is the optimal solution for this problem .... otherwise there will be a need to find all the possible permutations (via recursion) and then find the next permutation.
let arr = [2,1,5,4,3,0,0];
let size = arr.length;
let index = -1;

function reverse(index ,  size , arr){

    while(index < size ){
        let temp = arr[index];
        arr[index] = arr[size];
        arr[size] = temp ;
        index++;
        size--;
    }
} 

for(let i= size - 2; i>=0; i--){

    if(arr[i] < arr[i+1]){
       index = i ;
       break;
    }
}
// if arr = [5,4,3,2,1] , then we will have to reverse the array because there is no dip. (no breakpoint)
// if(index == -1){
//     reverse( ,arr);
// }

for(let i= size-1; i>index; i--){

        if(arr[i] > arr[index]){
            let temp  = arr[index];
            arr[index] = arr[i];
            arr[i] = temp;
            break;
        }

}
reverse(index + 1 , size - 1 , arr);
console.log(arr);