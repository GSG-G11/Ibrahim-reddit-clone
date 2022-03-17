const { connection } = require('../config');

const getAllPostsQuery = (userId) => connection.query('select * from (select p.id,p.title,p.description,p.user_id, sum(post_vote_value),u.username from posts as p left join posts_votes as pv on(p.id=pv.post_id) join users as u on(u.id=p.user_id) group by u.id,p.id) as p left join (select post_vote_value,post_id from posts_votes where user_id=$1) as pv on (p.id=pv.post_id) left join (select is_post_saved,post_id from saved_posts where user_id=$1) as sv on(p.id=sv.post_id) order by sum desc;', [userId])
  .then(({ rows }) => rows);

module.exports = { getAllPostsQuery };
