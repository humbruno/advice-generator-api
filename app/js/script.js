const id = document.querySelector(".advice__id");
const description = document.querySelector(".advice__description");

async function advice() {
  try {
    const responseData = await fetch("https://api.adviceslip.com/advice");
    const responseJSON = await responseData.json();
    //console.log(responseJSON.slip.id);
    //console.log(responseJSON.slip.advice);
    id.innerHTML = `Advice #${responseJSON.slip.id}`;
    description.innerHTML = `"${responseJSON.slip.advice}"`;
  } catch (e) {
    id.innerHTML = "Error";
    description.innerHTML = "Failed to load advice. Please try again";
    console.log(e);
  }
}

advice();
