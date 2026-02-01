import dayjs from "dayjs";

import { openingHours } from "../../utils/opening-hours.js";

const hours = document.getElementById("hours");
export function hoursLoad({ date }) {
  const opening = openingHours.map((hour) => {
    // Recupera somente a hora.
    const [scheduleHour] = hour.split(":");

    // Adiciona a hora na data e verifica se está no passado.
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs());

    return {
      hour,
      available: !isHourPast,
    };
  });

  // Renderiza os horários.
  opening.forEach(({ hour, available }) => {
    const list = document.createElement("list");

    list.classList.add("hour");
    list.classList.add(available ? "hour-available" : "hour-unavailable");

    list.textContent = hour;
    hours.append(list);
  });
}
