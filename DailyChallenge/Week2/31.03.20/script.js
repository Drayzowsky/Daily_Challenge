// Daily Challenge


 let arr = [5,0,9,1,7,4,2,6,3,8];

    let len = arr.length;
    let x;
        for(let i=0; i < len; i++){
          for (let j=0; j < len; j++){
              if (arr[j] < arr[j+1]){
                 x = arr[j];
                 arr[j] = arr[j+1];
                 arr[j+1] = x;
              }
          }
        }
    console.log(arr)

    let newarr= arr.toString();
    console.log(newarr);
    console.log(arr.join());
    console.log(arr.join("+"));
    console.log(arr.join(" "));