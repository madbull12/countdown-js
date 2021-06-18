const countdown = () => {
    const countDate = new Date('January 1, 2022 00:00:00').getTime();
    const current = new Date().getTime();
    const endTime = countDate - current;

    if(current <= countDate) {
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
    
        const textDay =Math.floor(endTime / day);
        const textHour = Math.floor((endTime % day) /hour);
        const textMinute = Math.floor((endTime % hour) /minute);
        const textSecond = Math.floor((endTime % minute) /second);
     
        document.querySelector('.second h1').innerText = textSecond;
        document.querySelector('.day h1').innerText = textDay;
        document.querySelector('.hour h1').innerText = textHour;
        document.querySelector('.minute h1').innerText = textMinute;
    } else {
        giveawayOver();
    }


}

const giveawayOver = () => {
    const countDownText = document.querySelectorAll(".timer div");
    const title = document.querySelector(".title h1");
    title.innerText = "Happy New Year";
    countDownText.forEach((text) => {
        const textH1 = text.querySelector("h1");
        textH1.innerText = "00";
    })
}

setInterval(countdown, 1000);

