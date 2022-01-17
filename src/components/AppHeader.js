import React, {useState} from 'react';
import { Anchor, Box, Button, Image, Heading, Text } from 'grommet';
import { Notification } from 'grommet-icons';
import { SocialMedia } from './SocialMedia';
import { Logo } from './Logo';

const AppHeader = (props) => {
    return (
        <Box
            direction="row"
            justify="between"
            alignSelf="center"
            gap="medium"
            pad={{ top: "large", horizontal: "xlarge" }}
        >
            <Box>
                <Anchor
                    href="/"
                    icon={<Logo />}
                    color="brandblue"
                    label={
                        <Text size="xxlarge">Stem-Lokaal</Text>
                    }
                />
                <Text size="medium" alignSelf='start' color='brandblue' margin={{top: '0', left: '0' }}>Voor een beter Albrandswaard.</Text>
            </Box>
            <SocialMedia />
        </Box>
        )
};

export {AppHeader};