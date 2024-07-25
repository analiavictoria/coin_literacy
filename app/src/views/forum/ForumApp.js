// App.js
import React, { useState } from 'react';
import Forum from './Forum';

function ForumApp() {
  const [posts, setPosts] = useState([]);

  return (
    <div className="App">
      <Forum posts={posts} setPosts={setPosts} />
    </div>
  );
}

export default ForumApp;
