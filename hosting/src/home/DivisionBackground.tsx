import { FunctionComponent } from 'react'

export const DivisionBackground: FunctionComponent = () => {
  return (
    <div>
      <svg
        xmlns={'http://www.w3.org/2000/svg'}
        version={'1.1'}
        style={{ width: 0, height: 0, position: 'absolute' }}
      >
        <defs>
          <filter id={'blur'} colorInterpolationFilters={'sRGB'}>
            <feGaussianBlur
              in={'SourceGraphic'}
              stdDeviation={'7 7'}
              result={'blur'}
            />
          </filter>
          <filter id={'both'} colorInterpolationFilters={'sRGB'}>
            <feGaussianBlur
              in={'SourceGraphic'}
              stdDeviation={'7 7'}
              result={'blur'}
            />
            <feColorMatrix
              in={'blur'}
              mode={'matrix'}
              values={'1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -7'}
              result={'cm'}
            />
          </filter>
        </defs>
      </svg>

      <div
        id={'background'}
        className={'absolute inset-0 flex justify-center items-center'}
      >
        <div
          className={
            'ball w-32 h-32 rounded-full absolute bg-red-400 opacity-25'
          }
        />
        <div
          className={
            'ball w-32 h-32 rounded-full absolute bg-purple-400 opacity-75'
          }
        />
        <div
          className={
            'ball w-24 h-24 rounded-full absolute bg-blue-300 opacity-75'
          }
        />
        <div
          className={
            'ball w-32 h-32 rounded-full absolute bg-red-300 opacity-25'
          }
        />
        <div
          className={
            'ball w-32 h-32 rounded-full absolute bg-indigo-200 opacity-75'
          }
        />
        <div
          className={
            'ball w-40 h-40 rounded-full absolute bg-indigo-300 opacity-75'
          }
        />
      </div>
    </div>
  )
}
