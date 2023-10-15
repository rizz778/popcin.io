
function createPost() {
    const postContent = document.getElementById('post-content').value;

    if (postContent.trim() === '') {
        // Ensure that the content is not empty
        alert('Please enter some content for your post.');
        return;
    }

    const postElement = document.createElement('div');
    postElement.classList.add('post');
    const currentUser = getCurrentUser(); // Implement this function
    const currentTime = getCurrentTime(); // Implement this function

    postElement.innerHTML = `
        <div class="post-header">
            <i class="fas fa-user"></i> ${currentUser} 
            <span style="color: darkgray">${currentTime}</span>
        </div>
        <p>${postContent}</p>
        <hr>
                            <div class="response">
                                <i class="fas fa-up-long fa-xl" style="cursor: pointer;"
                                    onclick="upvote(this);"></i><span class="upvote-post">0</span>
                                <i class="fas fa-down-long fa-xl"></i>
                                <i class="far fa-heart fa-xl" style="cursor: pointer;" onclick="like(this);"></i><span
                                    class="like-post">0</span>
                            </div>
                            <hr>
    `;

    const postsContainer = document.querySelector('.post-section');
    postsContainer.insertBefore(postElement, postsContainer.firstChild)

    // Clear the text area after posting
    document.getElementById('post-content').value = '';
}

// Function to increment upvotes for a post
function upvotePost(button) {
    // Implement upvoting logic here
}

// Function to increment likes for a post
function likePost(button) {
    // Implement liking logic here
}

// Function to get the current user (example implementation)
function getCurrentUser() {
    return 'XYZ'; // Replace with your user retrieval logic
}

// Function to format the current time (example implementation)
function getCurrentTime() {
    return '1s ago';
}
//For showing Comments
function toggleComments(button) {
    var commentSection = button.nextElementSibling;
    if (commentSection.style.display === 'none' || commentSection.style.display === '') {
        commentSection.style.display = 'block';
        button.textContent = 'Hide Comments';
    } else {
        commentSection.style.display = 'none';
        button.textContent = 'Show Comments';
    }
}
//For upvotes and likes count
function upvote(button) {
    const upvoteCountElement = button.parentElement.querySelector('.upvote-post');
    const currentUpvotes = parseInt(upvoteCountElement.textContent);
    upvoteCountElement.textContent = currentUpvotes + 1;
}

function like(button) {
    const likeCountElement = button.parentElement.querySelector('.like-post');
    const currentLikes = parseInt(likeCountElement.textContent);
    likeCountElement.textContent = currentLikes + 1;
}

function likeComment(button) {

    const likeCountSpan = button.nextElementSibling;
    let currentLikes = parseInt(likeCountSpan.textContent);
    currentLikes++;
    likeCountSpan.textContent = currentLikes;
}
function upvoteComment(button) {

    const likeCountSpan = button.nextElementSibling;
    let currentLikes = parseInt(likeCountSpan.textContent);
    currentLikes++;
    likeCountSpan.textContent = currentLikes;
}
//Read More of the post
function toggleReadMore(button) {
    const post = button.parentElement;
    const additionalText = post.querySelector('.additional-text');

    if (additionalText.classList.contains('collapsed')) {
        additionalText.classList.remove('collapsed');
        button.textContent = 'Read Less';
    } else {
        additionalText.classList.add('collapsed');
        button.textContent = 'Read More';
    }
}


//Posting Comments

function addComment() {
    let text = document.getElementById('comment-text').value;


    let commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');


    let userIcon = document.createElement('i');
    userIcon.classList.add('far', 'fa-user');

    let usernameSpan = document.createElement('span');
    usernameSpan.textContent = 'User';

    let timestampSpan = document.createElement('span');
    timestampSpan.style.color = 'darkgray';
    timestampSpan.textContent = '1s ago';

    let commentText = document.createElement('p');
    commentText.textContent = text;


    let responseDiv = document.createElement('div');
    responseDiv.classList.add('response');

    let upvoteIcon = document.createElement('i');
    upvoteIcon.classList.add('fas', 'fa-up-long');
    upvoteIcon.style.cursor = 'pointer';

    let upvoteCountSpan = document.createElement('span');
    upvoteCountSpan.textContent = '0';
    upvoteCountSpan.classList.add('comment-upvote');

    let downvoteIcon = document.createElement('i');
    downvoteIcon.classList.add('fas', 'fa-down-long');
    downvoteIcon.style.cursor = 'pointer';

    let likeIcon = document.createElement('i');
    likeIcon.classList.add('far', 'fa-heart');
    likeIcon.style.cursor = 'pointer';

    let likeCountSpan = document.createElement('span');
    likeCountSpan.textContent = '0';
    likeCountSpan.classList.add('comment-like');


    upvoteIcon.addEventListener('click', function () {
        incrementUpvote(upvoteCountSpan);
    });

    likeIcon.addEventListener('click', function () {
        incrementLike(likeCountSpan);
    });


    responseDiv.appendChild(upvoteIcon);
    responseDiv.appendChild(upvoteCountSpan);
    responseDiv.appendChild(downvoteIcon);
    responseDiv.appendChild(likeIcon);
    responseDiv.appendChild(likeCountSpan);


    commentDiv.appendChild(userIcon);
    commentDiv.appendChild(usernameSpan);
    commentDiv.appendChild(timestampSpan);
    commentDiv.appendChild(commentText);
    commentDiv.appendChild(responseDiv);


    let commentSection = document.querySelector('.comment-section');
    commentSection.insertBefore(commentDiv, commentSection.firstChild);


    document.getElementById('comment-text').value = '';
}


function incrementUpvote(upvoteCountSpan) {
    let currentCount = parseInt(upvoteCountSpan.textContent);
    upvoteCountSpan.textContent = currentCount + 1;
}


function incrementLike(likeCountSpan) {
    let currentCount = parseInt(likeCountSpan.textContent);
    likeCountSpan.textContent = currentCount + 1;
}
