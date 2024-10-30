export const commentsData = [
  {
    id: '1',
    like: 5,
    dislike: 1,
    comment: 'This is the first comment',
    reply: [
      {
        id: '1-1',
        like: 3,
        dislike: 0,
        comment: 'This is a first-level reply to the first comment',
        reply: [
          {
            id: '1-1-1',
            like: 0,
            dislike: 2,
            comment: 'This is a second-level reply within the first comment',
            reply: [
              {
                id: '1-1-1-1',
                like: 0,
                dislike: 0,
                comment: 'This is a third-level reply within the first comment',
                reply: []
              }
            ]
          }
        ]
      },
      {
        id: '1-2',
        like: 1,
        dislike: 0,
        comment: 'Another first-level reply to the first comment',
        reply: [
          {
            id: '1-2-1',
            like: 0,
            dislike: 2,
            comment: 'A second-level reply to another first-level comment',
            reply: []
          }
        ]
      }
    ]
  },
  {
    id: '2',
    like: 0,
    dislike: 0,
    comment: 'This is the second main comment',
    reply: [
      {
        id: '2-1',
        like: 2,
        dislike: 0,
        comment: 'This is a reply to the second main comment',
        reply: []
      }
    ]
  },
  {
    id: '3',
    like: 4,
    dislike: 0,
    comment: 'This is the third main comment with multiple levels of replies',
    reply: [
      {
        id: '3-1',
        like: 0,
        dislike: 1,
        comment: 'First-level reply to the third main comment',
        reply: [
          {
            id: '3-1-1',
            like: 0,
            dislike: 0,
            comment: 'Second-level reply in the third main comment thread',
            reply: [
              {
                id: '3-1-1-1',
                like: 2,
                dislike: 0,
                comment: 'Third-level reply in this nested thread',
                reply: []
              }
            ]
          }
        ]
      }
    ]
  }
];
