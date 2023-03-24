import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Fragment } from 'react'
import { SocialProfileJsonLd } from 'next-seo'

import avatar from 'public/images/avatar-with-logos.png'
import { Button } from 'components/Button'

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Elia Darwish</title>
        <meta
          name="description"
          content="Elia Darwish is a web developer with a big passion for Frontend. He enjoy creating and refining accessible user interfaces and UI elements."
        />
      </Head>

      <main className="isolate grid h-full w-full grid-cols-1 grid-rows-[1.2fr_1fr] xl:grid-cols-2 xl:grid-rows-1 xl:gap-8 xl:p-8">
        <div className="order-2 self-center xl:mt-32 xl:ml-auto xl:self-start 6xl:mt-64 6xl:justify-self-center">
          <h1 className="relative w-max text-xl font-medium md:text-3xl xl:text-4xl 6xl:text-6xl">
            <span className="absolute left-[calc(100%_+_0.75rem)] bottom-[0.25em] -z-10 h-3 w-24 bg-wiggle-wide-6-primary-animated-right bg-[length:1.5rem] bg-[0.75rem] bg-repeat-x motion-reduce:bg-bg-dark md:h-2" />
            Elia Darwish
          </h1>

          <div className="mt-3 max-w-[75ch] gap-x-3 md:mt-6 6xl:max-w-[100ch]">
            <p className="xl:text-md 6xl:text-lg">
              I&apos;m a web developer with a big passion for Frontend. I enjoy creating and refining accessible user
              interfaces and UI elements.
            </p>
            <text className="hidden md:block xl:text-md 6xl:text-lg">
              Likewise, I love playing around with animation and micro-interactions. I&apos;m eager to improve my UI/UX
              skills and can&apos;t wait to dive deeper into WebGL and 3D on the web!
            </text>
            <p className="hidden md:block xl:text-md 6xl:text-lg">
              Digital painting, dog psychology, handcrafts and photography are some of the things I enjoy doing on the
              side.
            </p>
            <Button className="mt-4 md:mt-8" href="mailto:darwish.elia@gmail.com" target="_blank" rel="noreferrer">
              hit me up!
            </Button>
          </div>
        </div>

        <div className="relative -z-10 order-1 mx-5 md:mx-0 md:mb-[-5vw] xl:order-2 xl:mb-0">
          <Image
            src={avatar}
            alt="Elia's avatar"
            sizes="60vw, (min-width: 768px) 50vw, (min-width: 1280px) 40vw"
            priority
            quality={80}
            className="absolute inset-0 h-full w-full object-cover object-[center_top] md:object-contain md:object-[90%_50%]"
          />
        </div>
      </main>

      <SocialProfileJsonLd
        type="Person"
        name="Elia Darwish"
        url="https://elia-darwish.dev"
        image={[
          'https://elia-darwish.dev/images/avatar-1x1.jpg',
          'https://elia-darwish.dev/images/avatar-4x3.jpg',
          'https://elia-darwish.dev/images/avatar-16x9.jpg',
        ]}
        jobTitle="Web Developer"
        sameAs={[
          'https://twitter.com/DarwishElia',
          'https://www.linkedin.com/in/elia-darwish/',
          'https://github.com/Elia-Darwish',
        ]}
        worksFor={{
          '@type': 'Organization',
          name: 'img.ly GmbH',
        }}
      />
    </Fragment>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  return {
    props: {
      theme: req.cookies.theme ?? null,
    },
  }
}

export default Home
