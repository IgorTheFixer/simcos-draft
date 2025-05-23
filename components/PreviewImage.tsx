import Image from "next/image";

const PreviewImage = ({data}) =>{
  return(
    <div className="sm:col-span-4 lg:col-span-5">
          <div className="flex flex-col-reverse">
            <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
              <div className="aspect-square relative bg-white h-full w-full sm:rounded-lg overflow-hidden">
                {data.image && 
                  <Image 
                    src={data.image}
                    // TODO:replace when Simco's provides images
                    alt="sample image for demo purposes" 
                    fill
                    className="object-cover object-center"
                  />
                }
              </div>
            </div>
          </div>
        </div>
  )
}

export default PreviewImage