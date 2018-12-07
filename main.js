for (i = 0; i < 7; i ++){
    if (i == 0)
        console.log("Sleep in.")
    else if (i == 6)
        console.log("Sleep in.")
    else
        console.log("Go to Work.") 

}

var day = {"January": 31,"February": 28, "March": 31,"April": 30,"May":31,"June": 30,"July":31, "August":31, "September":30, "October":31, "November":31, "December":31}
function dayCalc(month,year){
    if ((year % 4) == 0 && (year % 100 !== 0)){
        day.February += 1
        console.log(day[month])
    
    
    }
    else{console.log(day[month])}
}


dayCalc("February", 2000)
    






var party = 4
var bill = 200
var service = ["good", "fair", "bad"]
function billCalc(bill,service){
    if (service == "good")
       totalBill = bill + bill * 0.2
    else if (service == "fair")
       totalBill = bill + bill * 0.15
    else if (service == "bad")
       totalBill = bill + bill * 0.1
    console.log(totalBill / party)
       
}

billCalc(bill, "good")
