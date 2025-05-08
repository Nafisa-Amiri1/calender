const calendarDays = document.getElementById('calendar-days');
const monthYear = document.getElementById('month-year');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let date = new Date();

function renderCalendar() {
  const year = date.getFullYear();
  const month = date.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();
  const today = new Date();

  monthYear.textContent = date.toLocaleString('default', { month: 'long', year: 'numeric' });

  calendarDays.innerHTML = '';

  for (let i = 0; i < firstDay; i++) {
    calendarDays.innerHTML += `<div></div>`;
  }

  for (let day = 1; day <= lastDate; day++) {
    const isToday = 
      day === today.getDate() && 
      month === today.getMonth() && 
      year === today.getFullYear();

    calendarDays.innerHTML += `<div class="${isToday ? 'today' : ''}">${day}</div>`;
  }
}

prevBtn.addEventListener('click', () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

nextBtn.addEventListener('click', () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();
