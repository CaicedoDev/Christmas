import Typewriter from 'typewriter-effect'

import imgLogo from '../../assets/logoCaicedo1.svg'

export function PresentationCaicedo() {
  return (
    <>
      <div className="flex justify-center items-center">
        <img className="h-24 sm:h-32 " src={imgLogo} />
        <div className="w-1/2 ">
          <Typewriter
            options={{
              loop: true,
              autoStart: true,
              strings: ['reer', 'rear', 'recer', 'aicedo'],
              cursor: '_',
            }}
          />
        </div>
      </div>
    </>
  )
}
