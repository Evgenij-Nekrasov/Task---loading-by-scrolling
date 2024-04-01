import Link from "next/link";

import { IPost } from "@/shared/api/Request";
import Button from "@/shared/ui/Button";

interface IPostItemProps {
   post: IPost;
}

export function PostItem({ post }: IPostItemProps) {
   return (
      <div className="contain__post-item">
         <h2 className="post__id">№ {post.id}</h2>
         <h3 className="post-item__title">Title: {post.title}</h3>
         <p className="post-item__body">
            Body:{" "}
            {post.body.length > 30
               ? post.body.substring(0, 30) + "..."
               : post.body}
         </p>
         <Button>
            <Link href={`/posts/${post.id}`}>Подробнее...</Link>
         </Button>
      </div>
   );
}
