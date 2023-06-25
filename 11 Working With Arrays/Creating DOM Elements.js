const movement1 = [100,200,-300,450,-1674,20,-650,1000];
const movement2 = [1000,2200,-3300,4540,-174,2340,-50,1480];

// let j = document.getElementsByClassName('item1_records_deposit').innerHTML;
// Array.from(j).forEach((e,i) => {
//     console.log(e,i);
// });

let popMov = document.querySelector('.item1');
popMov.innerHTML = '';
// console.log(popMov.innerText);
// popMov.innerHTML = '<p>hello</p>';
// console.log(wdOrDep);
function movements(movement1,movement2) {
    movement1.forEach( (e,i)=> {
        const type = e < 0 ? 'withdrawal' : 'deposit';
        let html = `
        <div class="item1_records">
        <span class="item1_records_${type}">${i+1} ${type}</span>
            <span class="item1_records_time"> 06/04/2023 </span>
            <span class="item1_records_amount">${e} pkr </span>
        </div>
        `;
        // console.log(html);
        // popMov.innerHTML = 'html';
        popMov.insertAdjacentHTML("beforeend", html);
        // popMov.innerHTML = html;
        // console.log(html);
    });
    movement2.forEach((e,i) => {
        const type = e < 0 ? 'withdrawal' : 'deposit';
        let html = `
        <div class="item1_records">
        <span class="item1_records_${type}">${i+1} ${type}</span>
        <span class="item1_records_time"> 06/04/2023 </span>
        <span class="item1_records_amount">${e} pkr </span>
        </div>
        `;
        popMov.insertAdjacentHTML("beforeend", html);
    });
}

// movements(movement1,movement2);