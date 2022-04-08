import React, { useState } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import { indigo, pink } from '@mui/material/colors';

/** Locals */
import { Carrousel } from '../../components';
import { imagesWoman, imagesMan } from '../mock';

export const Home = () => {
    const [fragrance, setFragrance] = useState("woman");
    const changeFragrance = (frag) => { setFragrance(frag); }

    return (
        <>
            <Grid container justifyContent="center" alignItems="center">
                <Grid item sm={2}>
                    <Box display="flex" justifyContent="center" alignContent="center">
                        <Button color="primary" sx={{ display: { md: 'flex', xs: 'none', sm: 'none' } }} onClick={() => changeFragrance("woman")} size="large" variant='contained'>Woman</Button>
                    </Box>
                </Grid>

                <Grid item xs={8}>
                    <Typography sx={{ fontFamily: 'Beau Rivage, cursive', fontSize: '6rem', display: { sm: 'block', xs: 'none' } }} align="center" component='h1' >Le Eunice</Typography>
                    <Typography sx={{ fontFamily: 'Beau Rivage, cursive', fontSize: '4rem', display: { xs: 'block', sm: 'none' } }} align="center" component='h1' >Le Eunice</Typography>
                    <Typography sx={{ fontFamily: 'Pacifico', fontSize: '2rem', marginTop: '-40px' }} align="center" component='h2' >An alternative way</Typography>

                    <Box display="flex" justifyContent="center" mt={1}>
                        <Button style={{ backgroundColor: fragrance === "man" ? indigo[500] : pink[500] }} sx={{ display: { xs: 'flex', md: 'none' } }} onClick={() => changeFragrance(fragrance === "woman" ? "man" : "woman")} size="large" variant='contained'>
                            {fragrance}
                        </Button>
                    </Box>
                </Grid>

                <Grid item sm={2}>
                    <Box display="flex" justifyContent="center" alignContent="center">
                        <Button style={{ backgroundColor: indigo[500] }} sx={{ display: { md: 'flex', xs: 'none', sm: 'none' } }} onClick={() => changeFragrance("man")} size="large" variant='contained'>Man</Button>
                    </Box>
                </Grid>

            </Grid>

            <Box display="flex" justifyContent="center"> <Carrousel imgList={fragrance === "man" ? imagesMan : imagesWoman} /> </Box>
        </>
    )
}
