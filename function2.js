var name = {
    a : "rohit",
    b : "amar",
    city : function(){
        return function(){
            return {
                first : "neha",
                second : function(){
                    return "indore";
                }
            }
    
        }
    }


}


var ans = name.city();

var address = ans();

var name = address.second();

console.log(name);
