// "use client"
// import { FileClock, Home, Settings, WalletCards } from 'lucide-react'
// import Image from 'next/image'
// import { usePathname } from 'next/navigation'
// import React, { useEffect } from 'react'

// function SideNav() {
//     const MenuList=[
//         {
//         name:'Home',
//         icon:Home,
//         path:'/dashboard'
//     },
//     {
//         name:'History',
//         icon:FileClock,
//         path:'/dashboard/history'
//     },
//     {
//         name:'Billing',
//         icon:WalletCards,
//         path:'/dashboard/billing'
//     },
//     {
//         name:'Setting',
//         icon:Settings,
//         path:'/dashboard/setting'
//     },
// ]

// const path=usePathname();
// useEffect(()=>{
//     console.log(path)
// })
//   return (
//     <div className='h-screen p-5 shadow-sm border'>
//         <div className='flex justify-center '><Image src={'/logo.svg'} alt='logo' width={80} height={100}/>
//         </div>
//         <hr className='my-0.4 '/>
//         <div className='mt-3'>
//             {MenuList.map((menu,index)=>(
//                 <div className={`flex gap-2 mb-2 p-3 
//                 hover:bg-[#7B3AED] hover:text-white rounded-lg cursor-pointer items-center ${path==menu.path && 'bg-[#7B3AED] text-white'}`}> 
//                     <menu.icon className='h-6 w-6'/>
//                     <h2 className='text-lg'>{menu.name}</h2>
//                 </div>
//            ) )}
//            </div>
//            </div>
          
//   )
// }

// export default SideNav









// "use client"
// import { FileClock, Home, Settings, WalletCards } from 'lucide-react'
// import Image from 'next/image'
// import { usePathname } from 'next/navigation'
// import React, { useEffect } from 'react'

// function SideNav() {
//   const MenuList = [
//     { name: 'Home', icon: Home, path: '/dashboard' },
//     { name: 'History', icon: FileClock, path: '/dashboard/history' },
//     { name: 'Billing', icon: WalletCards, path: '/dashboard/billing' },
//     { name: 'Setting', icon: Settings, path: '/dashboard/setting' }
//   ];

//   const path = usePathname();

//   useEffect(() => {
//     console.log(path);
//   }, [path]);

//   return (
//     <div className='h-screen p-5 shadow-sm border bg-white'>
//       <div className='flex justify-center'>
//         <Image src={'/logo.svg'} alt='logo' width={80} height={100} />
//       </div>
//       <hr className='my-0.4' />
//       <div className='mt-3'>
//         {MenuList.map((menu, index) => (
//           <div
//             key={index}
//             className={`flex gap-2 mb-2 p-3 
//               hover:bg-[#7B3AED] hover:text-white 
//               rounded-lg cursor-pointer items-center 
//               ${path === menu.path ? 'bg-[#7B3AED] text-white' : ''}`}
//           >
//             <menu.icon className='h-6 w-6' />
//             <h2 className='text-lg'>{menu.name}</h2>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default SideNav;
"use client"
import { FileClock, Home, Settings, WalletCards } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link'; // Import Link from next/link
import UsageTrack from './UsageTrack';

function SideNav() {
  const MenuList = [
    { name: 'Home', icon: Home, path: '/dashboard' },
    { name: 'History', icon: FileClock, path: '/dashboard/history' }, // Ensure this links to the history page
    { name: 'Billing', icon: WalletCards, path: '/dashboard/billing' },
    { name: 'Setting', icon: Settings, path: '/dashboard/setting' }
  ];

  const path = usePathname();

  return (
    <div className='h-screen  relative p-5 shadow-sm border bg-white'>
      <div className='flex justify-center'>
        <Image src={'/logo.svg'} alt='logo' width={80} height={100} />
      </div>
      <hr className='my-0.4' />
      <div className='mt-3'>
        {MenuList.map((menu, index) => (
          <Link key={index} href={menu.path}> {/* Wrap the entire menu item in Link */}
            <div
              className={`flex gap-2 mb-2 p-3 
                hover:bg-[#7B3AED] hover:text-white 
                rounded-lg cursor-pointer items-center 
                ${path === menu.path ? 'bg-[#7B3AED] text-white' : ''}`}
            >
              <menu.icon className='h-6 w-6' /> {/* Corrected to render the icon properly */}
              <h2 className='text-lg'>{menu.name}</h2>
            </div>
          </Link>
        ))}
      </div>
      <div className='absolute bottom-10 left-0 w-full'>
        <UsageTrack />
      </div>
    </div>
  );
}

export default SideNav;
