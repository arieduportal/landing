import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between p-0">
      <div className="fixed transform -translate-y-1/2 top-1/2">
        <Image src="" alt="" className='hidden'></Image>
        <p className="text-center font-bold uppercase text-2xl">Website is currently undergoing update</p>
      </div>
    </main>
  )
}
