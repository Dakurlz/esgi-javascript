function type_check_v1(value,type){
    if(type === null && value === null) return true
    else if( type =='array' && Array.isArray(value)) return true
    else  if(typeof value == type ) return true;
    else return false

}

function type_check_v2(value,type) {
    if (typeof value == type.type) {
        if (type.value) {
            if (type.value === value) {
                return true
            } else {
                return false
            }
        }else{
            return true
        }
        } else if (type.enum) {
            if (type.enum.includes(value)) {
                return true
            }
        } else {
            return false
        }

}

console.log(type_check_v2({prop1:1},{type:"object"}))
console.log(type_check_v2("foo",{type:"string",value:"foo"}))
console.log(type_check_v2("bar",{type:"string",value:"foo"}))
console.log(type_check_v2(3,{enum:["foo","bar",3]}))