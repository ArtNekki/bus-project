import ContactsPage from './Contacts'

document.addEventListener('DOMContentLoaded', function() {
  const pageContainer = document.getElementById('contactsPage');

  if (pageContainer) {
    new ContactsPage(pageContainer);
  }
})
