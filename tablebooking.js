document.getElementById('table-form').addEventListener('submit', function(e){
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const guests = document.getElementById('guests').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const requests = document.getElementById('requests').value;


  const membership = document.querySelector('input[name="membership"]:checked').value;

  let summary = `
Table Booking Details:
Name: ${name}
Email: ${email}
Phone: ${phone}
Guests: ${guests}
Date: ${date}
Time: ${time}
Membership: ${membership}
Special Requests: ${requests || 'None'}
`;

  alert(summary + "\n\nThank you for booking with Madisar Tales!");
  this.reset();
});
