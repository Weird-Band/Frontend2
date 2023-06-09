import { Minter } from '../../components/Minter'

export default async function Mint() {
  return (
    <div className="max-w-screen w-full min-h-screen bg-[#1F1863]">
      <div className="pt-48 pb-24">
        <Minter />
        <div className="max-w-screen lg:max-w-[966px] w-full mt-20 flex flex-col items-start mx-auto">
          <h1 className="font-grandstander font-black text-white text-[3rem] leading-none">
            Preview
          </h1>
          <p className="text-[#DDDDDD] mt-4">
            All of those Weirds can land in 8 different places.
          </p>
          <div className="w-full flex flex-col mt-7 bg-[#18134E] rounded-[24px] py-12 px-4 lg:px-16 items-center mx-auto shadow-xl text-white">
            <div className="w-full flex flex-col lg:flex-row gap-y-6 items-center justify-between">
              <video
                src="./gulp.mp4"
                controls
                className="w-[265px] h-[265px] rounded-xl"
              />
              <video
                src="./sneeze.mp4"
                controls
                className="w-[265px] h-[265px] rounded-xl"
              />
              <video
                src="./ladyKinky.mp4"
                controls
                className="w-[265px] h-[265px] rounded-xl"
              />
            </div>
            <p className="w-[323px] lg:w-[405px] text-center text-[#BEBEBE] mt-10">
              In each location they play different music. Combine your Weirds to
              see them play together!
            </p>
          </div>
          <div className="w-screen lg:w-[966px] bg-[#18134E] rounded-[24px] py-12 px-4 mt-8">
            <p className="w-full lg:w-[966px] text-[#A8F380] text-sm lg:text-lg text-center">
              When minting a Weird Ship you have a 1% chance of landing a Weird
              Place, which is even more special.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
