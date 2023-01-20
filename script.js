const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const submit = $("#submit");
const BauCua = $("#BauCua");
const Audio = $("#audio");

const IMG = $$(".LacBC");
const Chips = $$(".ChipsCoin");
const ChooseBC = $$(".ChooseBC");

const PlateLidPlace = $("#PlateLidPlace");
const PlateLid = $("#PlateLid");
const Lid = $("#Lid");
const LidIn = $("#LidIn");
const closeShake = $("#closeShake");
const balanceText = $("#balanceText");
const ShowBet = $("#ShowBet");
const more = $("#more");

var Balance = 500000;

const XiNgau = ["Nai.png", "Bau.png", "Ga.png", "Ca.png", "Cua.png", "Tom.png"];
const PriceChip = [1, 5, 10, 20, 50, 100, 500, 1000];

const NameBC = ["Nai", "Bầu", "Gà", "Cá", "Cua", "Tôm"];
var ValueBC = [0, 0, 0, 0, 0, 0];

var ResultBet = ["Cua", "Cua", "Cua"];

var ChipNow = PriceChip[0];

var CanSub = true;

submit.addEventListener("click", () => {
  if (CanSub) {
    CanSub = false;
    closeShake.style.display = "none";
    Audio.load();
    submit.classList.add("block");
    PlateLidPlace.style.display = "flex";
    Lid.style.animationDirection = "initial";
    Lid.style.animationFillMode = "backwards";
    setTimeout(() => {
      Audio.play();
      PlateLid.classList.add("shake");
      RandomBauCua();
      LidIn.style.display = "initial";
      Lid.style.display = "none";
    }, 1155);
  }
});

closeShake.addEventListener("click", () => {
  CanSub = true;
  submit.classList.remove("block");
  PlateLidPlace.style.display = "none";
  let RemoveChip = document.getElementsByClassName("chipBet");
  while (RemoveChip.length > 0) {
    RemoveChip[0].parentNode.removeChild(RemoveChip[0]);
  }
});

function RandomBauCua() {
  IMG.forEach(function (userItem, index) {
    let indexRD = Math.floor(Math.random() * 6);
    userItem.src = "BauCua/" + XiNgau[indexRD];
    ResultBet[index] = NameBC[indexRD];
  });
  setTimeout(() => {
    PlateLid.classList.remove("shake");
    Audio.pause();
    LidIn.style.display = "none";
    Lid.style.display = "initial";
    Lid.style.animationDirection = "reverse";
    Lid.style.animationFillMode = "forwards";
    closeShake.style.display = "initial";
  }, 1500);
}

function OpenDetail() {
  ShowBet.style.display = "flex";
}

function CloseDetail() {
  ShowBet.style.display = "none";
}
