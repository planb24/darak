import React from "react";
import { ReactElement, useState } from "react";

import axios from 'axios';

import { useNavigate } from "react-router-dom";
import { CardBody, CardHeader, Textarea, useToast } from '@chakra-ui/react';

import { useForm, SubmitHandler } from "react-hook-form";

import { Avatar, Heading, Button, Box, Card, Center, 
  Image, Text, Flex, Spacer, Wrap, WrapItem, Grid, GridItem, Icon, Input, Link, HStack, Tag,
  IconButton, useColorMode, 
  VStack} from "@chakra-ui/react";

import { LuExternalLink } from "react-icons/lu";

type confirmInputs = {
  isbn: string
};

type bookData = {
  title: string | undefined,
  author: string | undefined,
  categoryName: string | undefined,
};

export const PostPage = (): ReactElement => {
  const [level, setLevel] = useState(0);
  function levelUp(){ setLevel(level+1);
  }

  function catchAlert(id: number){
    if(id === 0){
      toast({
        title: '임시저장된 내용을 불러왔어요',
        description: "",
        status: 'success',
        duration: 3500,
        isClosable: false,
      });
    }
  }

  const [dummy, setDummy] = useState(0);

  const [wheel, setWheel] = useState(false);
  const toast = useToast();

  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();
  
  const [sell, setSell] = useState(0);
  const [blind, setBlind] = useState(0);
  const [week, setWeek] = useState(1);
  const switchColor = [
    {
      "light": "#dbdde5",
      "dark": "#363c4c"
    },
    {
      "light": "#ffffff",
      "dark": "#585e6a"
    }
  ]

  const ACTIONS_MENU = [
    {
      "title": "판매하기",
      "iconSrc": "/money.png",
      "navigateTo": "/book",
      "id": 0,
    },
    {
      "title": "대여하고",
      "iconSrc": "/borrow-book.png",
      "navigateTo": "/goods",
      "id": 1,
    },
  ];

  const [bookImageUrl, setBookImageUrl] = useState("");
  const [bookData, setBookData] = useState<bookData | null>(null);

  const { handleSubmit, register, formState: { isValid }, setValue } = useForm<confirmInputs>();
  const onSubmit: SubmitHandler<confirmInputs> = async (data) => {
    setWheel(true);
    await axios.get("http://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbkey=" + import.meta.env.VITE_BOOK_API_KEY + "&Query=" + data.isbn + "&MaxResults=10&start=1&SearchTarget=Book&output=js&Version=20131101", {
      headers: {
        "Content-Type": "application/json"
      }
    }).then(async (result) => {
      setWheel(false);
      if(result.data["totalResults"] != undefined && result.data["totalResults"] > 0){
        setBookImageUrl(result.data['item'][0]['cover']);
        setBookData(result.data['item'][0]);
        
        /*
        await axios.get(currentBookImageUrl, {}).then((result) => {
          sessionStorage.setItem("currentBookImage", result.data);
        }).catch(() => {

        })
        */
        levelUp();
        toast({
          title: '도서 확인에 성공했어요',
          description: "",
          status: 'success',
          duration: 3500,
          isClosable: false,
        });
      } else {
        toast({
          title: '도서 확인에 실패했어요',
          description: "ISBN과 일치하는 도서가 없어요. 정확히 입력했는지 다시 한 번 확인해 주세요.",
          status: 'error',
          duration: 3500,
          isClosable: false,
        });
      }
    }).catch((error) => {
      setWheel(false);
      toast({
        title: '도서 확인에 실패했어요',
        description: "알 수 없는 오류가 발생했어요. PC에서 다시 시도하거나 고객센터에 문의해 주세요.",
        status: 'error',
        duration: 3500,
        isClosable: false,
      });
    });
  };

  async function postRequest(){
    setWheel(true);
    setTimeout(()=>{
      setWheel(false);
      toast({
        title: '글이 작성되었어요',
        description: "",
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
      navigate("/");
    }, 2000);
    /*
    // const imgg = new Image();
    // imgg.src = "/web-sample3.jpg";
    var c = document.createElement('canvas');
    var img = document.getElementById('Img1');
    c.height = img.naturalHeight;
    c.width = img.naturalWidth;
    var ctx = c.getContext('2d');
    
    ctx.drawImage(img, 0, 0, c.width, c.height);
    var base64String = c.toDataURL();

    await axios.post("http://" + import.meta.env.VITE_BASE_URL + "/uploadbook", {
      "title": "마션 스페셜 에디션",
      "review": "",
      "isbn": "",
      "location": "",
      "content": "거의 새 책이에요!",
      "genre": [],
      "imageSrc": base64String
      // "imageSrc": <img src="/web-sample3.jpg" />
    }, {
      headers: {
        "token": localStorage.getItem("token")
      }
    }).then((result) => {
      setWheel(false);
      toast({
        title: '글이 작성되었어요',
        description: "",
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
      navigate("/");
    }).catch((error) => {
      setWheel(false);
      toast({
        title: '업로드에 실패했어요',
        description: "",
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
    });

    */
  }

  return (
    <>
      <Center>
        <Image src='/genie.png' boxSize={level < 2 ? '20vh' : '10vh'} mb='1.5rem' />
      </Center>
      {level === 0 ? (
        <>
          <Center>
            <VStack>
              <Heading>안녕하세요! 저는 지니에요.</Heading>
              <Text fontSize='lg' mb='1.5rem'>가지고 있는 책을 제가 마법으로 확인해 드릴게요.</Text>
              <Card width='100%' mb='1.5rem' pt='1.2rem'>
                <Center>
                  <VStack>
                    <Box backgroundColor='#f0f0f0' borderRadius='15px' align='center' mb='0.5rem'>
                      <Image src='https://image.yes24.com/sysimage/buyBack/isbn.svg' objectFit='contain' maxHeight='8rem' maxWidth='80%' />
                    </Box>
                    <Text mb='1rem'>책 뒷면에 표시되어 있는 ISBN을 확인해 주세요!</Text>
                  </VStack>
                </Center>
              </Card>
            </VStack>
          </Center>
          <li>교환하고자 하는 책이 실제로 판매되는지 알아보기 위해 확인 과정을 거쳐요.</li>
          <Button
            width='100%'
            colorScheme="teal"
            fontFamily='LINESeedKR-Bd'
            mt='1rem'
            onClick={levelUp}
          >
            네, 확인했어요
          </Button>
          <Button
            width='100%'
            mt='0.7rem'
            onClick={()=>{navigate("/")}}
          >
            다음에 작성할래요
          </Button>
        </>
      ) : null}
      {level === 1 ? (
        <>
          <Center>
            <Heading mb='0.5rem'>좋아요! 마법을 준비해 볼게요.</Heading>
          </Center>
          <Center>
            <Text><Link href={import.meta.env.VITE_BOOK_API_URL} textDecoration='underline' isExternal>알라딘</Link><Icon as={LuExternalLink} />에서 도서 정보를 제공해요. 일부 절판된 서적 등은 인식하지 못할 수도 있어요.</Text>
          </Center>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              size='lg'
              type='tel'
              id='isbnInput'
              isDisabled={wheel}
              placeholder='ISBN 입력'
              variant='filled'
              mt='2rem'
              {...register("isbn", {required: true, minLength: 13, maxLength: 13})}
            />
            <Button
              fontFamily='LINESeedKR-Bd'
              width='100%'
              mt='1.5rem'
              colorScheme='teal'
              type='submit'
              isDisabled={!isValid && !dummy}
              isLoading={wheel}
            >
              아브라카다브라!
            </Button>
          </form>
          <Button
            width='100%'
            mt='0.7rem'
            onClick={()=>{setLevel(level-1)}}
          >
            무엇을 입력하는지 모르겠어요
          </Button>
          <Button
            mt='1rem'
            width='100%'
            variant='outlined'
            onClick={()=>{setValue("isbn", "9788925588650");setDummy(dummy+1);}}
          >
            체험해 보세요
          </Button>
        </>
      ) : null}
      {level === 2 ? (
        <>
          <Center>
            <Heading mb='1.2rem'>자세한 정보를 알려주세요</Heading>
          </Center>
          <Box
            width='100%'
            backgroundColor={switchColor[0][colorMode]}
            height='60px'
            borderRadius='30px'
            display='flex'
            alignItems='center'
            px='5px'
            mb='0.5rem'
          >
            <Button
              width='50%'
              backgroundColor={switchColor[blind===0?1:0][colorMode]}
              height='50px'
              borderRadius='25px'
              onClick={()=>{setBlind(0)}}
            >
              책 정보 공개
            </Button>
            <Button
              width='50%'
              backgroundColor={switchColor[blind===0?0:1][colorMode]}
              height='50px'
              borderRadius='25px'
              onClick={()=>{setBlind(1)}}
            >
              비밀로 설정
            </Button>
          </Box>
          <li>비밀로 설정하면 다른 회원님에게 책의 간략한 정보, 일부 대사만이 표시되어요.</li>

          <Box filter='auto' blur={blind===1?'5px':'0px'}>
            <Card
              mt='1.5rem'
              direction={{ base: 'row', sm: 'row' }}
              overflow='hidden'
              variant='outline'
              pl='0.6rem'
              py='0.6rem'
            >
              <Image src={bookImageUrl} borderRadius='8px' objectFit='contain' width='120px' />
              <CardBody mt='1rem'>
                <Heading size='lg'>{bookData?.title}</Heading>
                <Text>{bookData?.author?.split(',')[0].split('(')[0]}</Text>
                <Wrap>
                  {
                    bookData?.categoryName?.split('>').map(el => (
                      <WrapItem key={el}>
                        <Tag key={el} size='sm' whiteSpace='nowrap' variant='outline' colorScheme='gray' fontFamily='LINESeedKR-Bd'>{el}</Tag>
                      </WrapItem>
                    ))
                  }
                </Wrap>
              </CardBody>
            </Card>
          </Box>
          
          <Grid templateColumns='repeat(2, 1fr)' gap={3} mt='2rem' mb='0.8rem'>
            {
              ACTIONS_MENU.map(elem => (
                <GridItem key={elem.title}>
                  <Box height='100%' filter='auto' blur={blind===1&&elem.id===0?'5px':'0px'}>
                    <Card key={elem.title} height='100%' alignItems='center' py='1.5rem' 
                      onClick={()=>{
                        setSell(1-elem.id);
                        catchAlert(elem.id);
                        setLevel(level+2-elem.id);
                      }}
                    >
                      <Image src={elem.iconSrc} objectFit='contain' width='30%' mb='1rem' />
                      <Text fontSize='lg'>{elem.title}</Text>
                      {
                        elem.id === 1 ? (
                          <HStack>
                            <Image src='/credit.png' objectFit='contain' width='1.3rem' />
                            <Text fontFamily='LINESeedKR-Bd'>에코포인트 받기</Text>
                          </HStack>
                        ) : null
                      }
                    </Card>
                  </Box>
                </GridItem>
              ))
            }
          </Grid>
          {
            blind===1 ? (
              <li>비밀로 설정한 경우에는 다른 회원님께 대여만 가능해요.</li>
            ) : null
          }
          <Button
            width='100%'
            borderRadius='20px'
            onClick={()=>{setLevel(level-1)}}
          >
            뒤로
          </Button>
        </>
      ) : null}
      {level === 3 ? (
        <>
          <Center><Heading>대여를 선택하셨네요!</Heading></Center>
          <Center><Text>몇 가지 정보를 더 알려주시면 바로 등록이 가능해요.</Text></Center>
          
          <Card minW='100%' padding='1.3rem' my='1.5rem'>
            <Heading size='md' mb='5px'>
              책을 전달할 장소
            </Heading>
            <Text mb='7px'>경기도 용인시 기흥구 덕영대로 1732 (서천동) 전자정보대학관 앞</Text>
            <Button
              colorScheme='gray'
              fontFamily='LINESeedKR-Bd'
              width='100%'
              size='lg'
              isDisabled={false}
              onClick={()=>{navigate("/post")}}
            >
              다른 주소로 변경
            </Button>
          </Card>
          
          <Card minW='100%' padding='1.3rem' my='1.5rem'>
            <Heading size='md' mb='5px'>
              북케어
            </Heading>
            <li>책이 파손되었을 경우 최대 15만원까지 보상해 드려요.</li>
            <Button
              mt='7px'
              colorScheme='gray'
              fontFamily='LINESeedKR-Bd'
              width='100%'
              size='lg'
              isDisabled={true}
              onClick={()=>{navigate("/post")}}
            >
              이 도서는 북케어를 신청할 수 없어요
            </Button>
          </Card>

          <Card minW='100%' padding='1.3rem' my='1.5rem'>
            <Heading size='md' mb='5px'>
              대여 가능 기간
            </Heading>
            <li>책을 빌린 회원님께 다락이 3일 전 알려드려요.</li>
            <Box
              width='100%'
              backgroundColor={switchColor[0][colorMode]}
              height='60px'
              borderRadius='30px'
              display='flex'
              alignItems='center'
              px='5px'
            >
              <Button
                width='50%'
                backgroundColor={switchColor[week===0?1:0][colorMode]}
                height='50px'
                borderRadius='25px'
                onClick={()=>{setWeek(0)}}
              >
                7일
              </Button>
              <Button
                width='50%'
                backgroundColor={switchColor[week===0?0:1][colorMode]}
                height='50px'
                borderRadius='25px'
                onClick={()=>{setWeek(1)}}
              >
                14일
              </Button>
            </Box>
          </Card>

          <Button
            width='100%'
            borderRadius='20px'
            colorScheme="teal"
            mb='7px'
            onClick={()=>{catchAlert(0);levelUp();}}
          >
            확인
          </Button>
          <Button
            width='100%'
            borderRadius='20px'
            borderColor='#6e8cbd'
            onClick={()=>{setLevel(level-1)}}
          >
            뒤로
          </Button>
        </>
      ) : null}
      {level === 4 ? (
        <>
          <Center><Heading>마지막 단계에요!</Heading></Center>
          <Center><Text>다른 회원님이 확인할 수 있도록 글을 작성해 주세요.</Text></Center>

          <HStack>
            <Image id='Img1' src='/web-sample3.jpg' objectFit='contain' width='20%' mt='2rem' mb='0.5rem' borderRadius='7px' />
          </HStack>
          
          
          <Input
            size='lg'
            type='string'
            id='postTitle'
            isDisabled={wheel}
            placeholder='글 제목'
            value={'마션 스페셜 에디션'}
            variant='filled'
            mb='0.5rem'
          />

          {
            blind===0? (
              <Input
                size='lg'
                type='string'
                isDisabled={wheel}
                placeholder='가격'
                value={'15,000원'}
                variant='filled'
                mb='0.5rem'
              />
            ) : null
          }

          <Textarea
            size='lg'
            id='postDetail'
            isDisabled={wheel}
            placeholder={'책의 상태, 간단한 내용 등을 입력해 주세요. 스포일러가 되는 내용은 입력할 수 없어요.\n\n신뢰할 수 있는 거래를 위해 자세히 적어주세요.'}
            value={'거의 새 책이에요!'}
            height='25%'
            variant='filled'
            mb='0.5rem'
          />

          <Button
            width='100%'
            borderRadius='20px'
            colorScheme="teal"
            mt='2rem'
            mb='7px'
            onClick={postRequest}
            isLoading={wheel}
          >
            확인
          </Button>
          {
            !wheel ? (
              <Button
                width='100%'
                borderRadius='20px'
                borderColor='#6e8cbd'
                onClick={()=>{navigate("/")}}
              >
                취소
              </Button>
            ) : null
          }
          
        </>
      ) : null}
    </>
  )
}