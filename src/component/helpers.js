// import { eventList } from "./eventList";


// selectedEvents: [],
//   monthlyPass: false,
//   battlePass: false,
//   shopPulls: false,
//   abyssStars: 0,
//   endDate: todayString,
//   gemInput: "",

export const calcGems = (gemInput, bpInput, state) => {

    var result = "Gems you will be able to save is: ";
    const welkinCheck = state.monthlyPass;
    const bpChecked = state.battlePass;
    const shopChecked = state.shopPulls;
    const abyss = state.abyssStars * 60 / 3;
    var bplvl = Number(bpInput);

    const today = new Date();
    today.setHours(0,0,0,0);
    today.setDate(today.getDate() + 1);
    const enddate = new Date(state.endDate);
    enddate.setHours(0,0,0,0);

    if  (today > enddate) {
        return "Please enter a date after today.";
    }

    var gems = Number(gemInput);
    // const eventDates = [];
    // for (var e in events) {
    //     eventDates.push(processDate(events[e][1]));
    // }
    while(today <= enddate) {
        gems += 60;
        if(welkinCheck) {
            gems += 90;
        }
        if(shopChecked && today.getDate() == 1) {
            gems += 160*5;
        }
        if(abyss > 0 && (today.getDay() == 1 && mocReset(today))) {
            gems += abyss;
        }
        if(bpChecked) {
            bplvl += 1.5;
            if([10, 20].includes(Math.floor(bplvl)) || [11, 21].includes(bplvl))
                gems += 160;
            else if(Math.floor(bplvl) == 30 || bplvl == 31)
                gems += 320;
            else if(Math.floor(bplvl) >= 50)
                gems += 680;
        }
        // gems += eventGems(today);
        today.setDate(today.getDate() + 1);
    }
    result += (gems + "\n");
    result += ("That's " + Math.trunc(gems / 160) + " pulls!");

    return result;
};

const mocReset = (day) => {
    const oneDay = 24 * 60 * 60 * 1000;
    const firstReset = new Date("2023-05-01");
    firstReset.setMinutes(firstReset.getMinutes() + firstReset.getTimezoneOffset())

    const diffDays = Math.round(Math.abs((day - firstReset) / oneDay));
    return (diffDays % 14) == 0;
};

// function eventGems(d) {
//     gems = 0;
//     for(var e in eventDates) {
//         if(compareDates(eventDates[e], d) < 0) {
//             continue;
//         }
//         else if(compareDates(eventDates[e], d) > 0) {
//             return gems;
//         }
//         else if(compareDates(eventDates[e], d) == 0) {
//             gems += events[e][2];
//         }
//     }
//     return gems;
// }