var DivedeAndConqure = {
    mergesort: function(array){
        var left, right;
        if(array.length == 1){
            return array;
        }
        else if(array.length == 2){
            return array[0] > array[1] ? [array[1],array[0]] : array;
        }
        else{
            var halfIndex = Math.trunc(array.length/2);
            left = array.slice(0,halfIndex);
            right = array.slice(halfIndex,array.length);
            return this.subroutine(this.mergesort(left),this.mergesort(right));
        }
    },

    subroutine: function subroutine(firstHalf,secondHalf){
                var sorted = [];
                var i = 0;
                var j = 0;
                while(i <= firstHalf.length || j <= secondHalf.length){
                    var numOfFirstHalf = firstHalf[i];
                    var numOfSecondHalf = secondHalf[j];

                    if( numOfFirstHalf != undefined && numOfSecondHalf != undefined){
                        if(numOfFirstHalf > numOfSecondHalf){
                            sorted.push(numOfSecondHalf);
                            j++;
                        }
                        else{
                            sorted.push(numOfFirstHalf);
                            i++;
                        }
                    }
                    else if (numOfFirstHalf != undefined && numOfSecondHalf == undefined){
                        sorted.push(numOfFirstHalf);
                        i++;
                    }
                    else if (numOfFirstHalf == undefined && numOfSecondHalf != undefined){
                        sorted.push(numOfSecondHalf);
                        j++;
                    }
                    else{
                        break;
                    }
                }
                return sorted;
            },
        bigIntegerMultiply: function(a,b){
              var ah = (a >> 16) & 0xffff, al = a & 0xffff;
            var bh = (b >> 16) & 0xffff, bl = b & 0xffff;
            var high = ((ah * bl) + (al * bh)) & 0xffff;
            return ((high << 16)>>>0) + (al * bl);
        }
        
};


var numberArray = [4,2,1,5,7,9,6];
var sortedArray = DivedeAndConqure.mergesort(numberArray);
console.log(numberArray);
console.log(sortedArray);

var numberArray1 = [6,7,0,4,5,7,2,1,3,4,5,0,9,8,11];
var sortedArray1 = DivedeAndConqure.mergesort(numberArray1);
console.log(numberArray1);
console.log(sortedArray1);

// var numberA = 3141592653589793238462643383279502884197169399375105820974944592;
// var numberB = 2718281828459045235360287471352662497757247093699959574966967627;
// console.log(DivedeAndConqure.bigIntegerMultiply(numberA,numberB).toString());


// Decimal.set({ precision: 100000000});

math.config({
  number: 'BigNumber', // Default type of number:
                       // 'number' (default), 'BigNumber', or 'Fraction'
  precision: 150      // Number of significant digits for BigNumbers
});
var numberA = new math.bignumber('3141592653589793238462643383279502884197169399375105820974944592');
var numberB = new math.bignumber('2718281828459045235360287471352662497757247093699959574966967627');
var ans = math.multiply(numberA, numberB);
console.log(ans.toFixed(128));
console.log(ans.toString());
// var total = numberA.mul(numberB);
// console.log(total);
// console.log(total.toString());