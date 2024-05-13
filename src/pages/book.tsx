import { Avatar, AvatarGroup, Box,
  Card, Center, HStack, Heading, 
  IconButton, Image, Spacer, Text, 
  Flex, Button, Grid, GridItem, Icon, 
  VStack, Wrap, WrapItem, useColorMode } from "@chakra-ui/react";
import { ReactElement } from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

import { FaShuffle } from "react-icons/fa6";

export const BookPage = (): ReactElement => {
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();

  const getTextShadowColor = (): string => {
    return '0px 0px 10px ' + (colorMode==='light'?'black':'white');
  };

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
        <Heading size='lg'>도서</Heading>
        <Spacer />
      </HStack>

      <Flex alignItems='center' mb='1rem' >
        <Heading as='h2' size='lg'>
          장르별 보기
        </Heading>
        <Spacer />
        <Button
          variant='outline'
          size='sm'
        >
          모두 보기
        </Button>
      </Flex>
      <Grid templateColumns='repeat(3, 1fr)' gap={3} mb='0.8rem'>
        <GridItem>
          <Card alignItems='center' py='1.5rem' onClick={()=>{navigate(-1)}}>
            <Image src='/flask.png' boxSize='60%' mb='1rem' />
            <Text fontFamily='LINESeedKR-Bd' fontSize='lg'>과학</Text>
          </Card>
        </GridItem>
        <GridItem>
          <Card alignItems='center' py='1.5rem'>
            <Image src='/mask.png' boxSize='60%' mb='1rem' />
            <Text fontFamily='LINESeedKR-Bd' fontSize='lg'>장편소설</Text>
          </Card>
        </GridItem>
        <GridItem>
          <Card alignItems='center' py='1.5rem'>
            <Image src='/comic.png' boxSize='60%' mb='1rem' />
            <Text fontFamily='LINESeedKR-Bd' fontSize='lg'>만화·라노벨</Text>
          </Card>
        </GridItem>
      </Grid>
      <Card
        alignItems='center'
        direction='row'
        width='100%'
        py='0.8rem'
        mb='1.7rem'
      >
        <Spacer />
        <Icon as={FaShuffle} mr='0.5rem' />
        <Text fontFamily='LINESeedKR-Bd'>어떤 주제든 괜찮아요</Text>
        <Spacer />
      </Card>
      <Flex alignItems='center' mb='1rem'>
        <Heading as='h2' size='lg'>
          이야기 속 그 장면
        </Heading>
        <Spacer />
      </Flex>
      <Text fontFamily='RIDIBatang'>
      겨우 수하물 검사를 받는 데까지 왔는데 아저씨의 배낭이 걸렸다. 여성 검사관이 엄격한 눈빛으로 열어보라고 명령한다. 아저씨는 혀를 찼다.
      <br/>“대단한 게 들어 있을 리 없어요. 이런 관계없는 것까지 일일이 검사하니까 입구가 혼잡하지.”
      </Text>
      <Text fontFamily='RIDIBatang' textShadow={getTextShadowColor()} color='transparent' mb='2rem'>
      <br/>중얼중얼 불평을 늘어놓는 아저씨에게 여성 검사관은 엄격한 얼굴 그대로 말했다. “칼입니다.”
      </Text>
      <Box width='100%' position='relative' top='-3rem'>
        <Box filter='auto' blur='5px'>
          <Center>
          <Image src='/sample-book-cover.jpg' objectFit='contain' width='25%' />
          </Center>
        </Box>
      </Box>
      <Card
        width='100%'
        align='center'
        py='0.8rem'
        mb='1.2rem'
      >
        <HStack alignItems='center' align='center'>
          <Image src='/star.png' width='20px' />
          <Text fontFamily='LINESeedKR-Bd' mr='10px'>4.5</Text>
          <Text>등장인물의 개성이 뚜렷하고 플롯이 탄탄해요.</Text>
        </HStack>
      </Card>
      <Card
        width='100%'
        align='center'
        py='0.8rem'
        mb='2rem'
      >
        <HStack alignItems='center' align='center'>
          <Image src='/star.png' width='20px' />
          <Text fontFamily='LINESeedKR-Bd' mr='10px'>4</Text>
          <Text>상황 묘사가 디테일하고 문체가 인상적이에요.</Text>
        </HStack>
      </Card>

      <Center>
        <Text fontFamily='LINESeedKR-Bd' align='center' >
          지금 나머지 내용을 만나보고 싶다면?<br/>근처에서 이 책을 교환할 수 있어요!
        </Text>
      </Center>
    </>
  )
}