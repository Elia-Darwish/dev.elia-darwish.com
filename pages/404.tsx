import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import img from 'public/images/psst.png'

import { Anchor, Box, Center, Grid } from 'components/primitives'
import { Heading, Text } from 'components/typography'

const NotFound: NextPage = () => {
  return (
    <Center css={{ size: '$full', placeItems: 'center' }}>
      <Heading
        weight="bold"
        css={{
          fontSize: '25vmin',
          fontFamily: '$primary',
          color: 'transparent',
          backgroundColor: '$primary-500',
          backgroundImage: 'url(/images/bg/bg-dark.svg)',
          backgroundClip: 'text',
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
        How about you head over to the{' '}
        <Link href="/" passHref>
          <Anchor css={{ color: '$primary-500' }}>Homepage</Anchor>
        </Link>{' '}
        and try again?
      </Text>
    </Center>
  )
}

export default NotFound
