import { Avatar, AvatarGroup, Box, Button, Card, Center, Divider, HStack, Heading, IconButton, Image, Spacer, Tag, Text, VStack, Wrap, WrapItem, useColorMode } from "@chakra-ui/react";
import { ReactElement } from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export const BookDetailPage = (): ReactElement => {
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();

  const getTextShadowColor = (): string => {
    return '0px 0px 10px ' + (colorMode==='light'?'black':'white');
  };

  return (
    <>
      <Box
        width='100%'
        height='50vh'
        filter='auto'
        blur='40px'
      >
        <Image
          src='/web-sample8.jpg'
          width='100%'
          height='100%'
          objectFit='cover'
        />
      </Box>
      <Center>
        <Heading>{"\"어릴 적 한 번 쯤은 꿔본 꿈\""}</Heading>
      </Center>
      <Button
        width='100%'
        backgroundColor={colorMode==='light'?'#804b63':'#614340'}
        mb='0.5rem'
      >
        <HStack align='center' >
          <Image src='/credit.png' objectFit='contain' width='1.3rem' />
          <Text color='white' fontFamily='LINESeedKR-Bd'>800</Text>
          <Text color='white'>에 2주 대여하기</Text>
        </HStack>
      </Button>
      <Button
        width='100%'
        mb='1.5rem'
      >
        <Text>한강위고양이님께 대화하기</Text>
      </Button>

      <Text fontFamily='RIDIBatang'>
      {"인류는 우주에 혼자가 아니다. 그리고 나는 방금 우리의 이웃을 만났다. \“이런 ...!\” - p.179"}
      </Text>
      <Text fontFamily='RIDIBatang' textShadow={getTextShadowColor()} color='transparent' mb='2rem'>
      <br/>중얼중얼 불평을 늘어놓는 아저씨에게 여성 검사관은 엄격한 얼굴 그대로 말했다. “칼입니다.”
      </Text>

      

      <Wrap>
        {
          "국내도서>소설/시/희곡>과학소설(SF)>외국 과학소설".split('>').map(el => (
            <WrapItem key={el}>
              <Tag key={el} size='sm' whiteSpace='nowrap' variant='outline' colorScheme='gray' fontFamily='LINESeedKR-Bd'>{el}</Tag>
            </WrapItem>
          ))
        }
      </Wrap>
      <Text my='0.5rem' color={colorMode==='light'?'gray':'lightGray'}>기흥동 · 18분 전</Text>

      <Text my='1.5rem'>제가 많이 좋아하는 책이에요! 책과 거리가 먼 분들도 한번쯤 시간 내서 읽어보셨으면 좋곘어서 올리게 되었어요!! ㅎㅎ</Text>
      
      <Divider />

      <Heading size='md' mt='1.5rem' mb='1rem'>같은 도서의 리뷰</Heading>
      <Card
        width='100%'
        align='center'
        py='0.8rem'
        mb='1.2rem'
      >
        <HStack alignItems='center' align='center'>
          <Image src='/star.png' width='20px' />
          <Text fontFamily='LINESeedKR-Bd' mr='10px'>5</Text>
          <Text>이게 휴고상을 받았어야 한다.</Text>
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
          <Text fontFamily='LINESeedKR-Bd' mr='10px'>4.5</Text>
          <Text>청소년들도 읽어봐도 좋을 책. 설정이 탄탄하다.</Text>
        </HStack>
      </Card>

      <Heading size='md' mt='1.5rem' mb='1rem'>이런 분에게 추천해요</Heading>
      <li>제대로 된 과학소설에 관심이 많은 분</li>
      <li>길고 긴 이야기에 집중하는 걸 좋아하는 분</li>
      <li>과학적 재현이 잘 된 장편소설을 선호하는 분</li>

      <HStack pr='5%' mt='3rem' mb='1.5rem'>
        <IconButton
          variant='outlined'
          aria-label='Done'
          fontSize='25px'
          icon={<IoChevronBackOutline />}
          onClick={()=>{navigate("/")}}
        />
        <Spacer />
      </HStack>
    </>
  )
}