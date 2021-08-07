const useSum =(data)=>{
 const result = data.reduce((accumulative,current)=>{
     return accumulative + current
 },0)
 return result;
}
export default useSum;