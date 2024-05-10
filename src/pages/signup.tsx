import React from "react";
import { ReactElement, useState } from "react";

import axios from 'axios';

import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { useToast } from '@chakra-ui/react';

import { Heading, Button, Image, Checkbox, Link, Icon,
  Input, InputGroup, InputRightElement, IconButton } from "@chakra-ui/react";

import { LuExternalLink } from "react-icons/lu";
import { BiSolidShow, BiSolidHide } from 'react-icons/bi';

type Inputs = {
  name: string,
  nickname: string,
  username: string,
  password: string
};

export const SignUpPage = (): ReactElement => {
  const [wheel, setWheel] = useState(false);
  const toast = useToast();

  const navigate = useNavigate();
  const goPrevPage = () => {
    navigate("/login");
    // navigate(-1);
  }

  const [checkedTos, setCheckedTos] = useState(false);

  const { handleSubmit, register, formState: { isValid } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setWheel(true);
    await axios.post("http://" + import.meta.env.VITE_BASE_URL + "/signup", data, {
      headers: {
        "Content-Type": "application/json"
      }
    }).then(async (result) => {
      // console.log(result);
      // 같은 데이터로 signin 진행
      await axios.post("http://" + import.meta.env.VITE_BASE_URL + "/signin", {
        username: data.username,
        password: data.password
      }, {
        headers: {
          "Content-Type": "application/json"
        }
      }).then((result) => {
        setWheel(false);
        console.log(result);
      }).catch((error) => {

      });
      navigate("/");
    }).catch((error) => {
      // console.error(error);
      setWheel(false);
      toast({
        title: '회원가입에 실패했어요',
        description: error.response.data.message,
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
    });
  }

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <>
      <Image src={wheel ? "/rocket.png" : "/happy-face.png"} boxSize='80px' mb='1.5rem' />
      <Heading mb='1.5rem'>{
        wheel ? "거의 다 되었어요.." : "다락에 오신 것을 환영해요!"
      }
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          size='lg'
          type='string'
          isDisabled={wheel}
          placeholder='이름'
          variant='filled'
          mb='10px'
          {...register("name", {required: true, minLength: 2})}
        />
        <Input
          size='lg'
          type='string'
          isDisabled={wheel}
          placeholder='별명'
          variant='filled'
          mb='10px'
          {...register("nickname", {required: true, minLength: 4, maxLength: 7, pattern: {
            value: /^[ㄱ-ㅣ가-힣]{4,7}$/,
            message: "형식이 올바르지 않습니다."
          }})}
        />
        <li>별명은 다른 회원님에게도 보여요.<br/>쉽게 읽을 수 있도록 한글로 4자 이상 7자 이하로 지정해 주세요.</li>
        <Input
          mt='1rem'
          size='lg'
          type='email'
          isDisabled={wheel}
          placeholder='이메일'
          variant='filled'
          mb='10px'
          {...register("username", {required: true, pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "이메일 주소가 올바르지 않습니다."
          }})}
        />
        <InputGroup size='lg' mb='0.5rem'>
          <Input
            pr='4.5rem'
            size='lg'
            type={show ? 'text' : 'password'}
            isDisabled={wheel}
            variant='filled'
            placeholder='비밀번호'
            {...register("password", {required: true, minLength: 10})}
          />
          <InputRightElement width='4.5rem'>
            <IconButton
              aria-label="show or hide password"
              variant='outline'
              icon={show ? <BiSolidHide /> : <BiSolidShow />}
              onClick={handleClick}
            />
          </InputRightElement>
        </InputGroup>
        <li>10자 이상으로 지정해 주세요.</li>
        <Checkbox 
          colorScheme="teal"
          mt='1.5rem'
          isChecked={checkedTos}
          isDisabled={wheel}
          onChange={(e) => setCheckedTos(e.target.checked)}
        >
          [필수] <Link href={import.meta.env.VITE_TOS_URL} textDecoration='underline' isExternal>다락 이용약관</Link><Icon as={LuExternalLink} />에 동의합니다.</Checkbox>
        <Button
          fontFamily='LINESeedKR-Bd'
          width='100%'
          mt='1.5rem'
          mb='1rem'
          colorScheme='teal'
          type='submit'
          isDisabled={!isValid || !checkedTos}
          isLoading={wheel}
        >
          가입하기
        </Button>
      </form>
      {
        !wheel ? (
          <Button
            fontFamily='LINESeedKR-Bd'
            colorScheme='gray'
            width='100%'
            onClick={goPrevPage}
          >
            뒤로
          </Button>
        ) : (<></>)
      }
      
    </>
  );
}