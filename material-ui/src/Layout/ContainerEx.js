// 컨테이너는 컨텐츠를 수펼 중앙에 배치한다.
// 가장 기본적인 레이아웃 요소!
import { Container, Typography} from '@material-ui/core';

const ContainerEx = (props) => {
    return (
            <Container maxWitdh="xs">
                <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
            </Container>
    )
}

export default ContainerEx;