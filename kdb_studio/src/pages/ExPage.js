import { Helmet } from 'react-helmet';
import ExListContainer from '../uk/container/ExListContainer';
import ExToolbarContainer from '../uk/container/ExToolbarContainer';
import { Box } from '@material-ui/core';
import ExUkEditorContainer from '../uk/container/ExUkEditorContainer';

const UK = () => (
  <>
    <Helmet>
      <title>KDB Studio</title>
    </Helmet>
    <Box
      sx={{
        display: 'flex',
        flex: '1 1 auto',
        backgroundColor: 'background.default',
        minHeight: '100%', // 필수
        height: '100%', // 필수
        paddingLeft: 5,
        py: 1,
      }}
    >
      <Box
        sx={{
          boxShadow: 3,
          width: 220,
        }}
      >
        <ExToolbarContainer />
        <ExListContainer />
      </Box>
      <Box sx={{ p: 2, width: '100%' }}>
        <ExUkEditorContainer />
      </Box>
    </Box>
  </>
);

export default UK;
