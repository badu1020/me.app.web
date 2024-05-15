"use client"
import { Container } from '@/components/Container'
import CountUp from 'react-countup'
import { FadeIn } from './FadeIn'
// import glass from '@/images/GLASS.png'

const stats = [
  { id: 1, name: 'Creators on the platform', value: '10000', time: '2.75' },
  { id: 2, name: 'Flat platform fee', value: '20000', time: '3.75' },
  { id: 3, name: 'Uptime guarantee', value: '30000', time: '4.75' },
  { id: 4, name: 'Paid out to creators', value: '40000', time: '5.75' },
]
export function UserCount() {
  return (


    <section
      id="privacy"
      className="relative overflow-show bg-transparent py-5 overflow-hidden"
    >
      <Container>
        <div
          className='rounded-3xl backdrop-blur-md bg-gradient-to-br from-[#0E0E0E52] from-10% to-[#494548AF] to-24% border-[solid] border-[0.1rem] border-gray-500'>
          <div className='p-5'>
            <h2 className="text-4xl font-medium tracking-tight text-white">
              LOREM IPSUM DOLOR SIT AMET
            </h2>
            <p className="mt-6 text-lg leading-8 text-white">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste
              dolor cupiditate blanditiis ratione.
            </p>
            <FadeIn>
              <div className='flex items-center place-content-center' >
                <dl className="mt-5 ml-5w-full grid max-w-xl grid-cols-1 lg:gap-x-8 lg:gap-y-8 sm:grid-cols-2">
                  {stats.map((stat) => (
                    <div key={stat.id} className="flex flex-col p-5 border-b border-white pl-6">
                      <dt className="text-sm leading-6 text-white">{stat.name}</dt>
                      <dd className="order-first text-3xl font-semibold tracking-tight text-[#d62976]">
                        <CountUp
                          end={stat.value}
                          duration={stat.time}
                          prefix='+'
                        />
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>

  )
}

