import refs from './ref.js';
const { daysValue, hoursValue, minsValue, secondsValue } = refs;
class CountdownTimer {
  constructor({ targetDate }) {
    this.targetDate = targetDate;
    this.init();
  }

  init() {
    this.getDeltaTime();
    setInterval(() => {
      this.getDeltaTime();
    }, 1000);
  }

  getDeltaTime() {
    const currentTime = Date.now();
    const deltaTime = this.targetDate - currentTime;
    this.getTimeComponents(deltaTime);
  }

  getTimeComponents(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const seconds = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    this.updateClockface(days, hours, mins, seconds);
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }

  updateClockface(days, hours, mins, seconds) {
    const time = `${days}${hours}${mins}${seconds}`;
    daysValue.textContent = `${days}`;
    hoursValue.textContent = `${hours}`;
    minsValue.textContent = `${mins}`;
    secondsValue.textContent = `${seconds}`;
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date(2022, 0, 0),
});
