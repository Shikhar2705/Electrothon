function toggleForm() {
    var wrapper = document.getElementById("wrapper");
    if (wrapper.classList.contains("hidden")) {
        wrapper.classList.remove("hidden");
    } else {
        wrapper.classList.add("hidden");
    }
}
var reportButtons = document.getElementsByClassName("report-button");
for (var i = 0; i < reportButtons.length; i++) {
    reportButtons[i].addEventListener("click", function () {
        var cardId = this.id.replace("report-button-", "");
        reportCard(cardId);
    });
}

function reportCard(cardId) {
    // handle report action here
    console.log("Card " + cardId + " has been reported.");
}

function uploadBlog() {
    var userName = document.getElementById("username").value;
    var title = document.getElementById("title").value;
    var content = document.getElementById("content").value;
    // var report = document.getElementsByClassName("report-button").length > 0;

    var blog = {
        author: userName,
        title: title,
        details: content,
        // reports:report
    };
    const upload = document.getElementById("upload");
    upload.addEventListener('click', () => {
        fetch("https://electrothon6-0-backend.onrender.com/blog", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(blog)
        })
            .then(function (response) {
                console.log('mc');
                return response.json();

            })
            .then(function (data) {
                console.log("Blog uploaded successfully:", data);
                // display(blogs);
                // Optionally, you can perform actions after a successful upload
            })
            .catch(function (error) {
                console.error("Error uploading blog:", error);
            });
    })
}

function display(blogs) {
    // Create the user name element
    var userName = document.createElement("div");
    userName.classList.add("user-name");
    userName.innerHTML = "<span>" + blog.userName + "</span>";
    card.appendChild(userName);

    // Create the blog title element
    var blogTitle = document.createElement("div");
    blogTitle.classList.add("blog-title");
    blogTitle.innerHTML = "<span>" + blog.title + "</span>";
    card.appendChild(blogTitle);

    // Create the blog content element
    var blogContent = document.createElement("div");
    blogContent.classList.add("blog");
    blogContent.innerHTML = "<span>" + blog.content + "</span>";
    card.appendChild(blogContent);

    // Append the card to the wrapper element
    wrapper.appendChild(card);
}