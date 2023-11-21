import React, { useState } from 'react';
import {
  Button,
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  Divider,
  IconButton,
  Badge,
  Chip
} from '@mui/material';
import { styled } from '@mui/system';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import SendIcon from '@mui/icons-material/Send';
import MainCard from 'ui-component/cards/MainCard';

const StyledContainer = styled(Container)({
  marginTop: '16px',
});

const StyledGrid = styled(Grid)({
  marginBottom: '16px',
});

const StyledPaper = styled(Paper)({
  padding: '16px',
  position: 'relative',
});

const StyledTextField = styled(TextField)({
  width: '100%',
  marginBottom: '16px',
});

const StyledButton = styled(Button)({
  marginTop: '16px',
});

const StyledIconButton = styled(IconButton)({
  position: 'absolute',
  bottom: '8px',
  right: '8px',
});

const ReplyCard = ({ discussionItem, onLike, onReply, reply, onReplyChange, isSelected, onSelect }) => {
  return (
    <>
      <StyledPaper elevation={3} style={{ marginBottom: '10px', cursor: 'pointer' }} onClick={onSelect}>
        <Typography variant="body1" paragraph>
          {discussionItem.post}
        </Typography>

        <Chip label={discussionItem.tag} size="small" />

        <Typography variant="subtitle2">Likes: {discussionItem.likes}</Typography>

        <StyledIconButton onClick={onLike}>
          <Badge badgeContent={discussionItem.likes} color="primary">
            <ThumbUpIcon />
          </Badge>
        </StyledIconButton>
      </StyledPaper>

      {isSelected && (
        <StyledPaper elevation={3} style={{ marginBottom: '10px', marginLeft: '20px', paddingLeft: '20px' }}>
          {discussionItem.replies.map((replyItem, replyIndex) => (
            <Typography key={replyIndex} variant="body2">
              Reply: {replyItem}
            </Typography>
          ))}
          <StyledTextField
            variant="outlined"
            label="Reply"
            fullWidth
            value={reply}
            onChange={onReplyChange}
          />
          <StyledIconButton onClick={onReply} style={{ margin: '8px' }}>
            <SendIcon />
          </StyledIconButton>
        </StyledPaper>
      )}
    </>
  );
};

const Board = () => {
  const [discussion, setDiscussion] = useState([]);
  const [post, setPost] = useState('');
  const [tag, setTag] = useState('');
  const [reply, setReply] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);

  const handlePostChange = (event) => {
    setPost(event.target.value);
  };

  const handleTagChange = (event) => {
    setTag(event.target.value);
  };

  const handleReplyChange = (event) => {
    setReply(event.target.value);
  };

  const handlePostSubmit = () => {
    if (post.trim() !== '' && tag.trim() !== '') {
      const newDiscussion = {
        post,
        tag,
        replies: [],
        likes: 0,
      };

      setDiscussion([...discussion, newDiscussion]);
      setPost('');
      setTag('');
    }
  };

  const handleReply = (index) => {
    if (reply.trim() !== '') {
      const updatedDiscussion = [...discussion];
      updatedDiscussion[index].replies.push(reply);
      setDiscussion(updatedDiscussion);
      setReply('');
    }
  };

  const handleLike = (index) => {
    const updatedDiscussion = [...discussion];
    updatedDiscussion[index].likes += 1;
    setDiscussion(updatedDiscussion);
  };

  const handlePostSelect = (index) => {
    setSelectedPost(selectedPost === index ? null : index);
  };

  return (
    <MainCard>
      <StyledContainer>
        <StyledGrid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Typography variant="h4" gutterBottom>
              Fórum de Discussão
            </Typography>
            <Divider />
          </Grid>

          <Grid item xs={12} md={8}>
            <StyledPaper elevation={3}>
              <StyledTextField
                multiline
                rows={4}
                variant="outlined"
                label="Escreva um post"
                value={post}
                onChange={handlePostChange}
              />
              <StyledTextField
                variant="outlined"
                label="Tag"
                value={tag}
                onChange={handleTagChange}
              />
              <StyledButton
                variant="contained"
                color="primary"
                onClick={handlePostSubmit}
              >
                Postar
              </StyledButton>
            </StyledPaper>
          </Grid>

          <Grid item xs={12} md={8}>
            {discussion.map((discussionItem, index) => (
              <ReplyCard
                key={index}
                discussionItem={discussionItem}
                onLike={() => handleLike(index)}
                onReply={() => handleReply(index)}
                reply={reply}
                onReplyChange={handleReplyChange}
                isSelected={selectedPost === index}
                onSelect={() => handlePostSelect(index)}
              />
            ))}
          </Grid>
        </StyledGrid>
      </StyledContainer>
    </MainCard>
  );
};

export default Board;
