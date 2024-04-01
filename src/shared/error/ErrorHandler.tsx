import Image from "next/image";

function ErrorHandler() {
   return (
      <div role="alert">
         <p>Произошла ошибка:</p>
         <Image
            src="./image/not-found.png"
            alt="Picture of 404 error"
            className="w-full min-h-full object-cover"
         />
      </div>
   );
}

export default ErrorHandler;
