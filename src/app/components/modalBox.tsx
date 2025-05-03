import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Select
} from '@chakra-ui/react'

export default function ManualClose() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Button onClick={onOpen}>Open Modal</Button>

            <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} size={'md'} motionPreset='slideInBottom' isCentered>
                <ModalOverlay bg='none'
                    backdropFilter='auto'
                    backdropInvert='80%'
                    backdropBlur='2px' />
                <ModalContent>
                    <ModalHeader className="font-inter">Axiolot Hub Request Form</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At, odio ut tenetur, repellat architecto, tempore doloremque modi aspernatur officiis esse laudantium! Ea delectus odio repellat amet quia, quis consequatur molestiae?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At, odio ut tenetur, repellat architecto, tempore doloremque modi aspernatur officiis esse laudantium! Ea delectus odio repellat amet quia, quis consequatur molestiae?
                    </ModalBody>

                    <ModalFooter>
                        <button className="">
                            Submit
                        </button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}