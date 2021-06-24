import React, { FunctionComponent } from 'react'
import { Box, Stack } from '@chakra-ui/react'

export const DivisionBackground: FunctionComponent = () => {
  return (
    <Stack
      id={'background'}
      position={'absolute'}
      flex={1}
      justify={'center'}
      items={'center'}
      style={{ zIndex: -1, left: '2%' }}
    >
      <Box
        w={32}
        h={32}
        rounded={'full'}
        position={'absolute'}
        bg={'red.400'}
        opacity={25}
      />
      <Box
        w={32}
        h={32}
        rounded={'full'}
        position={'absolute'}
        bg={'purple.400'}
        opacity={75}
      />
      <Box
        w={32}
        h={32}
        rounded={'full'}
        position={'absolute'}
        bg={'blue.300'}
        opacity={75}
      />
      <Box
        w={32}
        h={32}
        rounded={'full'}
        position={'absolute'}
        bg={'red.400'}
        opacity={25}
      />
      <Box
        w={32}
        h={32}
        rounded={'full'}
        position={'absolute'}
        bg={'indigo.200'}
        opacity={75}
      />
      <Box
        w={40}
        h={40}
        rounded={'full'}
        position={'absolute'}
        bg={'indigo.300'}
        opacity={75}
      />
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
    </Stack>
  )
}
