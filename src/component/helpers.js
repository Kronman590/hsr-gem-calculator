import { eventList } from "./eventList";

export const calcGems = (gemInput, bpInput, eqlvl, state) => {

    var result = "Gems you will be able to save is: ";
    const welkinCheck = state.monthlyPass;
    const bpChecked = state.battlePass;
    const simUChecked = state.simUniverse;
    const shopChecked = state.shopPulls;
    const memOfChaos = state.abyssStars[0] * 60 / 3;
    const pureFiction = state.abyssStars[1] * 60;
    var bplvl = Number(bpInput);

    const includeEvents = JSON.parse(JSON.stringify(state.selectedEvents));

    const today = new Date();
    today.setHours(0,0,0,0);
    today.setDate(today.getDate() + 1);
    const enddate = new Date(state.endDate);
    enddate.setHours(0,0,0,0);

    if  (today > enddate) {
        return "Please enter a date after today.";
    }

    const simUMap = {
        0: 75,
        1: 75,
        2: 105,
        3: 135,
        4: 165,
        5: 195,
        6: 225
    };

    var gems = Number(gemInput);
    
    while(today <= enddate) {
        gems += 60;
        if(welkinCheck) {
            gems += 90;
        }
        if(shopChecked && today.getDate() == 1) {
            gems += 160*5;
        }
        if(memOfChaos > 0 && (today.getDay() == 1 && mocReset(today, true))) {
            gems += memOfChaos;
        }
        if(pureFiction > 0 && (today.getDay() == 1 && mocReset(today, false))) {
            gems += pureFiction;
        }
        if(bpChecked && bplvl < 50) {
            bplvl += 1.5;
            if([10, 20].includes(Math.floor(bplvl)) || [11, 21].includes(bplvl))
                gems += 160;
            else if(Math.floor(bplvl) == 30 || bplvl == 31)
                gems += 320;
        }
        if (simUChecked && today.getDay() == 1) {
            gems += simUMap[eqlvl];
        }
        gems += eventGems(today, includeEvents);
        today.setDate(today.getDate() + 1);
    }
    result += (gems + "\n");
    result += ("That's " + Math.trunc(gems / 160) + " pulls!");

    return result;
};

const mocReset = (day, pf) => {
    const oneDay = 24 * 60 * 60 * 1000;
    const date = pf ? "2024-01-08" : "2023-12-25"
    const firstReset = new Date(date);
    firstReset.setMinutes(firstReset.getMinutes() + firstReset.getTimezoneOffset())

    const diffDays = Math.round(Math.abs((day - firstReset) / oneDay));
    return (diffDays % 28) == 0;
};

const eventGems = (day, includeEvents) => {
    const dayString = (day.getYear()+1900) + "-" + (day.getMonth() < 9 ? "0"+(day.getMonth()+1) : day.getMonth()+1) + "-" + day.getDate();
    var gems = 0;
    const eventsToday = eventList.filter((e) => (e[1] == dayString && !includeEvents.includes(e)));
    eventsToday.forEach((e) => gems += e[2])
    const acc = {};
    includeEvents.forEach((e) => {
        if (!(Object.keys(acc)).includes(e[0])) {
            gems += e[2];
            acc[e[0]] = includeEvents.indexOf(e);
        }
    })
    Object.values(acc).reverse().forEach(v => includeEvents.splice(v, 1));
    return gems;
}