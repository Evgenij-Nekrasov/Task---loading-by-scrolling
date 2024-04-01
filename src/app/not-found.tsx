"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "@/shared/ui/Button";

export default function NotFound() {
   return (
      <div className="global">
         <div className="style-not-found">
            <h2>Not Found</h2>
            <p>Could not find requested resource</p>
            <Image
               objectFit="cover"
               src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2t5Y3M5eTc4MmgxdXppaGE5NnRnd3drNG8zYWk4bml0N3R4c2psdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UoeaPqYrimha6rdTFV/giphy.gif"
               alt="Landscape picture"
               width={600}
               height={400}
            />
            <Link href="/">
               <Button>Return Home</Button>
            </Link>
         </div>
      </div>
   );
}
