const datatime = () => {

    var currentdate = new Date(); 
    var datetimee =  currentdate.getFullYear() + "-"
                    + (currentdate.getMonth()+1)  + "-" 
                    +  currentdate.getDate() + " "  
                    + currentdate.getHours() + ":"  
                    + currentdate.getMinutes() + ":" 
                    + currentdate.getSeconds();
    return datetimee
}
 
export default datatime;