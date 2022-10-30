//bai1
let a=1, b=2;
function nghiemPtBac1(a, b) {
    if(a=== 0) return 'vo nghiem'
    else if(a !== 0) return (-b/a);
};
let temp = nghiemptbac1(a, b);
console.log(temp);


//bai2
function tongDeQuy(index) {
    if(index==0) return 0;
    return index + tongDeQuy(index-1);
}
console.log(tongDeQuy(3))


//bai3
arr = [1, 25, 7, -7, -3, 12, -22, 0];
//1
function sortArray() {
    for(let i=0; i<arr.length; i++) {
        for(let j=i+1; j<arr.length; j++) {
            if(arr[i]>arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j]
                arr[j] = temp;
            }
        }
    }
}
sortArray();
console.log(arr);
//2
function sortArray2() {
    for(let i=0; i<arr.length; i++) {
        for(let j=i+1; j<arr.length; j++) {
            if(Math.abs(arr[i]) > Math.abs(arr[j])) {
                let temp = arr[i];
                arr[i] = arr[j]
                arr[j] = temp;
            }

            if(Math.abs(arr[i]) == Math.abs(arr[j]) && arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j]
                arr[j] = temp;
            }
        }
    }
}

sortArray2();
console.log(arr);
