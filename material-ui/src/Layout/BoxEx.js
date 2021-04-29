// import { Box } from '@material-ui/core';
// Box컴포넌트는 다른 컴포넌트를 감싸서 CSS사용하여 꾸며준다
// 기본적으로 Box는 div 속성을 갖는다.
// component property를 사용하여 span 속성으로 바꿀 수 있다.
// clone property를 사용하면 현재 적용한 스타일이 자식 컴포넌트에게 적용된다.
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

// const BoxEx = () => {
//     return (
//         <Box
//             bgcolor="blue"
//             fontFamily="h6.fontFamliy"
//             p={{ xs: 10, sm: 8, md: 5, lg: 3}}
            

//             fontSize={{ xs: 'h6.fontSize', sm: 'h4.fontSize', md: 'h3.fontSize' }}
//         >
//             <Box bgcolor="red" >
//                 hello
//             </Box>
//             <Box bgcolor="pink" >
//                 world
//             </Box>
//         </Box>
//     );
// };

// export default BoxEx;

// ************************
// material ui v5 부터는 
// yarn add @material-ui/core@next @emotion/react @emotion/styled
// Box컴포넌트는 sx를 이용하여 스타일을 정의할수있다

import * as React from 'react';
import Box from '@material-ui/core/Box';
import { alpha } from '@material-ui/core/styles';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

export default function Demo() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        bgcolor: 'background.paper',
        overflow: 'hidden',
        borderRadius: '12px',
        boxShadow: 1,
        fontWeight: 'bold',
      }}
    >
      <Box
        component="img"
        sx={{
          height: 233,
          width: 350,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        alt="The house from the offer."
        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'center', md: 'flex-start' },
          m: 3,
          minWidth: { md: 350 },
        }}
      >
        <Box component="span" sx={{ fontSize: 16, mt: 1 }}>
          123 Main St, Phoenix AZ
        </Box>
        <Box component="span" sx={{ color: 'primary.main', fontSize: 22 }}>
          $280,000 — $310,000
        </Box>
        <Box
          sx={{
            mt: 1.5,
            p: 0.5,
            backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.1),
            borderRadius: '5px',
            color: 'primary.main',
            fontWeight: 'medium',
            display: 'flex',
            fontSize: 12,
            alignItems: 'center',
            '& svg': {
              fontSize: 21,
              mr: 0.5,
            },
          }}
        >
          <ErrorOutlineIcon />
          CONFIDENCE SCORE 85%
        </Box>
      </Box>
    </Box>
  );
}