const main = document.querySelector('main');
const headerBtns = document.querySelector('.btns_logged');
const addPost = document.querySelector('.addpost');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const addPostForm = document.querySelector('.form-add-post');
const getUserInfoFromCookies = () => {
  let result = '';
  try {
    result = JSON.parse(Object.fromEntries(new URLSearchParams(document.cookie.split('; ').join('&'))).info);
  } catch (error) {
    return { username: '', id: '' };
  }
  headerBtns.innerHTML = '';
  const welcome = document.createElement('span');
  welcome.textContent = `Welcome, ${result.username}`;
  welcome.style.marginRight = '30px';
  const logout = document.createElement('button');
  logout.textContent = 'Log Out';
  logout.classList.add('login');
  logout.onclick = () => fetch('/logout')
    .then((res) => res.json())
    .then((data) => {
      if (data.redirect) {
        window.location.href = data.redirect;
      }
    });
  headerBtns.appendChild(welcome);
  headerBtns.appendChild(logout);
  addPost.classList.remove('hidden');
  return result;
};

const renderDom = (array) => {
  const { id: loginId } = getUserInfoFromCookies();
  main.innerHTML = '';
  array.forEach((postObj) => {
    const {
      id,
      title,
      description,
      user_id: userId,
      username,
      sum,
      post_vote_value: postVoteValue,
      is_post_saved: isPostSaved,
    } = postObj;

    main.innerHTML += `
    <div class="post">
    <div class="votes">
         <button onclick="update('/post/${id}/upvote')" ${postVoteValue === 1 ? 'class="active"' : ''}><i class="fas fa-arrow-up"></i></button>
         <span class="count">${sum || 0}</span>
         <button onclick="update('/post/${id}/downvote')" ${postVoteValue === -1 ? 'class="active"' : ''}><i class="fas fa-arrow-down"></i></button>
    </div>
    <div class="content_post">
        <div class="head_post">
            <a href="/orifke" class="avatar">
                 <img src="https://imageresizer.static9.net.au/S_JG54IIgq3avHrpJxk7KVoQUsY=/500x0/https%3A%2F%2Fprod.static9.net.au%2Ffs%2F7081f766-6d2a-4371-88b9-0663ab143c0b" alt="">
            </a>
            <div class="info_poster">
             <a href="/orifke" class="username">${username}</a>
                <span class="date_post" > 20 hours ago</span>
            </div>
            <div class="join_post">
                <button>Join</button>
            </div>
        </div>
        <div class="titles_post">
            <div class="title_post">
                <span>${title}</span>
            </div>
            <div class="text_post">
                <span>${description}</span>
            </div>
        </div>
        <div class="footer_post">
             <div class="comments" onclick="swal('Comments Feature Coming Soon')">
                 <i class="far fa-comment"></i>
             </div>
             <div class="save" onclick="update('post/${id}/save')">
                 <i class="${isPostSaved ? 'fas' : 'far'} fa-bookmark"></i>
             </div>
             ${loginId === userId ? `<div class="delete" onclick="update('post/${id}/delete')"><i class="far fa-trash-alt"></i></div>` : ''}
        </div>
    </div>
 </div>
        `;
  });
};

const update = (endpoint) => {
  fetch(endpoint)
    .then((res) => res.json())
    .then((data) => {
      if (data.redirect) window.location.href = data.redirect;
    })
    .then(() => fetch('/home'))
    .then((res) => res.json())
    .then(renderDom);
};
update('/home');

addPost.addEventListener('click', () => {
  modal.classList.toggle('hidden');
});

overlay.addEventListener('click', () => {
  modal.classList.toggle('hidden');
});

addPostForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());
  fetch('/post/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => res.json())
    .then(() => swal('Post Added'))
    .then(() => { window.location.href = '/'; });
});
