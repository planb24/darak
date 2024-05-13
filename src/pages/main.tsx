import React from "react";
import { ReactElement, useState } from "react";

import axios from 'axios';

import { useNavigate } from "react-router-dom";

import { Avatar, Button, Box, Card, Center, Heading,
  Image, Text, Flex, Spacer, Grid, GridItem,
  IconButton, useColorMode, HStack, Progress, 
  VStack,
  Tag} from "@chakra-ui/react";
import { RiMoonFill, RiSunLine } from 'react-icons/ri';
import { FaShuffle } from "react-icons/fa6";

export const MainPage = (): ReactElement => {
  const TOP_BANNER_MENU = [
    {
      "title": "도서",
      "iconSrc": "/bookshelf.png",
      "navigateTo": "/book"
    },
    {
      "title": "굿즈",
      "iconSrc": "/light-stick.png",
      "navigateTo": "/goods"
    },
    {
      "title": "소모임",
      "iconSrc": "/confetti.png",
      "navigateTo": "/group"
    },
  ];

  const EVENT_DATA = [
    {
      "itemId": 11984903147,
      "title": "츄 포카 팔아요",
      "imageSrc": "/web-sample1.jpg",
      "itemCategory": ["아이돌", "포토카드"],
      "location": "영통3동",
      "timeCreated": "",
      "relativeTimeString": "3분 전",
      "minimalPrice": "1,200원",
      "isMultipleProduct": true,
      "isPhotoBlurred": true
    },
    {
      "itemId": 948324924094,
      "title": "마션",
      "imageSrc": "/web-sample2.jpg",
      "itemCategory": ["장편소설", "SF", "스릴러"],
      "location": "서천동",
      "timeCreated": "",
      "relativeTimeString": "5분 전",
      "minimalPrice": "4,000원",
      "isMultipleProduct": false,
      "isPhotoBlurred": false
    },
  ];

  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();

  const getTextShadowColor = (): string => {
    return '0px 0px 10px ' + (colorMode==='light'?'black':'white');
  };

  return (
    <>
      <Flex mb='20px' alignItems='center' gap={3.5}>
        <Image src={colorMode === "light" ? '/logo-raw-colored.png' : '/logo-raw-white.png'} objectFit='contain' width='5rem' />
        <Spacer />
        <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' size='sm' boxShadow='sm' />
        <IconButton
          aria-label="theme toggle"
          icon={colorMode === 'light' ? <RiMoonFill /> : <RiSunLine />}
          boxShadow='sm'
          onClick={toggleColorMode}
        />
      </Flex>

      <Card minW='100%' padding='1.3rem' mb='1.5rem'>
        <Heading size='lg'>
          동네 친구와 숨은 책을 공유하고<br/>5,000원 지원금 받으세요
        </Heading>
        <Center py='2.5rem'>
          <Image src='/sleeping-book.png' boxSize='36%' />
        </Center>
        <Button
          colorScheme='teal'
          fontFamily='LINESeedKR-Bd'
          width='100%'
          size='lg'
          onClick={()=>{navigate("/post")}}
        >
          지금 시작하기
        </Button>
      </Card>

      <Heading size='lg' mb='0.8rem' >방금 올라온 물품</Heading>
      {
        EVENT_DATA.map(elem => (
          <Box key={elem.itemId} mb='1.2rem' >
            <HStack>
              <Box filter='auto' blur={elem.isPhotoBlurred === true ?'3px':'0px'}>
                <Image src={elem.imageSrc}
                  objectFit='cover'
                  boxSize='110px'
                  borderRadius='5px'
                />
              </Box>
              
              <VStack align='left' gap={0}>
                <Text fontFamily='LINESeedKR-Bd'>{elem.title}</Text>\
                <HStack spacing={2} mb='6px'>
                  {
                    elem.itemCategory.map(el => (
                      <Tag key={el} size='sm' variant='outline' colorScheme='gray' fontFamily='LINESeedKR-Bd'>{el}</Tag>
                    ))
                  }
                </HStack>
                <Text color={colorMode === 'light' ? 'gray' : 'lightgray'}>{elem.location} · {elem.relativeTimeString}</Text>
                <Text>{elem.minimalPrice}{elem.isMultipleProduct ? "부터~" : ""}</Text>
              </VStack>
            </HStack>
          </Box>
        ))
      }

      <Box mb='1.2rem' onClick={()=>{navigate("/bookDetail")}}>
        <HStack>
          <Box filter='auto' blur='4px'>
            <Image src='/web-sample8.jpg'
              objectFit='cover'
              boxSize='110px'
              borderRadius='5px'
            />
          </Box>
          
          <VStack align='left' gap={0}>
            <Text fontFamily='LINESeedKR-Bd'>{"\"어릴 적 한 번 쯤은 꿔본 꿈\""}</Text>\
            <HStack spacing={2} mb='6px'>
              {
                ["숨겨진 태그"].map(el => (
                  <Tag key={el} size='sm' variant='outline' colorScheme='gray' fontFamily='LINESeedKR-Bd'>{el}</Tag>
                ))
              }
            </HStack>
            <Text color={colorMode === 'light' ? 'gray' : 'lightgray'}>기흥동 · 18분 전</Text>
            <Text>2주 대여 가능</Text>
          </VStack>
        </HStack>
      </Box>
      
      <Grid templateColumns='repeat(3, 1fr)' gap={3} mt='rem' mb='0.8rem'>
        {
          TOP_BANNER_MENU.map(elem => (
            <GridItem key={elem.title}>
              <Card key={elem.title} alignItems='center' py='1.5rem' onClick={()=>{navigate(elem.navigateTo)}}>
                <Image src={elem.iconSrc} objectFit='contain' width='40%' mb='1rem' />
                <Text fontSize='lg'>{elem.title}</Text>
              </Card>
            </GridItem>
          ))
        }
      </Grid>
      
      <Box
        backgroundColor={colorMode === 'dark' ? '#2F3646' : '#FFFFFF'}
        px='1.2rem'
        py='1rem'
        mb="1rem"
        borderRadius='20px'
      >
        <HStack align='center' >
          <Image src='/credit.png' objectFit='contain' width='1.3rem' />
          <Text fontFamily='LINESeedKR-Bd'>1,500</Text>
          <Spacer />
          <Progress width='50%' borderRadius='10px' colorScheme='teal' value={80} />
          <Text>레벨 3</Text>
        </HStack>
      </Box>
      
      <Flex mt='4rem' mb='0.5rem'>
        <Spacer />
        <Button colorScheme="gray" variant='link' onClick={()=>{navigate("/login")}}>
          로그아웃
        </Button>
        <Text mx='10px'>·</Text>
        <Button colorScheme="gray" variant='link' >
          고객센터에 문의하기
        </Button>
        <Spacer />
      </Flex>

      <Center mb='30px'>
        <Image src={colorMode === "light" ? '/team-logo-black.png' : '/team-logo.png'} objectFit='contain' width='5rem' />
      </Center>
    </>
  )
}