// This file contains only one component and no data
// which is good practice.
// Here we get the data via our props.
// Again we are showing both ways of using .map().

export default function Blog({posts}) {

  const JsxInsideMap = posts.map((post) =>
  <div key={post.id}>
    <h3>{post.title}</h3>
    <p>{post.content}</p>
  </div>
  )
  
  const MapInsideJsx = (
  <div>
    {posts.map((post) =>
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
    )}
  </div>
  )

  return (
  <div>
    <h2>JsxInsideMap</h2>
    <div>
      {JsxInsideMap}
    </div>
    <hr />
    <h2>MapInsideJsx</h2>
    {MapInsideJsx}
  </div>
  )

}