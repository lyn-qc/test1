interface Post {
    id: number;
    title: string;
    body: string;
}
export default async function Page() {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10')
    const posts = await data.json()
    return (
      <ul>
        {posts.map((post:Post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    )
  }