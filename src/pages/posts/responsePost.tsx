// "use client";

// import { useRouter } from "next/router";

// import { useFetchPostByIdQuery } from "@/shared/api/Request";
// import { useState } from "react";
// import Post from "./[id]";

// function ResponseId() {
//    const router = useRouter();

//    const [postLimit, setPostLimit] = useState(10);

//    const { data } = useFetchPostByIdQuery(
//       router.query.responsePost as unknown as number
//    );
//    console.log(data);
//    return <Post data={data} />;
// }

// export default ResponseId;
