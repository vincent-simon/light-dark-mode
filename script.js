const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.getElementById('toggle-icon');
const bg = document.getElementById('bg');
const nav = document.getElementById('nav');
const logo = document.querySelector('.logo');
const dogType = document.getElementById('dogType');
const pupyImg = document.querySelector('.pupyImg');
const dogText = document.getElementById('dogText');

const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');

const whyContent = document.querySelector('.why-content');
const dogImg_1 = document.getElementById('dogImg_1');
const dogImg_2 = document.getElementById('dogImg_2');
const dogImg_3 = document.getElementById('dogImg_3');
const dogImg_4 = document.getElementById('dogImg_4');

const dogText_1 = document.getElementById('dogText_1');
const dogText_2 = document.getElementById('dogText_2');
const dogText_3 = document.getElementById('dogText_3');
const dogText_4 = document.getElementById('dogText_4');

function toggleDarkLightMode(isDark) {
  bg.style.backgroundImage = isDark ? "url('img/bg_dark.jpg')" : "url('img/bg_light.jpg')";
  nav.style.backgroundColor = isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
  whyContent.children[0].style.backgroundColor = isDark
    ? 'rgb(255 255 255 / 50%)'
    : 'rgb(0 0 0 / 50%)';
  whyContent.children[1].style.backgroundColor = isDark
    ? 'rgb(255 255 255 / 50%)'
    : 'rgb(0 0 0 / 50%)';
  whyContent.children[2].style.backgroundColor = isDark
    ? 'rgb(255 255 255 / 50%)'
    : 'rgb(0 0 0 / 50%)';
  whyContent.children[3].style.backgroundColor = isDark
    ? 'rgb(255 255 255 / 50%)'
    : 'rgb(0 0 0 / 50%)';
  toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode';
  isDark
    ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon')
    : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
  isDark ? imageMode('dark') : imageMode('light');
  dogType.textContent = isDark ? 'Siberian Husky' : 'German Shepherd';
  dogText.textContent = isDark
    ? ' The popular dog breed'
    : 'The protective but loving German Shepherd is a great choice for families with children';

  dogText_1.textContent = isDark
    ? 'Siberian huskies have a pleasant disposition and remarkable ability to adapt to a variety of living conditions. They thrive in cooler to cold climates and love large areas in which to roam; however, those raised in the city also do well. The Siberian husky is friendly and not reputed as a vocal or aggressive dog.'
    : ' They really are smart. The German Shepherd Dog is one of America’s most popular dog breeds — for good reasons. They’re intelligent and capable working dogs. Their devotion and courage are unmatched. And they’re amazingly versatile.';

  dogText_2.textContent = isDark
    ? 'Extremely friendly with people and children. Huskies are great with kids. In fact, the Chukchi people – indigenous Eskimos of Western Chukotka – used huskies to look after their children.'
    : 'The German shepherd dog is a herding breed known for its courage, loyalty and guarding instincts. This breed makes an excellent guard dog, police dog, military dog, guide dog for the blind and search and rescue dog. For many families, the German shepherd is also a treasured family pet.';

  dogText_3.textContent = isDark
    ? 'The Siberian Husky holds his head high and his straight back ends in a bushy tail. His coat is quite thick, but the fur sits close to his body and comes in a wide range of colors. Male Huskies average 21 to 23.5 inches in height and 45 to 60 pounds. Females are a bit smaller at 20 to 22 inches and 35 to 50 pounds.'
    : ' German Shepherd Dogs are among the most popular breeds in the world. During the war, Germans used the dogs for a number of purposes.The United States was captivated with the breed’s appearance, and they soon became wildly popular.';

  dogText_4.textContent = isDark
    ? 'They are the fastest sled dogs. At a time where people use bigger dogs for sled races, huskies proved to be the fastest breed in 1909 and were since touted as the sled dog of choice.'
    : 'German Shepherds are known for their intelligence, and with good reason: They’re considered the third smartest breed of dog. To be placed in the top tier of intelligence, breeds must understand a new command after only five repetitions and follow the first command given to them 95 percent of the time.';
}

// Dark or light Images
function imageMode(color) {
  image1.src = `img/undraw_good_doggy_${color}.svg`;
  image2.src = `img/undraw_nature_fun_${color}.svg`;
  image3.src = `img/undraw_team_spirit_${color}.svg`;
  pupyImg.src = `dog/puppies-${color}.png`;
  logo.src = `dog/logo-${color}.png`;
  dogImg_1.src = `dog/1-${color}.png`;
  dogImg_2.src = `dog/2-${color}.png`;
  dogImg_3.src = `dog/3-${color}.png`;
  dogImg_4.src = `dog/4-${color}.png`;
}

// switch theme Dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    toggleDarkLightMode(true);
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    toggleDarkLightMode(false);
  }
}

// event listener
toggleSwitch.addEventListener('change', switchTheme);

//check loccalstorage for theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
    toggleDarkLightMode(true);
  }
}
