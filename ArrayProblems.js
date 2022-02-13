function print2Smallest( arr, arr_size)
{
    let i, first, second;
    if (arr_size < 2)
    {
        console.log(" Invalid Input ");
        return;
    }
 
    first=Number.MAX_VALUE ;
    second=Number.MAX_VALUE ;
    for (i = 0; i < arr_size ; i ++)
    {
        if (arr[i] < first)
        {
            second = first;
            first = arr[i];
        }
        else if (arr[i] < second && arr[i] != first)
            second = arr[i];
    }
    if (second == Number.MAX_VALUE )
        console.log("There is no second smallest element\n");
    else
        console.log("The smallest element is " + first + " and second "+
            "Smallest element is " + second +'\n');
}    
    let arr = [ 15, 50, 44, 10, 84, 18 ];
    let n1 = arr.length;
    print2Smallest(arr, n1);


    //Prime Factors:
    function primeFactors(n)
    {
    // Print the number of 2s that divide n
        while (n % 2 == 0)
        {
            console.log(2 + " ");
            n = Math.floor(n / 2);
        }
        for(let i = 3;
                i <= Math.floor(Math.sqrt(n));
                i = i + 2)
        {
            while (n % i == 0)
            {
                console.log(i + " ");
                n = Math.floor(n / i);
            }
        }
        if (n > 2)
            console.log(n + " ");
    }
    let n =315;
     
    primeFactors(n);



    //Find repeating Element
    function printRepeating(arr , size) 
{
    var i, j;
    console.log("Repeated Elements are :");
    for (i = 0; i < size-1; i++) 
    {
        for (j = i + 1; j < size; j++) 
        {
            if (arr[i] == arr[j]) 
                console.log(arr[i] + " ");
        }
    }
}

var arr = [4, 2, 4, 5, 2, 3, 1];
var arr_size = arr.length;
printRepeating(arr, arr_size);


//sum of element equal to Zero

arr = [0, -1, 2, -3, 1];
	// Prints all triplets in arr[] with 0 sum
	function findTriplets(arr) {
		let found = false;
		for (let i = 0; i < arr.length - 2; i++) {
		for (let j = i + 1; j < arr.length - 1; j++) {
			for (let k = j + 1; k < arr.length; k++) {
				if (arr[i] + arr[j] + arr[k] === 0)
				{
					console.log(arr[i]);
					console.log(" ");
					console.log(arr[j]);
					console.log(" ");
					console.log(arr[k]);
					console.log("****");
					found = true;
					
				}
			}
		}
		if(found === false) {
			console.log(" not exist ");
		}
	}
}
findTriplets(arr);




