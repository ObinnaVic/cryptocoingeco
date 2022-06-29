async function globalData() {
    let response1 = await fetch('https://api.coinlore.net/api/global/')
    let response2 = await response1.json()

    let info = response2[0]
    let dataArray = `<h4>Active coins: <span class="coin">${info.coins_count}</span></h4>
                    <h4>Active markets: <span class="markets">${info.active_markets}</span></h4>
                    <h4>Total mcap: <span class="mcap">${info.total_mcap}</span></h4>
                    <h4>Total vol: <span class="tvol">${info.total_volume}</span></h4>
                    <h4>Mcap change: <span class="value">${info.mcap_change}%</span></h4>`

                    const dataInfo = document.querySelector('.data-info');
                    dataInfo.innerHTML = dataArray;

                    const value = document.querySelector('.value');
                    if (value.innerHTML < `${0}%`){
                        value.style.color = 'red';
                    } else if (value.innerHTML > `${0}%`) {
                        value.style.color = 'rgb(7, 231, 7)';
                    }

}

globalData();




async function getData() {
    let response1 = await fetch('https://api.coinlore.net/api/tickers/?start=1&limit=200')
    let response2 = await response1.json()
    response3 = response2.data;
    let dataArray = '';
    response3.forEach(info => {
        dataArray += 
        `<tr>
            <td>Name: <div class="name">${info.name}</div></td>
            <td>Price: <div class="price">${info.price_usd}</div></td>
            <td>1hr: <div class="hour">${info.percent_change_1h}%</div></td>
            <td>24h: <div class="day">${info.percent_change_24h}%</div></td>
            <td id="tsupply">T.S: <div class="tsupply">${info.tsupply}</div></td>
            <td id="mcap">Mcap: <div class="mcap">${info.market_cap_usd}</div></td>
        </tr>`




        const detailSec = document.querySelector('.detail-sec');
        detailSec.innerHTML = dataArray;
        const day = document.querySelectorAll('.day');;
        const hour = document.querySelectorAll('.hour');
        day.forEach(dayColor => {
            if (dayColor.innerHTML < `${0}%`){
                dayColor.style.color = 'red';
            } else if (dayColor.innerHTML > `${0}%`) {
                dayColor.style.color = 'rgb(7, 231, 7)';
            }
        });
        hour.forEach(hourColor => {
            if (hourColor.innerHTML < `${0}%`){
                hourColor.style.color = 'red';
            } else if (hourColor.innerHTML > `${0}%`) {
                hourColor.style.color = 'rgb(7, 231, 7)';
            }
        })
    });
                
                
}

getData();


// async function getToken() {
//     let response1 = await fetch(` https://api.coinlore.net/api/ticker/?id=${id}`)
//     let response2 = await response1.json()
//     let response3 = response2[0];
//     id = response3.id;
//     const input = document.querySelector('.input');
//     const btn = document.querySelector('button');
//     btn.addEventListener('click', function submitId(id) {
//         let dataArray = '';
//         if (input.value = id) {
//             dataArray =+ `Symbol: <span class="detail">${response3.symbol}</span><br>
//                             Name: <span class="detail">${response3.name}</span><br>
//                             Price: <span class="detail">${response3.price_usd}</span><br>
//                             1HR%: <span class="detail">${response3.percent_change_1h}</span><br>
//                             24HR%: <span class="detail">${response3.percent_change_24h}</span><br>
//                             7D%: <span class="detail">${response3.percent_change_7d}</span><br>
//                             Total supply: <span class="detail">${response3.tsupply}</span><br>
//                             Market Cap: <span class="detail">${response3.msupply}</span><br>`
            
//                             const allInfo = document.querySelector('.allInfo');
//                             allInfo.innerHTML = dataArray
//         }
//     })
//     submitId();
// }

const input = document.querySelector('.input');
const btn = document.querySelector('.button');


function fetchId() {
    async function getId() {
        let response1 = await fetch(`https://api.coinlore.net/api/ticker/?id=${input.value}`)
        let response2 = await response1.json()
        console.log(response2);
        let response3 = response2[0];
        let dataArray = '';
        dataArray += `Symbol: <span class="detail">${response3.symbol}</span><br>
                        Name: <span class="detail">${response3.name}</span><br>
                        Price: <span class="detail">${response3.price_usd}</span><br>
                        1HR%: <span class="detail">${response3.percent_change_1h}</span><br>
                        24HR%: <span class="detail">${response3.percent_change_24h}</span><br>
                        7D%: <span class="detail">${response3.percent_change_7d}</span><br>
                        Total supply: <span class="detail">${response3.tsupply}</span><br>
                        Market Cap: <span class="detail">${response3.market_cap_usd}</span><br>`
            
                        const allInfo = document.querySelector('.all-Info');
                        allInfo.innerHTML = dataArray;
    }
    getId();
}

btn.addEventListener('click', fetchId);

