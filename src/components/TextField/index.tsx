/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { InputHTMLAttributes, useCallback, useState } from 'react'
import { cep, birthday } from 'utils/mask'
import { useField } from 'formik'
import themes from 'styles/alt-themes'
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputRightElement,
  InputGroup,
  InputLeftElement,
  Icon
} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

export type TextFieldProps = {
  mask?: 'cep' | 'currency' | 'birthday'
  label?: string
  name: string
  isRequired?: boolean
  withIcon?: boolean
  IconField?: React.ReactNode | any
  isPasswordField?: boolean
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  withIcon = false,
  isPasswordField = false,
  IconField,
  mask,
  label,
  isRequired = false,
  size: _,
  ...props
}: TextFieldProps) => {
  const [field, { error }] = useField(props)
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  const handleKeyUp = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      if (mask === 'cep') {
        cep(e)
      }
      if (mask === 'birthday') {
        birthday(e)
      }
    },
    [mask]
  )

  return (
    <FormControl isRequired={isRequired} isInvalid={!!error}>
      <FormLabel fontSize="sm" htmlFor={field.name}>
        {label}
      </FormLabel>
      <InputGroup display="flex" flexDirection="column" size="md">
        {withIcon && (
          <InputLeftElement pointerEvents="none">
            <Icon as={IconField} color="gray.300" />
          </InputLeftElement>
        )}
        <Input
          {...field}
          id={field.name}
          {...props}
          onKeyUp={handleKeyUp}
          pr={isPasswordField ? '4.5rem' : '0.8rem'}
          type={show ? 'text' : !isPasswordField ? props.type : 'password'}
          bg="gray.900"
          variant="filled"
          borderRadius={themes.border.radius}
          borderWidth={1}
          fontSize="sm"
          // _focus={{ shadow: 'none' }}
          _hover={{
            bgColor: 'gray.900'
          }}
          focusBorderColor="purple.500"
          errorBorderColor="red.300"
          css={{
            ':focus': {
              background: '#181b23'
            }
          }}
        />
        {isPasswordField && (
          <InputRightElement width="4.5rem">
            <Button
              h="1.75rem"
              size="sm"
              onClick={handleClick}
              bg="000000"
              color="gray.300"
              _hover={{ bg: '000000' }}
              _active={{ shadow: 'none' }}
              _focus={{ shadow: 'none' }}
            >
              {show ? <ViewOffIcon /> : <ViewIcon />}
            </Button>
          </InputRightElement>
        )}
        {error ? (
          <FormErrorMessage color="red.300">{error}</FormErrorMessage>
        ) : null}
      </InputGroup>
    </FormControl>
  )
}

export default TextField
