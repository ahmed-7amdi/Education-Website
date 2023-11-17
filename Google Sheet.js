const scriptURL = 'https://script.google.com/macros/s/AKfycbwPO0TWDGz326jfX_aGE3pKWhZ1g2RGDa449saJd8mie1A2NkqmJ-3PICrokK7WSPd1/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
   e.preventDefault()
   fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => alert("Thank you! your form is submitted successfully."))
      .then(() => { window.location.reload(); })
      .catch(error => console.error('Error!', error.message))
})