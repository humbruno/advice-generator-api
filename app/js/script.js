// https://api.adviceslip.com/

async function advice() {
  try {
    const responseData = await fetch("https://api.adviceslip.com/advice");
    const responseJSON = await responseData.json();
    console.log(responseJSON.slip.id);
    console.log(responseJSON.slip.advice);
  } catch (e) {
    console.log(e);
  }
}

advice();
