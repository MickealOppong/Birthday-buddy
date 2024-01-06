import buddies from './data.js';


export const getBirthMonth = (dob) => {
  return new Date(dob).getMonth();
}

export const getAge = (dob) => {
  const today = new Date();
  return today.getFullYear() - new Date(dob).getFullYear();
}

export const getBirthdays = (data) => {
  return data.filter((person) => getBirthMonth(person.dob) === new Date().getMonth());
}

//console.log(buddies);
const title = document.querySelector('.title');
const article = document.querySelector('.birthday');
const btn = document.querySelector('.btn');


btn.addEventListener('click', () => {
  showPerson([])
  title.innerHTML = `${getBirthdays([]).length} birthdays today`
})

title.innerHTML = `${getBirthdays(buddies).length} birthdays today`


const showPerson = (people) => {
  console.log(people);
  const items = people.map((person) => {
    const { id, img, name, dob } = person;
    return ` <article class="person" id="${id}">
        <div class="img-container">
          <img src="${img}" alt="${name}" class="img">
        </div>
        <div class="data">
          <p class="name">${name}</p>
          <span class="age">${getAge(dob)} years</span>
        </div>
      </article>`
  }).join('');
  article.innerHTML = items;
}

const data = getBirthdays(buddies);
showPerson(data);