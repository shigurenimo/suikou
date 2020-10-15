import { FunctionComponent } from 'react'
import { DivisionBackground } from './SectionBackground'

export const SectionHome: FunctionComponent = () => {
  return (
    <div
      className={'p-4 relative flex justify-center items-center'}
      style={{ height: '40vh' }}
    >
      <DivisionBackground />
      <div className={'md:pl-32'}>
        <p className={'font-bold'}>
          {'沖縄/科学: 海岸・河川・環境・防災 水圏環境工学分野'}
        </p>
        <h1 className={'font-bold text-2xl pt-1'}>{'仲座栄三研究室'}</h1>
      </div>
    </div>
  )
}
