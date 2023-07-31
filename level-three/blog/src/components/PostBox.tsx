import { ExtendedPost } from "@/types/post";
import Image from 'next/image';
import Link from 'next/link';
import { FC } from "react";
import { EditorOutput } from ".";

interface PostProps {
    post: ExtendedPost;
}

const PostBox: FC<PostProps> = ({
    post
}) => {

    return (
        <div className='relative overflow-hidden flex items-center w-full p-4 bg-white border rounded-lg hover:bg-neutral-50 md:rounded-xl hover:border-slate-300 md:px-6 md:py-4 max-w-full group'>
            <Link href={`/p/${post.id}`} passHref className='flex flex-col items-start w-full'>
                <div className='flex flex-col items-start w-full gap-y-4'>
                    <div className='flex items-start gap-3'>
                        <Image
                            src={post?.author?.image}
                            alt=''
                            width={1000}
                            height={1000}
                            referrerPolicy="no-referrer"
                            className='object-cover rounded-full w-9 h-9'
                        />
                        <div className='flex flex-col'>
                            <h4 className='text-sm font-medium text-gray-800 capitalize'>
                                {post?.author?.name}
                            </h4>
                            <p className='text-xs font-medium text-gray-500'>
                                {post?.author?.email}
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col items-start'>
                        <h2 className='text-lg truncate font-semibold font-heading md:text-2xl md:font-bold text-slate-900'>
                            {post?.title.substring(0, 48)}...
                        </h2>

                        <div className='relative w-full truncate max-h-40 max-w-xl'>
                            <EditorOutput content={post?.content} />
                            <div className='absolute bottom-0 left-0 h-24 w-full group-hover:from-neutral-50 bg-gradient-to-t from-white to-transparent text-base'></div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default PostBox;