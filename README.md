# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Basic Requirements Doc

## Requirements

- Feed like structure (Similar to FB & Linkedin)
- Posts keep coming from the BE
- We need a way to show the new posts on the feed
- Functionality to interact with the post (Like & Comment functionality for now)
- Comments: Nested comments (Tagging Functionality to reply to that comment)
- Latest ones show up on the top (For new posts refresh functionality)
- Nothing about personalization

## Pinning Functionality

- Single Post pinning
- It should be draggable across the screen
- We need to let the user know which post is pinned inside the feed (Probably a placeholder)
- Support the post functionality in the pinned post as well:
  - Functionality to interact with the post (Like & Comment functionality for now)
  - Comments: Nested comments (Tagging Functionality to reply to that comment)

## Layout Container

1. Feed (List of Posts)
2. Post

## Components

### Post

- Text Based
- Supports Like and Dislike
- Nested Comments

### Comment

```json
{
  "id": 1123,
  "content": "comment",
  "child": ["Comment"] // Keep only the commentIds
}
```

### Post Object

```json
{
  "id": 123,
  "content": "Content",
  "allComments": ["c1", "c2"],
  "timeStamp": "today"
}
```

### Feed Object

```json
{
  "List": ["Post"],
  "PinnedPostId": 345
}
```

### CommentThread Object

```json
{
  "comments": ["Comment"]
}
```

### Store

```json
{
  "POSTS": ["Post"],
  "PINNED_POST": "ID",
  "COMMENTS": {
    "PostId": ["Comment"]
  }
}
```
