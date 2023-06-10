import { FC } from 'react';
import CommonLayout from '../components/CommonLayout';
import { Heading } from '@chakra-ui/react';
import FilmList from '../components/film/FilmList';

interface MainProps {
    
}

const Main: FC<MainProps> = () => {
    
    return (
        <CommonLayout>
            <Heading size="lg">최고의 명장면을 찾아보세요</Heading>
            <FilmList />
        </CommonLayout>
    );
}

export default Main;