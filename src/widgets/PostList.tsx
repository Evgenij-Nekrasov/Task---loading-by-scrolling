"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import { PostItem } from "@/entities/PostItem";
import { IPost, useFetchAllPostsQuery } from "@/shared/api/Request";

export function PostList() {
   const [postStart, setPostStart] = useState(0);
   const [postLimit, setPostLimit] = useState(10);
   const { data = [] } = useFetchAllPostsQuery({
      limit: postLimit,
      start: postStart,
   });

   const { ref: firstPost, inView: inViewFirstPost } = useInView({
      threshold: [0.2, 0.4, 0.6],
   });

   const { ref: lastPost, inView: inViewLastPost } = useInView({
      threshold: [0.2, 0.4, 0.6],
   });

   useEffect(() => {
      if (inViewFirstPost) {
         setPostStart((prev) => (prev > 0 ? prev - 1 : prev));
      }
   }, [inViewFirstPost]);

   useEffect(() => {
      if (inViewLastPost) {
         setPostStart((prev) => prev + 1);
      }
   }, [inViewLastPost]);

   return (
      <ul className="container">
         {data.map((post: IPost, i: number, arr: IPost[]) =>
            i === 0 ? (
               <li key={post.id} ref={firstPost}>
                  <PostItem post={post} />
               </li>
            ) : i === arr.length - 1 ? (
               <li key={post.id} ref={lastPost}>
                  <PostItem post={post} />
               </li>
            ) : (
               <li key={post.id}>
                  <PostItem post={post} />
               </li>
            )
         )}
      </ul>
   );
}
