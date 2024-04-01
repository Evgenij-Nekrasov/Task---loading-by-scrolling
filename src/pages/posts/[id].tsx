import { useRouter } from "next/router";
import Link from "next/link";

import Button from "@/shared/ui/Button";
import { IPost } from "@/shared/api/Request";

interface IPostItemProps {
   data?: IPost;
}

function Post({ data }: IPostItemProps) {
   const router = useRouter();
   return (
      <div className="contain__post-item">
         <h2 className="post__id">№ {router.query.id}</h2>
         <h3 className="post-item__title">Title: {data?.title}</h3>
         <p className="post-item__body">Body: {data?.body}</p>
         <Button>
            <Link href="/">Назад</Link>
         </Button>
      </div>
   );
}

export default Post;
