export const fetchUser = (userId) => (
   $.ajax({
     method: 'GET',
     url: `/api/users/${userId}`
   })
 );

 export const followUser = (id) => (
   $.ajax({
     method: 'POST',
     url: '/api/follows',
     data: { id }
   })
 );

 export const unfollowUser = (id) => (
   $.ajax({
     method: 'DELETE',
     url: `/api/follows/${id}`,
     data: { id }
   })
 );
