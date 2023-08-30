/***
 * 
 * code for single item api call. there  was fault on single api call. i  solved it below.
 */

const seeDataIndividual = async (id) => {
    const link = (id <= 9) ? `https://openapi.programming-hero.com/api/ai/tool/0${id}` : `https://openapi.programming-hero.com/api/ai/tool/${id}`;
    const res = await fetch(link);
    const data = await res.json();
    console.log("individual", data);
}

seeDataIndividual(5);

const seeData = async (id) => {
    const link = `https://openapi.programming-hero.com/api/ai/tools`;
    const res = await fetch(link);
    const data = await res.json();
    console.log("total", data);
}

seeData(5);
/***
 * 
 * 
 */

const dynamicMarkup = (imgSrc, features = [], date, productTitle) => {
    const tag = (x) => document.createElement(x);
    const cardWrapper = tag("div");
    cardWrapper.classList = "rounded-2xl space-y-2 p-4 border border-gray-200 shadow-md";
    const gridContainer = document.getElementById("grid-container");


    const divImgWrapper = tag("div");
    const innerImg = tag("img");
    innerImg.src = imgSrc;
    innerImg.classList = "rounded-xl";
    divImgWrapper.classList.add("rounded-2xl");
    innerImg.classList.add("h-48");
    divImgWrapper.appendChild(innerImg);

    const h1Feature = tag("h1");
    h1Feature.classList = "text-xl font-bold";
    h1Feature.innerText = "Features";

    const ol = tag("ol");
    ol.classList = "list-inside list-decimal text-sm font-normal text-[#585858]";
    const li1 = tag("li");
    const li2 = tag("li");
    const li3 = tag("li");
    [li1.innerText, li2.innerText, li3.innerText] = features;
    ol.appendChild(li1);
    ol.appendChild(li2);
    ol.appendChild(li3);

    const divider = tag("div");
    divider.classList = "bg-slate-200 w-full mx-auto border";

    const grandDiv = tag("div");
    grandDiv.classList = "flex flex-row justify-between items-center";
    const parentDiv = tag("div");
    parentDiv.classList = "flex flex-col items-start gap-1";
    const h1AITitle = tag("h1");
    h1AITitle.classList = "text-xl font-bold";
    h1AITitle.innerText = `${productTitle}`
    const sonDiv = tag("div");
    sonDiv.classList = "flex flex-row justify-center items-center";
    sonDiv.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
    fill="none">
    <path
        d="M6.75 3V5.25M17.25 3V5.25M3 18.75V7.5C3 6.90326 3.23705 6.33097 3.65901 5.90901C4.08097 5.48705 4.65326 5.25 5.25 5.25H18.75C19.3467 5.25 19.919 5.48705 20.341 5.90901C20.7629 6.33097 21 6.90326 21 7.5V18.75M3 18.75C3 19.3467 3.23705 19.919 3.65901 20.341C4.08097 20.7629 4.65326 21 5.25 21H18.75C19.3467 21 19.919 20.7629 20.341 20.341C20.7629 19.919 21 19.3467 21 18.75M3 18.75V11.25C3 10.6533 3.23705 10.081 3.65901 9.65901C4.08097 9.23705 4.65326 9 5.25 9H18.75C19.3467 9 19.919 9.23705 20.341 9.65901C20.7629 10.081 21 10.6533 21 11.25V18.75M12 12.75H12.008V12.758H12V12.75ZM12 15H12.008V15.008H12V15ZM12 17.25H12.008V17.258H12V17.25ZM9.75 15H9.758V15.008H9.75V15ZM9.75 17.25H9.758V17.258H9.75V17.25ZM7.5 15H7.508V15.008H7.5V15ZM7.5 17.25H7.508V17.258H7.5V17.25ZM14.25 12.75H14.258V12.758H14.25V12.75ZM14.25 15H14.258V15.008H14.25V15ZM14.25 17.25H14.258V17.258H14.25V17.25ZM16.5 12.75H16.508V12.758H16.5V12.75ZM16.5 15H16.508V15.008H16.5V15Z"
        stroke="#585858" stroke-width="1.5" stroke-linecap="round"
        stroke-linejoin="round" />
</svg>
<span class="text-sm font-normal text-[#585858]">${date}</span>
    `;
    parentDiv.appendChild(h1AITitle);
    parentDiv.appendChild(sonDiv);
    grandDiv.appendChild(parentDiv);
    const siblingDivOfParentDiv = tag("div");
    siblingDivOfParentDiv.classList = "bg-orange-100 p-1 rounded-full";
    siblingDivOfParentDiv.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg"
    width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M4.5 12H19.5M19.5 12L12.75 5.25M19.5 12L12.75 18.75" stroke="#EB5757"
        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    `;
    grandDiv.appendChild(siblingDivOfParentDiv);


    cardWrapper.appendChild(divImgWrapper);
    cardWrapper.appendChild(h1Feature);
    cardWrapper.appendChild(ol);
    cardWrapper.appendChild(grandDiv);

    gridContainer.appendChild(cardWrapper);

    console.log(cardWrapper);
    console.dir(cardWrapper);
}

let getCachedDataFromApi ;
const getCardsDataFromApi = async() => {
    const link = `https://openapi.programming-hero.com/api/ai/tools`;
    const res = await fetch(link);
    const data = await res.json();
    getCachedDataFromApi = data.data.tools;
}

getCardsDataFromApi();
console.log(typeof getCachedDataFromApi, getCachedDataFromApi);
