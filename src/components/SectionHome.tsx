import { FunctionComponent } from 'react'
import { DivisionBackground } from './SectionBackground'
import { Text, Stack, Box } from '@chakra-ui/react'

export const SectionHome: FunctionComponent = () => {
  return (
    <Stack
      flex={1}
      position={'relative'}
      justify={'center'}
      items={'center'}
      h={'20vh'}
    >
      <DivisionBackground />
      <Box pl={{ base: 0, md: '10%' }}>
        <Stack spacing={1}>
          <Text fontWeight={'bold'}>
            {'沖縄/科学: 海岸・河川・環境・防災 水圏環境工学分野'}
          </Text>
          <Text fontWeight={'bold'} fontSize={'4xl'}>
            {'仲座栄三研究室'}
          </Text>
        </Stack>
      </Box>
    </Stack>
  )
}
