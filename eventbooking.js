document.getElementById('booking-form').addEventListener('submit', function(e){
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const eventType = document.getElementById('event-type').value;
  const guests = document.getElementById('guests').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const requests = document.getElementById('requests').value;

  let summary = `
  Event Booking Details:
  Name: ${name}
  Email: ${email}
  Phone: ${phone}
  Event Type: ${eventType}
  Guests: ${guests}
  Date: ${date}
  Time: ${time}
  Special Requests: ${requests || 'None'}
  `;

  alert(summary + "\n\nThank you for booking with Madisar Tales!");
  this.reset();
});
