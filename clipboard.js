function theFunction() {
    const pElement = document.querySelector('#copy'); // выбираем элемент с идентификатором copy
    const text = pElement.textContent.replace(/ /g,' '); // получаем текст из элемента
    //alert(pElement)
    //alert(text)
    navigator.clipboard.writeText(text)
    .then(() => {
    console.log(`Text "${text}" has been copied to clipboard`);
    })
    .catch((error) => {
    console.error(`Error copying text: ${error}`);
    });
  }