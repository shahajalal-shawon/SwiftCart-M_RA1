1. In javascript, "undefiend" meaning "absence of a value" & "null" meaning "intentional absence of an object value".
2. Uses of "Map", Basically we ues map when we need a singel elements of an array.Map dose loop in this array and return a new array with this new elements...forEach also dose kind of same task like(loop, return only elements) but forEach don't return new array.
3. "==" compare value only but "===" compare value and type also. "==" don't care about type & "===" value and type must match.
4. The significance of async/await in fecthing API data and it's able to provide a cleaner, more readable, and synchronous-looking syntax for handling asynchronous operations.which make code easy to read and maintain.
5. In javascript, "Scope" means visibility of a variables. in js we see 3 type on scope(global, functional and block)

  ***>global scope => where ever we diclire a variable we can access it any function or block.
    ex. let age = 30;
        function showAge(){
            console.log(age)
        }

  ***> function scope => we can diclire a variable only inside of a function,
    ex. function showAge(){
        let age = 30;
        console.log(age)
    }

  ***> block scope => we can access only inside the block
    ex. if (true) {
        let city = "Dhaka";
        }
