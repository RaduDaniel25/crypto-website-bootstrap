const elrond = document.querySelector(".title--egld");
const bitcoin = document.querySelector(".title--bitcoin");
const sol = document.querySelector(".title--sol");
const ada = document.querySelector(".title--ada");
const ethereum = document.querySelector(".title--ethereum");
const binance = document.querySelector(".title--binance");
const near = document.querySelector(".title--near");
const dot = document.querySelector(".title--dot");
const xrp = document.querySelector(".title--xrp");

export const getJSON = function (url, errorMsg = "something went wrong") {
  return fetch(url).then((response) => {
    // console.log(response);

    if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);
    return response.json();
  });
};

export const renderCrypto = function (data, crypto) {
  const html = `
  ${Number(data).toFixed(2)} $`;
  crypto.insertAdjacentHTML("beforeend", html);
};

export const getCryptoPrice2 = async function () {
  try {
    const data1 = await getJSON(`https://api.coincap.io/v2/assets/`);
    console.log(data1.data);
    renderCrypto(data1.data[38].priceUsd, elrond);
    renderCrypto(data1.data[0].priceUsd, bitcoin);
    renderCrypto(data1.data[8].priceUsd, sol);
    renderCrypto(data1.data[1].priceUsd, ethereum);
    renderCrypto(data1.data[7].priceUsd, ada);
    renderCrypto(data1.data[3].priceUsd, binance);
    renderCrypto(data1.data[29].priceUsd, near);
    renderCrypto(data1.data[11].priceUsd, dot);
    renderCrypto(data1.data[6].priceUsd, xrp);
  } catch (err) {
    console.log(err);
  }
};
