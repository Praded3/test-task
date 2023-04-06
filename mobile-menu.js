"use strict";

const menuBody = document.querySelector(".dashboard__menu-container");
const body = document.querySelector(".body");
const btn = document.querySelector(".menu__burger");

document.addEventListener("click", menu);

function menu(event) {
  if (event.target.closest(".menu__burger")) {
    menuBody.classList.toggle("active-menu");
    body.classList.toggle("lock");
    btn.classList.toggle("btn-actrive");
  }

  if (event.target.closest(".dashboard__menu-container")) {
    menuBody.classList.toggle("active-menu");
    body.classList.toggle("lock");
    btn.classList.toggle("btn-actrive");
  }
}

Customers.forEach((customer) => {
  const tr = document.createElement("tr");
  tr.classList.add("product__tr");
  const trContenr = `
                      <td class="product__td customer_name">${customer.customerName}</td>
                      <td class="product__td company">${customer.company}</td>        
                      <td class="product__td phone-number"><a rel="noopener no-referrel nofollow"
                            class="customer-email _link" href="tel:${customer.phoneNumber}">${customer.phoneNumber}</a></td>
                      <td class="product__td email"><a rel="noopener no-referrel nofollow"
                            class="customer-email _link" href="mailto:${customer.mail}">${customer.mail}</td>
                      <td class="product__td country">${customer.country}</td>
                      <td class="product__td customer-status status">${customer.status}</td>`;
  tr.innerHTML = trContenr;
  document.querySelector(".tbody").appendChild(tr);
});

let values = document.querySelectorAll(".customer-status");

values.forEach((value) => {
  if (value.textContent == "Active") {
    value.classList.toggle("product__acive-customer");
  } else if (value.textContent == "Inactive") {
    value.classList.toggle("product__inacive-customer");
  }
});
