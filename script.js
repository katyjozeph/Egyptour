window.onload(()=>{
    // let apiData;
    const getData = async () =>{
    const governorateID=localStorage.getItem('governorateID'); 
    const response = await fetch(`https://test-api1-1.onrender.com/api/gove/${governorateID}`)
    const jsonResponse = await response.json();
    return jsonResponse.data.gove;
}
    (async () => {
        const governorateData2 = await getData();
        const histDiv = document.getElementById('historical');
        let containerDiv2;
        governorateData2.historicalsites.forEach((hist, index) => {
            if (index % 3 === 0) {
                containerDiv2 = document.createElement('div');
                containerDiv2.className = 'Museum-list container d-flex mb-4';
                histDiv.appendChild(containerDiv2);
            }
            const { historicalname, img, rate } = hist;
            const urlRegex = /^(?:https?|ftp):\/\/[\w/\-?=%.]+\.[\w/\-?=%.]+$/;
            let histImg;
            if (urlRegex.test(img)) histImg = img;
            else histImg = 'https://placehold.co/600x400/EEE/31343C';
            const merkUp = `
                <div class="Museum card crd" style="width: 20rem;">
                    <img src="${histImg}" class="card-img-top" alt="...">
                    <div class="card-body text-center">
                        <h5 class="card-title">${historicalname}</h5>
                        <div class="left">
                    <div class="rate rounded-circle">${rate}<i class="fa-solid fa-star fa-2xs" style="color: #ffffff;"></i></div>
                    <div class="bt">
                        <a href=""><button class="btn" id="butn">Explore</button></a>
                    </div>
                    <div class="f">
                        <a href=""><i class="fa-brands fa-gratipay fa-2xl" style="color: #ffb24d; margin-left: 5px;margin-top: 22px;"></i></a>
                    </div>
                </div>
                    </div>
                </div>`;
            containerDiv2.insertAdjacentHTML('beforeend', merkUp);
    // console.log(histname);
            // document.querySelector('#hotels').innerHTML += merkUp;
        })
    })();
    (async () => {
        const governorateData = await getData();
        const hotelsDiv = document.getElementById('hotels');
        let containerDiv;
        governorateData.hotels.forEach((hotel, index) => {
            if (index % 3 === 0) {
                containerDiv = document.createElement('div');
                containerDiv.className = 'Museum-list3 container d-flex mb-4';
                hotelsDiv.appendChild(containerDiv);
            }
            const { hotelname, img,rate } = hotel;
            const urlRegex = /^(?:https?|ftp):\/\/[\w/\-?=%.]+\.[\w/\-?=%.]+$/;
            let hotelImg;
            if (urlRegex.test(img)) hotelImg = img;
            else hotelImg = 'https://placehold.co/600x400/EEE/31343C';
            const merkUp = `
                <div class="Museum3 card crd" style="width: 20rem;">
                    <img src="${hotelImg}" class="card-img-top" alt="...">
                    <div class="card-body text-center">
                        <h5 class="card-title">${hotelname}</h5>
                        <div class="left">
                    <div class="rate rounded-circle">${rate}<i class="fa-solid fa-star fa-2xs" style="color: #ffffff;"></i></div>
                    <div class="bt">
                        <a href=""><button class="btn" id="butn">Explore</button></a>
                    </div>
                    <div class="f">
                        <a href=""><i class="fa-brands fa-gratipay fa-2xl" style="color: #ffb24d; margin-left: 5px;margin-top: 22px;"></i></a>
                    </div>
                </div>
                    </div>
                </div>`;
            containerDiv.insertAdjacentHTML('beforeend', merkUp);
    
            // document.querySelector('#hotels').innerHTML += merkUp;
        })
    })();
    (async () => {
        const governorateData3 = await getData();
        const musemDiv = document.getElementById('museum');
        let containerDiv3;
        governorateData3.museums.forEach((musem, index) => {
            if (index % 3 === 0) {
                containerDiv3 = document.createElement('div');
                containerDiv3.className = 'Museum-list2 container d-flex mb-4';
                musemDiv.appendChild(containerDiv3);
            }
            const { museumsname, img,rate } = musem;
            const urlRegex = /^(?:https?|ftp):\/\/[\w/\-?=%.]+\.[\w/\-?=%.]+$/;
            let hotelImg;
            if (urlRegex.test(img)) hotelImg = img;
            else hotelImg = 'https://placehold.co/600x400/EEE/31343C';
            const merkUp = `
                <div class="Museum2 card crd" style="width: 20rem;">
                    <img src="${hotelImg}" class="card-img-top" alt="...">
                    <div class="card-body text-center">
                        <h5 class="card-title">${museumsname}</h5>
                        <div class="left">
                    <div class="rate rounded-circle">${rate}<i class="fa-solid fa-star fa-2xs" style="color: #ffffff;"></i></div>
                    <div class="bt">
                        <a href=""><button class="btn" id="butn">Explore</button></a>
                    </div>
                    <div class="f">
                        <a href=""><i class="fa-brands fa-gratipay fa-2xl" style="color: #ffb24d; margin-left: 5px;margin-top: 22px;"></i></a>
                    </div>
                </div>
                    </div>
                </div>`;
            containerDiv3.insertAdjacentHTML('beforeend', merkUp);
    
            // document.querySelector('#hotels').innerHTML += merkUp;
        })
    })();
    (async () => {
        const governorateData4 = await getData();
        const vibesDiv = document.getElementById('Restaurants');
        let containerDiv4;
        governorateData4.Restaurants.forEach((vibe, index) => {
            if (index % 3 === 0) {
                containerDiv4 = document.createElement('div');
                containerDiv4.className = 'Museum-list4 container d-flex mb-4';
                vibesDiv.appendChild(containerDiv4);
            }
            const { Restaurantsname, img ,rate} = vibe;
            const urlRegex = /^(?:https?|ftp):\/\/[\w/\-?=%.]+\.[\w/\-?=%.]+$/;
            let hotelImg;
            if (urlRegex.test(img)) hotelImg = img;
            else hotelImg = 'https://placehold.co/600x400/EEE/31343C';
            const merkUp = `
                <div class="Museum4 card crd" style="width: 20rem;">
                    <img src="${hotelImg}" class="card-img-top" alt="...">
                    <div class="card-body text-center">
                        <h5 class="card-title">${Restaurantsname}</h5>
                        <div class="left">
                    <div class="rate rounded-circle">${rate}<i class="fa-solid fa-star fa-2xs" style="color: #ffffff;"></i></div>
                    <div class="bt">
                        <a href=""><button class="btn" id="butn">Explore</button></a>
                    </div>
                    <div class="f">
                        <a href=""><i class="fa-brands fa-gratipay fa-2xl" style="color: #ffb24d; margin-left: 5px;margin-top: 22px;"></i></a>
                    </div>
                </div>
                    </div>
                </div>`;
            containerDiv4.insertAdjacentHTML('beforeend', merkUp);
    
            // document.querySelector('#hotels').innerHTML += merkUp;
        })
    })();
})
