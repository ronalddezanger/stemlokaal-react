import React from "react";
import { Anchor, Card, CardHeader, CardBody, CardFooter, Carousel, Paragraph, Heading } from "grommet";

const SLCard = () => (
    <Carousel>
        <Card width="medium" margin='medium' pad="none" background="brandyellow" gap="medium">
        <CardHeader background='#EFC11A' pad='small'><Heading level='4' color="#5F4C07" margin='none'>De 30 van Stem-Lokaal. Standpunt 1.</Heading></CardHeader>
            <CardBody pad='small'><Heading level='3' color="brandred" margin='none' margin='none'>Samenwerking BAR voor een onafhankelijk Albrandswaard
</Heading>
            <Paragraph size='medium'>De bestuurlijke samenwerking binnen de BAR is het afgelopen termijn enorm verbeterd.
Maar dit mag niet ten koste gaan van het voortbestaan van de gemeente Albrandswaard als
een zelfstandige gemeente. Sinds 1 januari 2014 hebben de gemeenten Barendrecht,
Albrandswaard en Ridderkerk (BAR) een gezamenlijk ambtelijk apparaat. De bedrijfsvoering
van deze gemeenten is vanaf die periode gericht op samenwerking en is hierdoor
kostenbesparend. Maar het meest belangrijke is dat Albrandswaard WEL een zelfstandige
gemeente moet blijven</Paragraph></CardBody>
            <CardFooter background='#EFC11A' pad='small'><Anchor label="Verkiezingprogramma 2022" href="#" /></CardFooter>
        </Card>
        <Card width="medium" margin='medium' pad="none" background="brandyellow" gap="medium">
        <CardHeader background='#EFC11A' pad='small'><Heading level='4' color="#5F4C07" margin='none'>De 30 van Stem-Lokaal. Standpunt 2.</Heading></CardHeader>
            <CardBody pad='small'><Heading level='3' color="brandred" margin='none' margin='none'>Verlagen instroom statushouders</Heading>
            <Paragraph size='medium'>De taakstelling om statushouders te huisvesten is eenzijdig opgelegd door de overheid en
enkel en alleen gebaseerd op het aantal inwoners. Stem-Lokaal is van mening dat er geen
rekening is gehouden met het feit dat er binnen de Albrandswaardse gemeenschap, in
tegensteling tot andere gemeenten, al een TBS kliniek en een groot Psychiatrisch centrum
zijn gehuisvest. Dit brengt overlast met zich mee en is van invloed op het veiligheidsgevoel in
onze gemeente. Daarom heeft Stem-Lokaal in een eerder stadium het college de opdracht
gegeven overleg te plegen met de bevoegde instanties met het doel minder statushouders
te huisvesten.</Paragraph></CardBody>
            <CardFooter background='#EFC11A' pad='small'><Anchor label="Verkiezingprogramma 2022" href="#" /></CardFooter>
        </Card>
        <Card width="medium" margin='medium' pad="none" background="brandyellow" gap="medium">
            <CardHeader background='#EFC11A' pad='small'><Heading level='4' color="#5F4C07" margin='none'>De 30 van Stem-Lokaal. Standpunt 8.</Heading></CardHeader>
            <CardBody pad='small'><Heading level='3' color="brandred" margin='none' margin='none'>Geen Windmolens</Heading>
            <Paragraph size='medium'>Stem-Lokaal is tegen de komst van windmolens in Albrandswaard. Wij zien binnen
            Albrandswaard voldoende ruimte om in te zetten op het gebruik van zonne-energie.
            Daarnaast ziet Stem-Lokaal onder meer de komst van het waterstoftankstation als een
            uitstekende ontwikkeling. Wij willen in overleg met de gemeente Rotterdam, over de
            geplande windmolens bij het Beneluxplein, nabij Poortugaal. Wij vinden, dat de hoogte van
            deze molens geminimaliseerd moeten worden.</Paragraph></CardBody>
            <CardFooter background='#EFC11A' pad='small'><Anchor label="Verkiezingprogramma 2022" href="#" /></CardFooter>
        </Card>
    </Carousel>
);

export { SLCard };