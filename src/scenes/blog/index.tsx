import Blogcard from "./components/blogcard"
type Props = {}

const Blog = (props: Props) => {
  return (
    <div className="grid grid-cols-3 gap-2">
  <Blogcard/>
  <Blogcard/>
  <Blogcard/>
  <Blogcard/>
  <Blogcard/>
  <Blogcard/>

</div>
  )
}

export default Blog