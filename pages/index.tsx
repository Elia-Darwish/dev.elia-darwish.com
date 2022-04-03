import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Fragment } from 'react'

import avatar from 'public/images/avatar-with-logos.png'
import { Anchor, Box, Grid } from 'components/primitives'
import { Heading, Text } from 'components/typography'

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Elia Darwish</title>
        <meta
          name="description"
          content="a web developer with a big passion for Frontend. I enjoy creating and refining accessible user interfaces and UI elements."
        />
      </Head>

      <Grid as="main" css={{ gridTemplateColumns: '1fr 1fr', size: '$full', padding: '$8', gap: '$8' }}>
        <Box css={{ marginTop: '$32', marginLeft: 'auto' }}>
          <Heading
            size="4xl"
            css={{
              position: 'relative',
              width: 'max-content',
            }}
          >
            <Box
              css={{
                position: 'absolute',
                bottom: '$3_5',
                left: 'calc(100% + $2)',
                height: '$2',
                width: '$24',
                backgroundColor: '$primary-500',
                backgroundImage: 'url(/images/bg/bg-dark.svg)',
                backgroundSize: '12px',
                zIndex: '$underlay',
              }}
            />
            Elia Darwish
          </Heading>

          <Box css={{ maxWidth: '75ch', spaceY: '$3', marginTop: '$6' }}>
            <Text size="md">
              I&apos;m a web developer with a big passion for Frontend. I enjoy creating and refining accessible user
              interfaces and UI elements.
            </Text>
            <Text size="md">
              Likewise, I love playing around with animation and micro-interactions. I&apos;m eager to improve my UI/UX
              skills and can&apos;t wait to dive deeper into WebGL and 3D on the web!
            </Text>
            <Text size="md">
              Digital painting, dog psychology, handcrafts and photography are some of the things I enjoy doing on the
              side.
              <Anchor css={{ color: '$primary-500', marginLeft: '$3' }}>Let&apos;s get in touch!</Anchor>
            </Text>
          </Box>
        </Box>

        <Box css={{ position: 'relative' }}>
          <Image src={avatar} alt="Elia's avatar" objectFit="contain" layout="fill" />
        </Box>
      </Grid>
    </Fragment>
  )
}

export default Home
