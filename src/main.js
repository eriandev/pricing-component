'use strict'

const $checkbox = document.getElementById('checkbox')
const $$prices = document.querySelectorAll('.price')

$checkbox.addEventListener('change', () => {
  $$prices.forEach( price => {
    price.querySelector('span').textContent = price.getAttribute($checkbox.checked ? 'data-monthly' : 'data-annually')
  })
})
