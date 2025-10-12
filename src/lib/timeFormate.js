const timeFormate = (minutes) =>{
    const hours = Math.floor(minutes/60);
    const minReminder = minutes%60;
    return `${hours}h ${minReminder}min`;
}

export default timeFormate;