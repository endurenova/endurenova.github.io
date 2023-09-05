
const tempLine = `
    <ul class="phantom-line__box">
        <li class="phantom-line">
            <hr />
        </li>
        <li class="phantom-line">
            <hr />
        </li>
        <li class="phantom-line">
            <hr />
        </li>
        <li class="phantom-line">
            <hr />
        </li>
        <li class="phantom-line">
            <hr />
        </li>
        <li class="phantom-line">
            <hr />
        </li>
        <li class="phantom-line">
            <hr />
        </li>
        <li class="phantom-line">
            <hr />
        </li>
        <li class="phantom-line">
            <hr />
        </li>
        <li class="phantom-line">
            <hr />
        </li>
    </ul>`;
const cube = document.querySelector('.room');
const pfPage = document.querySelectorAll('.room__face');
Array.from(pfPage).forEach((e) => {
e.insertAdjacentHTML('afterbegin', tempLine);
});

