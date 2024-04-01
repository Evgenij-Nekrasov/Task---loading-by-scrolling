"use client";

import { Provider } from "react-redux";

import { setupStore } from "./store";
import { PostList } from "@/widgets/PostList";

export default function Home() {
   return (
      <Provider store={setupStore()}>
         <PostList />
      </Provider>
   );
}
