// querySelector
// var headr = document.querySelector('#main-header')
// headr.style.borderBottom = 'solid 4px #ccc'

// var input = document.querySelector('input');
// input.value = 'Hello World'

// var submit = document.querySelector(`input[type="submit"]`)
// submit.value = "SEND"

// var item = document.querySelector('.list-group-item')
// item.style.color = 'red'

// var lastItem = document.querySelector('.list-group-item:last-child')
// lastItem.style.color = 'blue'
// //Queryselectorall
// var titles = document.querySelectorAll('.title')
// console.log(titles)
// titles[0].textContent = 'Hello'

// ans 1
var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor = 'green';

// ans 2
var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.textContent = '';

// ans1
var secondEl = document.querySelectorAll('.list-group-item:nth-child(2)')
second.style.color = 'green'

// ans 2
var odd = document.querySelectorAll('li:nth-child(odd)')
for(var i=0;i<odd.length;i++) {
    odd[i].style.backgroundColor = 'green'
}


// ans 3
// querySelector() method can only be used to access a single element while querySelectorAll() method can be used to access all elements which match with a specified CSS selector


