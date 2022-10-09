const routeSelect = document.querySelector("#route");
const forwardSelect = document.querySelector("#time-forward");
const backwardSelect = document.querySelector("#time-backward");
const button = document.querySelector("#calculate-btn");
const ticketCount = document.querySelector("#num");
const info = document.querySelector("#info");

const cost = 700;
const returnCost = 1200;
const travelTime = 50;
const minutesOffset = (new Date().getTimezoneOffset() + 180) * -1;

const getDate = (timeString, offset = 0) => {
  const date = new Date(timeString);
  date.setMinutes(date.getMinutes() + offset);
  return date;
};

const forwardTimes = [
  "2021-08-21 18:00:00",
  "2021-08-21 18:30:00",
  "2021-08-21 18:45:00",
  "2021-08-21 19:00:00",
  "2021-08-21 19:15:00",
  "2021-08-21 21:00:00",
].map((time) => getDate(time, minutesOffset));

const backwardTimes = [
  "2021-08-21 18:30:00",
  "2021-08-21 18:45:00",
  "2021-08-21 19:00:00",
  "2021-08-21 19:15:00",
  "2021-08-21 19:35:00",
  "2021-08-21 21:50:00",
  "2021-08-21 21:55:00",
].map((time) => getDate(time, minutesOffset));

const formatDate = (date) => {
  return date.toLocaleString("ru-RU", { hour: "numeric", minute: "numeric" });
};

const getBackwardList = () => {
  const forwardTime = getDate(forwardSelect.value).getTime() + travelTime * 60 * 1000;
  return backwardTimes.filter((time) => time.getTime() > forwardTime);
};

const renderTimes = (times) => {
  return times
    .map((time) => `<option value="${time}">${formatDate(time)}</option>`)
    .join("");
};

const renderList = (ticket) => {
  if (ticket === "forward") {
    forwardSelect.innerHTML = renderTimes(forwardTimes);
    backwardSelect.innerHTML = "";
  }
  if (ticket === "backward") {
    backwardSelect.innerHTML = renderTimes(backwardTimes);
    forwardSelect.innerHTML = "";
  }
  if (ticket === "return") {
    if (!forwardSelect.value) {
      forwardSelect.innerHTML = renderTimes(forwardTimes);
    }
    backwardSelect.innerHTML = renderTimes(getBackwardList());
  }
};

routeSelect.addEventListener("change", (e) => renderList(e.target.value));
renderList("forward");

forwardSelect.addEventListener("change", () => {
  if (!backwardSelect.value) return;
  renderList("return");
});

button.addEventListener("click", () => {
  const count = ticketCount.value;
  if (count == 0 || parseInt(count) != count) return;
  const route = routeSelect.value;
  const sum = route === "return" ? returnCost * count : cost * count;
  const duration = route === "return" ? travelTime * 2 : travelTime;
  const start = route === "backward" ? backwardSelect.value : forwardSelect.value;
  const end = getEnd(route);

  info.textContent = `Вы выбрали ${count} билет${pluralize(count)} по маршруту ${getDirection(route)} стоимостью ${sum}р.
  Это путешествие займет у вас ${duration} минут.
  Теплоход отправляется в ${formatDate(getDate(start))}, а прибудет в ${formatDate(end)}.`
})

const getDirection = (route) => {
  if (route === "forward") return "из A в B";
  if (route === "backward") return "из B в A";
  return "из A в B и обратно";
}

const pluralize = (count) => {
  count = count % 10;
  if (count === 1) return "";
  if (count < 5 && count > 1) return "а";
  return "ов";
}

const getEnd = (route) => {
  if (route === "forward") return getDate(forwardSelect.value, travelTime);
  return getDate(backwardSelect.value, travelTime);
}