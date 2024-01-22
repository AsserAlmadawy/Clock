let hrsMins = [];

const minutes = document.querySelector('.minutes');
const hours = document.querySelector('.hours');
const seconds = document.querySelector('.seconds');

const updateTime = () => {
    hrsMins = [];

    const newDate = new Date();
    const currentHour = newDate.getHours();

    if (newDate.getHours() > 12) {
        const currentHourState = newDate.getHours() - 12;
        hrsMins.push(currentHour, newDate.getMinutes(), newDate.getSeconds(), newDate.getDay(), newDate.getFullYear(), newDate.getDate(), newDate.getMonth());
        const hour = `${currentHourState}`;
        const mins = `${newDate.getMinutes()}`;
        const newTime = `${hour.padStart(2, '0')}:${mins.padStart(2, '0')} PM`;
        return newTime;
    } else {
        hrsMins.push(currentHour, newDate.getMinutes(), newDate.getSeconds(), newDate.getDay(), newDate.getFullYear(), newDate.getDate(), newDate.getMonth());
        const hour = `${newDate.getHours()}`
        const mins = `${newDate.getMinutes()}`;
        const newTime = `${hour.padStart(2, '0')}:${mins.padStart(2, '0')} AM`;
        return newTime;
    }
};

const time = document.querySelector('.time');

time.innerText = updateTime();

// -------------

minutes.style.animationDelay = `-${hrsMins[1] * 60}s`;
hours.style.animationDelay = `-${((hrsMins[0] * 5) + (hrsMins[1] / 12)) * 720}s`;
seconds.style.animationDelay = `-${hrsMins[2]}s`;

// --------------

seconds.addEventListener('animationiteration', () => time.innerText = updateTime());

// --------------

const button = document.querySelector('button');

button.addEventListener('click', () => {
    document.body.classList.toggle('light');
    document.body.classList.toggle('dark');

    document.body.classList.contains('dark') ? button.innerText = 'Light Mode' : button.innerText = 'Dark Mode';
});

// --------------

const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = ['', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'];

const date = document.querySelector('.date');

date.innerText = `${week[hrsMins[3]].toUpperCase()}, ${hrsMins[5]} ${months[hrsMins[6]].toUpperCase()} ${hrsMins[4]}`;