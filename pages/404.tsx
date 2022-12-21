import { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'

import { Center } from 'components/primitives'
import { Heading, Text } from 'components/typography'
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

      <Center css={{ size: '$full', placeItems: 'center' }}>
        <Heading
          weight="black"
          css={{
            fontSize: '25vmin',
            fontFamily: '$primary',
            color: 'transparent',
            backgroundColor: '$primary-500',
            backgroundImage: 'url(/images/bg/bg-dark-animated.svg)',
            backgroundSize: '12px',
            backgroundClip: 'text',

            '@reduce-motion': {
              backgroundImage: 'url(/images/bg/bg-dark.svg)',
            },
          }}
        >
          404
        </Heading>

        <Heading
          size={{ '@initial': 'lg', '@md': 'xl' }}
          css={{ textAlign: 'center', maxWidth: '30ch', marginTop: '$5' }}
        >
          Dude, you can&apos;t just write stuff in the URL bar and expect them to work!
        </Heading>

        <Text size={{ '@initial': 'md', '@md': 'lg' }} css={{ textAlign: 'center', maxWidth: '25ch', marginTop: '$8' }}>
          How about you head back{' '}
          <Anchor as={Link} href="/">
            home
          </Anchor>{' '}
          and try again?
        </Text>
      </Center>
    </>
  )
}

export default NotFound
