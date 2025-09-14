import HeaderInsta from "./headerinsta";
import Aside from "./Pages/aside";
import PostsLayout from "./PostsLayout";

export default function UserPage() {
  return (
    <div className="flex justify-between">
      <Aside />
      <div className="max-w-9/12">
        <HeaderInsta />
        <PostsLayout />
      </div>
    </div>
  );
}
