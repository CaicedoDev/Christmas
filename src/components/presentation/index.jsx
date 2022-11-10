import Typewriter from 'typewriter-effect'

import imgLogo from '../../assets/logoCaicedo1.svg'

export function PresentationCaicedo() {
  return (
    <>
      <div className="flex justify-center items-center text-white">
        <img alt="letra de logo de caicedo" className="h-24 sm:h-32" src={imgLogo} />
        <div className="w-2/3 sm:w-1/2">
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
