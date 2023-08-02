const currentDate = document.querySelector('.current-date');
daysTag = document.querySelector('.days');
prevNextIcon = document.querySelectorAll(".icons");

let date = new Date();
currYear = date.getFullYear();
currMonth = date.getMonth();

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octomber', 'November', 'December'];

const renderCalendar = () => {
    let firstDateofMonth = new Date(currYear, currMonth , 1).getDate();
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
    lastDayofMonth = new Date(currYear, currMonth , lastDateofMonth).getDate();
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
    let liTag = '';

    for (let i = firstDateofMonth; i > 0; i--) {
        liTag += `<li class="inactive">${lastDateofLastMonth -i +1}</li>`;
        
    }

    for(let i=1; i<=lastDateofMonth; i++) {
        let isToday = (i === new Date().getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear()) ? "active" : "";
        liTag += `<li>${i}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) {
        liTag += `<li class="inactive">${i - lastDayofMonth+1}</li>`;
        
    }

    currentDate.innerHTML = `$(currMonth) $(currYear)`;
    daysTag.innerHTML = liTag;
}
renderCalendar();

prevNextIcon.forEach(icon => {
    icon.addEventListener('click', (e) => {
        currMonth = icon.id === 'prev' ? currMonth - 1 : currMonth + 1;

        if (currMonth < 0) {
            date = new Date(currentDate, currMonth);
            currYear = date.getFullYear();
            currMonth = date.getMonth();
        }
        else{
            date = new Date();
        }
        renderCalendar();
    })
})