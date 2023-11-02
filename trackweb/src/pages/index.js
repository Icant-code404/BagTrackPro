import { Inter } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '/public/Logo.png';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-b from-[#102b44] from-40% to-[#102b448f]">
    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-300 to-[#d9d9d9d0] pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:p-4 lg:dark:bg-zinc-800/30">
        Welcome to&nbsp;
        <code className="font-mono font-bold">BagTrackPro</code>
      </p>
      <div className="fixed bottom-0 left-0 text-xl flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          By S.E CSA
      </div>
    </div>

    <div className="relative flex place-items-center pt-10">
      <Image
        className="relative"
        src='/Logo.png'
        alt="Logo"
        width={200}
        height={200}
        color='white'
        priority
      />
    </div>

    <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left pb-10 pt-20 space-x-3">
      <Link
        href="/PairingPage"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-100 hover:bg-gray-300 hover:bg-opacity-50 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={`mb-3 text-2xl `}>
          Pairing{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-70`}>
          Time to Pair Up 
        </p>
      </Link>

      <Link
        href="/CompassPage"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-300 hover:bg-opacity-50 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={`mb-3 text-2xl`}>
          FindMe{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-70`}>
          Come my way!
        </p>
      </Link>

      <Link
        href="/"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-300 hover:bg-opacity-50 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={`mb-3 text-2xl`}>
          TakeMeHome{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-70`}>
          Dont leave me behind!!!
        </p>
      </Link>

      <Link
        href="/MapPage"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-300 hover:bg-opacity-50 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={`mb-3 text-2xl `}>
          Map{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-70`}>
          Leads you right to me
        </p>
      </Link>
    </div>
  </main>
  </div>
)
}