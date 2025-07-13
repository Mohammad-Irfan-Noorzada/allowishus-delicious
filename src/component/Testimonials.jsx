import React from "react";

const costumers = [
  {
    id: '1',
    img: 'images/3b440218798d4c132d7ff09c7442b9215425fb63.jpg',
    name: 'Brooklyn Simmons',
    icon: 'images/stars-icon.png',
    text: `The aroma hits instantly and the taste is just like my favorite café. Smooth, bold, and surprisingly rich for something so quick.
    I’ve tried many, but this is the only instant coffee I actually crave. It’s my daily go-to now — truly a game changer.`,
  },

  {
    id: '2',
    img: 'images/46efc8093377a5458147594f64ac58f90042622a.jpg',
    name: 'Imam White',
    icon: 'images/stars-icon.png',
    text: `Honestly didn’t expect instant coffee to taste this good. It’s full-bodied, not bitter, and has a warm, comforting finish.
    Even my guests are impressed. It saves me time every morning and still gives me that real coffee shop flavor.`,
  },
]

function Testimonials() {
  return (
    <>
      <section className="relative flex flex-col-reverse items-center lg:items-start lg:flex-row lg:justify-between gap-10 lg:gap-6 mt-24 md:mt-10 
        2xl:max-w-[96rem] 2xl:mx-auto">

        <img 
          src="images/2bfd2f572d76b2164731d5885831e1dc2c6217a8.png" 
          alt="coffee"
          className="absolute hidden md:block lg:w-[24rem] lg:-top-40 md:-top-24 md:w-[26rem] md:-left-44 lg:-left-56 xl:-top-60 xl:-left-52 blur-sm" 
        />

        <div className="grid md:grid-cols-2 max-w-[28.125rem] md:max-w-[46.875rem] w-full gap-6 z-10">
          {costumers.map((costumer, id) => (
            <div key={id} className="rounded-2xl bg-neutral-white">
              <div className="">
                <div className="">
                  <img 
                    src={costumer.img} 
                    alt={costumer.name} 
                    width={468}
                    height={324}
                    className="rounded-t-2xl"
                  />
                </div>
                
                <div className="p-4 lg:p-6 xl:p-8">
                  <div className="flex justify-between md:justify-start items-center gap-4 mb-6">
                    <h4 className="text-lg md:text-[1.3rem] text-neutral-veryDarkGray font-semibold">
                      {costumer.name}
                    </h4>

                    <img 
                      src={costumer.icon} 
                      alt="stars"
                      className="w-28 lg:w-20"
                    />    
                  </div>
                  <p className="xl:text-lg text-neutral-dimGray">
                    {costumer.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-[25rem] xl:max-w-[29rem] text-center lg:text-left space-y-4 lg:space-y-8">
          <h2 className="text-[1.6rem] md:text-[clamp(2.5rem,4vw,4rem)] font-extrabold text-neutral-veryDarkGray leading-[1]">
            What Our Customers Say
          </h2>

          <div className="flex items-center justify-center lg:justify-start gap-4">
            <span className="font-semibold text-neutral-veryDarkGray text-2xl md:text-[1.8rem] xl:text-[2.5rem]">
              4.9
            </span>

            <div className="">
              <img 
                src="images/stars-icon.png" 
                alt="stars-icon" 
                className="w-28"
              />
              <p className="text-lg md:text-[1.3rem] text-neutral-dimGray">
                based on 2452+ reviews
              </p>
            </div>
          </div>
        </div>

        <img 
          src="images/8a4bc2a677e8dad6745d815c474ea85749d69062.png" 
          alt="" 
          className="absolute hidden lg:block lg:w-[40rem] xl:w-[45rem] lg:-bottom-36 lg:-right-[32rem] xl:-bottom-44 xl:-right-[38rem] transform rotate-[8deg]"
        />
      </section>
    </>
  )
}

export default Testimonials;