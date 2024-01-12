import { Cards } from '@/routes'
import Image from 'next/image'
import { currentUser, useUser } from '@clerk/nextjs';

interface UserProps {
  title: string;
  href: string;
  icon: string;
  num?: number;
  background: string;
}
export default async function Home() {
  const user = await currentUser();
  
  
  return (
    <main className="relative flex flex-wrap gap-3 px-2 py-2">
      {Cards.map((item) => {
        const { Icon, num, title } = item;

        return (
          <div key={item.title} className={`relative w-[255px] h-[157px] bg-[#FEF6FB] rounded-md px-6 py-3`}>
            <Icon className="w-8 h-8" />
            <h1 className=' text-[#6C6C6C] pt-4'>{title}</h1>
            <label className='font-extrabold absolute bottom-[10%] right-[10%] text-2xl'>{num}</label>
          </div>
        )
      })}
    </main>
  )
}
