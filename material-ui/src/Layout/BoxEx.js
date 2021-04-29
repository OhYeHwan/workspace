import { Box } from '@material-ui/core';
// Box컴포넌트는 다른 컴포넌트를 감싸서 CSS사용하여 꾸며준다
// 기본적으로 Box는 div 속성을 갖는다.
// component property를 사용하여 span 속성으로 바꿀 수 있다.
// m : 작성값 양옆 margin

// *** property 정리 ***
// color="내용 색"
// bgcolor="박스 배경 색"
// fontsize
// fontFamily
// p
// m
// xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920
// ex) p = {{ xs: 10, sm; 8}}
// {{ xs: 0~599, sm: 600~959, md: 960~1279, lg: 1280~1919, xl: 1920~ }}
const BoxEx = () => {
    return (
        <Box
            bgcolor="blue"
            fontFamily="h6.fontFamliy"
            p={{ xs: 10, sm: 8, md: 5, lg: 3}}
            

            fontSize={{ xs: 'h6.fontSize', sm: 'h4.fontSize', md: 'h3.fontSize' }}
        >
            <Box bgcolor="red" >
                hello
            </Box>
            <Box bgcolor="pink" >
                world
            </Box>
        </Box>
    );
};

export default BoxEx;