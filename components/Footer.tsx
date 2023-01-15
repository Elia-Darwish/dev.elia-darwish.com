import { Anchor } from 'components/Anchor'

export function Footer() {
  return (
    <footer className="flex items-center justify-between px-6 py-8 md:px-12">
      <div className="flex w-full justify-between md:w-max md:justify-start md:gap-x-8">
        <Anchor variant="nav" href="https://github.com/Elia-Darwish" target="_blank" rel="noreferrer">
          Github
        </Anchor>
        <Anchor variant="nav" href="https://twitter.com/DarwishElia" target="_blank" rel="noreferrer">
          Twitter
        </Anchor>
        <Anchor variant="nav" href="https://www.linkedin.com/in/elia-darwish/" target="_blank" rel="noreferrer">
          LinkedIn
        </Anchor>
        <Anchor variant="nav" href="https://poly.me/elia_darwish" target="_blank" rel="noreferrer">
          Polywork
        </Anchor>
        <Anchor variant="nav" href="/documents/elia-darwish-cv.pdf" target="_blank" rel="noreferrer">
          CV
        </Anchor>
      </div>

      <p className="hidden text-sm opacity-80 md:block">2023 - Elia Darwish</p>
    </footer>
  )
}
