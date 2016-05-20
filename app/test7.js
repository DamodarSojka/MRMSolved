export default function test7(string){
    //Write your solution here
    String.prototype.reverse = function(){
        // turn into an array, reverse then array, join without ',' character by using join with empty string
        return this.split('').reverse().join('');
    };
    //
    return string.reverse();
}

