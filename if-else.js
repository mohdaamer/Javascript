//Hour
// If hour is between 6am to 12pm: Good Morning
// If it is between 12pm to 6pm: Good afternoon
// Otherwise : Good evening

var hour = 20;
if(hour>=6 && hour<12)
    console.log("Good Morning");
 else if(hour >= 12 && hour <18)
    console.log('Good Afternoon');
 else 
    console.log('Good evening');