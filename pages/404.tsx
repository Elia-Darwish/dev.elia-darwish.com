import { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'

import { Anchor } from 'components/Anchor'

const NotFound: NextPage = () => {
  return (
    <>
      <Head>
        <title>Elia Darwish</title>
        <meta
          name="description"
          content="Elia Darwish is a web developer with a big passion for Frontend. He enjoy creating and refining accessible user interfaces and UI elements."
        />
      </Head>

      <div className="flex h-full w-full flex-col items-center justify-center">
        <h1 className="bg-primary-500 bg-bg-dark-animated bg-[length:12px] bg-clip-text font-primary text-[25vmin] font-black text-transparent motion-reduce:bg-bg-dark">
          404
        </h1>

        <h1 className="mt-5 max-w-[30ch] text-center text-lg md:text-xl">
          Dude, you can&apos;t just write stuff in the URL bar and expect them to work!
        </h1>

        <p className="mt-8 max-w-[25ch] text-center text-md md:text-lg">
          How about you head back{' '}
          <Anchor as={Link} href="/">
            home
          </Anchor>{' '}
          and try again?
        </p>
      </div>
    </>
  )
}

export default NotFound
