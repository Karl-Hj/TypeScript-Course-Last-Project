import * as dotenv from "dotenv";
dotenv.config();
const form = document.querySelector("form")!;
const addressInput = document.getElementById("address")! as HTMLInputElement;

const GOOGLE_API_KEY = process.env.API_KEY; //Add your google API KEY

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;
}

form.addEventListener("submit", searchAddressHandler);
