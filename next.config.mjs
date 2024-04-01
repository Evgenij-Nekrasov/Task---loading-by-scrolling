/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "media0.giphy.com",
            port: "",
            pathname:
               "/media/v1.Y2lkPTc5MGI3NjExY2t5Y3M5eTc4MmgxdXppaGE5NnRnd3drNG8zYWk4bml0N3R4c2psdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UoeaPqYrimha6rdTFV/giphy.gif",
         },
      ],
   },
};
// src="https://laravel.demiart.ru/wp-content/uploads/2019/05/exceptions.png"
// https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2t5Y3M5eTc4MmgxdXppaGE5NnRnd3drNG8zYWk4bml0N3R4c2psdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UoeaPqYrimha6rdTFV/giphy.gif
export default nextConfig;
