$(async function () {
  "use strict";

  // Form
  const meetings = await getMeetings();
  let options = `<option value="" selected>select meeting</option>`;
  meetings.forEach((meeting) => {
    const date = new Date(meeting.startDate);
    options += `<option value="${meeting._id}">${
      meeting.name
    } ${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}</option>`;
  });
  $("#meetingId").html(options); //.html = options;

  var contactForm = function () {
    if ($("#contactForm").length > 0) {
      $("#contactForm").validate({
        rules: {
          meetingId: {
            required: true,
          },
          emailAddress: {
            required: true,
            email: true,
          },
          message: {
            required: false,
          },
        },
        messages: {
          meetingId: "Please select a meeting",
          emailAddress: "Please enter a valid email address",
          message: "Please enter a message",
        },
        /* submit via ajax */
        submitHandler: function (form) {
          var $submit = $(".submitting"),
            waitText = "Submitting...";

          const data = $(form).serialize();
          const body = {
            emailAddress: data.emailAddress,
            meetingId: data.meetingId,
          };
          if (data.message && data.message.length > 0)
            body.message = data.message;

          $.ajax({
            type: "POST",
            url: "/api/v1/attendees",
            data: body,

            beforeSend: function () {
              $submit.css("display", "block").hide();
            },
            success: function ({ meeting, tutor }) {
              $submit.css("display", "block").hide();
              alert(
                `Hi ${tutor.name}! attendance for meeting "${meeting.name}" has been marked`
              );
              $("#contactForm")[0].reset();
            },
            error: function (xhr, status, err) {
              $submit.css("display", "hidden").text(waitText);
              const { message } = JSON.parse(xhr.responseText);
              alert(message);
            },
          });
        },
      });
    }
  };
  contactForm();
});
