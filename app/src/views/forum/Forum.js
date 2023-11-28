// Forum.js
import React, { useState } from 'react';
import { Button, TextField, Card, CardContent, Typography } from '@mui/material';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import SendIcon from '@mui/icons-material/Send';
import MainCard from 'ui-component/cards/MainCard';

const Forum = ({ posts, setPosts }) => {
  const [newPost, setNewPost] = useState('');
  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);

  const handlePostSubmit = () => {
    const postId = posts.length;
    setPosts([...posts, { id: postId, content: newPost }]);
    setComments({ ...comments, [postId]: [] });
    setNewPost('');
  };

  const handleCommentSubmit = () => {
    setComments({
      ...comments,
      [selectedPost]: [...comments[selectedPost], newComment],
    });
    setNewComment('');
  };

  return (
    <MainCard>
    <div style={{ maxWidth: '800px', margin: '20px auto' }}>
      <Typography variant="h4" gutterBottom>
        Forum
      </Typography>
      <TextField
        label="New Post"
        fullWidth
        multiline
        value={newPost}
        onChange={(e) => setNewPost(e.target.value)}
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handlePostSubmit} style={{ marginTop: '10px' }} endIcon={<SendIcon />}>
        Post
      </Button>
        <div style={{ marginTop: '20px' }}>
        {posts.map((post) => (
          <Card key={post.id} style={{ marginTop: '20px' }}>
            <CardContent>
              <Typography variant="body1">{post.content}</Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={() => setSelectedPost(post.id)}
                style={{ marginTop: '10px' }}
                endIcon={<ModeCommentIcon />}
              > Add Comment
              </Button>
              {selectedPost === post.id && (
                <div style={{ marginTop: '15px' }}>
                  <TextField
                    label="Add Comment"
                    fullWidth
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    margin="normal"
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleCommentSubmit}
                    style={{ marginTop: '10px' }}
                  >
                    Comment
                  </Button>
                  <div style={{ marginTop: '15px' }}>
                    {comments[post.id].map((comment, index) => (
                      <Card key={index} style={{ padding: '10px', marginTop: '10px', backgroundColor: '#f5f5f5' }}>
                        <CardContent>{comment}</CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}           
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
    </MainCard>
    
    
  );
};

export default Forum;
