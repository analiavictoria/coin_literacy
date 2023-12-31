import React, { useState } from 'react';
import {
  Button,
  TextField,
  Card,
  CardContent,
  Typography,
  Box,
  Divider
} from '@mui/material';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import SendIcon from '@mui/icons-material/Send';
import MainCard from 'ui-component/cards/MainCard';
import UnderConstruction from './under_construction.png'

const Forum = ({ posts, setPosts }) => {
  const [newPost, setNewPost] = useState('');
  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);
  const [underConstruction, setUnderConstruction] = useState(true); // Setar para true para habilitar o modo em construção

  const handlePostSubmit = () => {
    const postId = posts.length;
    setPosts([...posts, { id: postId, content: newPost }]);
    setComments({ ...comments, [postId]: [] });
    setNewPost('');
    setUnderConstruction(false);
  };

  const handleCommentSubmit = () => {
    setComments({
      ...comments,
      [selectedPost]: [...comments[selectedPost], newComment],
    });
    setNewComment('');
  };

  return (
    <Box>
      {underConstruction && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(255, 255, 255, 0.1)',
            zIndex: 1000,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <img src={UnderConstruction} 
          alt="Parede de tijolos"
          ></img>
          <Typography variant="h1" color={'primary'} sx={{m:2}} gutterBottom> 
          Em construção!
          </Typography>
          <Typography 
          variant="h2" color={'primary'} gutterBottom> 
          No momento, estamos trabalhando nesse recurso
          </Typography>
          <Typography 
          variant="h2" color={'primary'} gutterBottom> 
          e o lançaremos em breve!
          </Typography>
        </div>
      )}

      <MainCard style={{ filter: underConstruction ? 'blur(5px)' : 'none' }}>
        <div style={{ maxWidth: '800px', margin: '20px auto' }}>
        <Typography
          noWrap
          variant="h1"
          color="primary"
          align="center"
          sx={{ flex: 1, my:1 }}
        >
         Fórum
        </Typography>
        <Divider sx={{m:2}}></Divider>
          <TextField
            label="Nova postagem"
            fullWidth
            multiline
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            margin="normal"
          />
          <Button
            variant="contained"
            size="small"
            color="secondary"
            onClick={handlePostSubmit}
            style={{ marginTop: '10px' }}
            endIcon={<SendIcon />}
          >
            Enviar
          </Button>
          <div style={{ marginTop: '20px' }}>
            {posts.map((post) => (
              <Card key={post.id} style={{ marginTop: '20px' }}>
                <CardContent>
                  <Typography variant="body1">{post.content}</Typography>
                  <Button
                    size="small"
                    variant="contained"
                    color="secondary"
                    onClick={() => setSelectedPost(post.id)}
                    style={{ marginTop: '10px' }}
                    endIcon={<ModeCommentIcon />}
                  >
                    Comentar
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
                        size="small"
                        color="secondary"
                        onClick={handleCommentSubmit}
                        style={{ marginTop: '10px' }}
                      >
                        Enviar
                      </Button>
                      <div style={{ marginTop: '15px' }}>
                        {comments[post.id].map((comment, index) => (
                          <Card
                            key={index}
                            style={{
                              padding: '10px',
                              marginTop: '10px',
                              backgroundColor: '#f5f5f5',
                            }}
                          >
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
    </Box>
  );
};

export default Forum;
