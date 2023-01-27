export default function Blog(props) {

  const content = props.posts.map((post) => {
    return (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
    );
  });
  
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );

  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}