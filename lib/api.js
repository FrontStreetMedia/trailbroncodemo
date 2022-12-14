const API_URL = process.env.WORDPRESS_API_URL;

const fetchAPI = async(query, {variables} = {}) =>{
    const headers = {'Content-Type': 'application/json'};
  
    const res = await fetch(API_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({query, variables}),
    });
  
    const json = await res.json();
    if (json.errors) {
      console.log(json.errors);
      throw new Error('Failed to fetch API');
    }
  
    return json.data;
  };

export const getAllPosts = async() => {
    const data = await fetchAPI(
`        query GetPostsEdges {
            posts {
              edges {
                node {
                  id
                  title
                  date
                }
              }
            }
          }`
    );
    return data.posts;
}
