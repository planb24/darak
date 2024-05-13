import { Avatar, AvatarGroup, Box, Card, Center, HStack, Heading, IconButton, Image, Spacer, Text, VStack, Wrap, WrapItem, useColorMode } from "@chakra-ui/react";
import { ReactElement } from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export const GoodsPage = (): ReactElement => {
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();

  return (
    <>
      <HStack pr='5%' mb='1.5rem'>
        <IconButton
          variant='outlined'
          aria-label='Done'
          fontSize='25px'
          icon={<IoChevronBackOutline />}
          onClick={()=>{navigate("/")}}
        />
        <Heading size='lg'>굿즈</Heading>
        <Spacer />
      </HStack>
      
      <Card width='100%' mb='1.5rem' py='1.2rem'>
        <Center mb='0.5rem'>
          <AvatarGroup size='lg' max={3}>
            <Avatar name='Ryan Florence' src='/howl.webp' />
            <Avatar name='Segun Adebayo' src='/gowon.webp' />
            <Avatar name='Kent Dodds' src='/chaewon.webp' />
          </AvatarGroup>
        </Center>
        <Center>
          <Text>어떤 인물·단체의 굿즈를 찾으세요?</Text>
        </Center>
      </Card>

      <Heading size='lg' mb='1rem'>최근 발매한 앨범</Heading>
      <Box mb='1rem'>
        <HStack>
          <Image src='yuqi.jpg' width='25%' borderRadius='8px' mr='0.5rem' />
          <VStack align='left' gap={0}>
            <Heading size='lg'>YUQ1</Heading>
            <Text
              textColor={colorMode === 'light' ? 'gray' : 'lightgray'}
            >EP · 우기 ((여자)아이들)</Text>
            <Text
              textColor={colorMode === 'light' ? 'teal' : '#FA8072'}
            >앨범 2종, SPECIAL Ver. 1종</Text>
          </VStack>
        </HStack>
      </Box>
      <Box mb='2rem'>
        <HStack>
          <Image src='ive-switch.jpg' width='25%' borderRadius='8px' mr='0.5rem' />
          <VStack align='left' gap={0}>
            <Heading size='lg'>IVE SWITCH</Heading>
            <Text
              textColor={colorMode === 'light' ? 'gray' : 'lightgray'}
            >EP · IVE (아이브)</Text>
            <Text
              textColor={colorMode === 'light' ? 'teal' : '#FA8072'}
            >앨범 4종, Digipack Ver. 6종</Text>
          </VStack>
        </HStack>
      </Box>

      <Heading size='lg' mb='0.5rem'>포토카드</Heading>
      <Card py='0.8rem' px='1.3rem' mb='1.5rem'>
        <HStack>
          <Text>이번 주에 포토카드를 구입하면 </Text>
          <Image src='/credit.png' objectFit='contain' width='1.3rem' />
          <Text fontFamily='LINESeedKR-Bd'>600 받아요</Text>
        </HStack>
      </Card>

      <Box mb='1.5rem'>
        <HStack>
          <Box filter='auto' blur='3px'>
            <Image src='web-sample5.jpg' objectFit='cover' boxSize='120px' borderRadius='8px' mr='0.5rem' />
          </Box>
          <VStack align='left' gap={0}>
            <Heading size='md'>UNFORGIVEN</Heading>
            <Text
              textColor={colorMode === 'light' ? 'gray' : 'lightgray'}
            >정규 · LE SSERAFIM (르세라핌)</Text>
            <Text
              textColor={colorMode === 'light' ? 'gray' : 'lightgray'}
            >망포동 · 7일 전</Text>
            <Text>1,700원부터~</Text>
          </VStack>
        </HStack>
      </Box>
      <Box mb='1.5rem'>
        <HStack>
          <Box filter='auto' blur='3px'>
            <Image src='web-sample6.jpg' objectFit='cover' boxSize='120px' borderRadius='8px' mr='0.5rem' />
          </Box>
          <VStack align='left' gap={0}>
            <Heading size='md'>Debut Showcase</Heading>
            <Text
              textColor={colorMode === 'light' ? 'gray' : 'lightgray'}
            >Event · 아일릿(ILLIT)</Text>
            <Text
              textColor={colorMode === 'light' ? 'gray' : 'lightgray'}
            >영통2동 · 1주 전</Text>
            <Text>1,700원부터~</Text>
          </VStack>
        </HStack>
      </Box>
      <Box mb='1.5rem'>
        <HStack>
          <Box filter='auto' blur='3px'>
            <Image src='web-sample7.jpg' objectFit='cover' boxSize='120px' borderRadius='8px' mr='0.5rem' />
          </Box>
          <VStack align='left' gap={0}>
            <Heading size='md'>I'VE MINE</Heading>
            <Text
              textColor={colorMode === 'light' ? 'gray' : 'lightgray'}
            >EP · IVE (아이브)</Text>
            <Text
              textColor={colorMode === 'light' ? 'gray' : 'lightgray'}
            >영통1동 · 1주 전</Text>
            <Text>1,700원부터~</Text>
          </VStack>
        </HStack>
      </Box>
    </>
  )
}