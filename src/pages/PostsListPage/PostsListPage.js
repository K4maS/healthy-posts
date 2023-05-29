import PostsListItem from "../../components/PostsListItem/PostsListItem";



function PostsListPage() {
    return (
        <section className='posts'>
            <div className='container'>
                <h1 className="posts__title">Posts list</h1>
                <div className="posts__block">
                    <PostsListItem />
                    <PostsListItem />
                    <PostsListItem />
                </div>

            </div>
        </section>
    );
}

export default PostsListPage;
