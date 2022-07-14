import React, { useState } from "react";
import ProfileIcon from "react-icons/lib/md/person-outline";
import ReplyIcon from "react-icons/lib/md/chat-bubble-outline";
import FavoriteIcon from "react-icons/lib/md/favorite-outline";
import MessageIcon from "react-icons/lib/md/mail-outline";
import MasterControlIcon from "react-icons/lib/md/more-vert";

import "./Post.css";

import Edit from "./Edit/Edit";

//////////////////////////////////////////////////////// THIS COMPONENT IS BEING RENDERED IN THE *APP* COMPONENT

const Post = (props) => {
  const { text, date } = props;
  const [editing, setEditing] = useState(false);
  const [showMasterMenu, setShowMasterMenu] = useState(false);

  // This puts the post into EDIT mode when the EDIT button is clicked from the drop-down
  const showEdit = () => {
    setEditing(true);
    setShowMasterMenu(false);
  };

  // This puts the post back into normal viewing mode when the CANCEL button is clicked
  // This method is passed down to the <Edit /> component via props
  const hideEdit = () => {
    setEditing(false);
  };

  // This toggles the drop-down when the three dots in the top right corner of a post are clicked
  const toggleMasterMenu = () => {
    setShowMasterMenu(!showMasterMenu);
  };

  // This hides the drop-down when the post is clicked anywhere
  const hideMasterMenu = () => {
    if (showMasterMenu) {
      setShowMasterMenu(false);
    }
  };

  return (
    // Main body of post
    <section className="Post__parent" onClick={hideMasterMenu}>
      {/* Three dots in top right corner */}
      <div className="Post__master-controls">
        <MasterControlIcon onClick={toggleMasterMenu} />

        {/* Drop-down menu. Remember that the "showMasterMenu" variable has been destructured off of this.state */}
        <div
          className="Post__master-menu"
          style={{ display: showMasterMenu ? "flex" : "none" }}
        >
          <span onClick={showEdit}>Edit</span>
          <span>Delete</span>
        </div>
      </div>

      {/* This is where all the meta data of the post will go (who, when, where) */}
      <div className="Post__meta-data">
        <div className="Post__profile-picture">
          <ProfileIcon />
        </div>

        <span className="Post__name">DevMountain</span>
        <span className="Post__handle">@DevMountain</span>

        <span className="Post__date">{date}</span>
      </div>

      {/* This is where the text goes. Notice the ternary statement. The ternary statement decides to display either the text OR the editor view
            You can also think of it as being written as so:
              if( editing === true ) {
                <Edit ... />
              } else {
                <span ... ></span>
              }
        */}
      <div className="Post__content">
        {
          // This has been pulled off of this.state via destructuring
          editing ? (
            <Edit
              text={text}
              hideEdit={hideEdit}
              updatePostFn={props.updatePostFn}
              id={props.id}
            />
          ) : (
            <span className="Post__text">{text}</span>
          )
        }
      </div>

      {/* These are all of the cute little icons in the bottom left corner */}
      <div className="Post__user-controls">
        <ReplyIcon className="Post__control-icon" />
        <FavoriteIcon className="Post__control-icon" />
        <MessageIcon className="Post__control-icon" />
      </div>
    </section>
  );
};

export default Post;
