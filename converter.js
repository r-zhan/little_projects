/*
KGS
 rub = kgs * 1.20
 usd = kgs / 85

RUB
 kgs = rub * 0.85
 usd = rub / 70

USD
 kgs = usd * 85
 rub = usd * 70
*/

const usdButton = document.querySelector(".button_usd"),
  kgsButton = document.querySelector(".button_kgs"),
  rubButton = document.querySelector(".button_rub"),
  allButtons = document.querySelectorAll(".button"),
  //
  usdText = document.querySelector(".usd_text"),
  kgsText = document.querySelector(".kgs_text"),
  rubText = document.querySelector(".rub_text");

let money;

allButtons.forEach((button) => {
  button.addEventListener("click", (element) => {
    const target = element.target;
    if (target == usdButton) {
      money = parseFloat(prompt("Введите сумму денег в USD для конвертации"));
      usdText.textContent = money;
      kgsText.textContent = money * 85;
      rubText.textContent = money * 70;
    } else if (target == kgsButton) {
      money = parseFloat(prompt("Введите сумму денег в KGS для конвертации"));
      kgsText.textContent = money;
      usdText.textContent = money / 85;
      rubText.textContent = money * 1.2;
    } else if (target == rubButton) {
      money = parseFloat(prompt("Введите сумму денег в USD для конвертации"));
      rubText.textContent = money;
      kgsText.textContent = money * 0.85;
      usdText.textContent = money / 70;
    }
  });
});
