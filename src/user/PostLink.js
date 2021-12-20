import React from "react";
import {Switch, Route, Link, useHistory} from "react-router-dom";

/*
  TODO: Change the below to be a link that goes to the specific post route using the post id.
*/

export const PostLink = ({ post }) => {
  return (
    <li className="list-group-item text-truncate">
      <Link to={`/users/${userId}/posts/${postId}`}>{post.title}</Link>
    </li>
  );
};

export default PostLink;
