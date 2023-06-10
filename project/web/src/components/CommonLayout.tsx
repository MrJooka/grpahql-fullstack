import { BackgroundProps, Box, Flex } from '@chakra-ui/react';
import { FC } from 'react';

interface CommonLayoutProps {
    bg?: BackgroundProps['bg'];
    children: React.ReactNode;
}

const CommonLayout: FC<CommonLayoutProps> = ({ children, bg }) => {
    
    return (
        <div>
           <Flex maxW="960px" justify="center">
            네비게이션 바 자리입니다
            </Flex>
            <Box px={{base:4}} pt={24} mx="auto" maxW="960px" minH="100vh" w="100%" bg={bg}>
              {children}
            </Box>
        </div>
    );
}

export default CommonLayout;