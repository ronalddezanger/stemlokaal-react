import React from "react";
import { Anchor, Card, CardHeader, CardBody, CardFooter, Paragraph, Heading, Image } from "grommet";

const ElectionPoster = () => (
    <Card width="small" margin='small' pad="none" background="white" gap="medium">
        <CardHeader pad='small'><Heading level='4' color="brandred" margin='none'>STEM 16 maart op Lijst 3</Heading></CardHeader>
        <CardBody pad='small'>
            <Image src="images/stem-lokaal-logo.png" />
        </CardBody>
    </Card>

);

export { ElectionPoster };