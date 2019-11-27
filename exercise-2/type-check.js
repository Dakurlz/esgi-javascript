function type_check_v1(value,type){
    if(type === null && value === null) return true
    else if( type =='array' && Array.isArray(value)) return true
    else  if(typeof value == type ) return true;
    else return false

}
