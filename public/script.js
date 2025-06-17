
function closePopup(id) {
  document.getElementById(id).style.display = 'none';
  if (id === 'ytPopup') {
    setTimeout(() => document.getElementById('tgPopup').style.display = 'block', 1000);
  }
}

window.onload = () => {
  setTimeout(() => document.getElementById('ytPopup').style.display = 'block', 1500);
};

function toggleAbout() {
  const about = document.getElementById('aboutBox');
  about.style.display = about.style.display === 'block' ? 'none' : 'block';
}

function generateEmail() {
  const random = Math.random().toString(36).substring(7);
  const email = `${random}@piyusha2z.mail.tm`;
  document.getElementById('emailDisplay').innerText = email;
}

function loadInbox() {
  const inbox = document.getElementById('inbox');
  inbox.innerHTML = "<p>Loading inbox...</p>";
}
