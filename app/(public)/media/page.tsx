import NewPost from "@/components/media/NewPost";
import PostList from "@/components/media/PostList";

export default function SocialMediaPage() {
    return (
        <div className="place-self-auto">
            <NewPost />
            <PostList />
        </div>
    )
}
