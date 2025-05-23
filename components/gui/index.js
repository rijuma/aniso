import Logo from 'assets/svg/logo.svg'
import Panel from 'assets/svg/panel.svg'
import cn from 'clsx'
import levaTheme from 'config/leva'
import { Leva } from 'leva'
import { useStore } from 'lib/store'
import s from './gui.module.scss'

export function GUI() {
  const gui = useStore((state) => state.gui)
  const setGui = useStore((state) => state.setGui)

  return (
    <div className={cn(s.gui, gui && s.open)}>
      <button
        type="button"
        className={s.toggle}
        onClick={() => {
          setGui(!gui)
        }}
      >
        <Panel />
      </button>
      <header className={s.title}>
        <Logo />
        <h1>ANISO_ASCII_TOOL</h1>
      </header>
      <div className={s.main}>
        <div className={s.leva}>
          <Leva
            isRoot
            fill
            flat
            titleBar={false}
            theme={levaTheme}
            hideCopyButton
            neverHide
            collapsed={false}
          />
        </div>
        <div className={s.description}>
          <p>
            the Aniso ascii tool is an open-source ASCII tool built by{' '}
            <a href="https://darkroom.engineering">darkroom.engineering</a> to
            generate and customize character-based imagery.
          </p>
          <br />
          <p>
            DRAG AND DROP ANY FILE
            <br /> .glb, .mp4, .mov, .webm, .png, .webp, .avif
          </p>
        </div>
        <div className={s.links}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/darkroomengineering/aniso"
          >
            github
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://darkroom.engineering"
          >
            darkroom.engineering
          </a>
        </div>
      </div>
    </div>
  )
}
