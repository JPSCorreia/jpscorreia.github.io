import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
// import contact from '../assets/contact.jpg'
import { contactSchema } from '../validations/ContactValidation';
import { useFormik } from 'formik';
import { EmailIcon, CheckIcon, WarningIcon } from '@chakra-ui/icons';
import {
  Button,
  FormControl,
  Input,
  FormLabel,
  FormErrorMessage,
  useToast,
  Textarea,
  Text,
} from '@chakra-ui/react';
import ScrollerTop from './ScrollerTop';

const Contact = () => {
  const toast = useToast();
  const [submitted, setSubmitted] = useState('notSubmitted');
  const [finish, setFinish] = useState(false);
  const [focused, setFocused] = useState(false);
  const styleFocused = finish
    ? 'w-full shadow-custom2 shadow-[#60f073] p-3 justify-center flex flex-col mx-auto'
    : 'w-full shadow-custom2 shadow-[#67E8F9] p-3 justify-center flex flex-col mx-auto';
  const styleUnfocused =
    'w-full shadow-custom2 shadow-[#ffffff] p-3 justify-center flex flex-col mx-auto';

  const formik = useFormik({
    initialValues: {
      user_name: '',
      user_email: '',
      user_phone: '',
      // user_subject: '',
      message: '',
    },
    validationSchema: contactSchema,
    onSubmit: (values, actions) => {
      setSubmitted('loading');
      emailjs
        .send(
          'service_h4pebiy',
          'template_osdth1z',
          values,
          'yOktMpYjYqpxLX_TI'
        )
        .then(
          () => {
            toast({
              title: 'Message Sent.',
              description: 'Thank you, I will contact you back.',
              status: 'success',
              isClosable: true,
            });
            setSubmitted('submitted');
            setFinish(true);
            // setStyle(
            //   'w-full shadow-custom2 shadow-[#67E8F9] p-4 justify-center flex flex-col mx-auto'
            // );
            // actions.resetForm();
          },
          (error) => {
            toast({
              title: 'Error.',
              description: 'Something went wrong, please try again.',
              status: 'error',
              isClosable: true,
            });
            setSubmitted('error');
          }
        );
    },
  });

  const renderButton = () => {
    switch (submitted) {
      case 'submitted':
        return (
          <Button
            leftIcon={<CheckIcon />}
            color="#60f073"
            variant="none"
            className="flex cursor-default flex-center text-xl text-center m-auto ease-in duration-100 "
            size="lg"
          >
            Submitted
          </Button>
        );
      case 'notSubmitted':
        return (
          <Button
            leftIcon={<EmailIcon />}
            color="#E5E7EB"
            variant="outline"
            className="flex flex-center text-xl text-center m-auto hover:text-[#67E8F9] ease-in duration-100 "
            loadingText="Sending"
            onClick={formik.handleSubmit}
            size="lg"
          >
            Send Message
          </Button>
        );
      case 'loading':
        return (
          <Button
            leftIcon={<EmailIcon />}
            color="#E5E7EB"
            variant="outline"
            className="flex flex-center cursor-default text-xl text-center m-auto ease-in duration-100 "
            isLoading
            loadingText="Sending"
            size="lg"
          >
            Send Message
          </Button>
        );
      case 'error':
        return (
          <Button
            leftIcon={<WarningIcon />}
            color="red.300"
            variant="outline"
            className="flex flex-center text-xl text-center m-auto ease-in duration-100 "
            onClick={formik.handleSubmit}
            size="lg"
          >
            Error: Send Again
          </Button>
        );
      default:
        return null;
    }
  };


  return (
    <div
      id="contact"
      className="w-[90%] m-auto items-center h-screen flex flex-col" // pt-4 mt-32 mb-16 lg:mb-16 xl:mb-16
    >
      <div
        className="max-w-[1240px] w-full h-full mx-auto flex flex-col mt-20 md:justify-center" //md:py-16
        id="contact-container"
        data-aos="fade-left"
        data-aos-anchor="#contact"
        data-aos-duration="400"
      >
        <p
          id="contact-start"
          className="text-xl tracking-widest uppercase text-[#67E8F9] header-text-top text-end"
          // data-aos="fade-left"
          // data-aos-anchor="#contact"
          // data-aos-duration="400"
        >
          Contact
        </p>
        <h2
          className="mt-1 text-gray-200 text-end tracking-wide text-2xl md:text-3xl space-mono font-normal mb-4 how-to-contact"
          // data-aos="fade-left"
          // data-aos-anchor="#contact"
          // data-aos-duration="400"
        >
          How To Get in Touch
        </h2>
        <div
          className="md:mt-8"
          id="contact-form"
          // data-aos="fade-left"
          // data-aos-anchor="#contact"
          // data-aos-duration="400"
        >
          <div
            className={finish || focused ? styleFocused : styleUnfocused}
            id="contact-complete-form"
          >
            <div className="lg:p-2 h-full contact-complete-form-2">
              <div>
                <div className="col-span-3 w-full h-auto">
                  <div>{focused}</div>
                  <form onSubmit={formik.handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-4 md:gap-8 w-full name-phone-grid">
                      <FormControl
                        isInvalid={
                          formik.errors.user_name && formik.touched.user_name
                        }
                        className="flex flex-col"
                      >
                        <FormLabel className="pt-2">
                          <div className="flex flex-row justify-start m-auto items-end">
                            <Text className="uppercase text-sm font-normal leading-3 mt-3 contact-name">
                              Name
                            </Text>
                            <FormErrorMessage className="ml-2 font-normal leading-8 mt-0">
                              {formik.errors.user_name}
                            </FormErrorMessage>
                          </div>
                        </FormLabel>
                        <Input
                          className=""
                          isDisabled={finish}
                          onFocus={(e) => {
                            setFocused(true);
                          }}
                          type="text"
                          name="user_name"
                          id="name_input"
                          focusBorderColor="#67E8F9"
                          variant="flushed"
                          placeholder="Your Name"
                          _placeholder={{ color: 'gray.100', opacity: 0.3 }}
                          errorBorderColor="red"
                          onChange={formik.handleChange}
                          onBlur={(e) => {
                            formik.handleBlur(e);
                            setFocused(false);
                          }}
                          value={formik.values.user_name}
                          // {...formik.getFieldProps('user_name')}
                        />
                      </FormControl>
                      <FormControl
                        className="flex flex-col"
                        isInvalid={
                          formik.errors.user_phone && formik.touched.user_phone
                        }
                      >
                        <FormLabel className="pt-2">
                          <div className="flex flex-row justify-start m-auto items-end">
                            <Text className="uppercase text-sm font-normal leading-3 mt-3 contact-phone">
                              Phone Number
                            </Text>
                            <FormErrorMessage className="ml-2 font-normal">
                              {formik.errors.user_phone}
                            </FormErrorMessage>
                          </div>
                        </FormLabel>
                        <Input
                          className=""
                          isDisabled={finish}
                          onFocus={(e) => {
                            setFocused(true);
                          }}
                          type="text"
                          name="user_phone"
                          id="phone_input"
                          variant="flushed"
                          placeholder="Your Phone Number"
                          _placeholder={{ color: 'gray.100', opacity: 0.3 }}
                          errorBorderColor="red"
                          focusBorderColor="#67E8F9"
                          onChange={formik.handleChange}
                          onBlur={(e) => {
                            formik.handleBlur(e);
                            setFocused(false);
                          }}
                          value={formik.values.user_phone}
                          // {...formik.getFieldProps('user_phone')}
                        />
                      </FormControl>
                    </div>

                    <FormControl
                      isInvalid={
                        formik.errors.user_email && formik.touched.user_email
                      }
                      className="flex flex-col py-4"
                    >
                      <FormLabel className="pt-2">
                        <div className="flex flex-row justify-start m-auto items-end">
                          <Text className="uppercase text-sm font-normal leading-3 mt-3 contact-email">
                            Email
                          </Text>
                          <FormErrorMessage className="ml-2 font-normal">
                            {formik.errors.user_email}
                          </FormErrorMessage>
                        </div>
                      </FormLabel>
                      <Input
                        className=""
                        isDisabled={finish}
                        onFocus={(e) => {
                          setFocused(true);
                        }}
                        type="email"
                        variant="flushed"
                        name="user_email"
                        id="email_input"
                        errorBorderColor="red"
                        focusBorderColor="#67E8F9"
                        placeholder="Your Email"
                        _placeholder={{ color: 'gray.100', opacity: 0.3 }}
                        onChange={formik.handleChange}
                        onBlur={(e) => {
                          formik.handleBlur(e);
                          setFocused(false);
                        }}
                        value={formik.values.user_email}
                        // {...formik.getFieldProps('user_email')}
                      />
                    </FormControl>

                    {/* <FormControl
                      isInvalid={
                        formik.errors.user_subject &&
                        formik.touched.user_subject
                      }
                      className="flex flex-col py-4"
                    >
                      <FormLabel className="uppercase text-sm pt-4 font-light">
                        <Text className="uppercase text-sm font-normal leading-3">
                          Subject
                        </Text>
                      </FormLabel>
                      <Input
                        className=""
                        isDisabled={finish}
                        onFocus={(e) => {
                          setFocused(true);
                        }}
                        type="text"
                        name="user_subject"
                        id="subject_input"
                        errorBorderColor="red"
                        variant="flushed"
                        focusBorderColor="#67E8F9"
                        placeholder="Subject"
                        _placeholder={{ color: 'gray.100', opacity: 0.3 }}
                        onChange={formik.handleChange}
                        onBlur={(e) => {
                          formik.handleBlur(e);
                          setFocused(false);
                        }}
                        value={formik.values.user_subject}
                        // {...formik.getFieldProps('user_subject')}
                      />
                    </FormControl> */}

                    <FormControl
                      isInvalid={
                        formik.errors.message && formik.touched.message
                      }
                      className="flex flex-col md:pt-4"
                    >
                      <FormLabel className="pt-2">
                        <div className="flex flex-row justify-start m-auto items-end">
                          <Text className="uppercase text-sm font-normal leading-3 mt-3 contact-message">
                            Message
                          </Text>
                          <FormErrorMessage className="ml-2 font-normal">
                            {formik.errors.message}
                          </FormErrorMessage>
                        </div>
                      </FormLabel>
                      <Textarea
                        isDisabled={finish}
                        onFocus={(e) => {
                          setFocused(true);
                        }}
                        className=""
                        rows="6"
                        name="message"
                        variant="flushed"
                        id="message_input"
                        errorBorderColor="red"
                        focusBorderColor="#67E8F9"
                        placeholder="Message"
                        _placeholder={{ color: 'gray.100', opacity: 0.3 }}
                        onChange={formik.handleChange}
                        onBlur={(e) => {
                          formik.handleBlur(e);
                          setFocused(false);
                        }}
                        value={formik.values.message}
                        // {...formik.getFieldProps('message')}
                      />
                    </FormControl>

                    <div className="flex flex-row w-[95%] m-auto mt-6 mb-3 md:mb-3 send-button">
                      {renderButton()}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollerTop />
    </div>
  );
}

export default Contact