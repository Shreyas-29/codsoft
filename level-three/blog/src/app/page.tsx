import { PostBox } from '@/components';
import { db } from '@/lib/db';

export default async function HomePage() {

    const blogs = await db.post.findMany({
        include: {
            author: true,
        },
        orderBy: {
            createdAt: 'desc'
        }
    });

    return (
        <main className='h-full pt-20'>
            <section className='container grid w-full h-full max-w-2xl grid-cols-1 py-10 mx-auto gap-y-8'>
                {blogs?.map((blog) => (
                    <PostBox key={blog?.id} post={blog} />
                ))}
            </section>
        </main>
    )
}
