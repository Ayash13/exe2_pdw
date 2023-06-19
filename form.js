var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('video-background', {
        videoId: '51r-3IrowZc',
        playerVars: {
            autoplay: 1,
            controls: 0,
            showinfo: 0,
            rel: 0,
            loop: 1,
            playlist: '51r-3IrowZc',
            mute: 1,
            iv_load_policy: 3,
            start: 0
        },
        events: {
            onReady: onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    event.target.mute();
    event.target.playVideo();
}


// Add a submit event listener to the form
document.getElementById("customForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var carType = document.getElementById("carType").value;
    var customizations = [];
    var checkboxes = document.getElementsByName("customizations");
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            customizations.push(checkboxes[i].value);
        }
    }
    var message = document.getElementById("message").value;

    // Create the alert HTML
    var alertHTML = `
      <div class="form-values">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" value="${name}" readonly />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="text" value="${email}" readonly />
        </div>
        <div class="form-group">
          <label for="carType">Car Type:</label>
          <input type="text" value="${carType}" readonly />
        </div>
        <div class="form-group">
          <label>Customizations:</label>
          <input type="text" value="${customizations.join(', ')}" readonly />
        </div>
        <div class="form-group">
          <label for="message">Additional Comments:</label>
          <textarea readonly>${message}</textarea>
        </div>
      </div>
    `;

    // Show the SweetAlert2 alert
    Swal.fire({
        title: "Form Submitted!",
        html: alertHTML,
        icon: "success",
        customClass: {
            title: "swal-title",
            htmlContainer: "swal-html-container",
            confirmButton: "swal-confirm-button"
        }
    }).then(function () {
        // Redirect to index.html
        window.location.href = "index.html";
    });
});

